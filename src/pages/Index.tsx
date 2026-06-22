const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0f] flex items-center justify-center">
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#ff2e88] blur-[90px] opacity-70 animate-blob" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#00e5ff] blur-[100px] opacity-60 animate-blob [animation-delay:4s]" />
      <div className="absolute top-[30%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-[#ffe600] blur-[110px] opacity-50 animate-blob [animation-delay:8s]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 text-center px-6 select-none">
        <p className="mb-8 font-display text-sm md:text-base tracking-[0.5em] uppercase text-white/60 animate-float-up [animation-delay:0.1s] opacity-0">
          добро пожаловать
        </p>

        <h1 className="font-display font-black leading-none text-white text-[22vw] md:text-[18vw] drop-shadow-[0_10px_40px_rgba(255,46,136,0.4)]">
          <span className="inline-block animate-pop-in opacity-0">ЛЯ</span>{" "}
          <span className="inline-block animate-pop-in opacity-0 [animation-delay:0.25s] bg-gradient-to-r from-[#ff2e88] via-[#ffe600] to-[#00e5ff] bg-clip-text text-transparent">
            ЛЯЛЯ
          </span>
        </h1>

        <div className="mt-10 flex items-center justify-center gap-3 animate-float-up opacity-0 [animation-delay:0.9s]">
          <span className="h-px w-12 bg-white/30" />
          <span className="font-display text-white/50 text-xs md:text-sm tracking-widest">
            2026
          </span>
          <span className="h-px w-12 bg-white/30" />
        </div>
      </div>
    </div>
  );
};

export default Index;
