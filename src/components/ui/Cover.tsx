interface CoverProps {
  accent: string;
  titulo: string;
  imagem?: string;
}

export function Cover({ accent, titulo, imagem }: CoverProps) {
  const iniciais = titulo
    .split(" ")
    .slice(0, 2)
    .map((palavra) => palavra[0])
    .join("");

  if (imagem) {
    return (
      <div
        className="cover"
        style={{ background: `linear-gradient(150deg, ${accent}, #14121f 85%)` }}
      >
        <img src={imagem} alt={`Capa do projeto ${titulo}`} className="cover-image" />
        <div className="cover-shade" />
      </div>
    );
  }

  return (
    <div
      className="cover"
      style={{
        background: `radial-gradient(120% 120% at 20% 10%, ${accent}55, transparent 60%), linear-gradient(150deg, ${accent}88, #14121f 70%)`,
      }}
    >
      <span className="cover-iniciais" style={{ textShadow: `0 0 30px ${accent}` }}>
        {iniciais}
      </span>
      <div className="cover-hatch" />
      <div className="cover-shade" />
    </div>
  );
}
