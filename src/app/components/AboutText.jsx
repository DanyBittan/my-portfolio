import ScrambleText from "./ScrambleText";
import TypeWriter from "./TypeWriter";
import { useEffect, useState } from "react";

export default function AboutText() {
    const commandText = ["whoami", "skills", ""];
    const [displayedParagraph, setDisplayedParagraph] = useState(0);
    const [visibleSkills, setVisibleSkills] = useState([]);

    useEffect(() => {
        if (displayedParagraph !== 3) return;

        const techStack = [
            "Laravel",
            "React",
            "MySQL",
            "TailwindCSS",
            "Git",
            "Next.js",
            "Node.js",
            "JavaScript",
            "PHP",
            "CSS",
        ];

        if (visibleSkills.length === techStack.length) return;

        const timeout = setTimeout(() => {
            setVisibleSkills((prev) => [...prev, techStack[visibleSkills.length]]);
        }, visibleSkills.length === 0 ? 50 : 350);

        return () => clearTimeout(timeout);
    }, [visibleSkills, displayedParagraph]);

    return (
        <div className="w-full h-full flex flex-col relative">
            {/* --- CONTENIDO SCROLLABLE --- */}
            <div className="flex-1 relative overflow-y-auto">
                <header className="w-full md:w-2/4 h-auto text-md lg:text-xl xl:text-2xl text-start mt-5 py-2 px-6 md:px-8">
                    <ScrambleText text="BOOTING SYSTEM: DB-DEV OPS [OK]" />
                    <div className="border-y-2 border-dashed border-purple-400 pb-2 mb-4 my-4 py-3">
                        <ScrambleText text="INITIATING PERSONAL MODULE... [LOADED]" />
                        <ScrambleText text="VERSION: D.BITTAN v1.0.1" />
                        <ScrambleText text="LOCATION: MALAGA, SPAIN" />
                    </div>
                </header>

                <div className="h-auto flex flex-col gap-4 md:gap-6 text-md md:text-lg lg:text-xl xl:text-2xl px-6 md:px-8 mb-[4rem]">
                    <p className={`${displayedParagraph < 1 ? "hidden" : "visible"}`}>
                        Hey there, I’m Daniel Bittan Graells — a junior web developer who
                        enjoys turning ideas into interactive experiences.
                        <br />
                        I am a huge nerd for comics, video games, and technology in general.
                    </p>

                    <span className={`${displayedParagraph < 2 && "hidden"}`}>
                        Some of technological stack :
                    </span>

                    <div
                        className={`${displayedParagraph < 2 ? "hidden" : "flex"
                            } space-y-1 flex-col flex-wrap h-36 lg:h-44 xl:h-52`}
                    >
                        {visibleSkills.map((skill, i) => (
                            <div key={i} className="pl-4 tracking-widest text-orange-400">
                                ▸ {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                id="command_line"
                className="crt bg-violet-950/95 backdrop-blur-sm flex pt-2 w-full gap-1 h-10 xl:h-12 border-t-2 border-purple-500/40 text-md md:text-lg lg:text-xl xl:text-2xl px-4 z-50 sticky bottom-0 items-center"
            >
                <ScrambleText text="USERS@DANIEL BITTAN >" />
                <div className="max-w-fit">
                    <TypeWriter
                        texts={commandText}
                        speed={150}
                        delay={1200}
                        setDisplayedParagraph={setDisplayedParagraph}
                    />
                </div>
                <span className="blinking-caret border-b-4 w-4 h-7" />
            </div>
        </div>
    );
}
