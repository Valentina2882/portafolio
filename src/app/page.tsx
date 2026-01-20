'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('summary');
  const [currentSkillSlide, setCurrentSkillSlide] = useState(0);

  // Autoplay para el carrusel infinito de habilidades
  useEffect(() => {
    if (activeTab === 'skills') {
      const interval = setInterval(() => {
        setCurrentSkillSlide((prev) => (prev + 1) % 6);
      }, 5000); // Cambia cada 5 segundos

      return () => clearInterval(interval);
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        
        {/* HEADER - Diseño distintivo y profesional */}
        <header className="mb-12 relative">
          <div className="absolute top-0 left-0 w-20 h-20 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl"></div>
          
          <div className="relative border-l-4 border-cyan-500 pl-8 py-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
                  <span className="text-white">Zarella</span>{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                    Burbano
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-cyan-400 font-light tracking-wide">
                  Fullstack Software Engineer
                </p>
                <div className="h-px w-full bg-gradient-to-r from-cyan-500 via-cyan-500/50 to-transparent mt-4"></div>
              </div>
              
              <div className="space-y-2 text-sm md:text-base">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <a href="https://wa.me/573225204858?text=Hola%2C%20me%20gustar%C3%ADa%20contactarte%20para%20un%20proyecto" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    +57 322 520 4858
                  </a>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a href="mailto:burbanozarella05@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    burbanozarella05@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <a href="https://www.linkedin.com/in/zarella-burbano/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    linkedin.com/in/zarella-burbano
                  </a>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <a href="https://github.com/Valentina2882" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    github.com/Valentina2882
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* NAVIGATION TABS */}
        <nav className="mb-8 border-b border-cyan-500/20 w-full">
          <div className="flex w-full justify-between items-center">
            {[
              { id: 'summary', label: 'Resumen Profesional', icon: '📄', shortLabel: 'Resumen' },
              { id: 'experience', label: 'Experiencia', icon: '💼', shortLabel: 'Experiencia' },
              { id: 'projects', label: 'Proyectos', icon: '🚀', shortLabel: 'Proyectos' },
              { id: 'education', label: 'Educación', icon: '🎓', shortLabel: 'Educación' },
              { id: 'skills', label: 'Habilidades', icon: '⚡', shortLabel: 'Habilidades' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-2 md:px-3 lg:px-4 py-3 text-xs sm:text-sm md:text-base font-medium transition-all relative group text-center ${
                  activeTab === tab.id
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                  <span>{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                </div>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* MÓDULO 1: RESUMEN PROFESIONAL */}
        {activeTab === 'summary' && (
          <section className="animate-fadeIn">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl border border-cyan-500/20 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full"></div>
                <h2 className="text-3xl font-bold text-white">Resumen Profesional</h2>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Trabajo en el desarrollo de aplicaciones web fullstack para entornos académicos y de investigación, 
                  contribuyendo al diseño e implementación de soluciones robustas y escalables. Desarrollo e integro 
                  APIs RESTful, construyo interfaces de usuario modernas y responsivas utilizando Angular y Next.js, y 
                  colaboro estrechamente con equipos multidisciplinarios para entregar sistemas de alta calidad 
                  alineados con requisitos funcionales y técnicos. Mi experiencia también incluye trabajar con arquitecturas 
                  basadas en blockchain y smart contracts, así como producir documentación de API clara y estructurada 
                  utilizando Swagger para garantizar la mantenibilidad y la integración fluida.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-cyan-400">Desarrollo Frontend</h3>
                    </div>
                    <p className="text-gray-400">
                      Diseño e implementación de interfaces modernas y responsivas con React, Next.js, Angular y Flutter. 
                      Enfoque en UX/UI y optimización del rendimiento.
                    </p>
                  </div>
                  
                  <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-cyan-400">Desarrollo Backend</h3>
                    </div>
                    <p className="text-gray-400">
                      Construcción de APIs RESTful robustas y escalables con Python (Django, Flask), Node.js y NestJS. 
                      Arquitectura limpia y patrones de diseño empresariales.
                    </p>
                  </div>
                  
                  <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-cyan-400">Blockchain & Web3</h3>
                    </div>
                    <p className="text-gray-400">
                      Desarrollo de Smart Contracts en Solidity y aplicaciones descentralizadas (DApps). 
                      Experiencia en integración Web3 y soluciones blockchain para mercados energéticos.
                    </p>
                  </div>
                  
                  <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-cyan-400">Análisis de Datos</h3>
                    </div>
                    <p className="text-gray-400">
                      Análisis y visualización de datos con Python (Pandas, NumPy, Matplotlib) y Power BI. 
                      Machine Learning aplicado a predicción y clasificación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* MÓDULO 2: EXPERIENCIA PROFESIONAL */}
        {activeTab === 'experience' && (
          <section className="animate-fadeIn">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl border border-cyan-500/20 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full"></div>
                <h2 className="text-3xl font-bold text-white">Experiencia Profesional</h2>
              </div>
              
              <div className="space-y-8">
                {/* Universidad de Nariño - Actual */}
                <div className="relative pl-8 pb-8 border-l-2 border-cyan-500/30 last:border-l-0">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-500 rounded-full -translate-x-[9px] ring-4 ring-black"></div>
                  
                  <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Fullstack Developer</h3>
                        <p className="text-cyan-400 font-medium">Universidad de Nariño</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-cyan-500/10 px-4 py-1 rounded-full w-fit">
                        Feb 2025 - Presente
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">
                      Desarrollo de aplicaciones web fullstack para entornos académicos y de investigación, 
                      contribuyendo al diseño e implementación de soluciones robustas y escalables.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Next.js', 'Angular', 'Django', 'Node.js', 'NestJS', 'PostgreSQL', 'JWT', 'Docker'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-md text-sm border border-cyan-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SITI Soluciones - Actual */}
                <div className="relative pl-8 pb-8 border-l-2 border-cyan-500/30">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-500 rounded-full -translate-x-[9px] ring-4 ring-black"></div>
                  
                  <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Software Developer</h3>
                        <p className="text-cyan-400 font-medium">SITI Soluciones – Software Development Department</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-cyan-500/10 px-4 py-1 rounded-full w-fit">
                        Dic 2025 - Presente
                      </span>
                    </div>
                    
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Desarrollo y mantenimiento de sistemas web utilizando PHP y CSS.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Gestión y consulta de bases de datos relacionales a través de HeidiSQL en múltiples entornos de servidor.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Contribución a la estabilidad y mejora continua de aplicaciones de nivel de producción.</span>
                      </li>
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['PHP', 'CSS', 'SQL', 'HeidiSQL', 'Web Development'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-md text-sm border border-cyan-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SITI Soluciones - Internship */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-500/60 rounded-full -translate-x-[9px] ring-4 ring-black"></div>
                  
                  <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Internship – Software Development Department</h3>
                        <p className="text-cyan-400 font-medium">SITI Soluciones</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-cyan-500/10 px-4 py-1 rounded-full w-fit">
                        Sep 2025 - Nov 2025
                      </span>
                    </div>
                    
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Desarrollo móvil y web utilizando Flutter (Dart), Kotlin, React, PHP y CSS, contribuyendo a la integración de APIs.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Desarrollo de un nuevo módulo móvil para la creación de evaluaciones académicas dentro de la plataforma SAPRED.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Implementación de una funcionalidad automatizada de escaneo de hojas de respuesta utilizando Gemini, permitiendo el envío directo de resultados a la base de datos de calificaciones y mejorando la eficiencia operativa.</span>
                      </li>
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Flutter', 'Dart', 'Kotlin', 'React', 'PHP', 'CSS', 'Gemini AI', 'API Integration'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-md text-sm border border-cyan-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* MÓDULO 3: PROYECTOS */}
        {activeTab === 'projects' && (
          <section className="animate-fadeIn">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl border border-cyan-500/20 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full"></div>
                <h2 className="text-3xl font-bold text-white">Proyectos Destacados</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* MedFinder - Hackathon Winner */}
                <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group relative">
                  <div className="absolute top-2 right-2 bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full border border-cyan-500/30">
                    🏆 Winners
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <span className="text-2xl">💊</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">MedFinder Project</h3>
                  <p className="text-gray-400 text-xs mb-2 text-cyan-400">Potencia Summit Nariño 2024 Hackathon</p>
                  <p className="text-gray-400 text-sm mb-4">
                    Desarrollo de una plataforma descentralizada para la gestión y distribución de datos relacionados con medicamentos 
                    a través de tecnología blockchain.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Blockchain', 'Smart Contracts', 'Decentralized Platform', 'Medicine Management'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sistema de Gestión de Energía Descentralizado */}
                <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <span className="text-2xl">⛓️</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Sistema de Gestión de Energía Descentralizado</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Desarrollo de un sistema descentralizado de gestión de energía integrando tecnología blockchain y smart contracts 
                    escritos en Solidity. El sistema incluye APIs construidas con Django, Node.js y Nest.js, interfaces frontend desarrolladas 
                    usando Angular y Next.js, e integración segura con PostgreSQL, autenticación basada en JWT y entornos dockerizados.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Blockchain', 'Solidity', 'Django', 'Node.js', 'NestJS', 'Angular', 'Next.js', 'PostgreSQL', 'JWT', 'Docker'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* U2Group */}
                <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <span className="text-2xl">🏗️</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">U2Group – Architecture and Design Platform</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Desarrollo de una plataforma web para arquitectura y diseño con personalización 3D, calculadora de precios, 
                    portafolio geolocalizado, blog y panel administrativo. Tecnologías: Django, Next.js, React, Tailwind, SQLite, 
                    REST APIs, soporte multilingüe (ES/EN) y envío de correos vía Gmail SMTP.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Django', 'Next.js', 'React', 'Tailwind', 'SQLite', 'REST APIs', 'Multilingual'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LearnMate */}
                <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <span className="text-2xl">📚</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">LearnMate</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Aplicación móvil educativa impulsada por IA desarrollada usando Flutter, con Supabase proporcionando funcionalidad 
                    backend-as-a-service para autenticación y persistencia de datos. El proyecto integra características impulsadas por IA 
                    para apoyar procesos de aprendizaje y seguimiento del progreso académico, mientras también incorpora un enfoque en la 
                    salud mental y el bienestar estudiantil. LearnMate fue concebido y diseñado desde una perspectiva centrada en la experiencia 
                    del usuario, priorizando la empatía, usabilidad y aprendizaje de apoyo dentro de un contexto educativo real.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Flutter', 'Supabase', 'AI', 'Mobile', 'UX-Driven'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skin Cancer Classification System */}
                <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <span className="text-2xl">🔬</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Skin Cancer Classification System</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Proyecto orientado a la investigación enfocado en la predicción de cáncer de piel usando técnicas de deep learning 
                    y un dataset público de Kaggle (HAM10000). El proyecto explora el uso de arquitecturas avanzadas de redes neuronales 
                    mejoradas con mecanismos Soft-Attention para mejorar la precisión de clasificación de lesiones, cubriendo el pipeline 
                    completo desde preprocesamiento de datos y entrenamiento del modelo hasta evaluación y visualización interactiva, 
                    dentro de un contexto educativo y experimental.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Deep Learning', 'CNN', 'Soft-Attention', 'Kaggle', 'HAM10000', 'Research'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applied Research - Blockchain */}
                <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <span className="text-2xl">📖</span>
                    </div>
                    <a href="https://ates.alayen.edu.iq/home/vol1/iss2/10/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Exploring Blockchain Technology: Applications and Insights Across Multiple Fields</h3>
                  <p className="text-gray-400 text-xs mb-2 text-cyan-400">2024 – Applied Research</p>
                  <p className="text-gray-400 text-sm mb-4">
                    Investigación aplicada sobre los usos de blockchain en diferentes sectores. Publicación académica que explora 
                    aplicaciones e insights de la tecnología blockchain en múltiples campos.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Research', 'Blockchain', 'Academic Publication', 'Applied Research'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* MÓDULO 4: EDUCACIÓN Y CERTIFICACIONES */}
        {activeTab === 'education' && (
          <section className="animate-fadeIn">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl border border-cyan-500/20 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full"></div>
                <h2 className="text-3xl font-bold text-white">Educación y Certificaciones</h2>
              </div>
              
              <div className="space-y-8">
                {/* Educación */}
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    Formación Académica
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-2xl font-bold text-white">Software Engineering</h4>
                          <p className="text-cyan-400 font-medium">Universidad Cooperativa de Colombia</p>
                        </div>
                        <span className="text-gray-400 text-sm bg-cyan-500/10 px-4 py-1 rounded-full w-fit">
                          Enero 2022 - Diciembre 2025
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-2xl font-bold text-white">Diploma in Coding and Programming</h4>
                          <p className="text-cyan-400 font-medium">Samsung Innovation Campus</p>
                        </div>
                        <span className="text-gray-400 text-sm bg-cyan-500/10 px-4 py-1 rounded-full w-fit">
                          Septiembre 2021 - Marzo 2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Idiomas */}
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    Idiomas
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-black/40 rounded-lg p-5 border border-cyan-500/10 text-center">
                      <h4 className="text-lg font-semibold text-white mb-2">Español</h4>
                      <p className="text-cyan-400 text-sm">Nativo</p>
                    </div>
                    
                    <div className="bg-black/40 rounded-lg p-5 border border-cyan-500/10 text-center">
                      <h4 className="text-lg font-semibold text-white mb-2">Inglés</h4>
                      <p className="text-cyan-400 text-sm">B1 – B2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* MÓDULO 5: HABILIDADES TÉCNICAS */}
        {activeTab === 'skills' && (
          <section className="animate-fadeIn">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl border border-cyan-500/20 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full"></div>
                <h2 className="text-3xl font-bold text-white">Habilidades Técnicas</h2>
              </div>
              
              {/* Carrusel de Habilidades */}
              <div className="relative">
                {/* Contenedor del carrusel */}
                <div className="overflow-hidden rounded-xl">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSkillSlide * 100}%)` }}
                  >
                    {/* Slide 1: Frontend */}
                    <div className="min-w-full">
                      <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-cyan-400">Frontend Development</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {['React', 'Next.js', 'Angular', 'Flutter', 'Dart', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'PHP', 'CSS', 'Responsive Design', 'UI/UX'].map((skill) => (
                            <div key={skill} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                              <span className="text-gray-300 text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slide 2: Backend */}
                    <div className="min-w-full">
                      <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-cyan-400">Backend Development</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {['Python', 'Django', 'Flask', 'NestJS', 'Node.js', 'Express', 'FastAPI', 'REST API', 'Swagger', 'GraphQL', 'Microservices', 'JWT Auth', 'OAuth', 'API Documentation'].map((skill) => (
                            <div key={skill} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                              <span className="text-gray-300 text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slide 3: Bases de Datos */}
                    <div className="min-w-full">
                      <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-cyan-400">Bases de Datos</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'SQL', 'Prisma ORM', 'SQLAlchemy', 'Database Design', 'Query Optimization', 'Migrations', 'HeidiSQL'].map((skill) => (
                            <div key={skill} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                              <span className="text-gray-300 text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slide 4: Blockchain & Web3 */}
                    <div className="min-w-full">
                      <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-cyan-400">Blockchain & Web3</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {['Solidity', 'Smart Contracts', 'Web3.js', 'Ethereum', 'DApps', 'Blockchain Architecture', 'Truffle', 'Hardhat'].map((skill) => (
                            <div key={skill} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                              <span className="text-gray-300 text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slide 5: Data Science & ML */}
                    <div className="min-w-full">
                      <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-cyan-400">Data Science & Machine Learning</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'Power BI', 'Data Visualization', 'Statistical Analysis', 'Predictive Models', 'Data Mining', 'CNN'].map((skill) => (
                            <div key={skill} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                              <span className="text-gray-300 text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slide 6: DevOps & Tools */}
                    <div className="min-w-full">
                      <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-cyan-400">DevOps & Herramientas</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {['Git', 'GitHub', 'Docker', 'CI/CD', 'Linux', 'Scrum', 'Agile', 'VS Code', 'Postman', 'npm', 'pip', 'Testing', 'Kotlin', 'Gemini AI'].map((skill) => (
                            <div key={skill} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                              <span className="text-gray-300 text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botones de navegación */}
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={() => setCurrentSkillSlide((prev) => (prev - 1 + 6) % 6)}
                    className="w-12 h-12 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center transition-all"
                  >
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Indicadores de slides */}
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSkillSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                          currentSkillSlide === index
                            ? 'w-8 bg-cyan-400'
                            : 'w-2 bg-cyan-500/30 hover:bg-cyan-500/50'
                        }`}
                        aria-label={`Ir a slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentSkillSlide((prev) => (prev + 1) % 6)}
                    className="w-12 h-12 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center transition-all"
                  >
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="mt-16 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Zarella Burbano. Fullstack Software Engineer.
            </p>
            
            <div className="flex gap-4">
              <a href="https://github.com/Valentina2882" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a href="https://www.linkedin.com/in/zarella-burbano/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a href="mailto:burbanozarella05@gmail.com"
                 className="w-10 h-10 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
