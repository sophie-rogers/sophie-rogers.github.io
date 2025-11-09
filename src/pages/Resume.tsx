import React, { HTMLAttributes } from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

interface ResumeProps extends HTMLAttributes<HTMLDivElement> {}

// Resume component displaying education, work experience, and extracurricular activities
const Resume: React.FC<ResumeProps> = ({ ...props }) => {
  return (
    <div
      id="Resume"
      className="mx-8 mt-16 lg:mx-24 pb-24"
      {...props}
    >
      <div>
        {/* Section heading with icon and underline */}
        <div className="table mb-6">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            CV
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>

      <div className="text-[#a2aabc] text-lg mt-5">
        {/* Education Section */}
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            {/* University of Kent MSc */}
            <code className="text-blue_vs">University of Kent</code>
            <br /><br />
            <code className="italic text-sm text-lightblue_vs">
              MSc Computer Science: Distinction
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Sept 2021 - Sept 2022</code>
            <code className="text-sm">
              <br />• Final Project involved developing a web booking system, creating the front and back end with PHP, SQL and JavaScript.
            </code>
            <br /><br />
            {/* University of Kent BSc */}
            <code className="italic text-sm text-lightblue_vs">
              BSc Multimedia Technology and Design: Distinction
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Sept 2017 - May 2021</code>
            <code className="text-sm">
              <br />• Final Project looking at eHealth, developed an interactive web application for mental health support. Achieved a 1st and won the Speechlink prize for Best Final Project with Therapeutic Application.
            </code>
          </div>
        </div>

        {/* Work Section */}
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            {/* University of Kent – Assistant Lecturer */}
            <code className="text-blue_vs">University of Kent</code>
            <br /><br />
            <code className="italic text-sm text-lightblue_vs">
              Assistant Lecturer, School of Computing
            </code>
            <br />
            <code className="text-xs text-brown_vs">• January 2024 - Present</code>
            <code className="text-sm">
              <br />• Delivering small group classes for undergraduate and postgraduate taught programmes.
              <br />• Gave a new lecture for third-year students on the ethics of AI in Healthcare (October 2024).
              <br />• Marking assessments on taught modules, including coding assignments, in-class tests, and essays.
            </code>
            <br /><br />
            {/* University of Kent – Senior IT Support Assistant */}
            <code className="italic text-sm text-lightblue_vs">
              Senior IT Support Assistant, IT Helpdesk
            </code>
            <br />
            <code className="text-xs text-brown_vs">• September 2021 - September 2024</code>
            <code className="text-sm">
              <br />• Ensured access and support for over 20,000 students and staff.
              <br />• Delivered solutions to a range of technical issues, liaising with customers and colleagues.
              <br />• Troubleshot devices, campus internet connectivity, and library IT systems.
              <br />• Supported software installations and repaired campus printers.
            </code>

            {/* University of London – Online Tutor */}
            <br /><br /><br />
            <code className="text-blue_vs">University of London</code>
            <br /><br />
            <code className="italic text-sm text-lightblue_vs">
              Online Tutor, Computer Science
            </code>
            <br />
            <code className="text-xs text-brown_vs">• April 2025 - Present</code>
            <code className="text-sm">
              <br />• Providing remote support to online learners on undergraduate programmes.
              <br />• Developing and presenting 30-minute interactive online lectures.
              <br />• Supervising undergraduate Final Year Projects across domains.
              <br />• Marking assessments and providing feedback, including second marking.
              <br /><br />
            </code>
          </div>
        </div>

        {/* Extra Curricular Section */}
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Extra Curricular</code>
          </div>
          <div className="w-3/4">
            {/* EDI Rep */}
            <code className="italic text-sm text-lightblue_vs">
              EDI Rep, School of Computing
            </code>
            <br />
            <code className="text-xs text-brown_vs">• 2025 - Present</code>
            <code className="text-sm">
              <br />• Representing research postgraduate students and attending meetings on equality, diversity, and inclusivity matters.
            </code>
            <br /><br />
            {/* PGR Rep */}
            <code className="italic text-sm text-lightblue_vs">
              PGR Rep, School of Computing
            </code>
            <br />
            <code className="text-xs text-brown_vs">• 2024 - Present</code>
            <code className="text-sm">
              <br />• Representing research postgraduate students within the School of Computing.
            </code>
            <br /><br />
            {/* PGR Conference Organising Committee */}
            <code className="italic text-sm text-lightblue_vs">
              PGR Conference Organising Committee
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Summer 2024</code>
            <code className="text-sm">
              <br />• Assisted with organising the postgraduate research conference, coordinating posters, talks, and panels.
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;