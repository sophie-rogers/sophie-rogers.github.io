import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

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

const modulesTaught = [
  { main: "Programming 1 - Python", detail: "1st Year UG - Kent" },
  { main: "eHealth", detail: "3rd Year UG - Kent" },
  { main: "Natural Language Processing", detail: "MSc - Kent" },
  { main: "Web Systems Development", detail: "MSc - Kent" },
  { main: "Final Year Project", detail: "University of London" },
  { main: "Intro to Web Development", detail: "University of London" },
];

const About = () => {
  return (
    <section id="About" className="mx-8 mt-16 lg:mx-24">
      <div className="w-full">
        {/* Section heading */}
        
        <div className="table mb-6">
        
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <span className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap font-mono">
           About Me
          </span>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>

        {/* Intro */}
        <div className="text-[#a2aabc] text-lg mb-12 font-mono">
          <p>I am currently a PhD student in the School of Computing at the University of Kent, Canterbury.</p>
          <p className="mt-4">
            My interdisciplinary research focuses on the potential for use of large language models to assist in decision-making in kidney transplant. Whilst the project is primarily based in Computer Science, it uses mixed methods drawing from health research and social sciences.
          </p>
          <p className="mt-4">
            I am also an Assistant Lecturer within the School of Computing at the University of Kent, and teach on the remote computing courses at the University of London (Goldsmiths).
          </p>
        </div>

        {/* Technologies + Modules Columns */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Technologies */}
          <div className="md:w-1/2">
            <p className="mb-4 font-mono" style={{ color: '#F2ABC3' }}>Technologies I work with:</p>
            <List list={skills} />
          </div>

          {/* Right Column - Modules */}
          <div className="md:w-1/2">
            <p className="mb-4 font-mono text-right" style={{ color: '#F2ABC3' }}>Modules I currently teach on:</p>
            <ul className="text-[#a2aabc] font-mono text-sm text-right list-none">
              {modulesTaught.map((module, index) => (
                <li key={index} className="mb-2">
                  <span className="inline-block">
                    • {module.main} <span className="text-yellow_vs">({module.detail})</span>
                  </span>
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