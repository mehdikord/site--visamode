'use client';

import { useStore } from '../app/providers';

export default function VideoButton({ className = '', children }) {
  const { setVideoOpen } = useStore();
  return <button onClick={() => setVideoOpen(true)} className={className}>{children}</button>;
}
