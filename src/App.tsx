import { Navbar } from "@/components/Navbar";
import { Background } from "@/components/Background";
import { Hero } from "@/components/sections/Hero";
import { CharacterSheet } from "@/components/sections/CharacterSheet";
import { SkillTree } from "@/components/sections/SkillTree";
import { QuestLog } from "@/components/sections/QuestLog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="flex-1">
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
