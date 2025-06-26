"use client";
import Image from "next/image";
import { useEffect } from "react";

const stackData = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 32 32" width={32} height={32} fill="none"><circle cx="16" cy="16" r="3" fill="#61DAFB"/><ellipse rx="14" ry="6" transform="matrix(.866 .5 -.5 .866 16 16)" stroke="#61DAFB" strokeWidth="2"/><ellipse rx="14" ry="6" transform="matrix(.866 -.5 .5 .866 16 16)" stroke="#61DAFB" strokeWidth="2"/><ellipse rx="14" ry="6" transform="matrix(1 0 0 1 16 16)" stroke="#61DAFB" strokeWidth="2"/></svg>
    ),
    description: "Desenvolvimento de interfaces modernas, responsivas e dinâmicas para web.",
    projects: [
      { name: "Online-Store", url: "https://github.com/PedroEmmanuelBuerger/Online-Store" },
      { name: "recipes-app", url: "https://github.com/PedroEmmanuelBuerger/recipes-app" },
    ],
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Redux",
    icon: (
      <svg viewBox="0 0 32 32" width={32} height={32} fill="none"><circle cx="16" cy="16" r="14" fill="#764ABC"/><text x="16" y="22" textAnchor="middle" fontSize="14" fill="#fff">Redux</text></svg>
    ),
    description: "Gerenciamento de estado global em aplicações React.",
    projects: [
      { name: "Online-Store", url: "https://github.com/PedroEmmanuelBuerger/Online-Store" },
    ],
    color: "from-purple-400 to-purple-700",
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 32 32" width={32} height={32} fill="none"><rect width="32" height="32" rx="8" fill="#F7DF1E"/><text x="16" y="22" textAnchor="middle" fontSize="14" fill="#222">JS</text></svg>
    ),
    description: "Linguagem principal para aplicações web dinâmicas.",
    projects: [
      { name: "Online-Store", url: "https://github.com/PedroEmmanuelBuerger/Online-Store" },
      { name: "recipes-app", url: "https://github.com/PedroEmmanuelBuerger/recipes-app" },
      { name: "deburguer", url: "https://github.com/PedrooSilvaa/deburguer" },
    ],
    color: "from-yellow-300 to-yellow-500",
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 32 32" width={32} height={32} fill="none"><rect width="32" height="32" rx="8" fill="#3178C6"/><text x="16" y="22" textAnchor="middle" fontSize="14" fill="#fff">TS</text></svg>
    ),
    description: "Superset do JavaScript que adiciona tipagem estática.",
    projects: [
      { name: "Online-Store", url: "https://github.com/PedroEmmanuelBuerger/Online-Store" },
    ],
    color: "from-blue-400 to-blue-700",
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 32 32" width={32} height={32} fill="none"><rect x="2" y="8" width="28" height="16" rx="8" fill="#3776AB"/><rect x="8" y="2" width="16" height="28" rx="8" fill="#FFD43B"/></svg>
    ),
    description: "Scripts, automações e aplicações backend.",
    projects: [
      { name: "TING", url: "https://github.com/PedroEmmanuelBuerger/TING" },
    ],
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 32 32" width={32} height={32} fill="none"><polygon points="16,4 28,10 28,22 16,28 4,22 4,10" fill="#8CC84B"/></svg>
    ),
    description: "APIs, backend e integrações modernas.",
    projects: [
      { name: "Online-Store", url: "https://github.com/PedroEmmanuelBuerger/Online-Store" },
    ],
    color: "from-green-400 to-green-700",
  },
  {
    name: "Bootstrap",
    icon: (
      <svg viewBox="0 0 32 32" width={32} height={32} fill="none"><rect width="32" height="32" rx="8" fill="#7952B3"/><text x="16" y="22" textAnchor="middle" fontSize="14" fill="#fff">B</text></svg>
    ),
    description: "Layouts responsivos e componentes prontos para web.",
    projects: [
      { name: "recipes-app", url: "https://github.com/PedroEmmanuelBuerger/recipes-app" },
    ],
    color: "from-purple-300 to-purple-600",
  },
  {
    name: "HTML",
    icon: (
      <svg viewBox="0 0 32 32" width={32} height={32} fill="none"><rect width="32" height="32" rx="8" fill="#E44D26"/><text x="16" y="22" textAnchor="middle" fontSize="14" fill="#fff">HTML</text></svg>
    ),
    description: "Estruturação de páginas web.",
    projects: [
      { name: "Online-Store", url: "https://github.com/PedroEmmanuelBuerger/Online-Store" },
      { name: "recipes-app", url: "https://github.com/PedroEmmanuelBuerger/recipes-app" },
      { name: "deburguer", url: "https://github.com/PedrooSilvaa/deburguer" },
    ],
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "CSS",
    icon: (
      <svg viewBox="0 0 32 32" width={32} height={32} fill="none"><rect width="32" height="32" rx="8" fill="#1572B6"/><text x="16" y="22" textAnchor="middle" fontSize="14" fill="#fff">CSS</text></svg>
    ),
    description: "Estilização e design responsivo.",
    projects: [
      { name: "Online-Store", url: "https://github.com/PedroEmmanuelBuerger/Online-Store" },
      { name: "recipes-app", url: "https://github.com/PedroEmmanuelBuerger/recipes-app" },
      { name: "deburguer", url: "https://github.com/PedrooSilvaa/deburguer" },
    ],
    color: "from-blue-500 to-blue-800",
  },
  {
    name: "CorelDRAW",
    icon: (
      <svg viewBox="0 0 32 32" width={32} height={32} fill="none"><ellipse cx="16" cy="16" rx="14" ry="10" fill="#00B900"/></svg>
    ),
    description: "Criação de identidades visuais, banners e materiais gráficos.",
    projects: [],
    color: "from-green-400 to-green-700",
  },
  {
    name: "Photoshop",
    icon: (
      <svg viewBox="0 0 32 32" width={32} height={32} fill="none"><rect width="32" height="32" rx="8" fill="#001E36"/><text x="16" y="22" textAnchor="middle" fontSize="14" fill="#31A8FF">Ps</text></svg>
    ),
    description: "Edição de imagens e tratamento fotográfico.",
    projects: [],
    color: "from-blue-900 to-blue-400",
  },
];

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Skills", href: "#skills" },
  { name: "Experiência", href: "#experiencia" },
  { name: "Contato", href: "#contato" },
];

