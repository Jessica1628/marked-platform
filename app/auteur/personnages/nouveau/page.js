'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NouvelleFichePersonnage() {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    age: '',
    statut: '',
    description: '',
    liens: '',
    apparence: '',
    traits: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const saved = localStorage.getItem('personnages');
    const personnages = saved ? JSON.parse(saved) : [];
    const updated = [...personnages, form];
    localStorage.setItem('personnages', JSON.stringify(updated));
    router.push('/auteur/personnages'); // Redirige vers la liste
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#f9f9f9] p-8 rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Nouvelle fiche personnage</h1>

      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Nom</label>
            <input type="text" name="nom" value={form.nom} onChange={handleChange} className="w-full border rounded px-4 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Prénom</label>
            <input type="text" name="prenom" value={form.prenom} onChange={handleChange} className="w-full border rounded px-4 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Âge</label>
            <input type="text" name="age" value={form.age} onChange={handleChange} className="w-full border rounded px-4 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Statut</label>
            <input type="text" name="statut" value={form.statut} onChange={handleChange} className="w-full border rounded px-4 py-2" />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Apparence physique</label>
          <textarea name="apparence" value={form.apparence} onChange={handleChange} rows="2" className="w-full border rounded px-4 py-2" />
        </div>

        <div>
          <label className="block font-semibold mb-1">Traits de caract&egrave;re</label>
          <textarea name="traits" value={form.traits} onChange={handleChange} rows="2" className="w-full border rounded px-4 py-2" />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description / Histoire</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="3" className="w-full border rounded px-4 py-2" />
        </div>

        <div>
          <label className="block font-semibold mb-1">Liens avec d&apos;autres personnages</label>
          <textarea name="liens" value={form.liens} onChange={handleChange} rows="2" className="w-full border rounded px-4 py-2" />
        </div>

        <div className="text-center pt-4">
          <button
            type="button"
            onClick={handleSave}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            💾 Enregistrer le personnage
          </button>
        </div>
      </form>
    </div>
  );
}
