export type MovementPattern = 
  | 'Movilidad' 
  | 'Core' 
  | 'Rodilla Dominante' 
  | 'Cadera Dominante' 
  | 'Empuje' 
  | 'Traccion' 
  | 'Localizado' 
  | 'Agilidad'
  | 'General';

export interface Exercise {
  id: string;
  nombre: string;
  patron: MovementPattern | string;
  video_url: string;
  progresion_default?: string;
  descripcion?: string;
}

export interface WeekPrescription {
  series: string;
  kgs?: string;
}

export interface RoutineExerciseItem {
  id: string;
  bloque: string; // "Circ 1", "Circ 2", "A1", "B1", "B2", "C1", etc.
  ejercicio_id: string;
  ejercicio_nombre: string;
  patron: MovementPattern | string;
  video_url: string;
  progresion: string;
  prescripcion: {
    [semanaKey: string]: WeekPrescription; // semana_1 to semana_6
  };
}

export interface RoutineDay {
  id: string;
  dia_num: number; // 1 to 6
  nombre: string; // e.g. "Día 1: Piernas y Core"
  items: RoutineExerciseItem[];
}

export interface Routine {
  id: string;
  nombre: string;
  alumno_id?: string;
  semanas_total: number;
  creada_el: string;
  dias: RoutineDay[];
}

export interface Student {
  id: string;
  nombre: string;
  email?: string;
  telefono?: string;
  rutina_activa_id: string;
  semana_actual: number;
  objetivo?: string;
  notas_coach?: string;
  foto_url?: string;
}

export interface SetLog {
  serie_index: number;
  kgs: string;
  completado: boolean;
}

export interface ExerciseSessionLog {
  ejercicio_id: string;
  sets: SetLog[];
}

export interface DayFeedback {
  alumno_id: string;
  semana: number;
  dia_num: number;
  rpe: number; // 1 to 10
  notas: string;
  duracion_minutos?: number;
  completado: boolean;
  fecha: string;
}

export type UserRole = 'coach' | 'student';
