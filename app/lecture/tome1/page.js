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
            Cette œuvre est prot&eacute;g&eacute;e par le droit d&rsquo;auteur. Aucune partie de ce livre ne peut &ecirc;tre reproduite, copi&eacute;e, stock&eacute;e,
            transmise ou diffus&eacute;e sous quelque forme que ce soit sans l&rsquo;autorisation &eacute;crite pr&eacute;alable de l&rsquo;auteur.<br />
            Toute ressemblance avec des personnes r&eacute;elles, vivantes ou d&eacute;c&eacute;d&eacute;es, est purement fortuite.<br />
            Tous droits r&eacute;serv&eacute;s.
          </p>

          {/* Titre */}
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-1">Chapitre 1</h1>
          <h2 className="text-xl sm:text-2xl text-center italic text-[#555] mb-10">La rage au poing &mdash; Aaron</h2>

          {/* Texte du chapitre */}
          <div className="text-justify leading-loose text-[17px] space-y-6">
            <p>Chaque frappe contre le sac est un cri silencieux. La sueur perle sur mon front, coule dans mes yeux, mais je l&rsquo;ignore. Rien n&rsquo;importe plus que ce rythme bestial entre mes poings et le cuir. Le morceau <em>&quot;Paralyzed&quot;</em> de NF tourne en boucle, pulsant dans mes veines comme une perfusion de rage. &Agrave; chaque coup, je m&rsquo;arrache un peu &agrave; cette chape de douleur qui m&rsquo;&eacute;crase le torse.</p>
            <p>Je ne suis pas venu ici pour jouer. Je suis venu pour survivre. Pour tenir debout face &agrave; la temp&ecirc;te qui gronde en moi. Pour frapper jusqu&rsquo;&agrave; ne plus penser. Jusqu&rsquo;&agrave; oublier.</p>
            <p>La douleur me maintient en vie. Le cuir br&ucirc;le mes phalanges malgr&eacute; les bandes. Je ne compte plus les impacts. Je veux m&rsquo;effondrer, mais je n&rsquo;y arrive pas. Il faut que &ccedil;a sorte. Tout. Encore.</p>
            <p>Je vois flou. Je hal&egrave;te. Mais je continue.</p>
            <p>Ma col&egrave;re n&rsquo;est pas un feu de paille, elle br&ucirc;le depuis trop longtemps. Elle consume tout. Moi, les autres, ce qu&rsquo;il reste de nous.</p>
            <p>Un souvenir m&rsquo;arrache un battement : Arthur, sur le trottoir, son ballon, sa voix. Mon c&oelig;ur rate une mesure.</p>
            <p>J&rsquo;encha&icirc;ne les coups. Un. Deux. Trois. Jusqu&rsquo;&agrave; ce que mes bras tremblent.</p>
            <p>Une silhouette famili&egrave;re surgit dans mon champ de vision. Matt.</p>
            <p><strong>Ce con de Matt.</strong></p>
            <p>Toujours &agrave; d&eacute;barquer comme une bouff&eacute;e d&rsquo;air qui d&eacute;range. Blond d&eacute;braill&eacute;, tee-shirt trop moulant, regard trop clair. Et ce putain de su&ccedil;on sur son cou, comme un badge de la soir&eacute;e qu&rsquo;il vient de passer.</p>
            <p>— Je suis surpris de te voir l&agrave;, lance-t-il en enfilant ses gants de boxe.<br />— J&rsquo;avais besoin d&rsquo;&eacute;vacuer un peu.<br />— Business as usual, hein ?</p>
            <p>Il tente un demi-sourire. Je d&eacute;tourne le regard. Pourquoi il est l&agrave; ? Pourquoi il est toujours l&agrave; ? Pourquoi... pourquoi il reste ?</p>
            <p>Matt s&rsquo;approche, silencieux. Il ne me quitte pas des yeux.</p>
            <p>— Ce soir, on se retrouve tous au lac de Jouy. Si tu veux te changer les id&eacute;es...</p>
            <p>Mon poing frappe le sac plus fort. Il le sait. Putain. Il sait que c&rsquo;est aujourd&rsquo;hui. Trois ans. Trois ans sans Arthur.</p>
            <p>Je me tourne vers lui. Froid. Tranchant.</p>
            <p>— T&rsquo;es vraiment gonflant, Matt. Pourquoi tu t&rsquo;obstines ? Tu crois que je vais venir me bourrer la gueule pendant que mon fr&egrave;re pourrit sous terre ?</p>
            <p>Il ne bouge pas. Il encaisse. Il baisse les yeux.</p>
            <p>— Je sais...</p>
            <p>Silence. G&ecirc;nant. Profond. Charg&eacute;.</p>
            <p>— Je voulais juste que tu saches que t&rsquo;es pas oblig&eacute; d&rsquo;y aller seul.</p>
            <p>Je serre les dents.</p>
            <p>— Je suis toujours seul. M&ecirc;me quand tu fais semblant d&rsquo;&ecirc;tre l&agrave;.</p>
            <p>Il l&egrave;ve les yeux vers moi. Et dans ce regard, y a une faille. Un truc qui tremble. Et &ccedil;a me fait flancher.</p>
            <p>Il s&rsquo;approche un peu plus.</p>
            <p>— T&rsquo;as pas besoin d&rsquo;&ecirc;tre seul, Aaron.</p>
            <p>Je recule d&rsquo;un pas. Trop proche. Trop intense.</p>
            <p>— Arr&ecirc;te...</p>
            <p>— Pourquoi ? Tu crois que si tu casses tout, &ccedil;a fera moins mal ?</p>
            <p>— Tu piges rien.</p>
            <p>— Peut-&ecirc;tre. Mais je suis toujours l&agrave;.</p>
            <p>Je le regarde. Longtemps. Trop longtemps. Et dans un souffle, je l&acirc;che :</p>
            <p>— C&rsquo;est un miracle que j&rsquo;aie pas encore d&eacute;mont&eacute; quelqu&rsquo;un aujourd&rsquo;hui.</p>
            <p>— T&rsquo;as encore le droit de pas aller bien, tu sais.</p>
            <p>Je le fixe. Il me conna&icirc;t trop. Et &ccedil;a me fout en l&rsquo;air. Je d&eacute;tourne les yeux, frappe une derni&egrave;re fois le sac.</p>
            <p>— D&eacute;gage, Matt.</p>
            <p>Il h&eacute;site. Puis il recule, lentement. Mais avant de partir, il murmure :</p>
            <p>— J&rsquo;te laisse pas tomber, Aaron. M&ecirc;me si t&rsquo;essaies de m&rsquo;en d&eacute;go&ucirc;ter.</p>
            <p>Et il s&rsquo;en va.</p>
            <p>Et moi, je reste l&agrave;. Le c&oelig;ur &agrave; vif. Le sac pendule encore sous mon dernier coup. Et mes poings saignent.</p>
          </div>
        </div>
      </div>
    </>
  );
}
