/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper-custom.css'; // Importaré un archivo para estilos personalizados de Swiper

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Zarella Portafolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'sobre-mi', label: 'Sobre Mí' },
                { id: 'proyectos', label: 'Proyectos' },
                { id: 'habilidades', label: 'Habilidades' },
                { id: 'contacto', label: 'Contacto' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-white hover:text-purple-300 transition-colors ${
                    activeSection === item.id ? 'text-purple-300 border-b-2 border-purple-300' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/30 backdrop-blur-md rounded-lg mb-4">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { id: 'inicio', label: 'Inicio' },
                  { id: 'sobre-mi', label: 'Sobre Mí' },
                  { id: 'proyectos', label: 'Proyectos' },
                  { id: 'habilidades', label: 'Habilidades' },
                  { id: 'contacto', label: 'Contacto' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-white hover:text-purple-300 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Foto - Columna Izquierda */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                    {/* Imagen de perfil */}
                    <img 
                      src="/perfilLink.jpg" 
                      alt="Zarella - Desarrolladora Full Stack & Analista de Datos"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
                {/* Efectos decorativos */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Información - Columna Derecha */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Hola, soy{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zarella
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                Desarrolladora Full Stack & Analista de Datos
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                Apasionada por crear experiencias digitales increíbles y descubrir insights valiosos a través del análisis de datos. 
                Especializada en tecnologías modernas y siempre explorando nuevas formas de innovar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('proyectos')}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
                >
                  Ver Proyectos
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all"
                >
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Sobre <span className="text-purple-400">Mí</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl overflow-hidden">
                <img 
                  src="/hack.jpg" 
                  alt="Foto en evento de hackathon" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy una desarrolladora apasionada con experiencia en desarrollo full stack y análisis de datos. 
                Me encanta resolver problemas complejos y crear soluciones innovadoras que impacten positivamente 
                en la toma de decisiones empresariales.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mi experiencia abarca desde el desarrollo frontend y backend hasta el análisis de datos y 
                visualización. Me fascina el campo del análisis de datos y siempre estoy buscando aprender 
                nuevas técnicas y herramientas para extraer insights valiosos de los datos.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Full Stack Development', 'Data Analysis', 'Blockchain', 'Machine Learning', 'Data Visualization'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            <span className="text-purple-100">Proyectos</span>
          </h2>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={32}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="!pb-16 project-swiper"
          >
            {[
              {
                title: "Modelos de Predicción de Precios de Casas",
                description: "Aplicación para predecir el precio de una casa en base a sus características.",
                icon: "🏠",
                techs: ["Python", "Express", "SVM", "Regresión Lineal"],
                githubLink: "https://github.com/kevinch78/Modelos.git"
              },
              {
                title: "Aplicación de Mercado de Energía",
                description: "Aplicacion de Tesis para el mercado de energía.",
                icon: "💡",
                techs: ["Next.js", "Angular", "Blockchain", "Python", "Docker", "Smart Contracts", "Web3", "Solidity"],
                githubLink: "https://github.com/JulianMbp/MTE.git"
              },   
              {
                title: "U2Group",
                description: "Plataforma integral para gestión de proyectos y recursos, desarrollada con tecnologías modernas.",
                icon: "🧑‍💻",
                techs: ["TypeScript", "Python", "Next.js", "Django", "SQL"],
                githubLink: "https://github.com/Pedroza22/U2Group"
              },
              {
                title: "MedFinder",
                description: "Plataforma para el control de inventario de medicamentos.",
                icon: "🏥💊",
                techs: ["Python", "Next.js", "IA", "PostgreSQL"],
                githubLink: "https://github.com/JulianMbp/Medicamentos.git"
              },

            ].map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-gradient-to-br from-purple-900/60 to-slate-900/80 shadow-2xl shadow-purple-900/30 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105 h-full flex flex-col group relative overflow-hidden"
                >
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl z-0"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl z-0"></div>
                  <div className="relative z-10 w-full h-48 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-5xl drop-shadow-lg">{project.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 relative z-10 group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4 relative z-10">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-xs font-semibold shadow-sm group-hover:bg-pink-500/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto relative z-10">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all text-center flex items-center justify-center gap-2 font-semibold shadow-md group-hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      Ver Código
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Mis <span className="text-purple-400">Habilidades</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                category: 'Frontend', 
                skills: ['Angular', 'React', 'Next.js', 'Tailwind CSS'],
                icon: '🎨'
              },
              { 
                category: 'Backend', 
                skills: ['Python', 'JavaScript', 'Django', 'Flask', 'Node.js'],
                icon: '⚙️'
              },
              { 
                category: 'Bases de Datos', 
                skills: ['PostgreSQL', 'Prisma', 'SQL'],
                icon: '🗄️'
              },
              { 
                category: 'Blockchain', 
                skills: ['Smart Contracts', 'Web3', 'Solidity', 'DApps'],
                icon: '⛓️'
              },
              { 
                category: 'Análisis de Datos', 
                skills: ['Power BI', 'Matplotlib', 'Pandas', 'NumPy'],
                icon: '📊'
              },
              { 
                category: 'Machine Learning', 
                skills: ['Algoritmos Predictivos', 'Scikit-learn', 'Data Mining'],
                icon: '🤖'
              }
            ].map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skillGroup.icon}</span>
                  <h3 className="text-xl font-bold text-purple-400">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <li key={skill} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Sección especial sobre análisis de datos */}
          <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-400/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎯 Mi Pasión: <span className="text-purple-400">Análisis de Datos</span>
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Me encanta el campo del análisis de datos y siempre estoy buscando aprender más sobre técnicas avanzadas, 
                machine learning y nuevas herramientas que me permitan extraer insights más profundos y crear 
                visualizaciones más impactantes. ¡Es un campo que me apasiona y en el que quiero seguir creciendo!
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Contact Section */}
<section id="contacto" className="py-20 px-4 bg-black/20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
      ¡Trabajemos <span className="text-purple-400">Juntos!</span>
    </h2>
    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
      ¿Tienes un proyecto de desarrollo o análisis de datos en mente? Me encantaría escuchar tus ideas 
      y ayudarte a hacerlas realidad con tecnologías modernas.
    </p>
    <div className="flex flex-col sm:flex-row gap-6 justify-center flex-wrap">
    <a
        href="https://wa.me/573225204858?text=Hola%2C%20me%20gustar%C3%ADa%20contar%20contigo%20para%20un%20proyecto.%20%C2%A1Trabajemos%20juntos%21"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-full font-semibold hover:bg-green-400 hover:text-white transition-all flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16.003 3.2A12.792 12.792 0 0 0 3.2 16c0 2.25.588 4.454 1.705 6.389L3 29l6.73-1.743a12.774 12.774 0 0 0 6.274 1.6h.001c7.063 0 12.795-5.729 12.795-12.8 0-3.417-1.33-6.632-3.747-9.051A12.75 12.75 0 0 0 16.003 3.2Zm0 2.133a10.64 10.64 0 0 1 7.548 3.144c1.963 1.963 3.052 4.601 3.052 7.523 0 5.873-4.789 10.667-10.67 10.667a10.666 10.666 0 0 1-5.337-1.427l-.38-.225-4.004 1.035 1.069-3.916-.246-.4a10.65 10.65 0 0 1-1.574-5.733c0-5.88 4.793-10.668 10.666-10.668Zm-4.36 6.66c-.219-.486-.448-.496-.656-.505l-.56-.01a1.076 1.076 0 0 0-.783.366c-.27.292-1.03 1.004-1.03 2.448 0 1.444 1.055 2.84 1.203 3.037.146.194 2.028 3.241 5.034 4.413.7.302 1.245.482 1.67.617.701.224 1.34.192 1.846.117.563-.084 1.73-.706 1.975-1.387.243-.677.243-1.258.17-1.387-.07-.128-.256-.204-.535-.357l-2.066-1.034c-.28-.14-.484-.208-.689.207-.203.416-.794 1.034-.975 1.246-.179.21-.356.236-.656.08-.302-.157-1.276-.471-2.43-1.501-1.082-.962-1.814-2.151-2.025-2.455-.211-.303-.022-.47.133-.617.136-.13.304-.339.456-.508.15-.17.2-.29.3-.486.098-.195.048-.365-.027-.508l-.925-2.14Z" />
        </svg>
        WhatsApp
      </a>
      <a
        href="mailto:burbanozarella05@gmail.com"
        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        Enviar Email
      </a>
      <a
        href="https://www.linkedin.com/in/zarella-burbano/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
        LinkedIn
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Zarella. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
