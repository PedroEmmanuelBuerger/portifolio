"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Ícones SVG para stacks principais e secundáriasb

const stackData = [
  {
    name: "JavaScript",
    icon: (
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#F7DF1E"/><text x="16" y="24" textAnchor="middle" fontSize="18" fill="#222">JS</text></svg>
    ),
    color: "from-yellow-300 to-yellow-500",
    level: "Avançado",
    experience: "3+ anos",
    related: "React, Node.js, Web",
    description: "Linguagem principal para aplicações web dinâmicas.",
    projects: [
      { name: "Online-Store", url: "https://github.com/PedroEmmanuelBuerger/Online-Store" },
      { name: "recipes-app", url: "https://github.com/PedroEmmanuelBuerger/recipes-app" },
    ],
  },
  {
    name: "TypeScript",
    icon: (
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#3178C6"/><text x="16" y="24" textAnchor="middle" fontSize="18" fill="#fff">TS</text></svg>
    ),
    color: "from-blue-400 to-blue-700",
    level: "Avançado",
    experience: "2+ anos",
    related: "React, Node.js",
    description: "Superset do JavaScript que adiciona tipagem estática.",
    projects: [
      { name: "Online-Store", url: "https://github.com/PedroEmmanuelBuerger/Online-Store" },
    ],
  },
  {
    name: "Java",
    icon: (
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="27" rx="13" ry="2" fill="#5382A1"/><path d="M16 24c-4.5-2.5-7.5-5.5-7.5-9.5C8.5 8.5 16 4 16 4s7.5 4.5 7.5 10.5c0 4-3 7-7.5 9.5z" fill="#E76F00"/></svg>
    ),
    color: "from-orange-400 to-orange-600",
    level: "Intermediário",
    experience: "1+ ano",
    related: "Spring, APIs",
    description: "Linguagem robusta para aplicações corporativas.",
    projects: [
      { name: "terror in carcosa", url: "https://github.com/PedroEmmanuelBuerger/Terror-In-carcosa" },
    ],
  },
  {
    name: "C#",
    icon: (
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#68217A"/><text x="16" y="24" textAnchor="middle" fontSize="18" fill="#fff">C#</text></svg>
    ),
    color: "from-purple-700 to-purple-900",
    level: "Básico",
    experience: "<1 ano",
    related: ".NET, APIs",
    description: "Linguagem moderna para aplicações desktop e web.",
    projects: [
      { name: "Trybets", url: "https://github.com/PedroEmmanuelBuerger/TryBets" },
      { name: "trygames", url: "https://github.com/PedroEmmanuelBuerger/TryGames" },
      { name: "trybeHotel", url: "https://github.com/PedroEmmanuelBuerger/trybe_hotel" },
      { name: "trybank", url: "https://github.com/PedroEmmanuelBuerger/trybe_hotel" },
    ],
  },
  {
    name: "Python",
    icon: (
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none"><rect x="2" y="8" width="28" height="16" rx="8" fill="#3776AB"/><rect x="8" y="2" width="16" height="28" rx="8" fill="#FFD43B"/></svg>
    ),
    color: "from-yellow-400 to-yellow-600",
    level: "Intermediário",
    experience: "2+ anos",
    related: "Automação, Scripts",
    description: "Scripts, automações e aplicações backend.",
    projects: [
      { name: "TING", url: "https://github.com/PedroEmmanuelBuerger/TING" },
    ],
  },
  {
    name: "PL/SQL",
    icon: (
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="16" rx="14" ry="10" fill="#F80000"/><text x="16" y="24" textAnchor="middle" fontSize="16" fill="#fff">PL/SQL</text></svg>
    ),
    color: "from-red-400 to-red-700",
    level: "Intermediário",
    experience: "1+ ano",
    related: "Oracle, Procedures",
    description: "Linguagem procedural para bancos Oracle.",
    projects: [],
  },
  {
    name: "SQL",
    icon: (
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="16" rx="14" ry="10" fill="#00758F"/><text x="16" y="24" textAnchor="middle" fontSize="18" fill="#fff">SQL</text></svg>
    ),
    color: "from-blue-300 to-blue-600",
    level: "Avançado",
    experience: "3+ anos",
    related: "MySQL, PostgreSQL, Oracle",
    description: "Consultas e manipulação de dados em bancos relacionais.",
    projects: [
      { name: "Online-Store", url: "https://github.com/PedroEmmanuelBuerger/Online-Store" },
      { name: "recipes-app", url: "https://github.com/PedroEmmanuelBuerger/recipes-app" },
    ],
  },
  {
    name: "AWS",
    icon: (
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="16" rx="14" ry="14" fill="#232F3E"/><path d="M8 20l8 4 8-4" stroke="#FF9900" strokeWidth="2"/></svg>
    ),
    color: "from-yellow-500 to-orange-500",
    level: "Básico",
    experience: "<1 ano",
    related: "EC2, S3, Lambda",
    description: "Serviços de nuvem para infraestrutura e deploy.",
    projects: [],
  },
  {
    name: "Linux",
    icon: (
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="16" rx="14" ry="14" fill="#333"/><text x="16" y="24" textAnchor="middle" fontSize="18" fill="#fff">🐧</text></svg>
    ),
    color: "from-gray-700 to-gray-900",
    level: "Intermediário",
    experience: "2+ anos",
    related: "Shell, Servidores",
    description: "Administração de sistemas e servidores.",
    projects: [],
  },
  {
    name: "Power BI",
    icon: (
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#F2C811"/><text x="16" y="24" textAnchor="middle" fontSize="16" fill="#222">BI</text></svg>
    ),
    color: "from-yellow-400 to-yellow-700",
    level: "Básico",
    experience: "<1 ano",
    related: "Dashboards, Relatórios",
    description: "Visualização e análise de dados empresariais.",
    projects: [],
  },
  {
    name: "Docker",
    icon: (
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none"><rect x="2" y="18" width="28" height="8" rx="4" fill="#2496ED"/><rect x="8" y="10" width="16" height="8" rx="4" fill="#2496ED"/></svg>
    ),
    color: "from-blue-400 to-blue-700",
    level: "Básico",
    experience: "<1 ano",
    related: "Containers, DevOps",
    description: "Containers para desenvolvimento e deploy.",
    projects: [
      { name: "deburguer", url: "https://github.com/PedrooSilvaa/deburguer" },
    ],
  },
  {
    name: "Office",
    icon: (
      <svg width="64" height="64" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#EA4335"/><text x="16" y="16" textAnchor="middle" fontSize="12" fill="#fff">Word</text><text x="16" y="24" textAnchor="middle" fontSize="12" fill="#34A853">Excel</text><text x="16" y="32" textAnchor="middle" fontSize="12" fill="#4285F4">PPT</text></svg>
    ),
    color: "from-red-400 to-blue-400",
    level: "Avançado",
    experience: "5+ anos",
    related: "Word, Excel, PowerPoint",
    description: "Ferramentas de produtividade para escritório.",
    projects: [],
  },
];

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Skills", href: "#skills" },
  { name: "Experiência", href: "#experiencia" },
  { name: "Escolaridade", href: "#escolaridade" },
  { name: "Certificados", href: "#certificados" },
  { name: "Idiomas", href: "#idiomas" },
  { name: "Contato", href: "#contato" },
];

