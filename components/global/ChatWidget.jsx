'use client';

import { useEffect, useRef, useState } from 'react';

const replies = [
  'عالیه! برای این انتخاب سایز M رو پیشنهاد می‌کنم. می‌خوای لینک محصول رو بفرستم؟ 🤍',
  'حتماً! این مدل تن‌خورش آزاد و استاندارده. سوالی درباره پارچه یا رنگش داری؟ ✨',
  'اگه بین دو سایزی، راهنمای سایز هوشمند سایت رو امتحان کن 📏 خیلی دقیق سایزتو پیدا می‌کنه.',
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, open]);

  const toggle = () => {
    if (!open && messages.length === 0) {
      setMessages([
        { who: 'bot', text: 'سلام عزیزم! 🤍 من سارا، استایلیست ویسا هستم. تو انتخاب سایز، رنگ یا ست‌کردن کمکت کنم؟' },
        { who: 'bot', text: 'پرفروش این هفته‌مون «کت ژورنالی» و «ست بافت پاییزه»ست ✨ دنبال چه استایلی هستی؟' },
      ]);
    }
    setOpen((state) => !state);
  };

  const send = (event) => {
    event?.preventDefault();
    const text = value.trim();
    if (!text) return;
    setMessages((current) => [...current, { who: 'me', text }]);
    setValue('');
    window.setTimeout(() => setMessages((current) => [...current, { who: 'bot', text: replies[Math.floor(Math.random() * replies.length)] }]), 750);
  };

  return (
    <>
      <button onClick={toggle} className="group fixed bottom-5 right-5 z-[70] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-vaisa-black text-2xl text-white shadow-lux transition hover:bg-vaisa-golddark" aria-label="گفتگو با استایلیست">
        💬<span className="absolute -left-1 -top-1 h-5 w-5 animate-pulse rounded-full border-2 border-vaisa-cream bg-emerald-500" /><span className="pointer-events-none absolute left-[70px] whitespace-nowrap rounded-xl bg-black px-3 py-2 text-[12px] font-bold text-white opacity-0 transition group-hover:opacity-100">استایلیست آنلاین 🤍</span>
      </button>
      {open && <div className="fixed bottom-[85px] right-5 z-[70] w-[330px] max-w-[calc(100vw-40px)] overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-lux">
        <div className="flex items-center gap-3 bg-vaisa-black p-4 text-white">
          <img src="/images/photo-1524504388940-b1c1722653e1.jpg" alt="استایلیست ویسا" className="h-11 w-11 rounded-full border-2 border-vaisa-gold object-cover" />
          <div className="flex-1"><div className="text-[14px] font-black">سارا — استایلیست ویسا</div><div className="flex items-center gap-1 text-[12px] text-emerald-400"><span className="h-2 w-2 rounded-full bg-emerald-400" /> آنلاین • پاسخ در چند دقیقه</div></div>
          <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white" aria-label="بستن گفتگو">✕</button>
        </div>
        <div className="h-[280px] space-y-3 overflow-y-auto bg-vaisa-cream/60 p-4">
          {messages.map((message, index) => <div key={`${index}-${message.who}`} className={`chat-msg flex ${message.who === 'me' ? 'justify-end' : 'gap-2'}`}>
            {message.who === 'bot' && <img src="/images/photo-1524504388940-b1c1722653e1.jpg" alt="" className="h-8 w-8 shrink-0 rounded-full object-cover" />}
            <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-6 ${message.who === 'bot' ? 'rounded-tr-sm border border-black/5 bg-white shadow-sm' : 'rounded-tl-sm bg-vaisa-black text-white'}`}>{message.text}</div>
          </div>)}<div ref={endRef} />
        </div>
        <form onSubmit={send} className="flex gap-2 border-t border-black/5 p-3"><input value={value} onChange={(event) => setValue(event.target.value)} placeholder="سوال استایلت رو بپرس..." className="flex-1 rounded-xl bg-vaisa-cream px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-vaisa-gold/40" /><button className="h-12 w-12 shrink-0 rounded-xl bg-vaisa-black text-white transition hover:bg-vaisa-gold" aria-label="ارسال پیام">←</button></form>
      </div>}
    </>
  );
}
