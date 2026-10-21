import React, { useState } from 'react';
import { Database, CheckCircle, X, ExternalLink, Key, Link2 } from 'lucide-react';
import { getSupabaseConfig, saveSupabaseConfig } from '../utils/supabase';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSaved: () => void;
}

export const SupabaseConfigModal: React.FC<Props> = ({ isOpen, onClose, onSaved }) => {
  const currentConfig = getSupabaseConfig();
  const [url, setUrl] = useState(currentConfig.url);
  const [anonKey, setAnonKey] = useState(currentConfig.anonKey);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveSupabaseConfig(url, anonKey);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onSaved();
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Conexión con Supabase</h3>
            <p className="text-xs text-slate-400">Sincroniza rutinas, pesos y RPE en tiempo real</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5 text-emerald-400" /> URL de Supabase (Cloud o CLI Local)
            </label>
            <input
              type="text"
              required
              placeholder="https://xyz.supabase.co  o  http://127.0.0.1:54321"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm font-mono"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Para <b>Supabase Cloud</b>: usa la URL de tu dashboard. Para <b>CLI Local (Docker)</b>: usa <code className="text-emerald-400">http://127.0.0.1:54321</code>
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-emerald-400" /> Anon / Public Key
            </label>
            <input
              type="text"
              required
              placeholder="sb_publishable_... o eyJhbGciOi..."
              value={anonKey}
              onChange={(e) => setAnonKey(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm font-mono"
            />
          </div>

          <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 text-xs text-slate-400 space-y-1.5">
            <p className="flex items-center gap-1.5 text-slate-300 font-medium">
              💡 Esquema SQL necesario:
            </p>
            <p>
              Copia el contenido del archivo <code className="text-emerald-400 bg-slate-900 px-1 py-0.5 rounded">supabase-schema.sql</code> en el SQL Editor de tu proyecto de Supabase y presiona <b>Run</b>.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 hover:underline"
            >
              Ir a Supabase Dashboard <ExternalLink className="w-3 h-3" />
            </a>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-xl bg-slate-800 hover:bg-slate-700 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition active:scale-95"
              >
                {savedSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-950" /> Guardado
                  </>
                ) : (
                  'Guardar Conexión'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
