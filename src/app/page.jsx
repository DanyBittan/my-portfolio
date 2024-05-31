import HeaderMenu from "@/components/HeaderMenu";
import FileDisplay from "./../components/FileDisplay";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center bg-neutral-950">
      <HeaderMenu></HeaderMenu>
      <FileDisplay></FileDisplay>
    </main>
  );
}
{
  /* <div className=" text-white font-bold">
<span className="text-6xl">Bienvenido a mi portfolio</span>
<div className="css-selector text-5xl">Soy Daniel Bittan Graells</div>
</div> */
}
