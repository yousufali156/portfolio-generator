import React from 'react';

const Template3 = ({ data }) => ( /* Creative Bold */

    <div className="font-sans bg-rose-50 text-gray-900 p-8"><header className="relative text-center py-16 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-rose-500 opacity-20 transform -skew-y-3">
        </div><img src={data.personalInfo.photo} alt={data.personalInfo.name} className="relative w-36 h-36 rounded-full mx-auto mb-4 border-4 border-white shadow-lg" /><h1 className="relative text-5xl font-black text-rose-800">{data.personalInfo.name}</h1><p className="relative text-xl text-rose-600 font-semibold mt-2">{data.personalInfo.designation}</p></header><section className="mt-10"><h2 className="text-3xl font-bold text-rose-800 mb-4">Who Am I?</h2><p className="text-lg">{data.about}</p></section><section className="mt-10 grid md:grid-cols-2 gap-8"><div><h2 className="text-3xl font-bold text-rose-800 mb-4">Skills</h2><div className="flex flex-wrap gap-3">{data.skills.map(s => <div key={s.name} className="py-1 px-3 bg-rose-200 text-rose-900 rounded-full font-semibold">{s.name}</div>)}</div></div><div><h2 className="text-3xl font-bold text-rose-800 mb-4">Contact</h2><div className="space-y-1">{data.socialLinks.map(l => <a href={l.url} key={l.name} className="block font-semibold text-rose-700 hover:underline">{l.name}</a>)}</div></div></section><section className="mt-10"><h2 className="text-3xl font-bold text-rose-800 mb-4">My Work</h2><div className="space-y-6">{data.projects.map(p => <div key={p.name} className="border-l-4 border-rose-500 pl-4"><h3 className="text-2xl font-bold">{p.name}</h3><p className="font-mono text-sm text-rose-600 my-1">{p.stack}</p><p>{p.description}</p></div>)}</div></section></div>);


export default Template3;