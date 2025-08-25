import React from "react";

const Template2 = ({ data }) => (
    /* Dark Techy Theme */
    <div className="font-sans bg-gray-900 text-white p-8">
        {/* Header Section */}
        <header className="flex items-center space-x-8 mb-12">
            <img
                src={data.personalInfo.photo}
                alt={data.personalInfo.name}
                className="w-40 h-40 rounded-full border-4 border-teal-400"
            />
            <div>
                <h1 className="text-5xl font-extrabold">{data.personalInfo.name}</h1>
                <p className="text-2xl text-teal-400">{data.personalInfo.designation}</p>
            </div>
        </header>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-8">
            {/* Left (About + Experience + Projects) */}
            <div className="md:col-span-2">
                {/* About */}
                <section>
                    <h2 className="text-3xl font-bold text-teal-400 mb-4">ABOUT ME</h2>
                    <p className="text-gray-300">{data.about}</p>
                </section>

                {/* Experience */}
                <section className="mt-8">
                    <h2 className="text-3xl font-bold text-teal-400 mb-4">EXPERIENCE</h2>
                    {data.experience.map((e, idx) => (
                        <div key={idx} className="mb-6">
                            <h3 className="text-xl font-semibold">{e.title}</h3>
                            <p className="text-teal-500">
                                {e.company} ({e.duration})
                            </p>
                            <p className="text-gray-400 mt-1">{e.responsibilities}</p>
                        </div>
                    ))}
                </section>

                {/* Projects */}
                <section className="mt-8">
                    <h2 className="text-3xl font-bold text-teal-400 mb-4">PROJECTS</h2>
                    {data.projects.map((p, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800 p-4 rounded-lg mb-4 shadow-lg hover:shadow-teal-500/30 transition"
                        >
                            <h3 className="text-xl font-semibold">{p.name}</h3>
                            <p className="text-sm text-teal-400 my-1">{p.stack}</p>
                            <p className="text-gray-300 mb-2">{p.description}</p>
                            <a
                                href={p.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-white hover:text-teal-300"
                            >
                                Live Link →
                            </a>
                        </div>
                    ))}
                </section>
            </div>

            {/* Right (Contact + Skills) */}
            <div>
                {/* Contact */}
                <section>
                    <h2 className="text-3xl font-bold text-teal-400 mb-4">CONTACT</h2>
                    <div className="space-y-2">
                        <p>{data.personalInfo.email}</p>
                        <p>{data.personalInfo.phone}</p>
                        {data.socialLinks.map((l, idx) => (
                            <a
                                href={l.url}
                                key={idx}
                                className="block hover:text-teal-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {l.name}
                            </a>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section className="mt-8">
                    <h2 className="text-3xl font-bold text-teal-400 mb-4">SKILLS</h2>
                    <ul className="space-y-2">
                        {data.skills.map((s, idx) => (
                            <li key={idx}>
                                {s.name} - {s.level}%
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    </div>
);

export default Template2;
