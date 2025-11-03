import React from "react";
import {
  AcademicCapIcon,
  UserGroupIcon,
  ScaleIcon,
  LightBulbIcon,
} from "@heroicons/react/solid";

const researchThemes = [
  {
    icon: <AcademicCapIcon className="h-10 w-10 text-yellow-400 mb-3" />,
    title: "AI in Decision-Making",
    tagline: "Exploring how machine intelligence informs clinical judgement",
    description:
      "My research examines the integration of large language models into healthcare decision-support systems, with a focus on how these tools interact with human expertise in kidney transplant evaluation.",
  },
  {
    icon: <UserGroupIcon className="h-10 w-10 text-green-400 mb-3" />,
    title: "Human–Machine Interaction",
    tagline: "Understanding collaboration and trust between humans and AI",
    description:
      "Using mixed-methods approaches, I study how clinicians engage with algorithmic recommendations, aiming to improve interpretability, usability, and ethical alignment.",
  },
  {
    icon: <ScaleIcon className="h-10 w-10 text-blue-400 mb-3" />,
    title: "Ethics and Explainability",
    tagline: "Building responsible and transparent AI systems",
    description:
      "I investigate the ethical, social, and epistemic implications of deploying LLMs in clinical decision contexts, drawing on frameworks from STS and bioethics.",
  },
  {
    icon: <LightBulbIcon className="h-10 w-10 text-pink-400 mb-3" />,
    title: "Interdisciplinary Methods",
    tagline: "Combining computational and qualitative research",
    description:
      "My work bridges computer science and social science, incorporating interviews, prototyping, and model evaluation to understand LLM behaviour in practice.",
  },
];

const ResearchInterests = () => {
  return (
    <div
      id="Research"
      className="flex mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify font-mono"
    >
      <div>
        {/* Section heading */}
        <div className="table">
          <AcademicCapIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Research Interests
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>

        {/* Intro paragraph */}
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            My research explores how large language models can support ethically
            responsible decision-making in kidney transplant. I combine
            technical experimentation with qualitative inquiry to examine how AI
            systems shape, and are shaped by, human judgement.
          </code>

          {/* Research Themes */}
          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            {researchThemes.map((theme, index) => (
              <div
                key={index}
                className="bg-[#1a1f2b] p-6 rounded-2xl shadow-md border border-[#2a2f3d] hover:-translate-y-1 transition-transform duration-200 text-center"
              >
                {/* Icon above title */}
                <div className="flex flex-col items-center justify-center mb-3">
                  {theme.icon}
                  <h3 className="text-2xl text-[#e6f1ff] font-semibold">
                    {theme.title}
                  </h3>
                </div>

                {/* Monospaced tagline + description */}
                <p className="text-lightblue_vs italic text-sm mb-2">
                  // {theme.tagline}
                </p>
                <p className="text-[#a2aabc] text-base">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchInterests;