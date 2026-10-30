import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Flame,
  HelpCircle,
  Info,
  Minus,
  Play,
  Plus,
  Send,
  Sparkles,
  Trophy,
  Video,
  MessageCircle,
  RefreshCw,
  Link2,
} from 'lucide-react';
import { Routine, RoutineDay, RoutineExerciseItem, Student, DayFeedback } from '../types';
import { VideoModal } from './VideoModal';
import { WorkoutLogsMap, FeedbacksMap, SetRecord } from '../utils/storage';
import { BRAND } from '../constants/brand';

interface Props {
  student: Student;
  routine: Routine;
  logs: WorkoutLogsMap;
  feedbacks: FeedbacksMap;
  onUpdateLog: (key: string, record: SetRecord) => void;
  onSaveFeedback: (feedback: DayFeedback) => void;
  onTriggerRestTimer: (seconds: number) => void;
  onSyncDrive?: () => Promise<void> | void;
}

export const StudentWorkoutView: React.FC<Props> = ({
  student,
  routine,
  logs,
  feedbacks,
  onUpdateLog,
  onSaveFeedback,
  onTriggerRestTimer,
  onSyncDrive,
}) => {
  const [selectedWeek, setSelectedWeek] = useState<number>(student.semana_actual || 1);
  const [selectedDayNum, setSelectedDayNum] = useState<number>(1);
  const [isSyncingDrive, setIsSyncingDrive] = useState<boolean>(false);
  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    name: string;
    patron?: string;
  } | null>(null);

  // Find active day
  const currentDay: RoutineDay | undefined =
    routine.dias.find((d) => d.dia_num === selectedDayNum) || routine.dias[0];

  // Feedback key for current day & week
  const feedbackKey = `${student.id}_w${selectedWeek}_d${selectedDayNum}`;
  const existingFeedback = feedbacks[feedbackKey];

  const [rpe, setRpe] = useState<number>(existingFeedback?.rpe || 8);
  const [feedbackNotes, setFeedbackNotes] = useState<string>(existingFeedback?.notas || '');
  const [savedDaySuccess, setSavedDaySuccess] = useState<boolean>(false);

  // Helpers to get number of sets for an exercise from its prescription string (e.g., "4x8" -> 4, "3x10" -> 3)
  const getPrescribedSetsCount = (item: RoutineExerciseItem, week: number): number => {
    const semanaKey = `semana_${week}`;
    const presc = item.prescripcion?.[semanaKey]?.series || item.progresion || '3x10';

    // If matches NxM (e.g. 4x8, 3x10, 3x 10'')
    const matchMult = presc.match(/^(\d+)\s*[xX]/);
    if (matchMult) return parseInt(matchMult[1], 10);

    // If matches hyphens (e.g. 10-8-8-8 -> 4 sets)
    const matchHyphens = presc.split('-');
    if (matchHyphens.length > 1) return matchHyphens.length;

    return 3;
  };

  // Helper for pattern badge styling
  const getPatternBadge = (patron: string) => {
    const map: Record<string, { bg: string; text: string; border: string }> = {
      'Movilidad': { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
      'Core': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
      'Rodilla Dominante': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
      'Cadera Dominante': { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/30' },
      'Empuje': { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
      'Traccion': { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
      'Localizado': { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30' },
      'Agilidad': { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
    };
    return map[patron] || { bg: 'bg-slate-800', text: 'text-slate-300', border: 'border-slate-700' };
  };

  // Group current day exercises into blocks (e.g. "Circ 1", "Circ 2", "B", etc.)
  const groupedExercises: { bloqueTitle: string; isCircuito: boolean; items: RoutineExerciseItem[] }[] = [];
  if (currentDay) {
    let currentBlock = '';
    currentDay.items.forEach((item) => {
      const b = item.bloque || 'General';
      const isCirc = b.toLowerCase().includes('circ');
      // If block starts with a letter and number (e.g. B1, B2 -> group as Bloque B)
      const baseBlock = isCirc ? b : b.replace(/\d+$/, '');

      const lastGroup = groupedExercises[groupedExercises.length - 1];
      if (lastGroup && (lastGroup.bloqueTitle === b || (!isCirc && lastGroup.bloqueTitle.startsWith(`Bloque ${baseBlock}`)))) {
        lastGroup.items.push(item);
      } else {
        groupedExercises.push({
          bloqueTitle: isCirc ? b : `Bloque ${b}`,
          isCircuito: isCirc,
          items: [item],
        });
      }
    });
  }

  // Calculate day completion stats
  let totalSets = 0;
  let completedSets = 0;

  if (currentDay) {
    currentDay.items.forEach((item) => {
      const setsCount = getPrescribedSetsCount(item, selectedWeek);
      totalSets += setsCount;
      for (let s = 1; s <= setsCount; s++) {
        const logKey = `${student.id}_w${selectedWeek}_d${selectedDayNum}_${item.ejercicio_id}_s${s}`;
        if (logs[logKey]?.completado) {
          completedSets++;
        }
      }
    });
  }

  const completionPercent = totalSets > 0 ? Math.round((completedSets / totalSets) * 100) : 0;

  // Handle set completion toggle
  const handleToggleSet = (item: RoutineExerciseItem, setIdx: number) => {
    const logKey = `${student.id}_w${selectedWeek}_d${selectedDayNum}_${item.ejercicio_id}_s${setIdx}`;
    const current = logs[logKey];
    const isNowCompleted = !current?.completado;

    // Default weight from previous week if not filled
    let kgs = current?.kgs || '';
    if (!kgs && selectedWeek > 1) {
      const prevKey = `${student.id}_w${selectedWeek - 1}_d${selectedDayNum}_${item.ejercicio_id}_s${setIdx}`;
      if (logs[prevKey]?.kgs) {
        kgs = logs[prevKey].kgs;
      }
    }

    onUpdateLog(logKey, {
      kgs: kgs || '0',
      completado: isNowCompleted,
      timestamp: new Date().toISOString(),
    });

    // If marked done, trigger rest timer!
    if (isNowCompleted) {
      onTriggerRestTimer(60);
    }
  };

  // Handle weight change
  const handleChangeWeight = (item: RoutineExerciseItem, setIdx: number, newKgs: string) => {
    const logKey = `${student.id}_w${selectedWeek}_d${selectedDayNum}_${item.ejercicio_id}_s${setIdx}`;
    const current = logs[logKey];
    onUpdateLog(logKey, {
      kgs: newKgs,
      completado: current?.completado || false,
      timestamp: new Date().toISOString(),
    });
  };

  // Adjust weight by delta (e.g. +2.5 or -2.5 kg)
  const handleAdjustWeight = (item: RoutineExerciseItem, setIdx: number, delta: number) => {
    const logKey = `${student.id}_w${selectedWeek}_d${selectedDayNum}_${item.ejercicio_id}_s${setIdx}`;
    const current = logs[logKey];
    const currentVal = parseFloat(current?.kgs || '0') || 0;
    const nextVal = Math.max(0, currentVal + delta);
    onUpdateLog(logKey, {
      kgs: nextVal.toString(),
      completado: current?.completado || false,
      timestamp: new Date().toISOString(),
    });
  };

  // Finish day with celebration
  const handleFinishDay = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#34D399', '#6EE7B7', '#F59E0B'],
    });

    onSaveFeedback({
      alumno_id: student.id,
      semana: selectedWeek,
      dia_num: selectedDayNum,
      rpe,
      notas: feedbackNotes,
      completado: true,
      fecha: new Date().toISOString(),
    });

    setSavedDaySuccess(true);
    setTimeout(() => setSavedDaySuccess(false), 2500);
  };

  const getRpeLabel = (val: number) => {
    if (val <= 4) return 'Muy Suave / Recuperación';
    if (val <= 6) return 'Moderado (podría 4+ reps más)';
    if (val <= 7) return 'Exigente (RIR 3)';
    if (val === 8) return 'Intenso / Óptimo (RIR 2)';
    if (val === 9) return 'Máximo Esfuerzo (RIR 1)';
    return 'Fallo Muscular Total (RIR 0)';
  };

  return (
    <div className="max-w-3xl mx-auto pb-28 px-3 sm:px-4 pt-2">
      {/* Top Banner: Student info & Goal */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-2xl p-4 mb-4 shadow-lg">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-lg">
              {student.nombre.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">{student.nombre}</h2>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Semana {selectedWeek} de {routine.semanas_total}
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {student.objetivo || 'Fuerza & Condición'}
              </p>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-400">Progreso del día</span>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="w-24 sm:w-28 h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${completionPercent}%` }}
                />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">
                {completionPercent}%
              </span>
            </div>
          </div>
        </div>

        {/* Google Drive connected indicator & quick sync button */}
        {(routine.drive_url || student.drive_url) && (
          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 flex-wrap gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Planilla Google Drive vinculada</span>
              {routine.ultima_sincronizacion && (
                <span className="text-[10px] text-slate-500 hidden sm:inline">
                  (Sincronizada: {new Date(routine.ultima_sincronizacion).toLocaleDateString()})
                </span>
              )}
            </div>

            {onSyncDrive && (
              <button
                onClick={async () => {
                  setIsSyncingDrive(true);
                  try {
                    await onSyncDrive();
                  } finally {
                    setIsSyncingDrive(false);
                  }
                }}
                disabled={isSyncingDrive}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold transition active:scale-95 disabled:opacity-50"
                title="Descargar las modificaciones más recientes de tu entrenador en Google Drive"
              >
                <RefreshCw className={`w-3 h-3 ${isSyncingDrive ? 'animate-spin' : ''}`} />
                <span>{isSyncingDrive ? 'Actualizando...' : 'Actualizar desde Drive'}</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Week Selector (Pills 1 to 6) */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1.5 px-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" /> Ciclo de 6 Semanas
          </span>
          <span className="text-[11px] text-slate-500">Toca para cambiar de semana</span>
        </div>
        <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
          {Array.from({ length: routine.semanas_total || 6 }, (_, i) => i + 1).map((w) => {
            const isActive = selectedWeek === w;
            return (
              <button
                key={w}
                onClick={() => setSelectedWeek(w)}
                className={`py-2 px-1 text-center rounded-xl border transition-all text-xs font-bold active:scale-95 ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Sem {w}
              </button>
            );
          })}
        </div>
      </div>

      {/* Day Selector (Tabs Dia 1 to Dia 6) */}
      <div className="mb-5 overflow-x-auto pb-1.5 scrollbar-none">
        <div className="flex gap-2 min-w-max">
          {routine.dias.map((d) => {
            const isActive = selectedDayNum === d.dia_num;
            const isDone = feedbacks[`${student.id}_w${selectedWeek}_d${d.dia_num}`]?.completado;

            return (
              <button
                key={d.id}
                onClick={() => setSelectedDayNum(d.dia_num)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border transition-all text-xs font-semibold active:scale-95 ${
                  isActive
                    ? 'bg-slate-800 border-emerald-500/60 text-white shadow-lg'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
              >
                <span>Día {d.dia_num}</span>
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Day Title and Header */}
      {currentDay && (
        <div className="mb-4 flex items-center justify-between border-b border-slate-800/80 pb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">{currentDay.nombre}</h3>
            <p className="text-xs text-slate-400">
              {currentDay.items.length} ejercicios planificados para hoy
            </p>
          </div>
          {feedbacks[feedbackKey]?.completado && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
              <Check className="w-3.5 h-3.5" /> Día Completado
            </span>
          )}
        </div>
      )}

      {/* Exercise Groups & Cards */}
      <div className="space-y-6">
        {groupedExercises.map((group, gIdx) => (
          <div key={gIdx} className="space-y-3">
            {/* Block Header */}
            <div className="flex items-center gap-2 px-1">
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-lg border uppercase tracking-wider ${
                  group.isCircuito
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                }`}
              >
                {group.bloqueTitle}
              </span>
              <span className="text-[11px] text-slate-400">
                {group.isCircuito
                  ? 'Entrada en calor / circuito continuo'
                  : group.items.length > 1
                  ? 'Biserie: alternar series entre ejercicios'
                  : 'Series directas con descanso'}
              </span>
            </div>

            {/* Exercise Cards */}
            {group.items.map((item) => {
              const setsCount = getPrescribedSetsCount(item, selectedWeek);
              const semanaKey = `semana_${selectedWeek}`;
              const prescriptionSeries =
                item.prescripcion?.[semanaKey]?.series || item.progresion || '3x10';
              const badgeStyle = getPatternBadge(item.patron);

              // Get previous week reference weight
              let prevWeekKgsRef = '';
              if (selectedWeek > 1) {
                const prevLog = logs[`${student.id}_w${selectedWeek - 1}_d${selectedDayNum}_${item.ejercicio_id}_s1`];
                if (prevLog?.kgs && prevLog.kgs !== '0') {
                  prevWeekKgsRef = prevLog.kgs;
                }
              }

              return (
                <div
                  key={item.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm hover:border-slate-700 transition"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono font-bold text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                          {item.bloque}
                        </span>
                        <h4 className="font-bold text-white text-sm sm:text-base">
                          {item.ejercicio_nombre}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap text-xs">
                        <span
                          className={`font-medium px-2 py-0.5 rounded-full border text-[11px] ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}
                        >
                          {item.patron}
                        </span>
                        <span className="text-slate-400 font-mono">
                          Meta: <b className="text-slate-200">{prescriptionSeries}</b>
                        </span>
                        {item.progresion && item.progresion !== prescriptionSeries && (
                          <span className="text-slate-500 text-[11px]">
                            ({item.progresion})
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Video Action Button */}
                    {item.video_url && (
                      <button
                        onClick={() =>
                          setActiveVideo({
                            url: item.video_url,
                            name: item.ejercicio_nombre,
                            patron: item.patron,
                          })
                        }
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold transition active:scale-95 flex-shrink-0"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span className="hidden sm:inline">Ver Video</span>
                      </button>
                    )}
                  </div>

                  {/* Previous week reference banner if available */}
                  {prevWeekKgsRef && (
                    <div className="mb-3 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <span>Semana anterior cargaste:</span>
                      <span className="font-mono font-bold text-emerald-400">
                        {prevWeekKgsRef} kg
                      </span>
                    </div>
                  )}

                  {/* Sets Rows */}
                  <div className="space-y-2">
                    {Array.from({ length: setsCount }, (_, sIdx) => {
                      const setNum = sIdx + 1;
                      const logKey = `${student.id}_w${selectedWeek}_d${selectedDayNum}_${item.ejercicio_id}_s${setNum}`;
                      const log = logs[logKey];
                      const isDone = log?.completado || false;
                      const currentKgs = log?.kgs || '';

                      return (
                        <div
                          key={setNum}
                          className={`flex items-center justify-between gap-2 p-2 rounded-xl border transition ${
                            isDone
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-slate-200'
                              : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                          }`}
                        >
                          {/* Set Number */}
                          <div className="flex items-center gap-2 w-20">
                            <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center text-xs font-mono font-bold">
                              #{setNum}
                            </span>
                            <span className="text-xs text-slate-400">Serie</span>
                          </div>

                          {/* Kgs Input with steppers */}
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => handleAdjustWeight(item, setNum, -2.5)}
                              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition active:scale-90"
                              title="-2.5 kg"
                            >
                              <Minus className="w-3 h-3" />
                            </button>

                            <div className="relative">
                              <input
                                type="number"
                                step="0.5"
                                placeholder="0"
                                value={currentKgs}
                                onChange={(e) => handleChangeWeight(item, setNum, e.target.value)}
                                className="w-16 sm:w-20 py-1 px-2 text-center bg-slate-900 border border-slate-700 rounded-lg text-white font-mono font-bold text-sm focus:outline-none focus:border-emerald-500"
                              />
                              <span className="absolute right-1.5 top-1.5 text-[10px] text-slate-500 pointer-events-none">
                                kg
                              </span>
                            </div>

                            <button
                              onClick={() => handleAdjustWeight(item, setNum, 2.5)}
                              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition active:scale-90"
                              title="+2.5 kg"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Check Button */}
                          <button
                            onClick={() => handleToggleSet(item, setNum)}
                            className={`w-9 h-9 rounded-xl flex items-center justify-center transition active:scale-90 ${
                              isDone
                                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white'
                            }`}
                          >
                            <Check className="w-5 h-5 stroke-[2.5]" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Day Completion & RPE Card */}
      <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white text-base">Cierre del Entrenamiento</h4>
            <p className="text-xs text-slate-400">Registra tu esfuerzo y sensaciones para tu entrenador</p>
          </div>
        </div>

        {/* RPE Slider */}
        <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Esfuerzo Percibido (RPE)
            </label>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-lg font-extrabold text-amber-400">
                {rpe}
              </span>
              <span className="text-xs text-slate-500">/ 10</span>
            </div>
          </div>

          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={rpe}
            onChange={(e) => setRpe(parseInt(e.target.value, 10))}
            className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
          />

          <div className="flex justify-between text-[11px] text-slate-500 font-mono">
            <span>1 (Muy suave)</span>
            <span className="text-amber-400 font-semibold">{getRpeLabel(rpe)}</span>
            <span>10 (Fallo total)</span>
          </div>
        </div>

        {/* Notes for Coach */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Notas para el Coach (Molestias, sensaciones, etc.)
          </label>
          <textarea
            rows={2}
            placeholder="Ej: Sentí buena congestión en sentadilla, ninguna molestia en rodilla..."
            value={feedbackNotes}
            onChange={(e) => setFeedbackNotes(e.target.value)}
            className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs placeholder-slate-600 focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* Submit Day Button */}
        <button
          onClick={handleFinishDay}
          className="w-full py-3.5 px-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition active:scale-98"
        >
          {savedDaySuccess ? (
            <>
              <Check className="w-5 h-5 text-slate-950" /> ¡Entrenamiento Registrado con Éxito!
            </>
          ) : (
            <>
              <Trophy className="w-5 h-5" /> Finalizar Día {selectedDayNum} (Semana {selectedWeek})
            </>
          )}
        </button>
      </div>

      {/* WhatsApp Coach Support Banner */}
      <div className="mt-4 text-center">
        <a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs text-slate-400 hover:text-emerald-400 transition"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>¿Dudas con la técnica o una carga? Escribile a Facu por WhatsApp</span>
        </a>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          isOpen={Boolean(activeVideo)}
          onClose={() => setActiveVideo(null)}
          videoUrl={activeVideo.url}
          exerciseName={activeVideo.name}
          patron={activeVideo.patron}
        />
      )}
    </div>
  );
};
