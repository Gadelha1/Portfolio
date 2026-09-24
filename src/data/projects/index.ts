import { safeEcoTour } from "./safe-eco-tour";
import { lojaVisgoDeJaca } from "./loja-visgo-de-jaca";
import { pilatesStudioSystem } from "./pilates-studio-system";
import { p2ReactNative } from "./p2-react-native";
import { frontendLeads } from "./frontend-leads";
import { ap1Games } from "./ap1-games";
import { mobileLeads } from "./mobile-leads";
import { mobileLeadsV2 } from "./mobile-leads-v2";
import type { Project } from "./type";

export const projects: Project[] = [
  safeEcoTour,
  lojaVisgoDeJaca,
  pilatesStudioSystem,
  p2ReactNative,
  frontendLeads,
  ap1Games,
  mobileLeads,
  mobileLeadsV2,
];

export type { Project, ProjectStat, Print } from "./type";