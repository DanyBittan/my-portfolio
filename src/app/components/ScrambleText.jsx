"use client";

import { useScramble } from "use-scramble";

export default function ScrambleText(props) {
  const { ref } = useScramble({
    text: "Welcome to my portfolio!",
    speed: 0.4,
    scramble: 5,
    seed: 4,
    chance: 0.4,
    overdrive: 126,
    onAnimationEnd: () =>
      setTimeout(() => {
        props.setAnimation(true);
      }, 1000),
  });

  return <span ref={ref} className="text-5xl text-white text-shadow shadow-pink-400" />;
}
