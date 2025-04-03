'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NouvelleIdee() {
  const [form, setForm] = useState({
    titre: '',
    contenu: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const saved = localStorage.getItem('idees');
    const idees = saved ? JSON.parse(saved) : [];
    const updated = [...idees, form];
    localStorage.setItem('idees', JSON.stringify(updated));
    router.push('/auteur/idees');
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#f9f9f9] p-8 rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Nouvelle id&eacute;e</h1>

      <form className="space-y-6">
        <div>
          <label className="block font-semibold mb-1">Titre de l&rsquo;id&eacute;e</label>
          <input
            type="text"
            name="titre"
            value={form.titre}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            placeholder="Id&eacute;e de sc&egrave;ne, dialogue, rebondissement..."
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Contenu de l&rsquo;id&eacute;e</label>
          <textarea
            name="contenu"
            value={form.contenu}
            onChange={handleChange}
            rows="6"
            className="w-full border rounded px-4 py-2"
            placeholder="&Eacute;cris ton id&eacute;e ici, sans pression !"
          />
        </div>

        <div className="text-center pt-4">
          <button
            type="button"
            onClick={handleSave}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            💾 Enregistrer l&rsquo;id&eacute;e
          </button>
        </div>
      </form>
    </div>
  );
}
