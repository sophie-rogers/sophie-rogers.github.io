import React, { HTMLAttributes } from "react";
import { AcademicCapIcon, UserGroupIcon, ScaleIcon, LightBulbIcon } from "@heroicons/react/solid";

interface ResearchInterestsProps extends HTMLAttributes<HTMLElement> {
  // Allows passing standard HTML attributes like id, className, style, etc.
}

// Array of research themes, each with icon, title, tagline, and description
const researchThemes = [
  {
    icon: <AcademicCapIcon className="h-10 w-10 mb-3" style={{ color: "#EC678D" }} />,
    title: "Natural Language Processing",
    tagline: "Exploring how machine intelligence can impact human judgement",
    description:
      "My work fits within the broader interest in NLP. As well as experimenting with LLMs in medical decision-making, I also use NLP for textual analysis of interviews with clinicians.",
  },
  {
    icon: <LightBulbIcon className="h-10 w-10 mb-3" style={{ color: "#F2ABC3" }} />,
    title: "Applied Computer Science in Healthcare",
    tagline: "Combining computational research with real healthcare applications.",
    description:
      "My PhD research links to my wider interest in eHealth, ranging from clinical decision support systems to diagnostics and imaging.",
  },
  {
    icon: <UserGroupIcon className="h-10 w-10 mb-3" style={{ color: "#EC678D" }} />,
    title: "Human–Machine Interaction",
    tagline: "Understanding collaboration and trust between humans and AI",
    description:
      "Using a mixed-method approach, I study how clinicians perceive algorithmic recommendation tools, aiming to improve trust and adoption of AI in healthcare.",
  },
  {
    icon: <LightBulbIcon className="h-10 w-10 mb-3" style={{ color: "#9A465F" }} />,
    title: "Multi-disciplinary Research",
    tagline: "Combining computational and qualitative research",
    description:
      "My work bridges computer science and social science, incorporating interviews, surveys, prototyping, and model evaluation to understand LLM behaviour in practice.",
  },
  {
    icon: <ScaleIcon className="h-10 w-10 mb-3" style={{ color: "#F2ABC3" }} />,
    title: "Ethics and Explainability",
    tagline: "Ensuring transparency and ethical compliance",
    description:
      "I investigate the ethical and social implications of deploying LLMs within healthcare, drawing on frameworks from applied health research and social sciences.",
  },
  {
    icon: <AcademicCapIcon className="h-10 w-10 mb-3" style={{ color: "#EC678D" }} />,
    title: "AI-assisted Decision-Making",
    tagline: "Exploring how machine intelligence can impact human judgement",
    description:
      "My research explores how LLMs can assist human decision-making in the context of kidney transplant in the NHS.",
  },
];

const ResearchInterests: React.FC<ResearchInterestsProps> = ({ id, ...rest }) => {
  return (
    <section id={id} {...rest} className="mx-8 mt-16 lg:mx-24 pb-24 font-mono">
      <div className="w-full">
        {/* Section heading with icon, title, and underline */}
        <div className="table mb-6">
          <AcademicCapIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <span className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Research Interests
          </span>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>

        {/* Introductory paragraph explaining overall research focus */}
        <div className="text-[#a2aabc] text-lg mb-12">
          <span>
            My research explores how large language models can support ethically
            responsible decision-making in kidney transplant. I combine
            technical experimentation with qualitative inquiry to examine how AI
            systems shape, and are shaped by, human judgement.
          </span>
        </div>

        {/* Grid displaying research themes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchThemes.map((theme, index) => (
            <div
              key={index}
              className="bg-[#181215] p-6 rounded-2xl shadow-md border border-[#8F4B5E] hover:-translate-y-1 transition-transform duration-200 text-center"
            >
              {/* Icon and title */}
              <div className="flex flex-col items-center justify-center mb-3">
                {theme.icon}
                <h3 className="text-2xl text-[#e6f1ff] font-semibold">{theme.title}</h3>
              </div>

              {/* Tagline displayed in italics */}
              <p className="text-lightblue_vs italic text-sm mb-2">// {theme.tagline}</p>

              {/* Description paragraph */}
              <p className="text-[#a2aabc] text-base">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;