import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Template1 = ({ data }) => {
  const resumeRef = useRef();

  // PDF Print Function
  const handleDownloadPDF = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: `${data.personalInfo?.name || "Resume"}`,
  });

  return (
    <div className="font-sans bg-white text-gray-800 p-8">
      {/* PDF Download Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download PDF
        </button>
      </div>

      {/* Resume Content */}
      <div ref={resumeRef} className="bg-white p-6 rounded-lg shadow">
        {/* Header */}
        <header className="text-center py-10 bg-gray-100 rounded-lg">
          <img
            src={data.personalInfo?.photo}
            alt={data.personalInfo?.name || "Profile Photo"}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
          />
          <h1 className="text-4xl font-bold">{data.personalInfo?.name}</h1>
          <p className="text-xl text-blue-600">
            {data.personalInfo?.designation}
          </p>
        </header>

        {/* About */}
        <section className="mt-8 space-y-2">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2">
            About Me
          </h2>
          <p>{data.about || "No about info provided."}</p>
        </section>

        {/* Skills */}
        <section className="mt-8 space-y-2">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2">
            Skills
          </h2>
          {data.skills?.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {data.skills.map((s, i) => (
                <div
                  key={i}
                  className="p-2 bg-blue-100 text-blue-800 rounded"
                >
                  {s.name}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No skills added yet.</p>
          )}
        </section>

        {/* Experience */}
        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2">
            Experience
          </h2>
          {data.experience?.length > 0 ? (
            data.experience.map((e, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-xl font-semibold">
                  {e.title} at {e.company}
                </h3>
                <p className="text-sm text-gray-500">{e.duration}</p>
                <p className="mt-1">{e.responsibilities}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No experience added yet.</p>
          )}
        </section>

        {/* Education */}
        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2">
            Education
          </h2>
          {data.education?.length > 0 ? (
            data.education.map((edu, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-sm text-gray-500">
                  {edu.institution} ({edu.year})
                </p>
                <p className="mt-1">{edu.details}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No education info provided.</p>
          )}
        </section>

        {/* Projects */}
        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2">
            Projects
          </h2>
          {data.projects?.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {data.projects.map((p, i) => (
                <div key={i} className="border p-4 rounded-lg">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-600 my-2">Tech: {p.stack}</p>
                  <p className="mb-4">{p.description}</p>
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Live
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No projects added yet.</p>
          )}
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 pt-4 border-t space-y-2">
          <p>Contact: {data.personalInfo?.email || "No email provided"}</p>
          {data.socialLinks?.length > 0 && (
            <div className="flex justify-center gap-4 mt-2">
              {data.socialLinks.map((l, i) => (
                <a
                  href={l.url}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {l.name}
                </a>
              ))}
            </div>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Template1;
