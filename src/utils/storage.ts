import { Exercise, Routine, Student, DayFeedback, UserProfile, AuthSession } from '../types';
import { INITIAL_EXERCISES, INITIAL_ROUTINE_NAHIR, INITIAL_ROUTINE_LUCAS, INITIAL_STUDENTS, INITIAL_USERS } from '../data/gymData';
import { getSupabase } from './supabase';

const KEYS = {
  EXERCISES: 'flg_exercises',
  ROUTINES: 'flg_routines',
  STUDENTS: 'flg_students',
  USERS: 'flg_users',
  SESSION: 'flg_session',
  LOGS: 'flg_workout_logs',
  FEEDBACKS: 'flg_feedbacks',
  ACTIVE_ROLE: 'flg_active_role',
  ACTIVE_STUDENT: 'flg_active_student',
};

// Users & Auth Storage
export const getStoredUsers = (): UserProfile[] => {
  try {
    const raw = localStorage.getItem(KEYS.USERS);
    if (!raw) return INITIAL_USERS;
    return JSON.parse(raw);
  } catch {
    return INITIAL_USERS;
  }
};

export const saveStoredUsers = (users: UserProfile[]) => {
  localStorage.setItem(KEYS.USERS, JSON.stringify(users));
  syncKeyToSupabase('users', users);
};

export const getStoredSession = (): AuthSession | null => {
  try {
    const raw = localStorage.getItem(KEYS.SESSION);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const saveStoredSession = (session: AuthSession | null) => {
  if (session) {
    localStorage.setItem(KEYS.SESSION, JSON.stringify(session));
  } else {
    localStorage.removeItem(KEYS.SESSION);
  }
};

export const clearStoredSession = () => {
  localStorage.removeItem(KEYS.SESSION);
};

// Exercises Storage
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

// Routines Storage
export const getStoredRoutines = (): Routine[] => {
  try {
    const raw = localStorage.getItem(KEYS.ROUTINES);
    if (!raw) return [INITIAL_ROUTINE_NAHIR, INITIAL_ROUTINE_LUCAS];
    return JSON.parse(raw);
  } catch {
    return [INITIAL_ROUTINE_NAHIR, INITIAL_ROUTINE_LUCAS];
  }
};

export const saveStoredRoutines = (routines: Routine[]) => {
  localStorage.setItem(KEYS.ROUTINES, JSON.stringify(routines));
  syncKeyToSupabase('routines', routines);
};

// Students Storage
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

// Logs Storage
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

// Feedback Storage
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

// Push to Supabase
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

// Pull all from Supabase
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
      } else if (row.key === 'users' && row.value) {
        localStorage.setItem(KEYS.USERS, JSON.stringify(row.value));
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

// Realtime subscription
export const subscribeToSupabaseRealtime = (onRemoteChange: () => void) => {
  const supabase = getSupabase();
  if (!supabase) return () => {};

  const channel = supabase
    .channel('flg-trainer-changes')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'entrenapro_data' },
      (payload) => {
        const row = payload.new as { key: string; value: any };
        if (row && row.key) {
          if (row.key === 'exercises') localStorage.setItem(KEYS.EXERCISES, JSON.stringify(row.value));
          if (row.key === 'routines') localStorage.setItem(KEYS.ROUTINES, JSON.stringify(row.value));
          if (row.key === 'students') localStorage.setItem(KEYS.STUDENTS, JSON.stringify(row.value));
          if (row.key === 'users') localStorage.setItem(KEYS.USERS, JSON.stringify(row.value));
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
