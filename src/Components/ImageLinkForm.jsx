export default function ImageLinkForm() {
  return (
    <div className="col-span-2 col-start-3 row-start-2 flex flex-col items-start gap-4 max-sm:col-span-full max-sm:justify-self-center">
      <p className="text-center text-[1.6rem] font-bold text-white text-shadow-lg/30 max-sm:text-[22px]">
        {"This Magic Brain will detect faces in your pictures. Give it a try !"}
      </p>
      <div className="flex w-min flex-initial flex-col items-center gap-3 self-center rounded-2xl bg-stone-800/90 p-3 shadow-xl/40">
        <input
          type="search"
          placeholder="Paste Image URL"
          className="w-[70vw] rounded-2xl bg-white pl-2 font-mono text-base sm:w-[40vw]"
        />
        <button className="animate-bounce rounded-3xl bg-fuchsia-800 px-3 py-1 font-mono text-sm text-white transition-transform duration-200 ease-in hover:scale-110 hover:cursor-pointer">
          Detect
        </button>
      </div>
    </div>
  );
}
