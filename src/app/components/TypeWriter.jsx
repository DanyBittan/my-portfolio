import { useEffect, useState } from "react";

export default function TypeWriter({ texts, speed, delay, setDisplayedParagraph }) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0); // texto actual
    const [subIndex, setSubIndex] = useState(0); // letra actual
    const initialDelay = 1800

    useEffect(() => {
        // Comprobar si hemos terminado todos los textos
        if (index >= texts.length) return;

        if (subIndex === texts[index].length + 1) {
            // esperar un poco y luego pasar al siguiente texto
            setTimeout(() => {
                setIndex((prev) => prev + 1);
                setSubIndex(0);
                setDisplayedParagraph((prev) => prev + 1);
            }, delay);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + 1);
        }, index === 0 && subIndex === 0 ? initialDelay : speed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, texts, speed, delay, setDisplayedParagraph]);

    useEffect(() => {
        if (index < texts.length) {
            setDisplayedText(texts[index].substring(0, subIndex));
        }
    }, [subIndex, index, texts]);

    return <span className="text-orange-400">{displayedText}</span>;
}
