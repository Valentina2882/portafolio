'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('summary');
  const [currentSkillSlide, setCurrentSkillSlide] = useState(0);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);

  // Autoplay para el carrusel infinito de habilidades
  useEffect(() => {
    if (activeTab === 'skills') {
      const interval = setInterval(() => {
        setCurrentSkillSlide((prev) => (prev + 1) % 7);
      }, 10000); // Cambia cada 10 segundos

      return () => clearInterval(interval);
    }
  }, [activeTab]);

  // Autoplay para el carrusel infinito de proyectos
  useEffect(() => {
    if (activeTab === 'projects') {
      const interval = setInterval(() => {
        setCurrentProjectSlide((prev) => (prev + 1) % 3); // 3 slides con 3 proyectos cada uno
      }, 12000); // Cambia cada 12 segundos

      return () => clearInterval(interval);
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Design - Elementos decorativos */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradiente radial animado */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Líneas decorativas */}
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        
        {/* Grid pattern sutil */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Círculos decorativos flotantes */}
        <div className="absolute top-1/4 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 left-20 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Formas geométricas */}
        <div className="absolute top-40 right-20 w-32 h-32 border border-cyan-500/10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-cyan-400/10 rotate-12 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        
        {/* Líneas diagonales decorativas */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-px h-64 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent rotate-12"></div>
          <div className="absolute top-1/2 right-0 w-px h-64 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent -rotate-12"></div>
        </div>
        
        {/* Efecto de partículas - posiciones fijas para evitar errores de hidratación */}
        <div className="absolute inset-0">
          {[
            { left: 8, top: 12, duration: 4.2, delay: 0.3 },
            { left: 22, top: 38, duration: 5.1, delay: 1.1 },
            { left: 35, top: 8, duration: 3.8, delay: 0.7 },
            { left: 48, top: 62, duration: 6.0, delay: 1.8 },
            { left: 61, top: 25, duration: 4.5, delay: 0.2 },
            { left: 74, top: 71, duration: 5.6, delay: 1.4 },
            { left: 87, top: 18, duration: 3.4, delay: 0.9 },
            { left: 15, top: 84, duration: 6.3, delay: 1.6 },
            { left: 29, top: 55, duration: 4.8, delay: 0.5 },
            { left: 42, top: 91, duration: 5.3, delay: 1.2 },
            { left: 56, top: 44, duration: 3.6, delay: 0.1 },
            { left: 68, top: 7, duration: 6.1, delay: 1.9 },
            { left: 81, top: 53, duration: 4.0, delay: 0.8 },
            { left: 93, top: 79, duration: 5.8, delay: 1.5 },
            { left: 5, top: 48, duration: 3.9, delay: 0.4 },
            { left: 18, top: 66, duration: 4.7, delay: 1.0 },
            { left: 51, top: 31, duration: 5.4, delay: 1.7 },
            { left: 64, top: 88, duration: 3.5, delay: 0.6 },
            { left: 77, top: 41, duration: 6.2, delay: 1.3 },
            { left: 90, top: 14, duration: 4.4, delay: 0.0 },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-16">
        
        {/* HEADER - Diseño distintivo y profesional */}
        <header className="mb-12 relative">
          <div className="absolute top-0 left-0 w-20 h-20 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl"></div>
          
          <div className="relative border-l-4 border-cyan-500 pl-8 py-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                  <span className="text-white">Zarella</span>{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                    Burbano Vallejo
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-cyan-400 font-light tracking-wide">
                  Ingeniera de Software
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

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Pasto, Colombia</span>
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
                  Ingeniera de Software con experiencia en el desarrollo, mantenimiento e implementación de aplicaciones 
                  web y soluciones de software. He trabajado como desarrolladora Full Stack, participando en backend, 
                  frontend, APIs y bases de datos relacionales. Me caracterizo por resolver problemas, incorporar nuevas 
                  funcionalidades y mantener entornos de producción, con capacidad de aprendizaje, adaptación a nuevas 
                  tecnologías y un fuerte enfoque en la calidad del software.
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
                      Construcción de APIs RESTful, mantenimiento de entornos de producción y gestión de bases de datos
                      relacionales con Python (Django), Node.js, NestJS y PHP.
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
                      Conocimientos básicos en análisis y visualización de datos con Python (Pandas, NumPy, Matplotlib)
                      y Power BI, además de nociones de Machine Learning aplicadas a predicción y clasificación.
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
                {/* SITI Soluciones - Actual */}
                <div className="relative pl-8 pb-8 border-l-2 border-cyan-500/30">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-500 rounded-full -translate-x-[9px] ring-4 ring-black"></div>
                  
                  <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Desarrolladora de Software</h3>
                        <p className="text-cyan-400 font-medium">SITI Soluciones — Practicante → Desarrolladora</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-cyan-500/10 px-4 py-1 rounded-full w-fit">
                        Sep 2025 - Presente
                      </span>
                    </div>
                    
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Desarrollo y mantenimiento de aplicaciones web y móviles, incluyendo corrección de errores y nuevas funcionalidades en producción.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Desarrollo backend y gestión de bases de datos relacionales con PHP y SQL en múltiples entornos de servidor.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Desarrollo móvil con Flutter (Dart) e integración de APIs.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Desarrollo de módulos académicos en la plataforma SAPRED y automatización de procesos operativos.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Implementación del procesamiento automatizado de hojas de respuesta con IA (Gemini), enviando resultados directamente a la base de datos de calificaciones.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Análisis de incidentes, depuración y mantenimiento de aplicaciones.</span>
                      </li>
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['PHP', 'SQL', 'Flutter', 'Dart', 'React', 'CSS', 'Gemini AI', 'HeidiSQL'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-md text-sm border border-cyan-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Universidad de Nariño */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-500/60 rounded-full -translate-x-[9px] ring-4 ring-black"></div>
                  
                  <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Desarrolladora Fullstack</h3>
                        <p className="text-cyan-400 font-medium">Universidad de Nariño</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-cyan-500/10 px-4 py-1 rounded-full w-fit">
                        Feb 2025 - Feb 2026
                      </span>
                    </div>
                    
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Desarrollo de un sistema descentralizado de gestión de energía (ENERCHAIN) con blockchain y smart contracts en Solidity.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Construcción de APIs y servicios backend con Django, Node.js y NestJS.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Creación de interfaces frontend con Angular y Next.js.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Implementación de PostgreSQL, autenticación JWT y entornos dockerizados para un despliegue seguro y escalable.</span>
                      </li>
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Solidity', 'Django', 'Node.js', 'NestJS', 'Angular', 'Next.js', 'PostgreSQL', 'JWT', 'Docker'].map((tech) => (
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
              
              {/* Carrusel de Proyectos */}
              <div className="relative">
                {/* Contenedor del carrusel */}
                <div className="overflow-hidden rounded-xl">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentProjectSlide * 100}%)` }}
                  >
                    {/* Slide 1: Agenda, ENERCHAIN, LearnMate */}
                    <div className="min-w-full">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Agenda */}
                        <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                              <span className="text-2xl">📅</span>
                            </div>
                            <a href="https://agendapersonalz.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">Agenda — Dashboard personal</h3>
                          <p className="text-cyan-400 text-xs mb-2">2026</p>
                          <p className="text-gray-400 text-sm mb-4">
                            PWA para gestionar agenda, finanzas personales, presupuestos y hábitos. Integra políticas de seguridad RLS,
                            OAuth de Gmail para clasificar transacciones automáticamente mediante Edge Functions y un motor propio de procesamiento.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {['React', 'Vite', 'Supabase', 'PostgreSQL', 'PWA', 'Edge Functions'].map((tech) => (
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
                            <a href="https://github.com/Valentina2882/LearnMateAI_frontend.git" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">LearnMate — Aplicación móvil educativa con IA</h3>
                          <p className="text-cyan-400 text-xs mb-2">2025</p>
                          <p className="text-gray-400 text-sm mb-4">
                            Aplicación móvil educativa con IA desarrollada en Flutter y Supabase para autenticación y persistencia de datos.
                            Integra IA para apoyo al aprendizaje y seguimiento académico, junto con herramientas de bienestar estudiantil, con enfoque en UX/UI.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {['Flutter', 'Supabase', 'AI', 'Mobile', 'UX'].map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* ENERCHAIN */}
                        <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                              <span className="text-2xl">⛓️</span>
                            </div>
                            <a href="https://mte-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">ENERCHAIN — Sistema descentralizado de gestión energética</h3>
                          <p className="text-cyan-400 text-xs mb-2">2025</p>
                          <p className="text-gray-400 text-sm mb-4">
                            Sistema descentralizado de gestión de energía con blockchain y smart contracts en Solidity.
                            Backend y APIs con Django, Node.js y NestJS; frontend con Angular y Next.js.
                            PostgreSQL, autenticación JWT y entornos dockerizados, con arquitectura segura y escalable para la trazabilidad de información energética.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {['Solidity', 'Django', 'Node.js', 'NestJS', 'Angular', 'Next.js', 'PostgreSQL', 'JWT', 'Docker'].map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2: Skin Cancer, MedFinder, U2Group */}
                    <div className="min-w-full">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Skin Cancer Classification System */}
                        <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                              <span className="text-2xl">🔬</span>
                            </div>
                            <a href="https://github.com/Valentina2882/RepoCancerPiel.git" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">Sistema de Clasificación de Cáncer de Piel</h3>
                          <p className="text-cyan-400 text-xs mb-2">2025</p>
                          <p className="text-gray-400 text-sm mb-4">
                            Proyecto de investigación para clasificar lesiones de piel con técnicas de Deep Learning sobre el dataset HAM10000.
                            Implementa arquitecturas de redes neuronales con mecanismos Soft-Attention, cubriendo preprocesamiento, entrenamiento, evaluación y visualización de resultados.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {['Python', 'Deep Learning', 'Soft-Attention', 'HAM10000'].map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* MedFinder */}
                        <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group relative">
                          <div className="absolute top-4 right-14 bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full border border-cyan-500/30">
                            🏆 Ganadores
                          </div>
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                              <span className="text-2xl">💊</span>
                            </div>
                            <a href="https://github.com/JulianMbp/Medicamentos.git" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">Proyecto MedFinder</h3>
                          <p className="text-cyan-400 text-xs mb-2">Hackathon Potencia Summit Nariño 2024 — Ganadores</p>
                          <p className="text-gray-400 text-sm mb-4">
                            Plataforma descentralizada para la gestión y distribución de información de medicamentos mediante blockchain.
                            Enfocada en trazabilidad, disponibilidad y manejo seguro de la información.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {['Blockchain', 'Smart Contracts', 'Trazabilidad'].map((tech) => (
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
                            <a href="https://github.com/Pedroza22/U2Group.git" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">U2Group</h3>
                          <p className="text-cyan-400 text-xs mb-2">2025 — Arquitectura y diseño</p>
                          <p className="text-gray-400 text-sm mb-4">
                            Plataforma web con personalización 3D, calculadora de precios, portafolio geolocalizado, blog y panel administrativo.
                            Backend con Django y REST APIs; frontend con Next.js, React y Tailwind CSS. Soporte ES/EN y correos vía Gmail SMTP.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {['Django', 'Next.js', 'React', 'Tailwind', 'PostgreSQL', 'REST APIs'].map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 3: Research, Task Manager, Predicción */}
                    <div className="min-w-full">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                          <p className="text-cyan-400 text-xs mb-2">2024 — Investigación aplicada</p>
                          <p className="text-gray-400 text-sm mb-4">
                            Investigación aplicada sobre los usos de blockchain en distintos sectores.
                            Publicación académica sobre aplicaciones e insights de la tecnología en múltiples campos.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {['Research', 'Blockchain', 'Publicación académica'].map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Task Manager */}
                        <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                              <span className="text-2xl">✅</span>
                            </div>
                            <div className="flex gap-2">
                              <a href="https://github.com/Valentina2882/Task_Frontend_Flutter.git" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                </svg>
                              </a>
                              <a href="https://github.com/Valentina2882/Task_Backend_NestJS.git" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">Task Manager</h3>
                          <p className="text-gray-400 text-sm mb-4">
                            Aplicación multiplataforma para gestión de tareas. Backend en NestJS con frontend en Flutter para sincronización en tiempo real.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {['NestJS', 'Flutter', 'PostgreSQL', 'REST API', 'TypeScript'].map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Predicción de Precios de Viviendas */}
                        <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                              <span className="text-2xl">🏠</span>
                            </div>
                            <a href="https://github.com/kevinch78/Modelos.git" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">Predicción de Precios de Viviendas</h3>
                          <p className="text-gray-400 text-sm mb-4">
                            Modelos de Machine Learning (SVM, Regresión Lineal) para estimar precios de viviendas según características del inmueble.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {['Python', 'SVM', 'Regresión Lineal', 'Scikit-learn'].map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botones de navegación */}
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={() => setCurrentProjectSlide((prev) => (prev - 1 + 3) % 3)}
                    className="w-12 h-12 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center transition-all"
                  >
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Indicadores de slides */}
                  <div className="flex gap-2">
                    {[0, 1, 2].map((index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProjectSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                          currentProjectSlide === index
                            ? 'w-8 bg-cyan-400'
                            : 'w-2 bg-cyan-500/30 hover:bg-cyan-500/50'
                        }`}
                        aria-label={`Ir a slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentProjectSlide((prev) => (prev + 1) % 3)}
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
                          <h4 className="text-2xl font-bold text-white">Ingeniería de Software</h4>
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
                          <h4 className="text-2xl font-bold text-white">Diploma en Codificación y Programación</h4>
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
                      <p className="text-cyan-400 text-sm">Básico</p>
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
                    {/* Slide 1: Lenguajes */}
                    <div className="min-w-full">
                      <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-cyan-400">Lenguajes</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {['Python', 'JavaScript', 'TypeScript', 'PHP', 'Dart', 'SQL', 'Solidity'].map((skill) => (
                            <div key={skill} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                              <span className="text-gray-300 text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slide 2: Frontend & Mobile */}
                    <div className="min-w-full">
                      <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-cyan-400">Frontend & Mobile</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {['React', 'Next.js', 'Angular', 'Flutter', 'Vite', 'Tailwind CSS', 'HTML/CSS', 'PWA'].map((skill) => (
                            <div key={skill} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                              <span className="text-gray-300 text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slide 3: Backend & APIs */}
                    <div className="min-w-full">
                      <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-cyan-400">Backend & APIs</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {['Django', 'NestJS', 'Node.js', 'FastAPI', 'REST API', 'Swagger', 'JWT', 'OAuth'].map((skill) => (
                            <div key={skill} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                              <span className="text-gray-300 text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slide 4: Bases de Datos */}
                    <div className="min-w-full">
                      <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-cyan-400">Bases de datos</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'SQL', 'RLS'].map((skill) => (
                            <div key={skill} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                              <span className="text-gray-300 text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slide 5: Blockchain & Web3 */}
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
                          {['Solidity', 'Smart Contracts', 'Web3.js', 'Ethereum'].map((skill) => (
                            <div key={skill} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                              <span className="text-gray-300 text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slide 6: Data Science & IA */}
                    <div className="min-w-full">
                      <div className="bg-black/40 rounded-lg p-6 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-cyan-400">Data Science & IA</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Matplotlib', 'Deep Learning', 'Gemini'].map((skill) => (
                            <div key={skill} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all">
                              <span className="text-gray-300 text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slide 7: DevOps & Herramientas */}
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
                          {['Git', 'GitHub', 'Docker', 'Linux', 'Postman', 'Supabase'].map((skill) => (
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
                    onClick={() => setCurrentSkillSlide((prev) => (prev - 1 + 7) % 7)}
                    className="w-12 h-12 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center transition-all"
                  >
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Indicadores de slides */}
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4, 5, 6].map((index) => (
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
                    onClick={() => setCurrentSkillSlide((prev) => (prev + 1) % 7)}
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
              © 2026 Zarella Burbano Vallejo. Ingeniera de Software.
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
