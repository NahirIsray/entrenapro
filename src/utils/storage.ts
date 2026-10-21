import { Exercise, Routine, Student, DayFeedback } from '../types';
import { INITIAL_EXERCISES, INITIAL_ROUTINE_NAHIR, INITIAL_STUDENTS } from '../data/gymData';
import { getSupabase } from './supabase';

const KEYS = {
  EXERCISES: 'entrenapro_exercises',
  ROUTINES: 'entrenapro_routines',
  STUDENTS: 'entrenapro_students',
  LOGS: 'entrenapro_workout_logs',
  FEEDBACKS: 'entrenapro_feedbacks',
  ACTIVE_ROLE: 'entrenapro_active_role',
  ACTIVE_STUDENT: 'entrenapro_active_student',
};

export const getStoredExercises = (): Exercise[] => {
  try {
    const raw = localStorage.getItem(KEYS.EXERCISES);
    if (!raw) return INITIAL_EXERCISES;
    return JSON.parse(raw);
  } catch {
    return INITIAL_EXERCISES;
  }
};

export const saveStoredExercises = (exercises: Exercise[]) => {
  localStorage.setItem(KEYS.EXERCISES, JSON.stringify(exercises));
  syncKeyToSupabase('exercises', exercises);
};

export const getStoredRoutines = (): Routine[] => {
  try {
    const raw = localStorage.getItem(KEYS.ROUTINES);
    if (!raw) return [INITIAL_ROUTINE_NAHIR];
    return JSON.parse(raw);
  } catch {
    return [INITIAL_ROUTINE_NAHIR];
  }
};

export const saveStoredRoutines = (routines: Routine[]) => {
  localStorage.setItem(KEYS.ROUTINES, JSON.stringify(routines));
  syncKeyToSupabase('routines', routines);
};

export const getStoredStudents = (): Student[] => {
  try {
    const raw = localStorage.getItem(KEYS.STUDENTS);
    if (!raw) return INITIAL_STUDENTS;
    return JSON.parse(raw);
  } catch {
    return INITIAL_STUDENTS;
  }
};

export const saveStoredStudents = (students: Student[]) => {
  localStorage.setItem(KEYS.STUDENTS, JSON.stringify(students));
  syncKeyToSupabase('students', students);
};

export interface SetRecord {
  kgs: string;
  completado: boolean;
  timestamp: string;
}

export type WorkoutLogsMap = Record<string, SetRecord>;

export const getStoredLogs = (): WorkoutLogsMap => {
  try {
    const raw = localStorage.getItem(KEYS.LOGS);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
};

export const saveStoredLogs = (logs: WorkoutLogsMap) => {
  localStorage.setItem(KEYS.LOGS, JSON.stringify(logs));
  syncKeyToSupabase('workout_logs', logs);
};

export type FeedbacksMap = Record<string, DayFeedback>;

export const getStoredFeedbacks = (): FeedbacksMap => {
  try {
    const raw = localStorage.getItem(KEYS.FEEDBACKS);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
};

export const saveStoredFeedbacks = (feedbacks: FeedbacksMap) => {
  localStorage.setItem(KEYS.FEEDBACKS, JSON.stringify(feedbacks));
  syncKeyToSupabase('feedbacks', feedbacks);
};

// Helper to push update to Supabase
const syncKeyToSupabase = async (key: string, value: any) => {
  const supabase = getSupabase();
  if (!supabase) return;

  try {
    await supabase.from('entrenapro_data').upsert({
      key,
      value,
      updated_at: new Date().toISOString(),
      updated_by: 'app_user',
    });
  } catch (err) {
    console.warn(`Error al sincronizar ${key} con Supabase:`, err);
  }
};

// Fetch all keys from Supabase on start and merge
export const pullAllFromSupabase = async (onUpdate: () => void) => {
  const supabase = getSupabase();
  if (!supabase) return;

  try {
    const { data, error } = await supabase.from('entrenapro_data').select('*');
    if (error || !data) return;

    data.forEach((row) => {
      if (row.key === 'exercises' && row.value) {
        localStorage.setItem(KEYS.EXERCISES, JSON.stringify(row.value));
      } else if (row.key === 'routines' && row.value) {
        localStorage.setItem(KEYS.ROUTINES, JSON.stringify(row.value));
      } else if (row.key === 'students' && row.value) {
        localStorage.setItem(KEYS.STUDENTS, JSON.stringify(row.value));
      } else if (row.key === 'workout_logs' && row.value) {
        localStorage.setItem(KEYS.LOGS, JSON.stringify(row.value));
      } else if (row.key === 'feedbacks' && row.value) {
        localStorage.setItem(KEYS.FEEDBACKS, JSON.stringify(row.value));
      }
    });

    onUpdate();
  } catch (err) {
    console.warn('Error al obtener datos remotos de Supabase:', err);
  }
};

// Realtime subscription setup
export const subscribeToSupabaseRealtime = (onRemoteChange: () => void) => {
  const supabase = getSupabase();
  if (!supabase) return () => {};

  const channel = supabase
    .channel('entrenapro-changes')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'entrenapro_data' },
      (payload) => {
        const row = payload.new as { key: string; value: any };
        if (row && row.key) {
          if (row.key === 'exercises') localStorage.setItem(KEYS.EXERCISES, JSON.stringify(row.value));
          if (row.key === 'routines') localStorage.setItem(KEYS.ROUTINES, JSON.stringify(row.value));
          if (row.key === 'students') localStorage.setItem(KEYS.STUDENTS, JSON.stringify(row.value));
          if (row.key === 'workout_logs') localStorage.setItem(KEYS.LOGS, JSON.stringify(row.value));
          if (row.key === 'feedbacks') localStorage.setItem(KEYS.FEEDBACKS, JSON.stringify(row.value));
          onRemoteChange();
        }
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
};
