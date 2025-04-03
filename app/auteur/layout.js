// app/auteur/layout.js
'use client';

import '@/app/globals.css';
import AuteurMenu from '@/app/components/AuteurMenu';

export default function AuteurLayout({ children }) {
  return (
    <>
      <AuteurMenu />
      <main className="px-6 py-10 bg-white text-[#1e1e1e] font-serif min-h-screen">
        {children}
      </main>
    </>
  );
}

