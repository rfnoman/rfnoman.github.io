import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS, SOCIAL_LINKS, CERTIFICATIONS } from '@/constants';
import { SectionTitle } from '@/components/SectionTitle';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm'; // Import ContactForm component
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto relative rounded-full overflow-hidden border-4 border-blue-500/30">
              <Image
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-3xl text-blue-400 mb-6">{PERSONAL_INFO.role}</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            {PERSONAL_INFO.summary}
          </p>
          <div className="flex justify-center space-x-4">
            {Object.entries(SOCIAL_LINKS).map(([platform, link]) => (
              <a
                key={platform}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                px-6 py-2 rounded-full transition-all transform hover:scale-105"
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle title="Skills & Expertise" />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl 
                border border-gray-700 hover:border-blue-500 transition-all">
                <h3 className="text-2xl font-semibold mb-4 capitalize text-blue-400">{category}</h3>
                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex justify-between items-center">
                      <span>{skill.name}</span>
                      <span className="text-blue-400">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <SectionTitle title="Professional Experience" />
          <div className="max-w-4xl mx-auto space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl
                border border-gray-700 hover:border-blue-500 transition-all">
                <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                <div className="text-blue-400 mb-4">
                  {exp.company} • {exp.location} • {exp.period}
                </div>
                <ul className="space-y-2 text-gray-300">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle title="Featured Projects" />
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {PROJECTS.map((project, index) => (
              <div key={index} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl
                border border-gray-700 hover:border-blue-500 transition-all">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-gray-300">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <SectionTitle title="Certifications" />
          <div className="max-w-4xl mx-auto">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl
                border border-gray-700 hover:border-blue-500 transition-all mb-4">
                <h3 className="text-xl font-bold text-blue-400">{cert.name}</h3>
                <p className="text-gray-300">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Get in Touch" 
            subtitle="Have a question or want to work together? Feel free to reach out!"
          />
          <ContactForm />
        </div>
      </section>

      <Footer name={PERSONAL_INFO.shortName} />
    </div>
  );
}
