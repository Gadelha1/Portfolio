import { attributes } from "@/data/profile";
import { AttributeBar } from "@/components/ui/AttributeBar/AttributeBar";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Reveal } from "@/components/ui/Reveal/Reveal";

export function CharacterSheet() {
  return (
    <section id="atributos" className="section">
      <SectionHeading
        eyebrow="Ficha de personagem"
        title="Atributos"
        description="Os atributos que distribuo entre meus projetos. Os pontos evoluem a cada semestre."
      />
      <Reveal>
        <div className="panel mx-auto max-w-3xl rounded-xl p-6 md:p-8">
          <div className="grid gap-7 sm:grid-cols-2">
            {attributes.map((attribute) => (
              <AttributeBar
                key={attribute.id}
                label={attribute.label}
                value={attribute.value}
                description={attribute.description}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
