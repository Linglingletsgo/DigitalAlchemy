export default function Hero() {
  return (
    <section id="film" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black font-mono">
      {/* Cinematic Borders */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

      {/* Video Container */}
      <div className="relative w-full h-full max-w-[90%] max-h-[85vh] border border-white/10 bg-neutral-900 overflow-hidden group">
        
        {/* Video Content */}
        <div className="absolute inset-0 flex items-center justify-center bg-black">
            <video 
              src="/Digital_Alchemy.mp4" 
              className="w-full h-full object-contain"
              controls
              playsInline
            >
              Your browser does not support the video tag.
            </video>
        </div>

      </div>
    </section>
  );
}
