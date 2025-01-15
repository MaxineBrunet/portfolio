import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

function App() {
  return (
    <div className="grid-background min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <h1 className="text-yellow-300 text-6xl md:text-8xl mb-6 font-['Aperture_Display']">
          Maxine Brunet
        </h1>
        <h2 className="text-3xl md:text-4xl mb-12 text-yellow-100/80">
          Space designer
        </h2>

        {/* Social Links */}
        <div className="flex gap-6 mb-16">
          <a href="#" className="hover:text-yellow-300 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="hover:text-yellow-300 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="hover:text-yellow-300 transition-colors">
            <Mail size={24} />
          </a>
          <a href="#" className="hover:text-yellow-300 transition-colors">
            <FileText size={24} />
          </a>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <h3 className="text-2xl text-yellow-300 font-['Aperture_Display']">About Me</h3>
            <p className="text-gray-200">
              I'm a passionate space design with expertise in modern technologies.
              I love creating beautiful, functional, and user-friendly spaces that solve
              real-world problems.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
              alt="Profile"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <h3 className="text-2xl text-yellow-300 font-['Aperture_Display'] mb-8">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-[#5c7f45]/50 p-6 rounded-lg hover:bg-[#5c7f45]/70 transition-colors">
              <img
                src={`https://images.unsplash.com/photo-${1550439062 + project}-e651d7165a36`}
                alt={`Project ${project}`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl text-yellow-300 mb-2">Project {project}</h4>
              <p className="text-gray-300">
                A brief description of the project and the technologies used in its development.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;