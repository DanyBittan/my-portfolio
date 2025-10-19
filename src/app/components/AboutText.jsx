import ScrambleText from "./ScrambleText"
import TypeWriter from "./TypeWriter"
import { useEffect, useState } from "react";

export default function AboutText() {
    const commandText = ["whoami", "skills", ""];
    const [displayedParagraph, setDisplayedParagraph] = useState(0); // Indica que parrafo sobre mi mostrar mostrar
    const [visibleSkills, setVisibleSkills] = useState([]);

    visibleSkills.map((skill, i) => console.log(skill));
    useEffect(() => {

        const techStack = ["Laravel", "React", "MySQL", "TailwindCSS", "Git", "Next.js", "Node.js", "JavaScript", "PHP", "CSS"];
        if (visibleSkills.length === techStack.length) return;

        setTimeout(() => {
            setVisibleSkills(prev => [...prev, techStack[visibleSkills.length]]);
        }, visibleSkills.length === 0 ? 50 : 500);
    }, [visibleSkills]);

    return (
        <div className="w-full h-full mb-2 sm:mb-4 px-8 relative">
            <header className="text-md w-2/4 h-auto lg:text-xl xl:text-2xl text-start mt-5 py-2 ">
                <ScrambleText text="BOOTING SYSTEM: DB-DEV OPS [OK]" />
                <div className="border-y-2 border-dashed border-purple-400 pb-2 mb-4 my-4 py-3">
                    <ScrambleText text="INITIATING PERSONAL MODULE... [LOADED]" />
                    <ScrambleText text="VERSION: D.BITTAN v1.0.1" />
                    <ScrambleText text="LOCATION: MALAGA, SPAIN" />
                </div>
            </header>
            <div className="md:flex flex-col gap-8 hidden text-lg lg:text-xl xl:text-2xl">
                <p className={`${displayedParagraph < 1 ? "hidden" : "visible"}`}>
                    Hey there, I’m Daniel Bittan Graells — a junior web developer who enjoys turning ideas into interactive experiences.
                </p>
                <div className={`${displayedParagraph < 2 ? "hidden" : "flex"} space-y-1 flex-col flex-wrap h-48`}>
                    {visibleSkills.map((skill, i) => (
                        <div
                            key={i}
                            className="pl-4 tracking-widest"
                        >
                            ▸ {skill}
                        </div>
                    ))}
                </div>
                <div id='command_line' className="flex gap-2 h-7 mt-4">
                    <ScrambleText text="USERS@DANIEL BITTAN >" />
                    <div className="max-w-fit">
                        <TypeWriter texts={commandText} speed={50} delay={50} setDisplayedParagraph={setDisplayedParagraph} />
                    </div>
                    <span className="blinking-caret border-b-4 w-4" />
                </div>
            </div>
        </div >
    )
}
