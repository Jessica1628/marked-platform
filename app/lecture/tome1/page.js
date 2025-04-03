'use client';

export default function Chapitre1() {
  return (
    <>
      {/* Bouton pour activer la musique */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => {
            const audio = document.getElementById('bg-music');
            if (audio) {
              audio.play();
            }
          }}
          className="px-4 py-2 text-sm bg-[#2e2e2e] text-white rounded-full shadow hover:bg-[#444]"
        >
          🔊 Activer le son
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
            <p>Chaque frappe contre le sac est un cri silencieux. La sueur perle sur mon front, coule dans mes yeux, mais je l’ignore. Rien n’importe plus que ce rythme bestial entre mes poings et le cuir. Le morceau <em>"Paralyzed"</em> de NF tourne en boucle, pulsant dans mes veines comme une perfusion de rage. À chaque coup, je m’arrache un peu à cette chape de douleur qui m’écrase le torse.</p>
            <p>Je ne suis pas venu ici pour jouer. Je suis venu pour survivre. Pour tenir debout face à la tempête qui gronde en moi. Pour frapper jusqu’à ne plus penser. Jusqu’à oublier.</p>
            <p>La douleur me maintient en vie. Le cuir brûle mes phalanges malgré les bandes. Je ne compte plus les impacts. Je veux m'effondrer, mais je n’y arrive pas. Il faut que ça sorte. Tout. Encore.</p>
            <p>Je vois flou. Je halète. Mais je continue.</p>
            <p>Ma colère n’est pas un feu de paille, elle brûle depuis trop longtemps. Elle consume tout. Moi, les autres, ce qu’il reste de nous.</p>
            <p>Un souvenir m’arrache un battement : Arthur, sur le trottoir, son ballon, sa voix. Mon cœur rate une mesure.</p>
            <p>J’enchaîne les coups. Un. Deux. Trois. Jusqu’à ce que mes bras tremblent.</p>
            <p>Une silhouette familière surgit dans mon champ de vision. Matt.</p>
            <p><strong>Ce con de Matt.</strong></p>
            <p>Toujours à débarquer comme une bouffée d’air qui dérange. Blond débraillé, tee-shirt trop moulant, regard trop clair. Et ce putain de suçon sur son cou, comme un badge de la soirée qu’il vient de passer.</p>
            <p>— Je suis surpris de te voir là, lance-t-il en enfilant ses gants de boxe.<br />— J’avais besoin d’évacuer un peu.<br />— Business as usual, hein ?</p>
            <p>Il tente un demi-sourire. Je détourne le regard. Pourquoi il est là ? Pourquoi il est toujours là ? Pourquoi... pourquoi il reste ?</p>
            <p>Matt s’approche, silencieux. Il ne me quitte pas des yeux.</p>
            <p>— Ce soir, on se retrouve tous au lac de Jouy. Si tu veux te changer les idées...</p>
            <p>Mon poing frappe le sac plus fort. Il le sait. Putain. Il sait que c’est aujourd’hui. Trois ans. Trois ans sans Arthur.</p>
            <p>Je me tourne vers lui. Froid. Tranchant.</p>
            <p>— T’es vraiment gonflant, Matt. Pourquoi tu t’obstines ? Tu crois que je vais venir me bourrer la gueule pendant que mon frère pourrit sous terre ?</p>
            <p>Il ne bouge pas. Il encaisse. Il baisse les yeux.</p>
            <p>— Je sais...</p>
            <p>Silence. Gênant. Profond. Chargé.</p>
            <p>— Je voulais juste que tu saches que t’es pas obligé d’y aller seul.</p>
            <p>Je serre les dents.</p>
            <p>— Je suis toujours seul. Même quand tu fais semblant d’être là.</p>
            <p>Il lève les yeux vers moi. Et dans ce regard, y a une faille. Un truc qui tremble. Et ça me fait flancher.</p>
            <p>Il s’approche un peu plus.</p>
            <p>— T’as pas besoin d’être seul, Aaron.</p>
            <p>Je recule d’un pas. Trop proche. Trop intense.</p>
            <p>— Arrête...</p>
            <p>— Pourquoi ? Tu crois que si tu casses tout, ça fera moins mal ?</p>
            <p>— Tu piges rien.</p>
            <p>— Peut-être. Mais je suis toujours là.</p>
            <p>Je le regarde. Longtemps. Trop longtemps. Et dans un souffle, je lâche :</p>
            <p>— C’est un miracle que j’aie pas encore démonté quelqu’un aujourd’hui.</p>
            <p>— T’as encore le droit de pas aller bien, tu sais.</p>
            <p>Je le fixe. Il me connaît trop. Et ça me fout en l’air. Je détourne les yeux, frappe une dernière fois le sac.</p>
            <p>— Dégage, Matt.</p>
            <p>Il hésite. Puis il recule, lentement. Mais avant de partir, il murmure :</p>
            <p>— J’te laisse pas tomber, Aaron. Même si t’essaies de m’en dégoûter.</p>
            <p>Et il s’en va.</p>
            <p>Et moi, je reste là. Le cœur à vif. Le sac pendule encore sous mon dernier coup. Et mes poings saignent.</p>
          </div>
        </div>
      </div>
    </>
  );
}
