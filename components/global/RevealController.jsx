'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function RevealController() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (reduceMotion) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
          return;
        }
        gsap.to(entry.target, { opacity: 1, y: 0, duration: .9, ease: 'power3.out' });
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });

    const observeElements = (root) => {
      if (root instanceof Element && root.matches('.reveal')) observer.observe(root);
      root.querySelectorAll?.('.reveal').forEach((element) => observer.observe(element));
    };
    observeElements(document);
    const mutation = new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach((node) => { if (node instanceof Element) observeElements(node); })));
    mutation.observe(document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); mutation.disconnect(); };
  }, []);
  return null;
}