const experiences = [
  {
    title: "Desenvolvedor Júnior",
    company: "Unus Solutions",
    period: "abr de 2025 - o momento · 3 meses",
    location: "Blumenau, Santa Catarina, Brasil · Híbrida",
    description: [
      "Desenvolvimento de aplicações web e APIs utilizando JavaScript, TypeScript e Node.js.",
      "Criação e manutenção de landing pages com foco em performance e responsividade.",
    ],
    skills: ["JavaScript", "TypeScript", "Node.js"],
    color: "border-blue-400",
    delay: "animate-delay-0",
  },
  {
    title: "Assistente de Consultoria",
    company: "Unus Solutions",
    period: "mai de 2024 - abr de 2025 · 1 ano",
    location: "Blumenau, Santa Catarina, Brasil · Híbrida",
    description: [
      "Suporte e implementação de soluções HCM e ERP.",
      "Desenvolvimento e manutenção de integrações para otimização de processos.",
    ],
    skills: ["Desenvolvimento de software", "Banco de dados"],
    color: "border-cyan-400",
    delay: "animate-delay-200",
  },
  {
    title: "Designer Gráfico",
    company: "Gira Print",
    period: "out de 2021 - ago de 2022 · 11 meses",
    location: "Blumenau, Santa Catarina, Brasil",
    description: [
      "Criação de materiais gráficos e identidades visuais.",
      "Gestão de mídias sociais e campanhas digitais.",
    ],
    skills: ["CorelDRAW", "Mídias sociais"],
    color: "border-pink-400",
    delay: "animate-delay-400",
  },
  {
    title: "Designer Gráfico",
    company: "Four ink",
    period: "set de 2020 - jun de 2021 · 10 meses",
    location: "Blumenau, Santa Catarina, Brasil",
    description: [
      "Criação de materiais gráficos, banners e layouts para impressão.",
      "Edição de imagens e tratamento fotográfico.",
    ],
    skills: ["CorelDRAW", "Adobe Photoshop"],
    color: "border-green-400",
    delay: "animate-delay-600",
  },
];

