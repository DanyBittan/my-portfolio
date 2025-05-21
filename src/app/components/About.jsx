export default function About() {
  return (
    <section
      id="aboutme"
      className="w-full h-screen flex justify-center items-center "
    >
      <div className="w-3/4 h-4/5 bg-purple-900 border-2 border-purple-600 relative text-shadow-sm shadow-white text-pink-100 font-alien ">
        <div className="crt"></div>
        <div id="aboutText" className=" w-2/3 h-full p-4">
          <h1 className="mt-8 ml-12 text-5xl">About Me</h1>
          <p className="text-2xl w-2/3 h-fit p-8 uppercase">
            Welcome to my portfolio! <br />
            <br /> My name is Daniel Bittan graells, I am a software developer
            based on Malaga, Spain <br />
            <br /> I started my journey in the world of programming 2 years ago.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}
