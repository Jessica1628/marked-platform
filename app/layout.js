import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white font-sans">
        <header className="p-4 border-b border-gray-700 flex flex-wrap justify-between items-center">
          <div className="flex gap-4">
            <Link href="/">Accueil</Link>
            <Link href="/bibliotheque">Biblioth&egrave;que</Link>
            <Link href="/lecture">Lecture</Link>
            <Link href="/fragments">Fragments</Link>
            <Link href="/auteur">Espace auteur</Link>
          </div>
          <div>
            <Link
              href="/login"
              className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
            >
              Connexion
            </Link>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
