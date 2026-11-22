"use client";

import { useEffect, useId, useState } from "react";

const sections = [
  { href: "#agenda", label: "caso estrella" },
  { href: "#proyectos", label: "más proyectos" },
  { href: "#experiencia", label: "experiencia" },
  { href: "#educacion", label: "educación" },
  { href: "#habilidades", label: "habilidades" },
  { href: "#sobre-mi", label: "sobre mí" },
  { href: "#contacto", label: "contacto" },
] as const;

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        menú ☰
      </button>
      <div className="menu-panel" id={panelId} hidden={!open}>
        <ul>
          {sections.map((section) => (
            <li key={section.href}>
              <a href={section.href} onClick={() => setOpen(false)}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
