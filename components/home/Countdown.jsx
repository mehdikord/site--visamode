'use client';

import { useEffect, useState } from 'react';

function pad(value) { return String(value).padStart(2, '0'); }
export default function Countdown() {
  const [remaining, setRemaining] = useState({ days: 2, hours: 14, minutes: 36, seconds: 8 });
  useEffect(() => {
    const target = Date.now() + (2 * 24 * 3600 + 14 * 3600 + 36 * 60) * 1000;
    const update = () => {
      const seconds = Math.max(0, Math.floor((target - Date.now()) / 1000));
      setRemaining({ days: Math.floor(seconds / 86400), hours: Math.floor((seconds % 86400) / 3600), minutes: Math.floor((seconds % 3600) / 60), seconds: seconds % 60 });
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  const units = [['days', 'روز'], ['hours', 'ساعت'], ['minutes', 'دقیقه'], ['seconds', 'ثانیه']];
  return <div className="mb-6 flex max-w-full items-center gap-1 sm:gap-2.5" dir="ltr">{units.map(([key, label], index) => <div key={key} className="flex shrink-0 items-center gap-1 sm:gap-2.5">{index > 0 && <span className="self-center text-lg font-black text-vaisa-gold sm:text-2xl">:</span>}<div className={`count-box w-12 rounded-xl px-1 py-2 text-center min-[360px]:w-14 min-[360px]:rounded-2xl sm:w-[72px] sm:py-3 ${key === 'seconds' ? '!border-vaisa-gold !bg-vaisa-gold' : ''}`}><div className="font-latin text-lg font-black sm:text-2xl">{pad(remaining[key])}</div><div className={`mt-1 text-[9px] sm:text-[11px] ${key === 'seconds' ? 'text-white/90' : 'text-white/50'}`}>{label}</div></div></div>)}</div>;
}
