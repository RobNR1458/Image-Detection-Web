export default function ImageLinkForm({
  onSubmitImage,
  onImageLinkAdded,
  ImageLink,
}) {
  return (
    <div className="col-span-full row-start-2 flex flex-col items-center gap-4">
      <p className="text-center text-[1.5rem] font-bold text-white text-shadow-lg/30 max-sm:text-[22px]">
        {"This Magic Brain will detect faces in your pictures. Give it a try !"}
      </p>
      <div className="flex min-h-20 flex-col items-center gap-3 self-center rounded-2xl bg-stone-800/90 p-3 shadow-xl/40">
        <input
          value={ImageLink}
          onChange={(e) => onImageLinkAdded(e.target.value)}
          type="search"
          placeholder="Paste Image URL"
          className="min-h-5 w-[70vw] rounded-2xl bg-white pl-2 font-mono text-base sm:w-[40vw]"
        />
        <button
          onClick={onSubmitImage}
          className="min-h-7 animate-bounce rounded-3xl bg-fuchsia-800 px-3 py-1 font-mono text-sm text-white transition-transform duration-200 ease-in hover:scale-110 hover:cursor-pointer"
        >
          Detect
        </button>
      </div>
    </div>
  );
}
