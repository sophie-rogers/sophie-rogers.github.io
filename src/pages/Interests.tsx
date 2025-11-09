import React from "react";
import {
  AcademicCapIcon,
  UserGroupIcon,
  ScaleIcon,
  LightBulbIcon,
} from "@heroicons/react/solid";

const researchThemes = [
  {
    icon: <AcademicCapIcon className="h-10 w-10 mb-3" style={{ color: '#EC678D' }} />,
    title: "Natural Language Processing",
    tagline: "Exploring how machine intelligence can impact human judgement",
    description:
      "My work fits within the broader interest in NLP. As well experimenting with LLMs in medical decision-making, I also use NLP for textual analysis of interviews with clinicians.",
  },
  {
    icon: <LightBulbIcon className="h-10 w-10 mb-3" style={{ color: '#F2ABC3' }} />,
    title: "Applied Computer Science in Healthcare",
    tagline: "Combining computational research with real healthcare applications.",
    description:
      "My PhD research links to my wider interest in eHealth, ranging from clinical decision support systems to diagnostics and imaging.",
  },
  {
    icon: <UserGroupIcon className="h-10 w-10 mb-3" style={{ color: '#EC678D' }} />,
    title: "Human–Machine Interaction",
    tagline: "Understanding collaboration and trust between humans and AI",
    description:
      "Using a mixed-method approach, I study how clinicians perceive the introduction of algorithmic recommendation tools, aiming to improve trust and adoption of AI in a healthcare context.",
  },
  {
    icon: <LightBulbIcon className="h-10 w-10 mb-3" style={{ color: '#9A465F' }} />,
    title: "Multi-disciplinary Research",
    tagline: "Combining computational and qualitative research",
    description:
      "My work bridges computer science and social science, incorporating interviews, surveys, prototyping, and model evaluation to understand LLM behaviour in practice.",
  },
  {
    icon: <ScaleIcon className="h-10 w-10 mb-3" style={{ color: '#F2ABC3' }} />,
    title: "Ethics and Explainability",
    tagline: "Ensuring transparency and ethical compliance",
    description:
      "I investigate the ethical and social implications of deploying LLMs within healthcare, drawing on frameworks from applied health research and social sciences.",
  },
  {
    icon: <AcademicCapIcon className="h-10 w-10 mb-3" style={{ color: '#EC678D' }} />,
    title: "AI-assisted Decision-Making",
    tagline: "Exploring how machine intelligence can impact human judgement",
    description:
      "My research explores how LLMs can be used to assist human decision-making in the context of kidney transplant in the NHS.",
  },
];

const ResearchInterests = () => {
  return (
    <div
      id="Research"
      className="flex mx-8 mt-16 lg:mx-24 items-center justify-center text-justify font-mono"
    >
      <div className="w-full">
        {/* Section heading */}
        <div className="table mb-6">
          <AcademicCapIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Research Interests
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>

        {/* Intro paragraph */}
        <div className="text-[#a2aabc] text-lg mb-12">
          <code>
            My research explores how large language models can support ethically
            responsible decision-making in kidney transplant. I combine
            technical experimentation with qualitative inquiry to examine how AI
            systems shape, and are shaped by, human judgement.
          </code>
        </div>

        {/* Research Themes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchThemes.map((theme, index) => (
            <div
              key={index}
              className="bg-[#181215] p-6 rounded-2xl shadow-md border border-[#8F4B5E] hover:-translate-y-1 transition-transform duration-200 text-center"
            >
              <div className="flex flex-col items-center justify-center mb-3">
                {theme.icon}
                <h3 className="text-2xl text-[#e6f1ff] font-semibold">
                  {theme.title}
                </h3>
              </div>

              <p className="text-lightblue_vs italic text-sm mb-2">
                // {theme.tagline}
              </p>
              <p className="text-[#a2aabc] text-base">{theme.description}</p>
            </div>
          ))}
        </div>
        <br /><br /><br /><br />
      </div>
    </div>
  );
};

export default ResearchInterests;