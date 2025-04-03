'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ChapitresPage() {
  const [chapitres, setChapitres] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('chapitres');
    if (saved) {
      setChapitres(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Chapitres</h1>

      <div className="text-center mb-8">
        <button
          onClick={() => router.push('/auteur/chapitres/nouveau')}
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          ➕ Ajouter un chapitre
        </button>
      </div>

      <div className="grid gap-4 mb-10">
        {chapitres.length === 0 ? (
          <p className="text-center text-[#777] italic">Aucun chapitre enregistré pour le moment.</p>
        ) : (
          chapitres.map((chap, index) => (
            <div key={index} className="bg-[#f9f9f9] border border-[#ddd] rounded-xl p-4 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{chap.titre}</h2>
              <p className="text-sm text-[#555] whitespace-pre-line line-clamp-3">{chap.contenu}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
