import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { StudentWorkoutView } from './components/StudentWorkoutView';
import { CoachDashboard } from './components/CoachDashboard';
import { RestTimer } from './components/RestTimer';
import { SupabaseConfigModal } from './components/SupabaseConfigModal';
import { UserRole, Student, Routine, Exercise, DayFeedback } from './types';
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
  pullAllFromSupabase,
  subscribeToSupabaseRealtime,
  WorkoutLogsMap,
  FeedbacksMap,
  SetRecord,
} from './utils/storage';

export const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(() => {
    return (localStorage.getItem('entrenapro_role') as UserRole) || 'student';
  });

  const [students, setStudents] = useState<Student[]>(getStoredStudents);
  const [routines, setRoutines] = useState<Routine[]>(getStoredRoutines);
  const [exercises, setExercises] = useState<Exercise[]>(getStoredExercises);
  const [logs, setLogs] = useState<WorkoutLogsMap>(getStoredLogs);
  const [feedbacks, setFeedbacks] = useState<FeedbacksMap>(getStoredFeedbacks);

  const [selectedStudentId, setSelectedStudentId] = useState<string>(() => {
    return localStorage.getItem('entrenapro_selected_student') || 'student_nahir';
  });

  const [isSupabaseModalOpen, setIsSupabaseModalOpen] = useState<boolean>(false);
  const [autoStartTimer, setAutoStartTimer] = useState<number | null>(null);

  // Sync with Supabase on mount & real-time
  const refreshAllState = () => {
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

  const handleRoleChange = (newRole: UserRole) => {
    setRole(newRole);
    localStorage.setItem('entrenapro_role', newRole);
  };

  const handleSelectStudent = (id: string) => {
    setSelectedStudentId(id);
    localStorage.setItem('entrenapro_selected_student', id);
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

  // Find active student and their assigned routine
  const activeStudent =
    students.find((s) => s.id === selectedStudentId) || students[0] || {
      id: 'student_nahir',
      nombre: 'Nahir',
      rutina_activa_id: routines[0]?.id || 'rutina_nahir_01',
      semana_actual: 1,
    };

  const activeRoutine =
    routines.find((r) => r.id === activeStudent.rutina_activa_id) || routines[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar
        role={role}
        onChangeRole={handleRoleChange}
        students={students}
        selectedStudentId={activeStudent.id}
        onSelectStudent={handleSelectStudent}
        onOpenSupabaseModal={() => setIsSupabaseModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {role === 'student' ? (
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
            logs={logs}
            feedbacks={feedbacks}
            onUpdateStudents={handleUpdateStudents}
            onUpdateRoutines={handleUpdateRoutines}
            onUpdateExercises={handleUpdateExercises}
            onSelectStudentToTest={(stId) => {
              handleSelectStudent(stId);
              handleRoleChange('student');
            }}
          />
        )}
      </main>

      {/* Rest Timer (Always present in Student view) */}
      {role === 'student' && (
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
