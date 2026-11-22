import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

const agendaShots = [
  {
    src: "/projects/agenda/01_inicio.png",
    alt: "Inicio de AgendaPersonal en celular",
    caption: "Inicio",
  },
  {
    src: "/projects/agenda/02_dinero.png",
    alt: "Pantalla de Dinero de AgendaPersonal en celular",
    caption: "Dinero",
  },
  {
    src: "/projects/agenda/03_faltante.png",
    alt: "Faltante del mes en AgendaPersonal, en celular",
    caption: "Faltante",
  },
  {
    src: "/projects/agenda/04_agenda.png",
    alt: "Agenda del día en AgendaPersonal, en celular",
    caption: "Agenda",
  },
  {
    src: "/projects/agenda/05_metas.png",
    alt: "Metas en AgendaPersonal, en celular",
    caption: "Metas",
  },
  {
    src: "/projects/agenda/06_mas.png",
    alt: "Pantalla Más de AgendaPersonal en celular",
    caption: "Más",
  },
] as const;

const rockyShots = [
  {
    src: "/projects/rocky/best_06_mobile_sala.png",
    alt: "Rocky en la sala de la casa, en celular",
    caption: "Sala",
  },
  {
    src: "/projects/rocky/best_07_mobile_habitacion.png",
    alt: "Rocky en la habitación de la casa, en celular",
    caption: "Habitación",
  },
  {
    src: "/projects/rocky/best_08_mobile_parque.png",
    alt: "Rocky en el parque, en celular",
    caption: "Parque",
  },
  {
    src: "/projects/rocky/best_extra_mobile_looks.png",
    alt: "Pantalla de looks del robot Rocky, en celular",
    caption: "Looks del robot",
  },
] as const;

const learnmateShots = [
  {
    src: "/projects/learnmate/best_01_mobile_home.png",
    alt: "Inicio de LearnMate en celular, con insights y alertas",
    caption: "Inicio",
  },
  {
    src: "/projects/learnmate/best_02_mobile_horarios.png",
    alt: "Pantalla de horarios de LearnMate en celular",
    caption: "Horarios",
  },
  {
    src: "/projects/learnmate/best_03_mobile_examenes.png",
    alt: "Pantalla de exámenes de LearnMate en celular",
    caption: "Exámenes",
  },
  {
    src: "/projects/learnmate/best_04_mobile_kora.png",
    alt: "Chat de Kora AI en LearnMate, en celular",
    caption: "Kora AI",
  },
  {
    src: "/projects/learnmate/best_05_mobile_bienestar.png",
    alt: "Pantalla de bienestar de LearnMate en celular",
    caption: "Bienestar",
  },
  {
    src: "/projects/learnmate/best_06_mobile_perfil.png",
    alt: "Configuración de perfil de LearnMate en celular",
    caption: "Perfil",
  },
] as const;

const skills = [
  {
    dir: "Lenguajes/",
    files: ["Python", "JavaScript", "TypeScript", "PHP", "Dart", "SQL", "Solidity"],
  },
  {
    dir: "Frontend-mobile/",
    files: ["React", "Next.js", "Angular", "Flutter", "Vite", "Tailwind", "HTML/CSS", "PWA"],
  },
  {
    dir: "Backend-apis/",
    files: ["Django", "NestJS", "Node.js", "FastAPI", "REST", "Swagger", "JWT", "OAuth"],
  },
  {
    dir: "Bases-de-datos/",
    files: ["PostgreSQL", "MySQL", "SQLite", "Supabase", "RLS"],
  },
  {
    dir: "Ia-datos/",
    files: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib", "Deep Learning", "Gemini"],
  },
  {
    dir: "Blockchain-web3/",
    files: ["Smart Contracts", "Web3.js", "Ethereum"],
  },
  {
    dir: "Devops-herramientas/",
    files: ["Git", "GitHub", "Docker", "Linux", "Postman"],
  },
] as const;

