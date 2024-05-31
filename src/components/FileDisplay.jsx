export default function FileDisplay() {
  return (
    <section className="w-full h-full flex-col justify-center items-center p-10">
      <div className="flex">
        <div className="w-[10%] h-12 bg-neutral-800 text-white text-2xl text-center rounded-tl-xl">
          <button className=" bg-neutral-900 w-full h-full rounded-t-xl">
            Inicio
          </button>
        </div>
        <div className="w-[5%] h-12 bg-neutral-700 text-white text-2xl text-center rounded-tl-xl">
          <button className="w-full h-full bg-neutral-800 rounded-tr-xl">
            a
          </button>
        </div>
        <div className="w-[5%] h-12 bg-neutral-600 text-white text-2xl text-center rounded-tl-xl">
          <button className="w-full h-full bg-neutral-700 rounded-tr-xl">
            a
          </button>
        </div>
        <button className="w-[5%] h-12 bg-neutral-600 text-white text-2xl text-center rounded-tr-xl">
          a
        </button>
      </div>
      <div className="w-full h-[95%] bg-neutral-900 rounded-b-xl rounded-tr-xl"></div>
    </section>
  );
}
