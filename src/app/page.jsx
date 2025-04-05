import About from "./components/About";
import SynthIntro from "./components/SynthIntro";

export default function Home() {
  return (
    <main>
      {/* puedo usar el section para sustituir el div inferior */}
      <div className="synthwave-background z-0" />
      <SynthIntro></SynthIntro>
      <About></About>
    </main>
  );
}
