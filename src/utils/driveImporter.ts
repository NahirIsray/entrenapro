import { Routine, RoutineDay, RoutineExerciseItem, Exercise, MovementPattern } from '../types';

// Simple robust CSV parser for browser that handles commas inside quotes
export const parseCSV = (text: string): string[][] => {
  const lines: string[][] = [];
  const rows = text.split(/\r\n|\n|\r/);

  for (const row of rows) {
    if (!row.trim()) continue;
    const cols: string[] = [];
    let insideQuote = false;
    let entry = '';

    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      if (char === '"') {
        if (insideQuote && row[i + 1] === '"') {
          entry += '"';
          i++;
        } else {
          insideQuote = !insideQuote;
        }
      } else if (char === ',' && !insideQuote) {
        cols.push(entry.trim());
        entry = '';
      } else {
        entry += char;
      }
    }
    cols.push(entry.trim());
    lines.push(cols);
  }

  return lines;
};

export const extractSheetId = (url: string): string | null => {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

export const importRoutineFromDriveUrl = async (
  rawUrl: string,
  routineName: string = 'Rutina Importada desde Drive',
  studentId?: string
): Promise<{ routine: Routine; exercises: Exercise[] }> => {
  const sheetId = extractSheetId(rawUrl);
  if (!sheetId) {
    throw new Error('No se pudo encontrar el ID de la planilla de Google Sheets en el enlace proporcionado.');
  }

  const exportUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

  const response = await fetch(exportUrl);
  if (!response.ok) {
    throw new Error(`Error al descargar la planilla (${response.status}). Asegúrate de que el archivo en Google Drive tenga permisos de lectura ("Cualquiera con el enlace puede ver").`);
  }

  const csvText = await response.text();
  const rows = parseCSV(csvText);

  const cleanedExercises: Record<string, Exercise> = {};
  const routineDaysMap: Record<string, RoutineExerciseItem[]> = {};
  let currentDay = 'Dia 1';
  let currentBloque = 'Circ 1';

  const validPatterns: MovementPattern[] = [
    'Movilidad',
    'Core',
    'Rodilla Dominante',
    'Cadera Dominante',
    'Empuje',
    'Traccion',
    'Localizado',
    'Agilidad',
  ];

  for (let rIdx = 0; rIdx < rows.length; rIdx++) {
    const row = rows[rIdx];
    if (!row || row.length < 6) continue;

    const col0 = row[0]?.trim() || '';
    if (col0.toLowerCase().startsWith('dia ')) {
      currentDay = col0;
      currentBloque = 'Circ 1';
      if (!routineDaysMap[currentDay]) {
        routineDaysMap[currentDay] = [];
      }
    }

    const rawBloque = row[1]?.trim() || '';
    const nombre = row[2]?.trim() || '';
    const patron = row[3]?.trim() || '';
    const video = row[5]?.trim() || '';
    const progresion = row[6]?.trim() || '';

    if (rawBloque) {
      currentBloque = rawBloque;
    }

    // Skip headers
    if (
      !nombre ||
      nombre === 'EJERCICIOS' ||
      nombre.includes('Click para cargar') ||
      nombre.includes('MODIFICAR')
    ) {
      continue;
    }

    // Clean video URL
    let cleanVideo = '';
    if (video.includes('youtube.com') || video.includes('youtu.be')) {
      cleanVideo = video;
      if (cleanVideo.includes('embed/')) {
        const vId = cleanVideo.split('embed/')[1].split('?')[0];
        cleanVideo = `https://www.youtube.com/watch?v=${vId}`;
      } else if (cleanVideo.includes('shorts/')) {
        const vId = cleanVideo.split('shorts/')[1].split('?')[0];
        cleanVideo = `https://www.youtube.com/watch?v=${vId}`;
      }
    }

    // Prescriptions for weeks 1 to 6
    const semanas: Record<string, { series: string; kgs: string }> = {};
    let hasAnyPrescription = false;
    for (let w = 1; w <= 6; w++) {
      const colS = 7 + (w - 1) * 2;
      const colK = colS + 1;
      const s = row[colS]?.trim() || '';
      const k = row[colK]?.trim() || '';
      semanas[`semana_${w}`] = { series: s, kgs: k };
      if (s || k) hasAnyPrescription = true;
    }

    if (nombre && (validPatterns.includes(patron as any) || cleanVideo || hasAnyPrescription)) {
      const exId = nombre.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/^_+|_+$/g, '');
      const exObj: Exercise = {
        id: exId,
        nombre,
        patron: validPatterns.includes(patron as any) ? (patron as MovementPattern) : 'General',
        video_url: cleanVideo,
        progresion_default: progresion || '3x10',
      };
      cleanedExercises[exId] = exObj;

      if (hasAnyPrescription) {
        if (!routineDaysMap[currentDay]) routineDaysMap[currentDay] = [];
        routineDaysMap[currentDay].push({
          id: `${currentDay.replace(/\s+/g, '_').toLowerCase()}_${exId}`,
          bloque: currentBloque,
          ejercicio_id: exId,
          ejercicio_nombre: nombre,
          patron: exObj.patron,
          video_url: cleanVideo,
          progresion: progresion || '3x10',
          prescripcion: semanas,
        });
      }
    }
  }

  const dayTitles: Record<string, string> = {
    'Dia 1': 'Día 1: Movilidad, Core y Piernas',
    'Dia 2': 'Día 2: Activación y Torso Empuje',
    'Dia 3': 'Día 3: Movilidad, Core y Cadera Dominante',
    'Dia 4': 'Día 4: Tracción y Estabilidad',
    'Dia 5': 'Día 5: Fuerza General y Cierre Semanal',
    'Dia 6': 'Día 6: Regenerativo / Opcional',
  };

  const dias: RoutineDay[] = [];
  for (let i = 1; i <= 6; i++) {
    const dKey = `Dia ${i}`;
    const items = routineDaysMap[dKey] || [];
    dias.push({
      id: `day_${i}`,
      dia_num: i,
      nombre: dayTitles[dKey] || `Día ${i}`,
      items,
    });
  }

  const routine: Routine = {
    id: `rutina_drive_${Date.now()}`,
    nombre: routineName,
    alumno_id: studentId,
    semanas_total: 6,
    creada_el: new Date().toISOString().split('T')[0],
    dias,
  };

  return {
    routine,
    exercises: Object.values(cleanedExercises),
  };
};
