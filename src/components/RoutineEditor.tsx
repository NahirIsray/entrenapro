import React, { useState } from 'react';
import {
  X,
  Plus,
  Trash2,
  Copy,
  Save,
  Check,
  Search,
  Video,
  Layers,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Routine, RoutineDay, RoutineExerciseItem, Exercise, MovementPattern } from '../types';
import { MOVEMENT_PATTERNS } from '../data/gymData';

interface Props {
  routine: Routine;
  allExercises: Exercise[];
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: Routine) => void;
}

export const RoutineEditor: React.FC<Props> = ({
  routine,
  allExercises,
  isOpen,
  onClose,
  onSave,
}) => {
  const [editedRoutine, setEditedRoutine] = useState<Routine>(JSON.parse(JSON.stringify(routine)));
  const [activeDayNum, setActiveDayNum] = useState<number>(1);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [searchExercise, setSearchExercise] = useState<string>('');
  const [filterPattern, setFilterPattern] = useState<string>('all');
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentDay =
    editedRoutine.dias.find((d) => d.dia_num === activeDayNum) || editedRoutine.dias[0];

  // Filter exercises in catalog
  const filteredExercises = allExercises.filter((ex) => {
    const matchesSearch = ex.nombre.toLowerCase().includes(searchExercise.toLowerCase());
    const matchesPattern = filterPattern === 'all' || ex.patron === filterPattern;
    return matchesSearch && matchesPattern;
  });

  // Handle adding an exercise to current day
  const handleAddExercise = (exercise: Exercise) => {
    if (!currentDay) return;

    const newItem: RoutineExerciseItem = {
      id: `${currentDay.id}_${exercise.id}_${Date.now()}`,
      bloque: 'B1',
      ejercicio_id: exercise.id,
      ejercicio_nombre: exercise.nombre,
      patron: exercise.patron,
      video_url: exercise.video_url,
      progresion: exercise.progresion_default || '3x10',
      prescripcion: {
        semana_1: { series: '3x10', kgs: '' },
        semana_2: { series: '3x10', kgs: '' },
        semana_3: { series: '3x10', kgs: '' },
        semana_4: { series: '3x10', kgs: '' },
        semana_5: { series: '3x10', kgs: '' },
        semana_6: { series: '3x10', kgs: '' },
      },
    };

    const updatedDias = editedRoutine.dias.map((d) => {
      if (d.dia_num === activeDayNum) {
        return {
          ...d,
          items: [...d.items, newItem],
        };
      }
      return d;
    });

    setEditedRoutine({
      ...editedRoutine,
      dias: updatedDias,
    });

    setShowAddModal(false);
  };

  // Remove exercise from day
  const handleRemoveItem = (itemId: string) => {
    const updatedDias = editedRoutine.dias.map((d) => {
      if (d.dia_num === activeDayNum) {
        return {
          ...d,
          items: d.items.filter((it) => it.id !== itemId),
        };
      }
      return d;
    });

    setEditedRoutine({
      ...editedRoutine,
      dias: updatedDias,
    });
  };

  // Change block name (e.g. B1 -> B2)
  const handleChangeBlock = (itemId: string, newBlock: string) => {
    const updatedDias = editedRoutine.dias.map((d) => {
      if (d.dia_num === activeDayNum) {
        return {
          ...d,
          items: d.items.map((it) => (it.id === itemId ? { ...it, bloque: newBlock } : it)),
        };
      }
      return d;
    });

    setEditedRoutine({
      ...editedRoutine,
      dias: updatedDias,
    });
  };

  // Update prescription series for a week
  const handleUpdatePrescription = (itemId: string, weekNum: number, series: string) => {
    const semanaKey = `semana_${weekNum}`;
    const updatedDias = editedRoutine.dias.map((d) => {
      if (d.dia_num === activeDayNum) {
        return {
          ...d,
          items: d.items.map((it) => {
            if (it.id === itemId) {
              return {
                ...it,
                prescripcion: {
                  ...it.prescripcion,
                  [semanaKey]: {
                    ...it.prescripcion?.[semanaKey],
                    series,
                  },
                },
              };
            }
            return it;
          }),
        };
      }
      return d;
    });

    setEditedRoutine({
      ...editedRoutine,
      dias: updatedDias,
    });
  };

  const handleSaveRoutine = () => {
    onSave(editedRoutine);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                Editor de Rutina
              </span>
              <input
                type="text"
                value={editedRoutine.nombre}
                onChange={(e) => setEditedRoutine({ ...editedRoutine, nombre: e.target.value })}
                className="text-base sm:text-lg font-bold bg-transparent border-b border-slate-700 hover:border-emerald-400 focus:border-emerald-400 focus:outline-none text-white px-1"
              />
            </div>
            <p className="text-xs text-slate-400">
              Modifica ejercicios, bloques (Circ 1, B1, B2) y prescripciones para las 6 semanas
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveRoutine}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition active:scale-95"
            >
              {savedSuccess ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              <span>{savedSuccess ? 'Guardado' : 'Guardar Cambios'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Days Tabs */}
        <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {editedRoutine.dias.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDayNum(d.dia_num)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition active:scale-95 ${
                activeDayNum === d.dia_num
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Día {d.dia_num} ({d.items.length})
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div>
              <input
                type="text"
                value={currentDay?.nombre || ''}
                onChange={(e) => {
                  const updatedDias = editedRoutine.dias.map((d) =>
                    d.dia_num === activeDayNum ? { ...d, nombre: e.target.value } : d
                  );
                  setEditedRoutine({ ...editedRoutine, dias: updatedDias });
                }}
                className="text-sm sm:text-base font-bold bg-transparent text-white border-b border-slate-700 focus:border-emerald-400 focus:outline-none"
              />
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 text-xs font-semibold transition active:scale-95"
            >
              <Plus className="w-4 h-4" /> Agregar Ejercicio
            </button>
          </div>

          {/* Table of Exercises for Current Day */}
          <div className="space-y-3">
            {currentDay?.items.length === 0 ? (
              <div className="text-center py-12 text-slate-500 text-xs">
                No hay ejercicios asignados a este día. Presiona "Agregar Ejercicio".
              </div>
            ) : (
              currentDay?.items.map((it, idx) => (
                <div
                  key={it.id}
                  className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 sm:p-4 space-y-3"
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-slate-500 font-mono">#{idx + 1}</span>
                      <input
                        type="text"
                        value={it.bloque}
                        onChange={(e) => handleChangeBlock(it.id, e.target.value)}
                        placeholder="Bloque"
                        className="w-20 px-2 py-1 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono font-bold text-emerald-400 text-center"
                        title="Bloque (ej: Circ 1, Circ 2, A1, B1, B2)"
                      />
                      <span className="font-bold text-white text-sm">{it.ejercicio_nombre}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        {it.patron}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {it.video_url && (
                        <a
                          href={it.video_url}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs"
                          title="Ver Video"
                        >
                          <Video className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        onClick={() => handleRemoveItem(it.id)}
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition"
                        title="Eliminar de este día"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 6 Weeks Prescription Editor */}
                  <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 pt-1 border-t border-slate-900">
                    {[1, 2, 3, 4, 5, 6].map((w) => {
                      const semKey = `semana_${w}`;
                      const currentVal = it.prescripcion?.[semKey]?.series || it.progresion || '3x10';
                      return (
                        <div key={w} className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80">
                          <label className="block text-[10px] font-mono text-slate-500 uppercase">
                            Semana {w}
                          </label>
                          <input
                            type="text"
                            value={currentVal}
                            onChange={(e) => handleUpdatePrescription(it.id, w, e.target.value)}
                            className="w-full mt-0.5 px-1.5 py-0.5 bg-slate-950 border border-slate-700/80 rounded text-xs text-white font-mono"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Add Exercise Modal (Search catalog of 732 exercises) */}
        {showAddModal && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-2xl h-[80vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">Banco de Ejercicios</h4>
                  <p className="text-xs text-slate-400">
                    Selecciona un ejercicio para agregar al Día {activeDayNum}
                  </p>
                </div>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search & Pattern filter */}
              <div className="p-3 bg-slate-900/90 border-b border-slate-800 space-y-2">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Buscar por nombre (ej: Sentadilla, Bicho muerto, Press...)"
                    value={searchExercise}
                    onChange={(e) => setSearchExercise(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  <button
                    onClick={() => setFilterPattern('all')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                      filterPattern === 'all'
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    Todos
                  </button>
                  {MOVEMENT_PATTERNS.map((p) => (
                    <button
                      key={p}
                      onClick={() => setFilterPattern(p)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                        filterPattern === p
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {filteredExercises.slice(0, 100).map((ex) => (
                  <div
                    key={ex.id}
                    onClick={() => handleAddExercise(ex)}
                    className="p-3 bg-slate-950 hover:bg-slate-800 border border-slate-800/80 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition active:scale-98 group"
                  >
                    <div>
                      <h5 className="font-bold text-white text-xs sm:text-sm group-hover:text-emerald-400 transition">
                        {ex.nombre}
                      </h5>
                      <span className="text-[10px] text-slate-400">{ex.patron}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {ex.video_url && (
                        <span className="text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                          <Video className="w-3 h-3" /> Video
                        </span>
                      )}
                      <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition">
                        + Agregar
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
