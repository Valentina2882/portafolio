"use client";

import { useEffect, useId, useRef, useState } from "react";

const sections = [
  { href: "#agenda", label: "Proyecto principal" },
  { href: "#proyectos", label: "Más proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#educacion", label: "Educación" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
] as const;

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        ref={buttonRef}
        className="menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        Menú ☰
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
