export default function Bibliotheque() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#3a3a3a] p-8 flex justify-center items-start">
      <div className="animate-fade-in max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Bibliothèque</h1>
        <p className="italic text-center mb-8">
          Bienvenue dans l’univers de <span className="font-semibold">Marked</span>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white/60 border border-[#d6cfc7] p-4 rounded-xl shadow text-center hover:shadow-lg transition">
            <img
              src="/tome1.png"
              alt="Couverture Tome 1"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">Tome 1</h2>
            <p className="italic text-[#555] mb-4">Faith in Flames</p>
            <p className="text-sm text-[#333] text-justify leading-relaxed mb-6">
              À dix-sept ans, Aaron est un adolescent en colère qui n'a jamais surmonté la mort tragique de son frère.
              Seul son ami le plus proche, Matt, a une influence positive sur lui, jusqu'à ce qu'il rencontre Éden,
              une jeune fille maltraitée par son père. Tandis qu'Aaron tombe amoureux d'Éden, Matt doit garder les
              secrets choquants qu'elle cache à propos de l'accident du frère d'Aaron.
              <br /><br />
              Au fil de leur amitié profonde et indéfectible, Aaron et Matt découvrent leur homosexualité grâce à leur
              amour naissant l'un pour l'autre. Cependant, Aaron lutte contre ses sentiments et n'admet pas son homosexualité,
              ce qui met leur relation en danger. Dans une histoire émouvante de découverte de soi et d'amour non conventionnel,
              ils doivent faire face aux vérités bouleversantes qui menacent de détruire leur lien inébranlable.
            </p>

            <a href="/lecture/tome1">
              <button className="mt-2 px-5 py-2 bg-[#2e2e2e] text-white font-medium rounded-full transition duration-300 hover:bg-[#4a4a4a] shadow-md hover:scale-105">
                Lire ce tome
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
