'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AuteurMenu() {
  const pathname = usePathname();

  const linkClasses = (href) =>
    `px-4 py-2 rounded-md text-sm font-medium transition ${
      pathname === href
        ? 'bg-black text-white'
        : 'text-[#333] hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-[#f2f2f2] border-b border-gray-300 py-3 px-6 mb-10 shadow-sm">
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/auteur" className={linkClasses('/auteur')}>
          Accueil
        </Link>
        <Link href="/auteur/personnages" className={linkClasses('/auteur/personnages')}>
          👤 Personnages
        </Link>
        <Link href="/auteur/idees" className={linkClasses('/auteur/idees')}>
          💡 Idées
        </Link>
        <Link href="/auteur/chapitres" className={linkClasses('/auteur/chapitres')}>
          📚 Chapitres
        </Link>
      </div>
    </nav>
  );
}
