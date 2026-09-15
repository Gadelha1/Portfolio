import { paginaSemanticaHtml } from "./pagina-semantica-html";
import { safeEcoTour } from "./safe-eco-tour";
import { lojaVisgoDeJaca } from "./loja-visgo-de-jaca";
import { pilatesStudioSystem } from "./pilates-studio-system";
import { p2ReactNative } from "./p2-react-native";
import { siteServicosAws } from "./site-servicos-aws";
import { ap1Games } from "./ap1-games";
import { calculadoraReact } from "./calculadora-react";
import type { Project } from "./type";

export const projects: Project[] = [
  paginaSemanticaHtml,
  safeEcoTour,
  lojaVisgoDeJaca,
  pilatesStudioSystem,
  p2ReactNative,
  siteServicosAws,
  ap1Games,
  calculadoraReact,
];

export type { Project, ProjectStat, Print } from "./type";