export default function Home() {
  // Navegação suave
  useEffect(() => {
    document.querySelectorAll("nav a").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const href = el.getAttribute("href");
        if (href && href.startsWith("#")) {
          const section = document.querySelector(href);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Navegação fixa */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-8 bg-white/10 dark:bg-black/30 glass px-12 py-3 rounded-full shadow-lg backdrop-blur-md border border-white/20 animate-fade-in">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-lg font-semibold text-white hover:text-blue-300 transition-colors duration-200 tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] w-full fade-in mb-32 pt-24" id="sobre">
        <div className="relative mb-12 animate-fadeInUp animate-duration-1000 animate-delay-0">
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
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white drop-shadow-lg mb-6 tracking-tight animate-fadeInUp animate-delay-200">Pedro Emmanuel Buerger</h1>
        <h2 className="text-3xl sm:text-4xl font-medium text-blue-200 mb-10 animate-fadeInUp animate-delay-400">System Developer | Web & HR Tech | Design & Comunicação</h2>
        <p className="max-w-2xl text-center text-2xl text-white/90 mb-6 animate-fadeInUp animate-delay-600">
          Sou apaixonado por tecnologia, design e comunicação. Atuo como desenvolvedor de sistemas, com experiência em consultoria para sistemas de RH, desenvolvimento web e design gráfico. Busco sempre unir criatividade, eficiência e inovação em cada projeto.
        </p>
        <p className="max-w-xl text-center text-xl text-blue-100 animate-fadeInUp animate-delay-800 mb-2">
          Atualmente focado em <b>ERP</b>, <b>Cyber Security</b>, <b>LSP</b> e <b>Arduino</b>. Minha trajetória inclui transição de carreira do design para o desenvolvimento, trazendo uma visão multidisciplinar para soluções digitais.
        </p>
      </section>

      {/* Skills - Stacks principais com ícones, descrição e projetos */}
      <section className="w-full max-w-3xl mb-40 fade-in-up pt-12" id="skills">
        <h3 className="text-4xl font-bold text-white mb-16 text-center tracking-wide animate-fadeInUp animate-delay-0">Stacks & Skills</h3>
        <div className="flex flex-col items-center gap-16">
          {stackData.map((stack, i) => (
            <div
              key={stack.name}
              className={`w-full flex flex-row items-center gap-8 glass p-8 rounded-2xl shadow-2xl border-2 border-white/20 bg-gradient-to-br ${stack.color} fade-in-up`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex-shrink-0">{stack.icon}</div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-2xl text-white drop-shadow-lg">{stack.name}</span>
                <span className="text-lg text-white/90 mb-2">{stack.description}</span>
                {stack.projects.length > 0 && (
                  <div className="flex flex-col gap-1 mt-2">
                    <span className="text-base text-blue-100 font-semibold">Projetos:</span>
                    {stack.projects.map((proj) => (
                      <a
                        key={proj.url}
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-200 underline hover:text-blue-400 transition-colors text-base"
                      >
                        {proj.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiência Profissional - cards grandes, espaçados, prontos para detalhamento */}
      {/* ...experiências profissionais, igual ao modelo anterior, com animação de surgimento... */}
      {/* Contato e Redes Sociais - rodapé limpo, sem assinatura */}
      {/* ...restante do código... */}
    </div>
  );
} 