import React from "react";
import { ChatAlt2Icon, CodeIcon, RefreshIcon } from "@heroicons/react/solid";

const phdWorkThemes = [
  {
    icon: <ChatAlt2Icon className="h-10 w-10 mb-3" style={{ color: '#EC678D' }} />,
    title: "Phase 1: HCI and Scoping Interviews",
    tagline: "Interviews with Clinicians and Technical Experts",
    description:
      "I use NLP techniques to analyse interview transcripts and explore LLM capabilities in medical decision-making.",
  },
  {
    icon: <CodeIcon className="h-10 w-10 mb-3" style={{ color: '#F2ABC3' }} />,
    title: "Phase 2: Experimentation with LLMs",
    tagline: "Experimentation and evaluation of existing LLMs in a medical context.",
    description:
      "Evaluating various LLMs on their ability to respond to decision-making scenarios in kidney transplant context.",
  },
  {
    icon: <RefreshIcon className="h-10 w-10 mb-3" style={{ color: '#9A465F' }} />,
    title: "Phase 3: Iterative Development",
    tagline: "Improving and enhancing LLMs to support kidney transplant decisions.",
    description:
      "Working with clinicians to gain feedback on LLM performance and enhance this using techniques such as RAG, fine-tuning, and RLHF.",
  },
];

const PhDWork = () => {
  return (
    <section id="PhDWork" className="mx-8 mt-16 lg:mx-24 text-justify min-h-[0]">
      <div className="w-full">
        {/* Section heading */}
        <div className="table mb-6">
          <ChatAlt2Icon className="h-5 w-5 mr-4 text-yellow_vs" />
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            PhD Work
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>

        {/* Intro paragraph */}
        <div className="text-[#a2aabc] text-lg mb-12">
          <code>
            My PhD work explores the intersection of NLP, AI-assisted decision-making,
            and human–machine interaction within healthcare. I combine technical
            experimentation with qualitative research to study how AI systems influence
            clinician judgement.
          </code>
        </div>

        {/* PhD Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phdWorkThemes.map((theme, index) => (
            <div
              key={index}
              className="bg-[#181215] p-6 rounded-2xl shadow-md border border-[#8F4B5E] hover:-translate-y-1 transition-transform duration-200 text-center font-mono"
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
      </div>
    </section>
  );
};

export default PhDWork;