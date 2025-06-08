"use client";
import About from "./components/About";
import SynthIntro from "./components/SynthIntro";
import Projects from "./components/Projects";
import React, { useState } from "react";

export default function Home() {
  return (
    <main>
      {/* puedo usar el section para sustituir el div inferior */}
      <div className="synthwave-background z-0" />
      {/* <header className="fixed w-full h-16 blur-sm bg-black/50 t-0 z-10"></header> */}
      <SynthIntro></SynthIntro>
      <About></About>
      <Projects></Projects>
    </main>
  );
}
