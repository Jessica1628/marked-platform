'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PersonnagesPage() {
  const [personnages, setPersonnages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('personnages');
    if (saved) {
      setPersonnages(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">👤 Personnages</h1>

      <div className="text-center mb-8">
        <button
          onClick={() => router.push('/auteur/personnages/nouveau')}
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          ➕ Ajouter un personnage
        </button>
      </div>

      <div className="grid gap-4 mb-10">
        {personnages.length === 0 ? (
          <p className="text-center text-[#777] italic">Aucun personnage enregistré pour le moment.</p>
        ) : (
          personnages.map((perso, index) => (
            <div key={index} className="bg-[#f9f9f9] border border-[#ddd] rounded-xl p-4 shadow-sm">
              <h2 className="text-xl font-semibold">{perso.prenom} {perso.nom}</h2>
              <p className="text-sm text-[#555] italic">{perso.statut} • {perso.age} ans</p>
              <p className="mt-2 text-sm"><strong>Description :</strong> {perso.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}