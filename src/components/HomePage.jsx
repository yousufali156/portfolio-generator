import React from 'react';
import Footer from './Footer';

const HomePage = ({ setPage }) => (
    <div className="text-center mt-17 px-6 bg-gray-50">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">Create a Stunning Developer Portfolio in Minutes</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">No coding required. Just fill in your details, choose a template, and get a professional portfolio website instantly.</p>
        <button onClick={() => setPage('generator')}
            className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-xl hover:bg-blue-800 transition-transform duration-300 hover:scale-105">Get Started for Free
        </button>
        <div className="mt-16 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Portfolio Examples</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-4 transition-transform hover:-translate-y-2">
                    <img src="https://placehold.co/400x300/e0e7ff/3730a3?text=Corporate" alt="Corporate" className="rounded-md mb-4" />
                    <h3 className="font-semibold text-lg">Corporate Style</h3></div>
                <div className="bg-white rounded-lg shadow-lg p-4 transition-transform hover:-translate-y-2">
                    <img src="https://placehold.co/400x300/111827/f3f4f6?text=Dark+Mode" alt="Dark Mode" className="rounded-md mb-4" />
                    <h3 className="font-semibold text-lg">Developer Dark</h3></div>
                <div className="bg-white rounded-lg shadow-lg p-4 transition-transform hover:-translate-y-2">
                    <img src="https://placehold.co/400x300/4f46e5/ffffff?text=Exclusive" alt="Exclusive" className="rounded-md mb-4" />
                    <h3 className="font-semibold text-lg">Exclusive Pro</h3></div>
                <div className="bg-white rounded-lg shadow-lg p-4 transition-transform hover:-translate-y-2">
                    <img src="https://placehold.co/400x300/fef2f2/ef4444?text=Creative" alt="Creative" className="rounded-md mb-4" />
                    <h3 className="font-semibold text-lg">Creative & Bold</h3></div>
                <div className="bg-white rounded-lg shadow-lg p-4 transition-transform hover:-translate-y-2">
                    <img src="https://placehold.co/400x300/f9fafb/6b7280?text=Minimalist" alt="Minimalist" className="rounded-md mb-4" />
                    <h3 className="font-semibold text-lg">Minimalist & Clean</h3></div>
            </div>
        </div>
        <Footer />
    </div>
);



export default HomePage;