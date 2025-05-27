
'use client';

import { useEffect, useState } from 'react';

const sections = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '0px 0px -60% 0px', // triggers earlier for smoother feel
        threshold: 0.3,
      }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
      {sections.map((id, index) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-15 h-15 flex items-center justify-center rounded font-bold text-base transition 
            ${activeSection === id
              ? 'bg-white text-black animate-pulse'
              : 'bg-white text-gray-500 hover:bg-gray-400'}
          `}
        >
          {index + 1}
        </a>
      ))}
    </div>
  );
}
