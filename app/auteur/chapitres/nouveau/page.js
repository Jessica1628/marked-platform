'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NouveauChapitre() {
  const [form, setForm] = useState({
    titre: '',
    contenu: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const saved = localStorage.getItem('chapitres');
    const chapitres = saved ? JSON.parse(saved) : [];
    const updated = [...chapitres, form];
    localStorage.setItem('chapitres', JSON.stringify(updated));
    router.push('/auteur/chapitres');
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#f9f9f9] p-8 rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Nouveau chapitre</h1>

      <form className="space-y-6">
        <div>
          <label className="block font-semibold mb-1">Titre du chapitre</label>
          <input
            type="text"
            name="titre"
            value={form.titre}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            placeholder="Ex: Chapitre 1 — La chute"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Contenu du chapitre</label>
          <textarea
            name="contenu"
            value={form.contenu}
            onChange={handleChange}
            rows="15"
            className="w-full border rounded px-4 py-2"
            placeholder="Écris ton chapitre ici..."
          />
        </div>

        <div className="text-center pt-4">
          <button
            type="button"
            onClick={handleSave}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            💾 Enregistrer le chapitre
          </button>
        </div>
      </form>
    </div>
  );
}