type Certificado = {
  titulo: string;
  org: string;
  periodo: string;
  competencias: string;
  descricao: string;
  imagem?: string;
};

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

  // refs para animação das stacks, contato, hero e experiências
  const stackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contactRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroRefs = useRef<(HTMLDivElement | null)[]>([]); // [0]=foto, [1]=texto
  const experiencesRefs = useRef<(HTMLDivElement | null)[]>([]);
  const certificadosRefs = useRef<(HTMLElement | null)[]>([]);
  const idiomasRefs = useRef<(HTMLElement | null)[]>([]);
  const escolaridadeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            entry.target.classList.remove("slide-out");
          } else {
            entry.target.classList.remove("slide-in");
            entry.target.classList.add("slide-out");
          }
        });
      },
      { threshold: 0.6 }
    );
    stackRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    contactRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    heroRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    experiencesRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    certificadosRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    idiomasRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    escolaridadeRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  // Estado para modal de certificado
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCert, setModalCert] = useState<Certificado | null>(null);

  // Fechar modal com ESC ou clique fora
  useEffect(() => {
    if (!modalOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    function handleClick(e: MouseEvent) {
      if ((e.target as HTMLElement).id === "cert-modal-bg") setModalOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [modalOpen]);

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

      {/* Skills - Stacks principais com ícones, descrição e projetos */}
      <section className="w-full max-w-3xl mb-40 fade-in-up pt-12" id="skills">
        <h3 className="text-4xl font-bold text-white mb-16 text-center tracking-wide animate-fadeInUp animate-delay-0">Stacks & Projetos</h3>
        <div className="flex flex-col items-center gap-8">
          {stackData.map((stack, i) => (
            <div
              key={stack.name}
              ref={el => { stackRefs.current[i] = el; }}
              className={`w-full flex flex-row items-center gap-4 glass p-6 rounded-2xl shadow-xl border-2 border-white/20 bg-gradient-to-br ${stack.color} fade-in-up hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 opacity-0 slide-out`}
            >
              <div className="flex-shrink-0 flex flex-col items-center justify-center">
                <div className="mb-1">
                  <span className="block w-14 h-14">{stack.icon}</span>
                </div>
                <span className="text-xs text-blue-100 font-mono mt-1">{stack.experience}</span>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <span className="font-mono font-extrabold text-2xl sm:text-3xl text-white drop-shadow-xl tracking-widest uppercase mb-1">{stack.name}</span>
                <span className="text-sm text-white/90 mb-1 font-sans">{stack.description}</span>
                <span className="text-base text-blue-200 mb-1 font-semibold font-sans">Nível: {stack.level}</span>
                <span className="text-sm text-blue-100 mb-2 font-sans italic">{stack.related}</span>
                {stack.projects && stack.projects.length > 0 && (
                  <div className="flex flex-col gap-1 mt-1">
                    <span className="text-sm text-blue-100 font-semibold">Projetos:</span>
                    {stack.projects.map((proj) => (
                      <a
                        key={proj.url}
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-200 underline hover:text-blue-400 transition-colors text-sm"
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

      {/* Experiência Profissional - cards grandes, espaçados, detalhados, animados */}
      <section className="w-full max-w-3xl mb-40 fade-in-up pt-12" id="experiencia">
        <h3 className="text-4xl font-bold text-white mb-16 text-center tracking-wide animate-fadeInUp animate-delay-0">Experiência Profissional</h3>
        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <div
              key={exp.title + exp.company}
              ref={el => { experiencesRefs.current[i] = el; }}
              className={`w-full glass p-8 rounded-2xl shadow-2xl border-2 ${exp.color} fade-in-up opacity-0 slide-out`}
              style={{ animationDelay: `${i * 180}ms` }}
            >
              <div className="flex flex-col gap-2">
                <span className="font-bold text-2xl text-white drop-shadow-lg">{exp.title}</span>
                <span className="text-lg text-blue-200">{exp.company} · {exp.period}</span>
                <span className="text-base text-blue-100 mb-2">{exp.location}</span>
                <ul className="list-disc list-inside text-white/90 mb-2">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="bg-blue-900/60 text-blue-100 px-3 py-1 rounded-full text-sm font-semibold">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Escolaridade */}
      <section className="w-full max-w-3xl mb-40 fade-in-up pt-12" id="escolaridade">
        <h3 className="text-4xl font-bold text-white mb-16 text-center tracking-wide animate-fadeInUp animate-delay-0">Escolaridade</h3>
        <div className="flex flex-col gap-12">
          {/* Estácio */}
          <div ref={el => { escolaridadeRefs.current[0] = el; }} className="glass p-8 rounded-2xl shadow-2xl border-2 border-blue-400 fade-in-up opacity-0 slide-out flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0 flex flex-col items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Est%C3%A1cio_logo.png" alt="Estácio" className="w-16 h-16 object-contain mb-2" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-2xl text-white drop-shadow-lg">Estácio</span>
              <span className="block text-lg text-blue-200 mb-1">Tecnólogo, Análise e Desenvolvimento de Sistemas</span>
              <span className="block text-base text-blue-100 mb-2">out de 2023 - out de 2026</span>
              <p className="text-white/90 mb-2 text-justify">A Universidade Estácio de Sá (UNESA) é uma universidade privada brasileira fundada em 1970. Curso focado em desenvolvimento de software, computação em nuvem, segurança da informação, hardware, SQL, programação e ciência da computação.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Python", "Java", "SQL", "Programação", "Ciência da computação", "Desenvolvimento de software"].map((skill) => (
                  <span key={skill} className="bg-blue-900/60 text-blue-100 px-3 py-1 rounded-full text-sm font-semibold">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          {/* Trybe */}
          <div ref={el => { escolaridadeRefs.current[1] = el; }} className="glass p-8 rounded-2xl shadow-2xl border-2 border-green-400 fade-in-up opacity-0 slide-out flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0 flex flex-col items-center">
              <img src="https://avatars.githubusercontent.com/u/44980439?s=200&v=4" alt="Trybe" className="w-16 h-16 object-contain mb-2" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-2xl text-white drop-shadow-lg">Trybe</span>
              <span className="block text-lg text-blue-200 mb-1">Desenvolvimento Web</span>
              <span className="block text-base text-blue-100 mb-2">ago de 2022 - set de 2023</span>
              <p className="text-white/90 mb-2 text-justify">A Trybe é uma escola de tecnologia com formação intensiva em desenvolvimento web, front-end, back-end, ciência da computação, metodologias ágeis e habilidades comportamentais.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["CSS", "Python", "Linux", "Git", "Java", "SQL", "Node.js", "React", "TypeScript", "HTML5", "Docker", "Desenvolvimento full stack"].map((skill) => (
                  <span key={skill} className="bg-green-900/60 text-green-100 px-3 py-1 rounded-full text-sm font-semibold">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          {/* CEDUP Hermann Hering */}
          <div ref={el => { escolaridadeRefs.current[2] = el; }} className="glass p-8 rounded-2xl shadow-2xl border-2 border-gray-400 fade-in-up opacity-0 slide-out flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0 flex flex-col items-center">
              <img src="https://www.ceduphh.com.br/wp-content/uploads/2019/10/logo-cedup.png" alt="CEDUP Hermann Hering" className="w-16 h-16 object-contain mb-2" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-2xl text-white drop-shadow-lg">CEDUP Hermann Hering</span>
              <span className="block text-lg text-blue-200 mb-1">Programação de Computadores</span>
              <span className="block text-base text-blue-100 mb-2">jan de 2017 - dez de 2020</span>
              <p className="text-white/90 mb-2 text-justify">Curso técnico profissionalizante com foco em sistemas operacionais, lógica de programação, arquitetura de software e desenvolvimento de aplicações.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Pascal", "SQL", "Programação", "Arquitetura de software"].map((skill) => (
                  <span key={skill} className="bg-gray-900/60 text-gray-100 px-3 py-1 rounded-full text-sm font-semibold">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificados - penúltima seção */}
      <section className="w-full max-w-3xl mb-40 fade-in-up pt-12" id="certificados">
        <h3 className="text-4xl font-bold text-white mb-10 text-center tracking-wide animate-fadeInUp animate-delay-0">Certificados</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              titulo: 'Certificação Técnica - SQL',
              org: 'Senior Sistemas',
              periodo: 'mar de 2025 - jun de 2026',
              competencias: 'SQL, Microsoft SQL Server, MySQL, PL/SQL',
              descricao: 'Certificação técnica em SQL, abrangendo bancos relacionais.',
              imagem: 'https://media.licdn.com/dms/image/v2/D4D2DAQEB0ipiJg5iAg/profile-treasury-document-images_800/B4DZW46r6DHYAk-/1/1742564149713?e=1752105600&v=beta&t=aUUeBZnpnRO82TITt8o7PoSJLGKy9FNINS_xFnqU7Pg'
            },
            {
              titulo: 'Metodologia de Vendas Consultivas de Alta Performance',
              org: 'Mercado Consultoria',
              periodo: 'dez de 2024',
              competencias: 'MVC-AP',
              descricao: 'Curso de vendas consultivas com foco em alta performance.',
              imagem: 'https://media.licdn.com/dms/image/v2/D4D2DAQGGgft6yB1t7Q/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1733944926685?e=1752105600&v=beta&t=BA3nCsTlJA2Dn-GqVxtJT1d8YcxfO1CSgkNaJEzaQP0'
            },
            {
              titulo: 'Módulo - Desenvolvimento em Back End',
              org: 'Trybe',
              periodo: 'ago de 2023',
              competencias: 'Mocha, Banco de dados, Python, SQL, C#',
              descricao: 'Módulo de desenvolvimento backend com múltiplas tecnologias.',
              imagem: 'https://media.discordapp.net/attachments/543280039525875753/1388197743910064376/image.png?ex=68601b65&is=685ec9e5&hm=abe1cc7f1a59939111ee0d045f829759b9f076280a8c999b4c6f6ec05742007c&=&format=webp&quality=lossless'
            },
            {
              titulo: 'Módulo - Front-End',
              org: 'Trybe',
              periodo: 'abr de 2023',
              competencias: 'JavaScript, ReactJS, TypeScript, Redux',
              descricao: 'Módulo de desenvolvimento front-end.',
              imagem: 'https://media.licdn.com/dms/image/v2/D4D22AQFz5nDS9ki2kg/feedshare-shrink_800/feedshare-shrink_800/0/1680621429360?e=1753920000&v=beta&t=taNIhfXZTe54DeZBDtcXX4jmoDSZyXhJpOb8oMPMMMk'
            },
            {
              titulo: 'Módulo de Fundamentos do Desenvolvimento Web',
              org: 'Trybe',
              periodo: 'dez de 2022',
              competencias: 'HTML5, CSS, Git, Linux',
              descricao: 'Fundamentos essenciais para desenvolvimento web.',
              imagem: 'https://media.licdn.com/dms/image/v2/C4D22AQG1dJMy2r7itA/feedshare-shrink_800/feedshare-shrink_800/0/1670522421921?e=1753920000&v=beta&t=GVGWPFNNSnh1pi-V3_xdPS3SRWdTuBzNlcuwb5RrLIc'
            },
            {
              titulo: 'Certificação Técnica - Linguagem LSP',
              org: 'Senior Sistemas',
              periodo: 'jun de 2024 - jun de 2025',
              competencias: 'Banco de dados, LSP',
              descricao: 'Certificação técnica em linguagem LSP.',
              imagem: 'https://media.licdn.com/dms/image/v2/D4D2DAQEUPcPjoZAzTg/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1724085178808?e=1752105600&v=beta&t=bnMJ7yR3pJ4Cv_6Sn7MYgtzlAAigkGq25k5JnYsU41I'
            },
            {
              titulo: 'Certificação Técnica - Importador/Exportador',
              org: 'Senior Sistemas',
              periodo: 'jun de 2024 - jun de 2025',
              competencias: 'Programação, Desenvolvimento de software',
              descricao: 'Certificação técnica em importação/exportação.',
              imagem: 'https://media.licdn.com/dms/image/v2/D4D2DAQFeCfgZzD99Hw/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1724085248826?e=1752105600&v=beta&t=74f3Pvi0LnLbDyr5aZvymsyuA9uizylXxmT4m5-8n2I'
            },
            {
              titulo: 'Certificação técnica - Gerador de relatórios',
              org: 'Senior Sistemas',
              periodo: 'jun de 2024 - jun de 2025',
              competencias: 'Programação, Desenvolvimento de software',
              descricao: 'Certificação técnica em geração de relatórios.',
              imagem: 'https://media.licdn.com/dms/image/v2/D4D2DAQGCgkGekVBahg/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1724085043641?e=1752105600&v=beta&t=O1O7ZmgSu4VFxq1pqPk9o4a5wRVdPjks_rWTwC5NUc4'
            },
          ].map((cert, i) => (
            <div
              key={i}
              ref={el => { certificadosRefs.current[i] = el; }}
              className="glass rounded-2xl shadow-xl border-2 border-white/20 bg-black/30 flex flex-col items-center p-6 opacity-0 slide-out"
            >
              <div className="w-full flex flex-row items-center gap-4 mb-4">
                <Image
                  src={cert.imagem || "/window.svg"}
                  alt={cert.titulo}
                  width={80}
                  height={60}
                  className="rounded shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => { setModalCert(cert); setModalOpen(true); }}
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">{cert.titulo}</span>
                  <span className="text-blue-100 text-base">{cert.org}</span>
                  <span className="text-blue-200 text-sm">{cert.periodo}</span>
                </div>
              </div>
              <span className="text-blue-100 text-base mb-2">{cert.competencias}</span>
              <span className="text-white/90 text-sm mb-2 text-justify">{cert.descricao}</span>
            </div>
          ))}
        </div>
        {/* Modal de imagem expandida com animação fadeInUp (como antes) */}
        {modalOpen && (
          <div id="cert-modal-bg" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fadeInUp" style={{animationDuration: '0.3s'}}>
            <div className="relative max-w-2xl w-full flex flex-col items-center animate-fadeInUp" style={{animationDuration: '0.3s'}}>
              <Image
                src={modalCert?.imagem || "/window.svg"}
                alt={modalCert?.titulo ?? ''}
                width={800}
                height={600}
                className="rounded-xl shadow-2xl border-4 border-white/20"
              />
              <span className="mt-4 text-white text-lg font-bold text-center">{modalCert?.titulo}</span>
              <span className="text-blue-100 text-base text-center">{modalCert?.org} - {modalCert?.periodo}</span>
              <span className="text-blue-200 text-sm text-center mb-2">{modalCert?.competencias}</span>
              <span className="text-white/90 text-sm text-center">{modalCert?.descricao}</span>
              <button onClick={() => setModalOpen(false)} className="absolute top-2 right-2 text-white text-2xl font-bold bg-black/40 rounded-full px-3 py-1 hover:bg-black/70 transition">×</button>
            </div>
          </div>
        )}
      </section>

      {/* Idiomas - antes do rodapé */}
      <section ref={el => { idiomasRefs.current[0] = el; }} className="w-full max-w-2xl mb-32 fade-in-up pt-12 opacity-0 slide-out" id="idiomas">
        <h3 className="text-4xl font-bold text-white mb-10 text-center tracking-wide animate-fadeInUp animate-delay-0">Idiomas</h3>
        <div className="flex flex-col gap-6 bg-black/30 glass p-8 rounded-2xl shadow-2xl border-2 border-white/20">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white">English</span>
            <span className="text-blue-100 text-base">Nível avançado</span>
          </div>
          <hr className="my-2 border-white/10" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white">Português</span>
            <span className="text-blue-100 text-base">Fluente ou nativo</span>
          </div>
        </div>
      </section>

      {/* Rodapé estilizado: apenas ícones, cards coloridos, alinhados lado a lado, animação */}
      <section className="w-full max-w-2xl mb-20 fade-in-up pt-12 flex flex-wrap justify-center gap-8" id="contato">
        <div ref={el => { contactRefs.current[0] = el; }} className="border-2 border-green-500 shadow-2xl rounded-2xl px-5 py-5 flex flex-col items-center justify-center bg-green-600/80 min-w-[80px] opacity-0 slide-out transition-all hover:scale-110">
          <a href="mailto:pedroemmanuelbuerger@gmail.com" className="flex flex-col items-center justify-center">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24" className="text-white mb-1"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z"/></svg>
          </a>
        </div>
        <div ref={el => { contactRefs.current[1] = el; }} className="border-2 border-gray-400 shadow-2xl rounded-2xl px-5 py-5 flex flex-col items-center justify-center bg-gray-700/80 min-w-[80px] opacity-0 slide-out transition-all hover:scale-110">
          <a href="https://github.com/PedroEmmanuelBuerger" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24" className="text-white mb-1"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </a>
        </div>
        <div ref={el => { contactRefs.current[2] = el; }} className="border-2 border-blue-600 shadow-2xl rounded-2xl px-5 py-5 flex flex-col items-center justify-center bg-blue-700/80 min-w-[80px] opacity-0 slide-out transition-all hover:scale-110">
          <a href="https://www.linkedin.com/in/pedroemmanuelbuerger/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24" className="text-white mb-1"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
}

// CSS extra para animações
// Adicione ao seu globals.css:
// .slide-in { opacity: 1 !important; transform: translateX(0) scale(1) !important; transition: all 0.7s cubic-bezier(.23,1,.32,1); }
// .slide-out { opacity: 0 !important; transform: translateX(-80px) scale(0.98) !important; transition: all 0.7s cubic-bezier(.23,1,.32,1); }
