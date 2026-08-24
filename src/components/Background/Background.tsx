export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gold-500/[0.07] blur-[120px]" />
      <div className="absolute top-1/3 -left-40 h-[460px] w-[460px] rounded-full bg-arcane-500/[0.09] blur-[120px]" />
      <div className="absolute bottom-0 -right-40 h-[460px] w-[460px] rounded-full bg-ember-500/[0.06] blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(transparent_1px,currentColor_1px),linear-gradient(90deg,transparent_1px,currentColor_1px)] [background-size:56px_56px]" />
    </div>
  );
}
