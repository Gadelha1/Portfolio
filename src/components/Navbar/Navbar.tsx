import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import "./css/Navbar.css";

const links = [
  { href: "#atributos", label: "Atributos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#quests", label: "Quests" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="brand"
        >
          Gabriel Alves Gadelha
        </button>
        <nav className="flex items-center gap-1 overflow-x-auto">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="nav-progress" style={{ "--progress": progress } as CSSProperties} />
    </header>
  );
}
