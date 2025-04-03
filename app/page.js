import Link from 'next/link'

export default function Intro() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/image_fond.png')" }}
    >
      <div
        className="animate-fade-in backdrop-blur-sm bg-white/60 border border-[#d6cfc7] px-8 py-6 rounded-xl shadow-lg max-w-xl text-center"
      >
        <h1 className="text-[#2e2e2e] text-4xl font-serif font-semibold mb-4">
          Bienvenue dans <span className="italic">MARKED</span>
        </h1>
        <p className="text-[#3a3a3a] text-md font-light italic leading-relaxed mb-6">
          Ici, chaque page est une cicatrice,<br />
          chaque chapitre un souvenir.<br />
          Bienvenue dans un monde où l’amour, la douleur et la mémoire se rencontrent.
        </p>
        <Link href="/bibliotheque">
          <button className="mt-2 px-6 py-2 bg-[#2e2e2e] text-white font-medium rounded-full transition duration-300 hover:bg-[#4a4a4a] shadow-md hover:scale-105">
            Entrer
          </button>
        </Link>
      </div>
    </div>
  );
}
