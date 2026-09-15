import type { Print } from "@/data/projects";
import "./css/PrintGallery.css";

interface PrintGalleryProps {
  prints: Print[];
}

export function PrintGallery({ prints }: PrintGalleryProps) {
  return (
    <div className="grid gap-4">
      {prints.map((print) => (
        <figure key={print.src} className="print-card">
          <img
            src={print.src}
            alt={print.legenda}
            className="print-card-image"
            loading="lazy"
          />
          <figcaption className="print-card-caption">
            {print.legenda}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
