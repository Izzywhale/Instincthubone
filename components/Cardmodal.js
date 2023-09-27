export default function Cardmodal({ setSelectedImage }) {
  const galleryimg = [
    "/color1.jpeg",
    "/color2.jpeg",
    "/color3.jpeg",
    "/color4.jpeg",
    "/color5.jpeg",
    "/color6.jpeg",
    "/color7.jpeg",
    "/color8.jpeg",
    "/color9.jpeg",
    "/color10.jpeg",
    "/color1.jpeg",
    "/color2.jpeg",
  ];
  return (
    <div className="flex flex-col items-start justify-start h-96 overflow-y-auto overflow-x-hidden p-4 w-full"> 
      <h3 className="font-semibold">COLOR & GRADIENT </h3>
      <span className=" grid md:grid-cols-4 gap-4 mt-4 ">
        {galleryimg.map((item, i) => (
          <img
            onClick={() => setSelectedImage(item)}
            src={item}
            alt={item}
            className="h-20 w-40 "
            key={i}
          />
        ))}
      </span>
    </div>
  );
}
