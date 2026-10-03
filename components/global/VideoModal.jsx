'use client';

import { useEffect, useRef } from 'react';
import { useStore } from '../../app/providers';

export default function VideoModal() {
  const { videoOpen, setVideoOpen } = useStore();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoOpen) videoRef.current?.play().catch(() => {});
    else if (videoRef.current) videoRef.current.pause();
  }, [videoOpen]);

  if (!videoOpen) return null;
  return (
    <div className="fixed inset-0 z-[93]" role="dialog" aria-modal="true" aria-label="فشن فیلم ویسا">
      <button className="absolute inset-0 h-full w-full bg-black/90 backdrop-blur" onClick={() => setVideoOpen(false)} aria-label="بستن ویدیو" />
      <div className="relative flex h-full items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <div className="mb-4 flex items-center justify-between"><div className="font-black text-white">🎬 فشن‌فیلم کالکشن پاییز ویسا</div><button onClick={() => setVideoOpen(false)} className="h-10 w-10 rounded-full bg-white font-bold text-black">✕</button></div>
          <div className="aspect-video overflow-hidden rounded-3xl bg-black shadow-lux"><video ref={videoRef} controls poster="/images/photo-1490481651871-ab68de25d43d.jpg" className="h-full w-full object-cover"><source src="https://assets.mixkit.co/videos/preview/mixkit-woman-modeling-a-short-red-dress-708-large.mp4" type="video/mp4" /></video></div>
          <div className="mt-3 text-center text-[13px] text-white/50">کالکشن FW25 — فیلم‌برداری: استودیو ویسا، تهران</div>
        </div>
      </div>
    </div>
  );
}
