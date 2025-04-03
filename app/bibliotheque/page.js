export default function Bibliotheque() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#3a3a3a] p-8 flex justify-center items-start">
      <div className="animate-fade-in max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Biblioth&egrave;que</h1>
        <p className="italic text-center mb-8">
          Bienvenue dans l&rsquo;univers de <span className="font-semibold">Marked</span>.
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
              &Agrave; dix-sept ans, Aaron est un adolescent en col&egrave;re qui n&apos;a jamais surmont&eacute; la mort tragique de son fr&egrave;re.
              Seul son ami le plus proche, Matt, a une influence positive sur lui, jusqu&apos;&agrave; ce qu&apos;il rencontre Éden,
              une jeune fille maltrait&eacute;e par son p&egrave;re. Tandis qu&apos;Aaron tombe amoureux d&apos;Éden, Matt doit garder les
              secrets choquants qu&apos;elle cache &agrave; propos de l&apos;accident du fr&egrave;re d&apos;Aaron.
              <br /><br />
              Au fil de leur amiti&eacute; profonde et ind&eacute;fectible, Aaron et Matt d&eacute;couvrent leur homosexualit&eacute; gr&acirc;ce &agrave; leur
              amour naissant l&apos;un pour l&apos;autre. Cependant, Aaron lutte contre ses sentiments et n&apos;admet pas son homosexualit&eacute;,
              ce qui met leur relation en danger. Dans une histoire &eacute;mouvante de d&eacute;couverte de soi et d&apos;amour non conventionnel,
              ils doivent faire face aux v&eacute;rit&eacute;s bouleversantes qui menacent de d&eacute;truire leur lien in&eacute;branlable.
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
