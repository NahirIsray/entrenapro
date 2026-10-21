import React from 'react';
import { Dumbbell, Users, Database, Sparkles, ChevronDown, Check } from 'lucide-react';
import { UserRole, Student } from '../types';
import { getSupabaseConfig } from '../utils/supabase';

interface Props {
  role: UserRole;
  onChangeRole: (newRole: UserRole) => void;
  students: Student[];
  selectedStudentId: string;
  onSelectStudent: (id: string) => void;
  onOpenSupabaseModal: () => void;
}

export const Navbar: React.FC<Props> = ({
  role,
  onChangeRole,
  students,
  selectedStudentId,
  onSelectStudent,
  onOpenSupabaseModal,
}) => {
  const { isConfigured } = getSupabaseConfig();
  const currentStudent = students.find((s) => s.id === selectedStudentId) || students[0];

  return (
    <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 h-16 flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-lime-400 text-slate-950 flex items-center justify-center font-black shadow-md shadow-emerald-500/20">
            <Dumbbell className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-base sm:text-lg font-black tracking-tight text-white">
                ENTRENA<span className="text-emerald-400">PRO</span>
              </h1>
              <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                PWA
              </span>
            </div>
          </div>
        </div>

        {/* Center / Right controls */}
        <div className="flex items-center gap-2">
          {/* Supabase Status Pill */}
          <button
            onClick={onOpenSupabaseModal}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition active:scale-95 ${
              isConfigured
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
            title="Estado de sincronización en la nube con Supabase"
          >
            <Database className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {isConfigured ? 'Nube Conectada' : 'Modo Local'}
            </span>
            <span
              className={`w-2 h-2 rounded-full ${
                isConfigured ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
              }`}
            />
          </button>

          {/* Student Selector when in student role */}
          {role === 'student' && students.length > 1 && (
            <div className="relative">
              <select
                value={selectedStudentId}
                onChange={(e) => onSelectStudent(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-white rounded-xl text-xs py-1.5 pl-2.5 pr-7 font-bold appearance-none cursor-pointer focus:outline-none focus:border-emerald-500"
              >
                {students.map((st) => (
                  <option key={st.id} value={st.id}>
                    {st.nombre}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>
          )}

          {/* Role Switcher Pill */}
          <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center">
            <button
              onClick={() => onChangeRole('coach')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                role === 'coach'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Coach</span>
            </button>

            <button
              onClick={() => onChangeRole('student')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                role === 'student'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Dumbbell className="w-3.5 h-3.5" />
              <span>{role === 'student' ? currentStudent.nombre : 'Alumno'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
