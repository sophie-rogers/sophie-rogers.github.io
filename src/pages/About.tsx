import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

// Logos for technologies
const PythonLogo = require("../assets/logos/PythonLogo.png");
const LaTeXLogo = require("../assets/logos/LaTeXLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NLTKLogo = require("../assets/logos/NLTKLogo.png");
const HuggingfaceLogo = require("../assets/logos/HuggingfaceLogo.png");
const SPSSLogo = require("../assets/logos/SPSSLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SQLLogo.png");
const MatplotlibLogo = require("../assets/logos/MatplotlibLogo.png");
const PHPLogo = require("../assets/logos/PHPLogo.png");
const JavaLogo = require("../assets/logos/JavaLogo.png");

interface AboutProps {
  id?: string; // Optional id for section linking
}

// Array of skills and logos
const skills = [
  { name: "Python", logo: PythonLogo },
  { name: "NLTK", logo: NLTKLogo },
  { name: "Matplotlib", logo: MatplotlibLogo },
  { name: "Huggingface", logo: HuggingfaceLogo },
  { name: "LaTeX", logo: LaTeXLogo },
  { name: "SPSS", logo: SPSSLogo },
  { name: "JavaScript", logo: JsLogo },
  { name: "Java", logo: JavaLogo },
  { name: "PHP", logo: PHPLogo },
  { name: "TypeScript", logo: TypescriptLogo },
  { name: "Tailwind", logo: TailwindLogo },
  { name: "SQL", logo: SqlLogo },
];

// Modules taught at Kent University
const modulesTaughtKent = [
  { main: "Programming 1 - Python", detail: "1st Year UG" },
  { main: "eHealth", detail: "3rd Year UG" },
  { main: "Natural Language Processing", detail: "MSc" },
  { main: "Web-based Information Systems Development", detail: "MSc" },
];

// Modules taught at University of London
const modulesTaughtLondon = [
  { main: "Final Year Project", detail: "3rd Year UG" },
  { main: "Web Development", detail: "1st Year UG" },
];

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="mx-8 mt-16 lg:mx-24 pb-24">
      <div className="w-full">
        {/* Section heading with icon */}
        <div className="table mb-6">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <span className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap font-mono">
            About Me
          </span>
          {/* Horizontal line extending across the section */}
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>

        {/* Introduction text */}
        <div className="text-[#a2aabc] text-lg mb-12 font-mono">
          <p>
            I am currently a PhD student in the School of Computing at the University of Kent, Canterbury.
          </p>
          <p className="mt-4">
            My interdisciplinary research focuses on the potential for use of large language models to assist in decision-making in kidney transplant. Whilst the project is primarily based in Computer Science, it uses mixed methods drawing from health research and social sciences.
          </p>
          <p className="mt-4">
            I am also an Assistant Lecturer within the School of Computing at the University of Kent, and teach on the remote computing courses at the University of London (Goldsmiths).
          </p>
        </div>

        {/* Two-column layout: Technologies and Modules */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column: Technologies */}
          <div className="md:w-1/2">
            <p className="mb-4 font-mono" style={{ color: "#F2ABC3" }}>
              Technologies I work with:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                  <span className="text-[#a2aabc] font-mono">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Modules taught */}
          <div className="md:w-1/2">
            <p className="mb-2 font-mono text-right" style={{ color: "#F2ABC3" }}>
              Modules I currently teach on:
            </p>

            {/* Kent modules */}
            <p className="mb-1 font-mono text-right" style={{ color: "#F2ABC3" }}>
              Kent:
            </p>
            <ul className="text-[#a2aabc] font-mono text-sm text-right list-none mb-4">
              {modulesTaughtKent.map((module, index) => (
                <li key={index} className="mb-1">
                  • {module.main}{" "}
                  <span className="text-yellow_vs">({module.detail})</span>
                </li>
              ))}
            </ul>

            {/* London modules */}
            <p className="mb-1 font-mono text-right" style={{ color: "#F2ABC3" }}>
              London:
            </p>
            <ul className="text-[#a2aabc] font-mono text-sm text-right list-none">
              {modulesTaughtLondon.map((module, index) => (
                <li key={index} className="mb-1">
                  • {module.main}{" "}
                  <span className="text-yellow_vs">({module.detail})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;