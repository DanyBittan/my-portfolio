"use client";

import { useScramble } from "use-scramble";

export default function ScrambleText(props) {
  console.log(props);
  const { ref } = useScramble({
    text: props.text,
    speed: 1,
    scramble: 2,
    seed: 1,
    chance: 0.2,
    overdrive: 126,
    onAnimationEnd: () =>
      setTimeout(() => {
        props.setAnimation(true);
      }, 1000),
  });

  return <p ref={ref} className={`${props.classes} text-white text-shadow shadow-pink-400`} />;
}
