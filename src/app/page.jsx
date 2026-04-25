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
      <div className="synthwave-background z-0" />
      <SynthIntro></SynthIntro>
      <About></About>
    </main>
  );
}
