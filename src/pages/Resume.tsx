import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
<div
  id="Resume"
  className="mt-16 mb-4 mx-8 lg:mx-24"
>
      <div>
        {/* Section heading */}
        
        <div className="table mb-6">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            CV
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>

      <div className="text-[#a2aabc] text-lg mt-5">
        {/* Education */}
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">University of Kent</code>
            <br /><br />
            <code className="italic text-sm text-lightblue_vs">
              MSc Computer Science: Distinction
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Sept 2021 - Sept 2022</code>
            <br /><br />
            <code className="italic text-sm text-lightblue_vs">
              BSc Multimedia Technology and Design: Distinction
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Sept 2017 - May 2021</code>
          </div>
        </div>

        {/* Work */}
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            {/* Employer 1 */}
            <code className="text-blue_vs">University of Kent</code>
            <br /><br />
            <code className="italic text-sm text-lightblue_vs">
              Assistant Lecturer, School of Computing
            </code>
            <br />
            <code className="text-xs text-brown_vs">• January 2024 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Delivering small group classes for undergraduate and postgraduate taught programmes within the School of Computing.
              <br />• Gave a new lecture for third-year students on the ethics of AI in Healthcare (October 2024).
              <br />• Marking assessments on taught modules, including coding assignments, in-class tests, and essays.
            </code>
            <br /><br />
            <code className="italic text-sm text-lightblue_vs">
              Senior IT Support Assistant, IT Helpdesk
            </code>
            <br />
            <code className="text-xs text-brown_vs">• September 2021 - September 2024</code>
            <br />
            <code className="text-sm">
              <br />• Ensured that over 20,000 students and staff at the University of Kent could access and use IT facilities.
              <br />• Delivered solutions to a range of technical issues by liaising with customers and colleagues, using initiative and specialist knowledge.
              <br />• Troubleshot personal device issues, campus internet connectivity, and library IT systems.
              <br />• Supported software installations and repaired campus printers.
            </code>

            {/* Employer 2 */}
            <br /><br /><br />
            <code className="text-blue_vs">University of London</code>
            <br /><br />
            <code className="italic text-sm text-lightblue_vs">
              Online Tutor, Computer Science
            </code>
            <br />
            <code className="text-xs text-brown_vs">• April 2025 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Providing remote support to online learners on the Computer Science undergraduate programmes.
              <br />• Developing and presenting online 30 minute interactive lectures to supplement recorded content and readings.
              <br />• Supervising undergraduate Final Year Projects in a range of domains.
              <br />• Marking assessments and providing feedback, as well as second marking as part of a module team.
              <br /><br />
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;