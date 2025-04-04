'use client';

export default function Chapitre1() {
  // Fonction pour jouer la musique
  const handlePlay = () => {
    const audio = document.getElementById('bg-music');
    if (audio) {
      audio.play(); // Joue la musique
    }
  };

  // Fonction pour mettre la musique en pause
  const handlePause = () => {
    const audio = document.getElementById('bg-music');
    if (audio) {
      audio.pause(); // Met la musique en pause
    }
  };

  return (
    <>
      {/* Boutons pour contrôler la musique */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Bouton pour activer la musique */}
        <button
          onClick={handlePlay}
          className="px-4 py-2 text-sm bg-[#2e2e2e] text-white rounded-full shadow hover:bg-[#444] mb-2"
        >
          🔊 Activer le son
        </button>

        {/* Bouton pour mettre la musique en pause */}
        <button
          onClick={handlePause}
          className="px-4 py-2 text-sm bg-[#2e2e2e] text-white rounded-full shadow hover:bg-[#444]"
        >
          ⏸️ Pause
        </button>
      </div>

      {/* Musique d'ambiance */}
      <audio id="bg-music" loop>
        <source src="/fond_sonore1.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas la lecture audio.
      </audio>

      {/* Image de fond + contenu avec voile */}
      <div
        className="min-h-screen bg-cover bg-center px-6 py-12 flex justify-center items-start text-[#2e2e2e]"
        style={{ backgroundImage: "url('/fond_ch1.png')" }}
      >
        <div className="max-w-3xl w-full animate-fade-in backdrop-blur-sm bg-white/70 rounded-xl p-6 shadow-xl">
          {/* Mention légale */}
          <p className="text-xs text-center italic text-[#666] mb-10 leading-relaxed">
            Cette œuvre est protégée par le droit d’auteur. Aucune partie de ce livre ne peut être reproduite, copiée, stockée,
            transmise ou diffusée sous quelque forme que ce soit sans l’autorisation écrite préalable de l’auteur.<br />
            Toute ressemblance avec des personnes réelles, vivantes ou décédées, est purement fortuite.<br />
            Tous droits réservés.
          </p>

          {/* Titre */}
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-1">Chapitre 1</h1>
          <h2 className="text-xl sm:text-2xl text-center italic text-[#555] mb-10">La rage au poing — Aaron</h2>

          {/* Texte du chapitre */}
          <div className="text-justify leading-loose text-[17px] space-y-6">
            <p>Chaque frappe contre le sac est un cri silencieux. La sueur perle sur mon front, coule dans mes yeux, mais je l&rsquo;ignore. Rien n&rsquo;importe plus que ce rythme bestial entre mes poings et le cuir. Le morceau <em>&quot;Paralyzed&quot;</em> de NF tourne en boucle, pulsant dans mes veines comme une perfusion de rage. &Agrave; chaque coup, je m&rsquo;arrache un peu &agrave; cette chape de douleur qui m&rsquo;&eacute;crase le torse.</p>
            <p>Je ne suis pas venu ici pour jouer. Je suis venu pour survivre. Pour tenir debout face &agrave; la temp&ecirc;te qui gronde en moi. Pour frapper jusqu&rsquo;&agrave; ne plus penser. Jusqu&rsquo;&agrave; oublier.</p>
            <p>La douleur me maintient en vie. Le cuir br&ucirc;le mes phalanges malgr&eacute; les bandes. Je ne compte plus les impacts. Je veux m&rsquo;effondrer, mais je n&rsquo;y arrive pas. Il faut que &ccedil;a sorte. Tout. Encore.</p>
            <p>Je vois flou. Je hal&egrave;te. Mais je continue.</p>
            <p>Ma col&egrave;re n&rsquo;est pas un feu de paille, elle br&ucirc;le depuis trop longtemps. Elle consume tout. Moi, les autres, ce qu&rsquo;il reste de nous.</p>
            <p>Un souvenir m&rsquo;arrache un battement : Arthur, sur le trottoir, son ballon, sa voix. Mon c&oelig;ur rate une mesure.</p>
            <p>J&rsquo;encha&icirc;ne les coups. Un. Deux. Trois. Jusqu&rsquo;&agrave; ce que mes bras tremblent.</p>
          </div>
        </div>
      </div>
    </>
  );
}
