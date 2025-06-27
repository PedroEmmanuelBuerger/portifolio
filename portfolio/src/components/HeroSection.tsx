import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  heroRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroRefs }) => (
  <section className="flex flex-col items-center justify-center min-h-[80vh] w-full fade-in mb-32 pt-24" id="sobre">
    <div ref={el => { heroRefs.current[0] = el; }} className="relative mb-12 opacity-0 slide-out">
      <span className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-400 via-cyan-400 to-indigo-500 blur-2xl opacity-60 animate-pulse" />
      <Image
        src="https://media.licdn.com/dms/image/v2/D4D03AQG4HtjVhD5BzQ/profile-displayphoto-shrink_800_800/B4DZbOxGEFIAAc-/0/1747225699017?e=1756339200&v=beta&t=gjGvxbXXVGUd3D-gKhTG81sYtzXBW9kZVqXjQFGjVZI"
        alt="Pedro Emmanuel Buerger"
        width={240}
        height={240}
        className="rounded-full border-8 border-blue-400 avatar-glow relative z-10 shadow-2xl"
        priority
      />
    </div>
    <div ref={el => { heroRefs.current[1] = el; }} className="flex flex-col items-center opacity-0 slide-out">
      <h1 className="text-6xl sm:text-7xl font-extrabold text-white drop-shadow-lg mb-6 tracking-tight animate-fadeInUp animate-delay-200">Pedro Emmanuel Buerger</h1>
      <h2 className="text-3xl sm:text-4xl font-medium text-blue-200 mb-10 animate-fadeInUp animate-delay-400">System Developer | Web & HR Tech | HCM ERP</h2>
      <p className="max-w-2xl text-center text-2xl text-white/90 mb-6 animate-fadeInUp animate-delay-600 text-justify">
        Sou apaixonado por tecnologia, design e comunicação. Atuo como desenvolvedor de sistemas, com experiência em consultoria para sistemas de RH, desenvolvimento web e design gráfico. Busco sempre unir criatividade, eficiência e inovação em cada projeto.
      </p>
      <p className="max-w-xl text-center text-xl text-blue-100 animate-fadeInUp animate-delay-800 mb-2 text-justify">
        Atualmente focado em <b>ERP</b>, <b>Cyber Security</b>, <b>LSP</b> e <b>Arduino</b>. Minha trajetória inclui transição de carreira do design para o desenvolvimento, trazendo uma visão multidisciplinar para soluções digitais.
      </p>
    </div>
  </section>
);

export default HeroSection; 