function Pills({ items }: { items: readonly string[] }) {
  return (
    <div className="pills">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function PhoneShot({
  src,
  alt,
  caption,
  sizes,
}: {
  src: string;
  alt: string;
  caption: string;
  sizes: string;
}) {
  return (
    <div className="unit">
      <div className="phone">
        <div className="shot">
          <Image src={src} alt={alt} fill sizes={sizes} />
        </div>
      </div>
      <div className="phone-cap">{caption}</div>
    </div>
  );
}

function DeskShot({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div>
      <div className="desk">
        <div className="desk-bar" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="shot">
          <Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 520px" />
        </div>
      </div>
      <div className="desk-cap">{caption}</div>
    </div>
  );
}

function WindowDots() {
  return (
    <>
      <i />
      <i />
      <i />
    </>
  );
}

export default function Home() {
  return (
    <>
      <header className="site">
        <div className="wrap">
          <a className="logo" href="#inicio">
            Zarella <b>Burbano</b>
            <span className="cursor" aria-hidden="true" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#agenda">Proyectos</a>
              </li>
              <li>
                <a href="#experiencia">Experiencia</a>
              </li>
              <li>
                <a href="#educacion">Educación</a>
              </li>
              <li>
                <a href="#habilidades">Habilidades</a>
              </li>
              <li>
                <a href="#sobre-mi">Sobre mí</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>
          <div className="right">
            <MobileMenu />
          </div>
        </div>
        <div className="stripe" />
      </header>

      <main className="wrap">
        <section className="hero" id="inicio">
          <div>
            <div className="prompt">Ingeniera de software · Pasto, Colombia</div>
            <h1>
              Desarrollo aplicaciones para el <em>día a día.</em>
            </h1>
            <p className="lead">
              Como AgendaPersonal, para organizar mi dinero y mi agenda, o LearnMate, para la vida universitaria.
            </p>
            <div className="cta">
              <a className="btn p" href="#agenda">
                Ver proyectos →
              </a>
              <span className="cvline">
                <span className="btn s ghost" aria-disabled="true">
                  Descargar CV ↓
                </span>
                <span className="ex">Por confirmar</span>
              </span>
              <a className="btn s" href="#contacto">
                Escríbeme
              </a>
            </div>
            <div className="meta">
              <span>
                <i className="dot" />
                Desarrolladora en SITI Soluciones
              </span>
              <span>React · Flutter · NestJS · Supabase</span>
            </div>
          </div>

          <div className="chat" aria-label="Conversación de ejemplo con Agenda Bot">
            <div className="top">
              <div className="av" aria-hidden="true">
                A
              </div>
              <div>
                <b>Agenda Bot</b>
                <small>En línea</small>
              </div>
            </div>
            <div className="msgs">
              <div className="m me">Pagué el gym</div>
              <div className="m bot">
                ¿Marco <b>Gym</b> como pagado este mes?
                <div className="btns">
                  <span>Confirmar</span>
                  <span>Cancelar</span>
                </div>
              </div>
              <div className="m me">¿Me alcanza para unos tenis de 250 mil?</div>
              <div className="m bot">
                <span className="ok">Sí te alcanza.</span> Te quedarían libres:
                <pre>{`Disponible     $ 1.180.000
Faltante       $   420.000
Tenis          $   250.000
──────────────────────────
Libre          $   510.000`}</pre>
              </div>
            </div>
            <div className="typing">
              <span>Agenda Bot está escribiendo…</span>
              <span className="ex">Cifras de ejemplo</span>
            </div>
          </div>
        </section>

        <section id="agenda">
          <h2 className="sec">
            <b>01</b> / Proyecto principal
          </h2>
          <article className="case">
            <div className="case-top case-top--photos">
              <div className="tag">PWA + bot de Telegram + IA · 2026</div>
              <h3>AgendaPersonal</h3>
              <p className="oneline">App para la agenda, el dinero y las metas, con un bot de Telegram.</p>
              <Pills
                items={["React", "Vite", "Supabase", "PostgreSQL + RLS", "Vercel", "Groq", "Telegram API"]}
              />
              <div className="strip strip--grid" aria-label="Capturas de celular de AgendaPersonal">
                {agendaShots.map((shot) => (
                  <PhoneShot
                    key={shot.src}
                    {...shot}
                    sizes="(max-width: 700px) 42vw, 260px"
                  />
                ))}
              </div>
            </div>
            <div className="case-bot">
              <div className="note">
                El repositorio todavía es privado y todavía falta una cuenta demo para entrar a la app sin usar una
                cuenta personal.
              </div>
              <div className="case-cta">
                <a className="btn p" href="https://agendapersonalz.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Ver app ↗
                </a>
                <span className="ex">Código privado</span>
              </div>
            </div>
          </article>
        </section>

        <section id="proyectos">
          <div className="sec">
            <b>02</b> / Más proyectos
          </div>
          <h2>
            Más <em>proyectos</em>.
          </h2>
          <div className="grid">
            <div className="pc wide" id="rocky">
              <div className="h">
                <h3>Rocky</h3>
                <span className="yr">2026</span>
              </div>
              <div className="kind">Juego web · proyecto personal</div>
              <p>Juego web de un robot y su casa, en un mundo postapocalíptico.</p>
              <div className="strip" aria-label="Capturas de celular de Rocky">
                {rockyShots.map((shot) => (
                  <PhoneShot key={shot.src} {...shot} sizes="(max-width: 700px) 42vw, 168px" />
                ))}
              </div>
              <Pills items={["React", "TypeScript", "Vite"]} />
              <div className="lk">
                <span className="ex">Código privado</span>
              </div>
            </div>

            <div className="pc wide" id="learnmate">
              <div className="h">
                <h3>LearnMate AI</h3>
                <span className="yr">2025</span>
              </div>
              <div className="kind">App móvil educativa con IA</div>
              <p>App para horarios, exámenes y bienestar en la universidad, con un asistente de IA.</p>
              <div className="strip" aria-label="Capturas de celular de LearnMate">
                {learnmateShots.map((shot) => (
                  <PhoneShot key={shot.src} {...shot} sizes="(max-width: 700px) 42vw, 168px" />
                ))}
              </div>
              <Pills items={["Flutter", "Dart", "Supabase", "IA"]} />
              <div className="lk">
                <a
                  href="https://github.com/Valentina2882/LearnMateAI_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver código ↗
                </a>
              </div>
            </div>

            <div className="pc wide" id="enerchain">
              <div className="h">
                <h3>ENERCHAIN</h3>
                <span className="yr">2025</span>
              </div>
              <div className="kind">Gestión energética · Universidad de Nariño</div>
              <p>Sistema de gestión y trazabilidad de información energética, con blockchain.</p>
              <div className="strip" aria-label="Capturas de celular de ENERCHAIN">
                <PhoneShot
                  src="/projects/enerchain/01_mobile_inicio.png"
                  alt="Inicio de sesión de ENERCHAIN en celular"
                  caption="Inicio"
                  sizes="(max-width: 700px) 42vw, 168px"
                />
                <PhoneShot
                  src="/projects/enerchain/02_mobile_registro.png"
                  alt="Registro público de ENERCHAIN en celular, con tipos de usuario"
                  caption="Registro"
                  sizes="(max-width: 700px) 42vw, 168px"
                />
              </div>
              <div className="desk-row" aria-label="Capturas de escritorio de ENERCHAIN">
                <DeskShot
                  src="/projects/enerchain/03_desktop_inicio.png"
                  alt="Inicio de sesión de ENERCHAIN en escritorio"
                  caption="Inicio en escritorio"
                />
                <DeskShot
                  src="/projects/enerchain/04_desktop_registro.png"
                  alt="Registro de ENERCHAIN en escritorio, con tipos de usuario"
                  caption="Registro en escritorio"
                />
              </div>
              <Pills
                items={["Solidity", "Django", "NestJS", "Angular", "Next.js", "PostgreSQL", "Docker"]}
              />
              <div className="lk">
                <a href="https://mte-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Ver demo ↗
                </a>
              </div>
            </div>

            <div className="pc-row pc-row--2" id="otros-proyectos">
              <div className="pc">
                <div className="h">
                  <h3>MedFinder</h3>
                  <span className="yr">2024</span>
                </div>
                <div className="kind">Ganador · hackathon Potencia Summit Nariño</div>
                <p>Plataforma de información de medicamentos con blockchain.</p>
                <Pills items={["Blockchain", "Smart Contracts"]} />
                <div className="lk">
                  <span className="ex">Falta enlace de demo</span>
                </div>
              </div>

              <div className="pc">
                <div className="h">
                  <h3>Clasificador de cáncer de piel</h3>
                  <span className="yr">2025</span>
                </div>
                <div className="kind">Investigación · deep learning</div>
                <p>Clasifica lesiones de piel con redes neuronales, sobre el dataset HAM10000.</p>
                <Pills items={["Python", "Deep Learning", "Soft-Attention", "HAM10000"]} />
                <div className="lk">
                  <a href="https://github.com/Valentina2882/RepoCancerPiel" target="_blank" rel="noopener noreferrer">
                    Ver código ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia">
          <div className="sec">
            <b>03</b> / Experiencia
          </div>
          <h2>
            Dónde he <em>trabajado</em>.
          </h2>
          <div className="term">
            <div className="bar">
              <WindowDots />
              <span>~/experiencia — zsh</span>
            </div>
            <div className="tl">
              <div className="cmd">
                $ git log --experiencia <span>--desde=2025</span>
              </div>
              <div className="job now">
                <div className="when">
                  Sep 2025 → hoy
                  <small>HEAD · actual</small>
                </div>
                <div className="body">
                  <h4>Desarrolladora de Software</h4>
                  <div className="org">SITI Soluciones · practicante → desarrolladora</div>
                  <ul>
                    <li>Apps web y móviles en producción.</li>
                    <li>Módulos académicos en SAPRED.</li>
                    <li>Lectura de hojas de respuesta con IA (Gemini).</li>
                    <li>Backend con PHP y SQL.</li>
                    <li>Apps móviles en Flutter.</li>
                  </ul>
                  <Pills items={["PHP", "SQL", "Flutter", "Dart", "React", "Gemini AI", "HeidiSQL"]} />
                </div>
              </div>
              <div className="job">
                <div className="when">Feb 2025 → feb 2026</div>
                <div className="body">
                  <h4>Desarrolladora Fullstack</h4>
                  <div className="org">Universidad de Nariño · proyecto ENERCHAIN</div>
                  <ul>
                    <li>ENERCHAIN: gestión de energía con blockchain y Solidity.</li>
                    <li>APIs con Django, Node.js y NestJS.</li>
                    <li>Interfaces con Angular y Next.js.</li>
                    <li>PostgreSQL, JWT y Docker.</li>
                  </ul>
                  <Pills
                    items={["Solidity", "Django", "Node.js", "NestJS", "Angular", "Next.js", "PostgreSQL", "Docker"]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="educacion">
          <div className="sec">
            <b>04</b> / Educación y logros
          </div>
          <h2>
            Educación y un <em>premio</em>.
          </h2>
          <div className="edu">
            <div className="box">
              <div className="k">Formación</div>
              <h4>Ingeniería de Software</h4>
              <div className="w">Universidad Cooperativa de Colombia</div>
              <div className="d">Ene 2022 — dic 2025</div>
            </div>
            <div className="box">
              <div className="k">Diploma</div>
              <h4>Codificación y Programación</h4>
              <div className="w">Samsung Innovation Campus</div>
              <div className="d">Sep 2021 — mar 2022</div>
            </div>
            <div className="box win">
              <div className="k">Ganadora · hackathon</div>
              <h4>Potencia Summit Nariño 2024</h4>
              <div className="w">Proyecto MedFinder</div>
              <p>Equipo ganador con MedFinder.</p>
            </div>
            <div className="box">
              <div className="k">Publicación · 2024</div>
              <h4>Exploring Blockchain Technology: Applications and Insights Across Multiple Fields</h4>
              <p>Usos de blockchain en distintos sectores.</p>
              <a href="https://ates.alayen.edu.iq/home/vol1/iss2/10/" target="_blank" rel="noopener noreferrer">
                Leer artículo ↗
              </a>
            </div>
          </div>
          <div className="langs">
            <span>
              Español · <b>Nativo</b>
            </span>
            <span>
              Inglés · <b>Básico</b>
            </span>
          </div>
        </section>

        <section id="habilidades">
          <div className="sec">
            <b>05</b> / Habilidades
          </div>
          <h2>
            Con lo que <em>trabajo</em>.
          </h2>
          <div className="term">
            <div className="bar">
              <WindowDots />
              <span>~/ — zsh</span>
            </div>
            <div className="ls">
              <div className="cmd">$ ls -l skills/</div>
              {skills.map((row) => (
                <div className="row" key={row.dir}>
                  <div className="dir">{row.dir}</div>
                  <div className="files">
                    {row.files.map((file) => (
                      <span key={file}>{file}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre-mi">
          <div className="sec">
            <b>06</b> / Sobre mí
          </div>
          <div className="about">
            <div className="ill">
              <Image
                src="/zare.jpg"
                alt="Ilustración de Zarella programando en su sofá, con su perro beagle y un pequeño asistente de IA"
                width={1024}
                height={1024}
                sizes="(max-width: 1020px) 420px, 420px"
              />
            </div>
            <div>
              <h2>
                Sobre <em>mí</em>.
              </h2>
              <p>
                Soy ingeniera de software de <strong>Pasto, Colombia</strong>.
              </p>
              <p>Estudié en la Universidad Cooperativa de Colombia.</p>
              <p>Hoy soy desarrolladora en SITI Soluciones.</p>
              <p>
                Me gusta crear cosas que resuelvan problemas reales, empezando por los míos. Siempre estoy aprendiendo
                algo nuevo, y casi siempre con música de fondo y un café al lado.
              </p>
              <div className="facts">
                <div>
                  <small>Base</small>
                  <b>Pasto, CO</b>
                </div>
                <div>
                  <small>Ahora</small>
                  <b>SITI Soluciones</b>
                </div>
                <div>
                  <small>Formación</small>
                  <b>Ing. de Software</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto">
          <div className="contact">
            <div className="sec center">
              <b>07</b> / Contacto
            </div>
            <h2>¿Hablamos?</h2>
            <p>Si tienes un proyecto o una vacante, escríbeme.</p>
            <div className="clinks">
              <a className="clink" href="mailto:burbanozarella05@gmail.com">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>
                  <small>Correo</small>
                  <b>burbanozarella05@gmail.com</b>
                </span>
              </a>
              <a
                className="clink"
                href="https://www.linkedin.com/in/zarella-burbano/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                </svg>
                <span>
                  <small>LinkedIn</small>
                  <b>/in/zarella-burbano</b>
                </span>
              </a>
              <a className="clink" href="https://github.com/Valentina2882" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .5z" />
                </svg>
                <span>
                  <small>GitHub</small>
                  <b>Valentina2882</b>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© 2026 Zarella Burbano · Hecho en Pasto, Colombia</span>
          <span>
            <span className="ok">●</span> Build ok · Next.js + Vercel
          </span>
        </div>
      </footer>
    </>
  );
}
