import React from "react";

interface Stack {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: string;
  experience: string;
  related: string;
  description: string;
  projects?: { name: string; url: string }[];
}

interface SkillsSectionProps {
  stackData: Stack[];
  stackRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ stackData, stackRefs }) => (
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
);

export default SkillsSection; 