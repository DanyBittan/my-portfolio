"use client";
import About from "./components/About";
import SynthIntro from "@/components/SynthIntro";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Si hay un hash (por ejemplo #aboutMe), lo eliminamos
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Luego forzamos scroll al principio
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* puedo usar el section para sustituir el div inferior */}
      <div className="synthwave-background z-0" />
      {/* <header className="fixed w-full h-16 blur-sm bg-black/50 t-0 z-10"></header> */}
      <SynthIntro></SynthIntro>
      <About></About>
    </main>
  );
}
