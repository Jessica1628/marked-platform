export default function Intro() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
        Ton navigateur ne supporte pas la lecture de vid&eacute;os.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Bienvenue dans MARKED</h1>
      </div>
    </div>
  );
}
