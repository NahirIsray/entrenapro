import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { StudentWorkoutView } from './components/StudentWorkoutView';
import { CoachDashboard } from './components/CoachDashboard';
import { RestTimer } from './components/RestTimer';
import { SupabaseConfigModal } from './components/SupabaseConfigModal';
import { LoginScreen } from './components/auth/LoginScreen';
import { UserRole, Student, Routine, Exercise, DayFeedback, UserProfile, AuthSession } from './types';
import {
  getStoredStudents,
  saveStoredStudents,
  getStoredRoutines,
  saveStoredRoutines,
  getStoredExercises,
  saveStoredExercises,
  getStoredLogs,
  saveStoredLogs,
  getStoredFeedbacks,
  saveStoredFeedbacks,
  getStoredUsers,
  saveStoredUsers,
  getStoredSession,
  saveStoredSession,
  clearStoredSession,
  pullAllFromSupabase,
  subscribeToSupabaseRealtime,
  WorkoutLogsMap,
  FeedbacksMap,
  SetRecord,
} from './utils/storage';

export const App: React.FC = () => {
  const [session, setSession] = useState<AuthSession | null>(getStoredSession);
  const [users, setUsers] = useState<UserProfile[]>(getStoredUsers);
  const [students, setStudents] = useState<Student[]>(getStoredStudents);
  const [routines, setRoutines] = useState<Routine[]>(getStoredRoutines);
  const [exercises, setExercises] = useState<Exercise[]>(getStoredExercises);
  const [logs, setLogs] = useState<WorkoutLogsMap>(getStoredLogs);
  const [feedbacks, setFeedbacks] = useState<FeedbacksMap>(getStoredFeedbacks);

  const [selectedStudentId, setSelectedStudentId] = useState<string>(() => {
    return session?.user.student_id || 'student_nahir';
  });

  const [isSupabaseModalOpen, setIsSupabaseModalOpen] = useState<boolean>(false);
  const [autoStartTimer, setAutoStartTimer] = useState<number | null>(null);

  // Sync with Supabase on mount & real-time
  const refreshAllState = () => {
    setUsers(getStoredUsers());
    setStudents(getStoredStudents());
    setRoutines(getStoredRoutines());
    setExercises(getStoredExercises());
    setLogs(getStoredLogs());
    setFeedbacks(getStoredFeedbacks());
  };

  useEffect(() => {
    pullAllFromSupabase(refreshAllState);
    const unsubscribe = subscribeToSupabaseRealtime(refreshAllState);
    return () => {
      unsubscribe();
    };
  }, []);

  const handleLoginSuccess = (newSession: AuthSession) => {
    setSession(newSession);
    saveStoredSession(newSession);
    if (newSession.user.student_id) {
      setSelectedStudentId(newSession.user.student_id);
    }
  };

  const handleLogout = () => {
    setSession(null);
    clearStoredSession();
  };

  const handleSelectStudent = (id: string) => {
    setSelectedStudentId(id);
  };

  const handleUpdateLog = (logKey: string, record: SetRecord) => {
    const updated = {
      ...logs,
      [logKey]: record,
    };
    setLogs(updated);
    saveStoredLogs(updated);
  };

  const handleSaveFeedback = (feedback: DayFeedback) => {
    const key = `${feedback.alumno_id}_w${feedback.semana}_d${feedback.dia_num}`;
    const updated = {
      ...feedbacks,
      [key]: feedback,
    };
    setFeedbacks(updated);
    saveStoredFeedbacks(updated);
  };

  const handleUpdateStudents = (updated: Student[]) => {
    setStudents(updated);
    saveStoredStudents(updated);
  };

  const handleUpdateRoutines = (updated: Routine[]) => {
    setRoutines(updated);
    saveStoredRoutines(updated);
  };

  const handleUpdateExercises = (updated: Exercise[]) => {
    setExercises(updated);
    saveStoredExercises(updated);
  };

  const handleUpdateUsers = (updated: UserProfile[]) => {
    setUsers(updated);
    saveStoredUsers(updated);
  };

  // If not authenticated, render Login / Landing screen
  if (!session) {
    return (
      <LoginScreen
        users={users}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  const currentUser = session.user;
  const isCoach = currentUser.role === 'coach';

  // Target student for workout view
  const activeStudent = isCoach
    ? students.find((s) => s.id === selectedStudentId) || students[0]
    : students.find((s) => s.id === currentUser.student_id) || students[0];

  const activeRoutine =
    routines.find((r) => r.alumno_id === activeStudent.id) ||
    routines.find((r) => r.id === activeStudent.rutina_activa_id) ||
    routines[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar
        role={currentUser.role}
        currentUser={currentUser}
        students={students}
        selectedStudentId={activeStudent.id}
        onSelectStudent={handleSelectStudent}
        onOpenSupabaseModal={() => setIsSupabaseModalOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="flex-1">
        {currentUser.role === 'student' ? (
          activeRoutine ? (
            <StudentWorkoutView
              student={activeStudent}
              routine={activeRoutine}
              logs={logs}
              feedbacks={feedbacks}
              onUpdateLog={handleUpdateLog}
              onSaveFeedback={handleSaveFeedback}
              onTriggerRestTimer={(seconds) => setAutoStartTimer(seconds)}
            />
          ) : (
            <div className="p-8 text-center text-slate-400">
              No hay una rutina activa asignada. Pide a tu entrenador que configure tu plan.
            </div>
          )
        ) : (
          <CoachDashboard
            students={students}
            routines={routines}
            exercises={exercises}
            users={users}
            logs={logs}
            feedbacks={feedbacks}
            onUpdateStudents={handleUpdateStudents}
            onUpdateRoutines={handleUpdateRoutines}
            onUpdateExercises={handleUpdateExercises}
            onUpdateUsers={handleUpdateUsers}
            onSelectStudentToTest={(stId) => {
              handleSelectStudent(stId);
            }}
          />
        )}
      </main>

      {/* Rest Timer (Accessible in student workout view) */}
      {currentUser.role === 'student' && (
        <RestTimer
          autoStartSeconds={autoStartTimer}
          onTimerEnd={() => setAutoStartTimer(null)}
        />
      )}

      {/* Supabase Config Modal */}
      <SupabaseConfigModal
        isOpen={isSupabaseModalOpen}
        onClose={() => setIsSupabaseModalOpen(false)}
        onSaved={refreshAllState}
      />
    </div>
  );
};

export default App;
