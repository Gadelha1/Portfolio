import { Navbar } from "@/components/Navbar/Navbar";
import { Background } from "@/components/Background/Background";
import { Hero } from "@/components/sections/Hero/Hero";
import { CharacterSheet } from "@/components/sections/CharacterSheet/CharacterSheet";
import { SkillTree } from "@/components/sections/SkillTree/SkillTree";
import { QuestLog } from "@/components/sections/QuestLog/QuestLog";
import { Contact } from "@/components/sections/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default function App() {
  return (
    <>
      <Background />
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo" className="flex-1">
        <Hero />
        <CharacterSheet />
        <SkillTree />
        <QuestLog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
