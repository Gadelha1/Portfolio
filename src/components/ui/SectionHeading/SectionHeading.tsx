import { Reveal } from "../Reveal/Reveal";
import "./css/SectionHeading.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl px-4 text-center md:mb-16">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <div className="divider-ornament mt-5" aria-hidden>
        <span className="text-base">✦</span>
      </div>
      {description && (
        <p className="mt-5 text-sm leading-6 text-mist-400 md:text-base">{description}</p>
      )}
    </Reveal>
  );
}
