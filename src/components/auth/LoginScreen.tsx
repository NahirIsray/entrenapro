import React, { useState } from 'react';
import {
  Dumbbell,
  Lock,
  User,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
  Flame,
} from 'lucide-react';
import { UserProfile, AuthSession } from '../../types';
import { BRAND } from '../../constants/brand';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface Props {
  users: UserProfile[];
  onLoginSuccess: (session: AuthSession) => void;
}

export const LoginScreen: React.FC<Props> = ({ users, onLoginSuccess }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanUser = username.trim().toLowerCase();
    const cleanPass = password.trim();

    if (!cleanUser || !cleanPass) {
      setErrorMessage('Por favor ingresa usuario y contraseña.');
      return;
    }

    const foundUser = users.find(
      (u) =>
        (u.username.toLowerCase() === cleanUser || u.email?.toLowerCase() === cleanUser) &&
        u.password === cleanPass
    );

    if (!foundUser) {
      setErrorMessage('Usuario o contraseña incorrectos. Si no tienes cuenta, contáctate por WhatsApp.');
      return;
    }

    onLoginSuccess({
      user: foundUser,
      loginTime: new Date().toISOString(),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-between text-slate-100 p-4 sm:p-6 selection:bg-emerald-500 selection:text-slate-950">
      <div className="max-w-md w-full mx-auto my-auto space-y-6 pt-4 pb-8">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 via-emerald-400 to-lime-400 text-slate-950 shadow-xl shadow-emerald-500/20 mb-1">
            <Dumbbell className="w-8 h-8 stroke-[2.5]" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              FACU LG · PERSONAL TRAINER
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
              {BRAND.name}
            </h1>
            <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
              Plataforma de rutinas personalizadas, seguimiento de cargas y evolución deportiva
            </p>
          </div>
        </div>

        {/* Contact & Registration Banner (New Users) */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wide flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" /> ¿Querés empezar a entrenar?
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Para solicitar tu plan a medida, coordinar evaluaciones o dar de alta tu usuario, escribile directamente a <b>Facu</b>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {/* WhatsApp Button */}
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-md shadow-emerald-500/20 transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Facu</span>
            </a>

            {/* Instagram Button */}
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white text-xs font-bold shadow-md transition active:scale-95"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>{BRAND.instagramDisplay}</span>
            </a>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-base font-bold text-white">Ingresar a tu Cuenta</h2>
              <p className="text-xs text-slate-400">Accede a tus rutinas o panel de gestión</p>
            </div>
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-300">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-emerald-400" /> Usuario o Email
              </label>
              <input
                type="text"
                required
                autoCapitalize="none"
                placeholder="ej: facu o nahir"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-3.5 pr-10 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition active:scale-98 mt-2"
            >
              <span>Iniciar Sesión</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-slate-500 space-y-1">
          <p>© {new Date().getFullYear()} {BRAND.name}</p>
          <p className="text-[11px]">Diseñado para alto rendimiento y constancia deportiva</p>
        </div>
      </div>
    </div>
  );
};
