export default function FaceRecognition({ imageUrl, ref, box }) {
  return (
    <div className="relative col-span-full row-span-1 row-start-3 mx-auto mt-2 mb-2">
      <img
        ref={ref}
        className="h-full w-full rounded-xl border-4 border-purple-700"
        src={imageUrl}
        alt="lol"
      />
      {box &&
        box.map((face, index) => {
          return (
            <div
              key={index}
              className="absolute flex cursor-pointer flex-wrap justify-center shadow-[0_0_0_3px_#149df2_inset]"
              style={{
                left: face.leftCol,
                top: face.topRow,
                right: face.rightCol,
                bottom: face.bottomRow,
              }}
            ></div>
          );
        })}
    </div>
  );
}
