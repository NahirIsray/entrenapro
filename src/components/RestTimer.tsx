import React, { useState, useEffect, useRef } from 'react';
import { Timer, Play, Pause, RotateCcw, ChevronUp, ChevronDown, Bell } from 'lucide-react';

interface Props {
  autoStartSeconds?: number | null;
  onTimerEnd?: () => void;
}

export const RestTimer: React.FC<Props> = ({ autoStartSeconds, onTimerEnd }) => {
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [initialSeconds, setInitialSeconds] = useState<number>(60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  // Play a simple beep sound with Web Audio API
  const playBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);

      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
      }
    } catch {
      // Audio not permitted or context unavailable
    }
  };

  useEffect(() => {
    if (autoStartSeconds) {
      setTimeLeft(autoStartSeconds);
      setInitialSeconds(autoStartSeconds);
      setIsRunning(true);
      setIsExpanded(true);
    }
  }, [autoStartSeconds]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            playBeep();
            if (onTimerEnd) onTimerEnd();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, onTimerEnd]);

  const setPreset = (secs: number) => {
    setInitialSeconds(secs);
    setTimeLeft(secs);
    setIsRunning(true);
  };

  const togglePlay = () => {
    if (timeLeft === 0) {
      setTimeLeft(initialSeconds);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(initialSeconds);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = initialSeconds > 0 ? ((initialSeconds - timeLeft) / initialSeconds) * 100 : 0;

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40">
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 shadow-2xl rounded-2xl overflow-hidden text-white transition-all duration-300 w-72 sm:w-80">
        {/* Top Header / Minimized Bar */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between px-3.5 py-2.5 bg-slate-800/80 cursor-pointer select-none hover:bg-slate-800 transition"
        >
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-lg ${isRunning ? 'bg-emerald-500/20 text-emerald-400 animate-pulse' : 'bg-slate-700 text-slate-300'}`}>
              <Timer className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-300">Descanso</span>
            <span className={`font-mono text-sm font-bold ${timeLeft <= 5 && isRunning ? 'text-red-400 animate-bounce' : 'text-emerald-400'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="p-1 rounded-md hover:bg-slate-700 text-slate-300"
            >
              {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <div className="text-slate-400 p-1">
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </div>
          </div>
        </div>

        {/* Progress Line */}
        <div className="w-full h-1 bg-slate-800">
          <div
            className="h-full bg-emerald-500 transition-all duration-1000 ease-linear"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Expanded Panel */}
        {isExpanded && (
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-center py-2">
              <span className={`font-mono text-4xl font-extrabold tracking-tight ${timeLeft <= 5 && isRunning ? 'text-red-400' : 'text-white'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>

            {/* Quick Presets */}
            <div className="grid grid-cols-4 gap-1.5 text-xs font-semibold">
              {[30, 60, 90, 120].map((s) => (
                <button
                  key={s}
                  onClick={() => setPreset(s)}
                  className={`py-1.5 rounded-lg border transition ${
                    initialSeconds === s
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold'
                      : 'bg-slate-850 border-slate-700/60 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {s >= 60 ? `${s / 60}m` : `${s}s`}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <button
                onClick={resetTimer}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition active:scale-95"
                title="Reiniciar"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={togglePlay}
                className={`flex-1 py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition active:scale-95 ${
                  isRunning
                    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                    : 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lg shadow-emerald-500/20'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-4 h-4" /> Pausar
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" /> Iniciar
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
