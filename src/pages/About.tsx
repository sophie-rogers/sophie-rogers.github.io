import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const LaTeXLogo = require("../assets/logos/LaTeXLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const SPSSLogo = require("../assets/logos/SPSSLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const MatplotlibLogo = require("../assets/logos/MatplotlibLogo.png");
const PHPLogo = require("../assets/logos/PHPLogo.png");
const JavaLogo = require("../assets/logos/JavaLogo.png");


const skills = [
  { name: "Python", logo: PythonLogo},
  { name: "NLTK", logo: PythonLogo},
  { name: "Matplotlib", logo: MatplotlibLogo},
  { name: "Huggingface", logo: PythonLogo},
  { name: "LaTeX", logo: LaTeXLogo},
  { name: "SPSS", logo: SPSSLogo},
  { name: "JavaScript", logo: JsLogo },
  { name: "Java", logo: JavaLogo },
  { name: "PHP", logo: PHPLogo },
  { name: "TypeScript", logo: TypescriptLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "SQL", logo: SqlLogo }
];

const About = () => {
  return (
    <div
      id="About"
      className="flex mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            I am currently a PhD student in the School of Computing at the University of Kent, Canterbury.
          </code>
          <br /><br />
          <code>
            My interdisciplinary research focuses on the potential for use of large language models to assist in decision-making in kidney transplant. Whilst the project is primarily based in Computer Science, it uses mixed methods drawing from health research and social sciences.
          </code>
          <br /><br />
          <code>Technologies I work with:</code>
          <List list={skills} />
        </div>
      </div>
    </div>
  );
};

export default About;