import React, { useState, useEffect } from 'react';
import { Eye, ArrowLeft, AlertCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { StudentWorkoutView } from './components/StudentWorkoutView';
import { CoachDashboard } from './components/CoachDashboard';
import { RestTimer } from './components/RestTimer';
import { SupabaseConfigModal } from './components/SupabaseConfigModal';
import { LoginScreen } from './components/auth/LoginScreen';
import { UserRole, Student, Routine, Exercise, DayFeedback, UserProfile, AuthSession } from './types';
import { importRoutineFromDriveUrl } from './utils/driveImporter';
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

  // When a coach clicks "Ver como {alumno}", previewStudentId is set so the coach can test their view
  const [previewStudentId, setPreviewStudentId] = useState<string | null>(null);

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
    setPreviewStudentId(null);
    if (newSession.user.student_id) {
      setSelectedStudentId(newSession.user.student_id);
    }
  };

  const handleLogout = () => {
    setSession(null);
    setPreviewStudentId(null);
    clearStoredSession();
  };

  const handleSelectStudent = (id: string) => {
    setSelectedStudentId(id);
    if (session?.user.role === 'coach') {
      setPreviewStudentId(id);
    }
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

  const handleSyncDriveForStudent = async (studentId: string) => {
    const student = students.find((s) => s.id === studentId);
    if (!student) return;
    const routine = routines.find((r) => r.alumno_id === studentId || r.id === student.rutina_activa_id);
    const driveUrl =
      student.drive_url ||
      routine?.drive_url ||
      'https://docs.google.com/spreadsheets/d/1yGTBh1mEmLosxztz-N6sIIEt81w_NqURrMYwLicMZBQ/htmlview';

    try {
      const result = await importRoutineFromDriveUrl(
        driveUrl,
        `Rutina 6 Semanas - ${student.nombre}`,
        studentId
      );

      const existingIds = new Set(exercises.map((e) => e.id));
      const newEx = result.exercises.filter((e) => !existingIds.has(e.id));
      if (newEx.length > 0) {
        handleUpdateExercises([...exercises, ...newEx]);
      }

      const nowIso = new Date().toISOString();
      const updatedRoutines = routines.map((r) => {
        if (r.alumno_id === studentId || r.id === student.rutina_activa_id) {
          return {
            ...result.routine,
            id: r.id,
            alumno_id: studentId,
            drive_url: driveUrl,
            ultima_sincronizacion: nowIso,
          };
        }
        return r;
      });

      const updatedStudents = students.map((s) => {
        if (s.id === studentId) {
          return {
            ...s,
            drive_url: driveUrl,
            ultima_sincronizacion: nowIso,
          };
        }
        return s;
      });

      handleUpdateRoutines(updatedRoutines);
      handleUpdateStudents(updatedStudents);
      alert(`✅ ¡Rutina sincronizada con los últimos cambios de Google Drive!`);
    } catch (err: any) {
      alert(`Error al actualizar desde Google Drive: ${err.message}`);
    }
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
  const isPreviewMode = Boolean(isCoach && previewStudentId);
  const isViewingAsStudent = currentUser.role === 'student' || isPreviewMode;

  // Target student for workout view
  const activeStudent = isPreviewMode
    ? students.find((s) => s.id === previewStudentId) || students[0]
    : isCoach
    ? students.find((s) => s.id === selectedStudentId) || students[0]
    : students.find((s) => s.id === currentUser.student_id) || students[0];

  const activeRoutine =
    routines.find((r) => r.alumno_id === activeStudent.id) ||
    routines.find((r) => r.id === activeStudent.rutina_activa_id);

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

      {/* If Coach is previewing a student, show top notification banner */}
      {isPreviewMode && (
        <div className="sticky top-16 z-20 bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border-b border-amber-500/30 px-3 sm:px-4 py-2.5 flex items-center justify-between text-xs text-amber-200 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping flex-shrink-0" />
            <span>
              Modo Vista Previa: Estás viendo la app como <b className="text-white underline">{activeStudent.nombre}</b>
            </span>
          </div>
          <button
            onClick={() => setPreviewStudentId(null)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition active:scale-95 shadow-md shadow-amber-500/20"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al Panel de Entrenador</span>
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {isViewingAsStudent ? (
          activeRoutine ? (
            <StudentWorkoutView
              student={activeStudent}
              routine={activeRoutine}
              logs={logs}
              feedbacks={feedbacks}
              onUpdateLog={handleUpdateLog}
              onSaveFeedback={handleSaveFeedback}
              onTriggerRestTimer={(seconds) => setAutoStartTimer(seconds)}
              onSyncDrive={() => handleSyncDriveForStudent(activeStudent.id)}
            />
          ) : (
            <div className="max-w-md mx-auto mt-12 p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-3 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mx-auto text-xl font-bold">
                📋
              </div>
              <h3 className="font-bold text-white text-base">
                {activeStudent.nombre} aún no tiene una rutina asignada
              </h3>
              <p className="text-xs text-slate-400">
                Como entrenador, podés crearle una rutina personalizada, importar su planilla de Google Drive o usar una plantilla desde tu panel.
              </p>
              {isPreviewMode && (
                <button
                  onClick={() => setPreviewStudentId(null)}
                  className="mt-2 px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition active:scale-95 shadow-lg shadow-emerald-500/20"
                >
                  Volver al Panel para Asignar Rutina
                </button>
              )}
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
              setSelectedStudentId(stId);
              setPreviewStudentId(stId);
            }}
          />
        )}
      </main>

      {/* Rest Timer (Accessible in student workout view) */}
      {isViewingAsStudent && (
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
