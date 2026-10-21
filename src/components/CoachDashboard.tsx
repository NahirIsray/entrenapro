import React, { useState } from 'react';
import {
  Users,
  Dumbbell,
  BookOpen,
  Plus,
  Search,
  ExternalLink,
  Edit3,
  Copy,
  Trash2,
  Calendar,
  Flame,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Video,
} from 'lucide-react';
import { Student, Routine, Exercise, DayFeedback } from '../types';
import { RoutineEditor } from './RoutineEditor';
import { VideoModal } from './VideoModal';
import { MOVEMENT_PATTERNS } from '../data/gymData';
import { WorkoutLogsMap, FeedbacksMap } from '../utils/storage';

interface Props {
  students: Student[];
  routines: Routine[];
  exercises: Exercise[];
  logs: WorkoutLogsMap;
  feedbacks: FeedbacksMap;
  onUpdateStudents: (students: Student[]) => void;
  onUpdateRoutines: (routines: Routine[]) => void;
  onUpdateExercises: (exercises: Exercise[]) => void;
  onSelectStudentToTest: (studentId: string) => void;
}

export const CoachDashboard: React.FC<Props> = ({
  students,
  routines,
  exercises,
  logs,
  feedbacks,
  onUpdateStudents,
  onUpdateRoutines,
  onUpdateExercises,
  onSelectStudentToTest,
}) => {
  const [activeTab, setActiveTab] = useState<'students' | 'routines' | 'library'>('students');

  // Routine editing modal
  const [editingRoutine, setEditingRoutine] = useState<Routine | null>(null);

  // New Student modal
  const [showNewStudentModal, setShowNewStudentModal] = useState<boolean>(false);
  const [newStudentName, setNewStudentName] = useState<string>('');
  const [newStudentEmail, setNewStudentEmail] = useState<string>('');
  const [newStudentGoal, setNewStudentGoal] = useState<string>('');
  const [newStudentRoutineId, setNewStudentRoutineId] = useState<string>(routines[0]?.id || '');

  // Student progress inspection modal
  const [selectedStudentForLogs, setSelectedStudentForLogs] = useState<Student | null>(null);

  // Exercise library state
  const [searchEx, setSearchEx] = useState<string>('');
  const [patternEx, setPatternEx] = useState<string>('all');
  const [previewVideo, setPreviewVideo] = useState<{ url: string; name: string; patron?: string } | null>(null);

  // Handle clone routine
  const handleCloneRoutine = (routine: Routine) => {
    const clone: Routine = {
      ...JSON.parse(JSON.stringify(routine)),
      id: `rutina_${Date.now()}`,
      nombre: `${routine.nombre} (Copia)`,
      creada_el: new Date().toISOString().split('T')[0],
    };
    onUpdateRoutines([...routines, clone]);
  };

  // Handle create new student
  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName) return;

    const newStudent: Student = {
      id: `student_${Date.now()}`,
      nombre: newStudentName,
      email: newStudentEmail || `${newStudentName.toLowerCase().replace(/\s+/g, '')}@gym.com`,
      rutina_activa_id: newStudentRoutineId || routines[0]?.id || '',
      semana_actual: 1,
      objetivo: newStudentGoal || 'Fuerza & Condición',
      notas_coach: 'Nuevo alumno ingresado.',
    };

    onUpdateStudents([...students, newStudent]);
    setShowNewStudentModal(false);
    setNewStudentName('');
    setNewStudentEmail('');
    setNewStudentGoal('');
  };

  // Delete student
  const handleDeleteStudent = (studentId: string) => {
    if (confirm('¿Seguro que deseas eliminar este alumno?')) {
      onUpdateStudents(students.filter((s) => s.id !== studentId));
    }
  };

  // Filter exercises in catalog
  const filteredExercises = exercises.filter((ex) => {
    const matchesSearch = ex.nombre.toLowerCase().includes(searchEx.toLowerCase());
    const matchesPattern = patternEx === 'all' || ex.patron === patternEx;
    return matchesSearch && matchesPattern;
  });

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-4 pb-28">
      {/* Coach Dashboard Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-2xl p-5 mb-5 shadow-xl">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                Panel Entrenador
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Gestión de Rutinas & Alumnos</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Administra planes de entrenamiento, supervisa cargas de peso y RPE en tiempo real
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNewStudentModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition active:scale-95"
            >
              <Plus className="w-4 h-4" /> Nuevo Alumno
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mt-5 border-t border-slate-800 pt-3">
          <button
            onClick={() => setActiveTab('students')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'students'
                ? 'bg-slate-800 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Users className="w-4 h-4 text-emerald-400" /> Alumnos ({students.length})
          </button>
          <button
            onClick={() => setActiveTab('routines')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'routines'
                ? 'bg-slate-800 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Dumbbell className="w-4 h-4 text-emerald-400" /> Rutinas ({routines.length})
          </button>
          <button
            onClick={() => setActiveTab('library')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'library'
                ? 'bg-slate-800 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-400" /> Banco Ejercicios ({exercises.length})
          </button>
        </div>
      </div>

      {/* TAB 1: STUDENTS */}
      {activeTab === 'students' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {students.map((st) => {
              const assignedRoutine = routines.find((r) => r.id === st.rutina_activa_id) || routines[0];

              // Count total completed workouts for this student
              const completedDaysCount = Object.keys(feedbacks).filter(
                (k) => k.startsWith(`${st.id}_`) && feedbacks[k]?.completado
              ).length;

              // Latest feedback
              const studentFeedbacks = Object.keys(feedbacks)
                .filter((k) => k.startsWith(`${st.id}_`))
                .map((k) => feedbacks[k])
                .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
              const latestFeedback = studentFeedbacks[0];

              return (
                <div
                  key={st.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 hover:border-slate-700 transition"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 flex items-center justify-center font-bold text-lg">
                        {st.nombre.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">{st.nombre}</h4>
                        <p className="text-xs text-slate-400">{st.objetivo || 'Sin objetivo asignado'}</p>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Semana {st.semana_actual} de 6
                    </span>
                  </div>

                  {/* Routine Info */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Rutina activa:</span>
                      <span className="font-bold text-slate-200">{assignedRoutine?.nombre}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Sesiones completadas:</span>
                      <span className="font-bold text-emerald-400">{completedDaysCount} días</span>
                    </div>
                  </div>

                  {/* Latest Feedback / RPE */}
                  {latestFeedback ? (
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1">
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 text-amber-400" /> Último RPE registrado:
                        </span>
                        <span className="font-mono font-bold text-amber-400">
                          {latestFeedback.rpe}/10 (Sem {latestFeedback.semana} - Día {latestFeedback.dia_num})
                        </span>
                      </div>
                      {latestFeedback.notas && (
                        <p className="text-slate-300 italic text-[11px]">
                          "{latestFeedback.notas}"
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="p-2 text-center text-slate-500 text-xs">
                      Aún no ha registrado sesiones en este ciclo.
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
                    <button
                      onClick={() => onSelectStudentToTest(st.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition"
                    >
                      Entrenar como {st.nombre} <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedStudentForLogs(st)}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                      >
                        Ver Cargas
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(st.id)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition"
                        title="Eliminar Alumno"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: ROUTINES */}
      {activeTab === 'routines' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs text-slate-400">
              Plantillas de rutinas de 6 semanas con sus respectivos bloques y progresiones
            </p>
            <button
              onClick={() => {
                const newR: Routine = {
                  id: `rutina_${Date.now()}`,
                  nombre: 'Nueva Rutina de Fuerza',
                  semanas_total: 6,
                  creada_el: new Date().toISOString().split('T')[0],
                  dias: Array.from({ length: 4 }, (_, i) => ({
                    id: `d_${i + 1}`,
                    dia_num: i + 1,
                    nombre: `Día ${i + 1}`,
                    items: [],
                  })),
                };
                onUpdateRoutines([...routines, newR]);
                setEditingRoutine(newR);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 text-xs font-semibold"
            >
              <Plus className="w-3.5 h-3.5" /> Crear Rutina
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {routines.map((r) => {
              const totalExercises = r.dias.reduce((acc, d) => acc + d.items.length, 0);

              return (
                <div
                  key={r.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 hover:border-slate-700 transition"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-white text-base">{r.nombre}</h4>
                      <p className="text-xs text-slate-400">
                        {r.dias.length} días por semana · {totalExercises} ejercicios en total
                      </p>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {r.semanas_total} Semanas
                    </span>
                  </div>

                  {/* Summary of days */}
                  <div className="space-y-1 bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-xs">
                    {r.dias.map((d) => (
                      <div key={d.id} className="flex justify-between text-slate-400">
                        <span className="truncate pr-2 font-medium">{d.nombre}</span>
                        <span className="text-slate-500 font-mono">{d.items.length} ej.</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <button
                      onClick={() => handleCloneRoutine(r)}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition"
                    >
                      <Copy className="w-3.5 h-3.5" /> Duplicar Plantilla
                    </button>

                    <button
                      onClick={() => setEditingRoutine(r)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition active:scale-95"
                    >
                      <Edit3 className="w-3.5 h-3.5" /> Editar Rutina
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: EXERCISE LIBRARY */}
      {activeTab === 'library' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2 justify-between">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Buscar ejercicio en la biblioteca (ej: Sentadilla, Press, Remo...)"
                value={searchEx}
                onChange={(e) => setSearchEx(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Pattern filter */}
            <select
              value={patternEx}
              onChange={(e) => setPatternEx(e.target.value)}
              className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
            >
              <option value="all">Todos los patrones</option>
              {MOVEMENT_PATTERNS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-3 bg-slate-950 border-b border-slate-800 text-xs text-slate-400 flex justify-between">
              <span>Mostrando {filteredExercises.length} ejercicios extraídos del Excel</span>
            </div>

            <div className="divide-y divide-slate-800/80 max-h-[600px] overflow-y-auto">
              {filteredExercises.slice(0, 150).map((ex) => (
                <div
                  key={ex.id}
                  className="p-3.5 flex items-center justify-between gap-3 hover:bg-slate-850/50 transition"
                >
                  <div className="space-y-0.5">
                    <h5 className="font-bold text-white text-xs sm:text-sm">{ex.nombre}</h5>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        {ex.patron}
                      </span>
                      {ex.progresion_default && (
                        <span className="text-[11px] text-slate-500 font-mono">
                          Prog: {ex.progresion_default}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {ex.video_url ? (
                      <button
                        onClick={() =>
                          setPreviewVideo({
                            url: ex.video_url,
                            name: ex.nombre,
                            patron: ex.patron,
                          })
                        }
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs font-semibold"
                      >
                        <Video className="w-3.5 h-3.5" /> Video
                      </button>
                    ) : (
                      <span className="text-[11px] text-slate-600">Sin video</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Routine Editor Modal */}
      {editingRoutine && (
        <RoutineEditor
          routine={editingRoutine}
          allExercises={exercises}
          isOpen={Boolean(editingRoutine)}
          onClose={() => setEditingRoutine(null)}
          onSave={(updated) => {
            const nextRoutines = routines.map((r) => (r.id === updated.id ? updated : r));
            onUpdateRoutines(nextRoutines);
          }}
        />
      )}

      {/* Video Preview Modal */}
      {previewVideo && (
        <VideoModal
          isOpen={Boolean(previewVideo)}
          onClose={() => setPreviewVideo(null)}
          videoUrl={previewVideo.url}
          exerciseName={previewVideo.name}
          patron={previewVideo.patron}
        />
      )}

      {/* New Student Modal */}
      {showNewStudentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-2xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg text-white">Registrar Nuevo Alumno</h3>
              <button
                onClick={() => setShowNewStudentModal(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateStudent} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Nahir, Martín Gomez..."
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  Objetivo / Foco de Entrenamiento
                </label>
                <input
                  type="text"
                  placeholder="Ej: Aumento de masa muscular, movilidad lumbar..."
                  value={newStudentGoal}
                  onChange={(e) => setNewStudentGoal(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  Rutina Inicial Asignada
                </label>
                <select
                  value={newStudentRoutineId}
                  onChange={(e) => setNewStudentRoutineId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  {routines.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewStudentModal(false)}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs"
                >
                  Crear Alumno
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Student Logs Inspector Modal */}
      {selectedStudentForLogs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-slate-900 border border-slate-800 rounded-2xl p-5 text-white shadow-2xl flex flex-col overflow-hidden">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <div>
                <h3 className="font-bold text-lg text-white">Historial de {selectedStudentForLogs.nombre}</h3>
                <p className="text-xs text-slate-400">Pesos cargados, RPE y sensaciones</p>
              </div>
              <button
                onClick={() => setSelectedStudentForLogs(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-3 space-y-3">
              {Object.keys(feedbacks)
                .filter((k) => k.startsWith(`${selectedStudentForLogs.id}_`))
                .map((k) => {
                  const fb = feedbacks[k];
                  return (
                    <div key={k} className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-emerald-400">
                          Semana {fb.semana} - Día {fb.dia_num}
                        </span>
                        <span className="font-mono text-amber-400 font-bold">RPE {fb.rpe}/10</span>
                      </div>
                      {fb.notas && <p className="text-xs text-slate-300">"{fb.notas}"</p>}
                      <p className="text-[10px] text-slate-500">
                        {new Date(fb.fecha).toLocaleString()}
                      </p>
                    </div>
                  );
                })}

              {Object.keys(feedbacks).filter((k) => k.startsWith(`${selectedStudentForLogs.id}_`)).length === 0 && (
                <div className="text-center py-8 text-slate-500 text-xs">
                  Este alumno aún no ha registrado entrenamientos finalizados.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
