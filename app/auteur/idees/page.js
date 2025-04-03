'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function IdeesPage() {
  const [idees, setIdees] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('idees');
    if (saved) {
      setIdees(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">💡 Id&eacute;es</h1>

      <div className="text-center mb-8">
        <button
          onClick={() => router.push('/auteur/idees/nouvelle')}
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          ➕ Ajouter une id&eacute;e
        </button>
      </div>

      <div className="grid gap-4 mb-10">
        {idees.length === 0 ? (
          <p className="text-center text-[#777] italic">Aucune id&eacute;e enregistr&eacute;e pour le moment.</p>
        ) : (
          idees.map((idee, index) => (
            <div key={index} className="bg-[#f9f9f9] border border-[#ddd] rounded-xl p-4 shadow-sm">
              <h2 className="text-xl font-semibold">{idee.titre}</h2>
              <p className="mt-2 text-sm text-[#444] whitespace-pre-line">{idee.contenu}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
