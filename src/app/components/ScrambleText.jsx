"use client";
import React, { useEffect, useState } from "react";

export default function ScrambleText({}) {
  const welcomeText = "Welcome to my portfolio!";
  const [scramble, setScramble] = useState([]);

  useEffect(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?~`¿¡";
    const splitText = welcomeText.split("");
    while (splitText.length > 0) {
      let posicion = Math.floor(Math.random() * splitText.length);
      let elemento = splitText.splice(posicion, 1)[0];
      setScramble(elemento);
    }
  }, []);
  console.log(scramble);

  return <div className="text-5xl">{scramble}</div>;
}
