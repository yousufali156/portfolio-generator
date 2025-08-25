import React, { useState } from "react";

// --- Icons ---
const PlusIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
    </svg>
);

const TrashIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
    </svg>
);

const GeneratorForm = ({ portfolio, setPortfolio }) => {
    const [activeTab, setActiveTab] = useState("personal");

    // --- Handlers ---
    const handleInputChange = (section, e, index = null, field = null) => {
        const { name, value } = e.target;
        const updatedPortfolio = { ...portfolio };

        if (index !== null) {
            updatedPortfolio[section][index][field || name] = value;
        } else if (field) {
            updatedPortfolio[section][field] = value;
        } else {
            updatedPortfolio[section] = {
                ...updatedPortfolio[section],
                [name]: value,
            };
        }
        setPortfolio(updatedPortfolio);
    };

    const addItem = (section) => {
        const newItem =
            section === "skills"
                ? { name: "", level: 50 }
                : section === "experience"
                    ? { title: "", company: "", duration: "", responsibilities: "" }
                    : section === "projects"
                        ? {
                            name: "",
                            description: "",
                            stack: "",
                            image: "",
                            liveLink: "#",
                            repoLink: "#",
                            challenges: "",
                            improvements: "",
                        }
                        : { name: "", url: "" };

        setPortfolio({ ...portfolio, [section]: [...portfolio[section], newItem] });
    };

    const removeItem = (section, index) => {
        setPortfolio({
            ...portfolio,
            [section]: portfolio[section].filter((_, i) => i !== index),
        });
    };

    const TabButton = ({ tabName, label }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`px-4 py-2 font-semibold rounded-t-lg ${activeTab === tabName
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
        >
            {label}
        </button>
    );

    // --- Main Render ---
    return (
        <div className="p-4 mt-5 space-y-6 bg-gray-50 rounded-lg">
            {/* Tabs */}
            <div className="flex gap-5 border-b border-gray-300">
                <TabButton tabName="personal" label="Personal" />
                <TabButton tabName="experience" label="Experience" />
                <TabButton tabName="projects" label="Projects" />
                <TabButton tabName="skills" label="Skills" />
            </div>

            {/* --- Personal Tab --- */}
            {activeTab === "personal" && (
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Personal & Contact Info</h3>

                    <input
                        type="text"
                        name="name"
                        value={portfolio.personalInfo.name}
                        onChange={(e) => handleInputChange("personalInfo", e)}
                        placeholder="Your Name"
                        className="p-2 border rounded w-full"
                    />

                    <input
                        type="text"
                        name="designation"
                        value={portfolio.personalInfo.designation}
                        onChange={(e) => handleInputChange("personalInfo", e)}
                        placeholder="Your Designation"
                        className="p-2 border rounded w-full"
                    />

                    <input
                        type="text"
                        name="photo"
                        value={portfolio.personalInfo.photo}
                        onChange={(e) => handleInputChange("personalInfo", e)}
                        placeholder="Photo URL"
                        className="p-2 border rounded w-full"
                    />

                    <textarea
                        name="about"
                        value={portfolio.about}
                        onChange={(e) =>
                            setPortfolio({ ...portfolio, about: e.target.value })
                        }
                        placeholder="About Me"
                        className="w-full p-2 border rounded h-24"
                    ></textarea>

                    {/* Social Links */}
                    <h3 className="text-xl font-semibold pt-4">Social Links</h3>
                    {portfolio.socialLinks.map((link, i) => (
                        <div key={i} className="flex gap-2">
                            <input
                                type="text"
                                value={link.name}
                                onChange={(e) =>
                                    handleInputChange("socialLinks", e, i, "name")
                                }
                                placeholder="Platform"
                                className="p-2 border rounded w-1/3"
                            />
                            <input
                                type="text"
                                value={link.url}
                                onChange={(e) => handleInputChange("socialLinks", e, i, "url")}
                                placeholder="URL"
                                className="p-2 border rounded w-2/3"
                            />
                            <button
                                onClick={() => removeItem("socialLinks", i)}
                                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                            >
                                <TrashIcon className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={() => addItem("socialLinks")}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                    >
                        Add Social Link
                    </button>
                </div>
            )}

            {/* --- Experience Tab --- */}
            {activeTab === "experience" && (
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Experience</h3>
                        <button
                            onClick={() => addItem("experience")}
                            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                        >
                            <PlusIcon className="w-5 h-5" />
                        </button>
                    </div>

                    {portfolio.experience.map((exp, i) => (
                        <div key={i} className="p-4 border rounded space-y-2">
                            <input
                                type="text"
                                value={exp.title}
                                onChange={(e) => handleInputChange("experience", e, i, "title")}
                                placeholder="Job Title"
                                className="p-2 border rounded w-full"
                            />
                            <input
                                type="text"
                                value={exp.company}
                                onChange={(e) =>
                                    handleInputChange("experience", e, i, "company")
                                }
                                placeholder="Company"
                                className="p-2 border rounded w-full"
                            />
                            <input
                                type="text"
                                value={exp.duration}
                                onChange={(e) =>
                                    handleInputChange("experience", e, i, "duration")
                                }
                                placeholder="Duration"
                                className="p-2 border rounded w-full"
                            />
                            <textarea
                                value={exp.responsibilities}
                                onChange={(e) =>
                                    handleInputChange("experience", e, i, "responsibilities")
                                }
                                placeholder="Responsibilities"
                                className="w-full p-2 border rounded h-20"
                            ></textarea>
                            <button
                                onClick={() => removeItem("experience", i)}
                                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 w-full"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* --- Projects Tab --- */}
            {activeTab === "projects" && (
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Projects</h3>
                        <button
                            onClick={() => addItem("projects")}
                            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                        >
                            <PlusIcon className="w-5 h-5" />
                        </button>
                    </div>

                    {portfolio.projects.map((p, i) => (
                        <div key={i} className="p-4 border rounded space-y-2">
                            <input
                                type="text"
                                value={p.name}
                                onChange={(e) => handleInputChange("projects", e, i, "name")}
                                placeholder="Project Name"
                                className="p-2 border rounded w-full"
                            />
                            <textarea
                                value={p.description}
                                onChange={(e) =>
                                    handleInputChange("projects", e, i, "description")
                                }
                                placeholder="Description"
                                className="w-full p-2 border rounded h-20"
                            ></textarea>
                            <input
                                type="text"
                                value={p.stack}
                                onChange={(e) => handleInputChange("projects", e, i, "stack")}
                                placeholder="Tech Stack"
                                className="p-2 border rounded w-full"
                            />
                            <input
                                type="text"
                                value={p.image}
                                onChange={(e) => handleInputChange("projects", e, i, "image")}
                                placeholder="Image URL"
                                className="p-2 border rounded w-full"
                            />
                            <input
                                type="text"
                                value={p.liveLink}
                                onChange={(e) => handleInputChange("projects", e, i, "liveLink")}
                                placeholder="Live Link"
                                className="p-2 border rounded w-full"
                            />
                            <input
                                type="text"
                                value={p.repoLink}
                                onChange={(e) => handleInputChange("projects", e, i, "repoLink")}
                                placeholder="Repo Link"
                                className="p-2 border rounded w-full"
                            />
                            <textarea
                                value={p.challenges}
                                onChange={(e) =>
                                    handleInputChange("projects", e, i, "challenges")
                                }
                                placeholder="Challenges Faced"
                                className="w-full p-2 border rounded h-20"
                            ></textarea>
                            <textarea
                                value={p.improvements}
                                onChange={(e) =>
                                    handleInputChange("projects", e, i, "improvements")
                                }
                                placeholder="Future Improvements"
                                className="w-full p-2 border rounded h-20"
                            ></textarea>
                            <button
                                onClick={() => removeItem("projects", i)}
                                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 w-full"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* --- Skills Tab --- */}
            {activeTab === "skills" && (
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Skills</h3>
                        <button
                            onClick={() => addItem("skills")}
                            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                        >
                            <PlusIcon className="w-5 h-5" />
                        </button>
                    </div>

                    {portfolio.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <input
                                type="text"
                                value={skill.name}
                                onChange={(e) => handleInputChange("skills", e, i, "name")}
                                placeholder="Skill"
                                className="p-2 border rounded w-full"
                            />
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={skill.level}
                                onChange={(e) => handleInputChange("skills", e, i, "level")}
                                className="w-full"
                            />
                            <span className="w-12 text-center">{skill.level}%</span>
                            <button
                                onClick={() => removeItem("skills", i)}
                                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                            >
                                <TrashIcon className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GeneratorForm;
