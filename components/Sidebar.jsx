'use client';

import { useEffect, useState } from 'react';
import { Box, Drawer } from '@mui/material';

const sections = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileView, setMobileView] = useState(false);

  const drawerContent = (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
      {sections.map((id, index) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-14 h-14 flex items-center justify-center rounded font-bold text-base transition 
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

  const mobileDrawerContent = (
    <div className="w-full flex flex-row justify-center items-center gap-1 py-2">
      {sections.map((id, index) => (
        <a
          key={id}
          href={`#${id}`}
          className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded font-bold text-xs transition
            ${activeSection === id
              ? 'bg-black text-white animate-pulse'
              : 'bg-white text-gray-500 hover:bg-gray-400'}
          `}
        >
          {index + 1}
        </a>
      ))}
    </div>
  );

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

  // Detect mobile view and set mobileView state
  useEffect(() => {
    function handleResize() {
      setMobileView(window.innerWidth < 640); // Tailwind's sm breakpoint
    }
    handleResize(); // Set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box>
      {mobileView ? (
        <Drawer
          anchor="bottom"
          variant="permanent"
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              width: '100vw',
              left: 0,
              right: 0,
              bottom: 0,
              top: 'auto',
              height: 64,
              minHeight: 48,
              maxHeight: 80,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 0,
              m: 0,
            },
          }}
          open
        >
          {mobileDrawerContent}
        </Drawer>
      ) : (
        <Drawer variant='permanent' sx={{ '& .MuiDrawer-paper': { backgroundColor: 'black', width: 56, border: 'none' } }}>
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
}
