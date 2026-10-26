import React from 'react';
import {
  Dumbbell,
  Users,
  Database,
  Sparkles,
  ChevronDown,
  LogOut,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { UserRole, Student, UserProfile } from '../types';
import { getSupabaseConfig } from '../utils/supabase';
import { BRAND } from '../constants/brand';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface Props {
  role: UserRole;
  currentUser: UserProfile;
  students: Student[];
  selectedStudentId: string;
  onSelectStudent: (id: string) => void;
  onOpenSupabaseModal: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<Props> = ({
  role,
  currentUser,
  students,
  selectedStudentId,
  onSelectStudent,
  onOpenSupabaseModal,
  onLogout,
}) => {
  const { isConfigured } = getSupabaseConfig();
  const currentStudent = students.find((s) => s.id === selectedStudentId) || students[0];

  return (
    <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 h-16 flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-lime-400 text-slate-950 flex items-center justify-center font-black shadow-md shadow-emerald-500/20 flex-shrink-0">
            <Dumbbell className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm sm:text-base font-black tracking-tight text-white whitespace-nowrap">
                FLG <span className="text-emerald-400 font-extrabold">PERSONAL TRAINER</span>
              </h1>
            </div>
            <p className="text-[10px] text-slate-400 font-mono hidden sm:block">
              {currentUser.role === 'coach' ? 'Panel Entrenador · Facu LG' : `Atleta: ${currentUser.nombre}`}
            </p>
          </div>
        </div>

        {/* Center / Right controls */}
        <div className="flex items-center gap-2">
          {/* Social Media Links (WhatsApp & Instagram) */}
          <div className="hidden md:flex items-center gap-1.5 mr-1">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-800 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 transition"
              title="WhatsApp Facu LG"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-800 hover:bg-pink-500/20 text-slate-300 hover:text-pink-400 transition"
              title="Instagram @faculgtrainer"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Supabase Status Pill */}
          <button
            onClick={onOpenSupabaseModal}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition active:scale-95 ${
              isConfigured
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
            title={
              isConfigured
                ? 'Conectado a Supabase (Sincronización en tiempo real activa)'
                : 'Sin conexión a Supabase (Guardando en almacenamiento local del navegador)'
            }
          >
            <Database className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {isConfigured ? 'Supabase Conectado' : 'Conectar Supabase'}
            </span>
            <span
              className={`w-2 h-2 rounded-full ${
                isConfigured ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
              }`}
            />
          </button>

          {/* Student Selector when Coach is previewing other students */}
          {role === 'coach' && students.length > 1 && (
            <div className="relative hidden sm:block">
              <select
                value={selectedStudentId}
                onChange={(e) => onSelectStudent(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-white rounded-xl text-xs py-1.5 pl-2.5 pr-7 font-bold appearance-none cursor-pointer focus:outline-none focus:border-emerald-500"
                title="Seleccionar alumno activo"
              >
                {students.map((st) => (
                  <option key={st.id} value={st.id}>
                    Ver: {st.nombre}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>
          )}

          {/* Current User Badge */}
          <div className="bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-bold text-white max-w-[90px] sm:max-w-none truncate">
              {currentUser.nombre}
            </span>
            <span className="text-[10px] text-slate-400 uppercase font-mono hidden sm:inline">
              ({currentUser.role === 'coach' ? 'Coach' : 'Alumno'})
            </span>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="p-2 rounded-xl bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition"
            title="Cerrar Sesión"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
