export default function Splashmodal({ setSelectedImage }) {
    const galleryimg = [
      "/robot1.jpg",
      "/robot2.jpg",
      "/robot3.jpg",
      "/robot4.jpg",
      "/robot5.jpg",
      "/robot6.jpg",
      "/robot1.jpg",
      "/robot2.jpg",
      "/robot3.jpg",
      "/robot4.jpg",
      "/robot5.jpg",
      "/robot6.jpg",
    ];
    return (
        
      <div className="flex flex-col items-start justify-start h-96 overflow-y-auto overflow-x-hidden p-4 w-full">
        <input type="text" name="" id="searchBox" className="w-[690px] rounded-md p-1 bg-black placeholder:italic shadow-sm" placeholder="Search for an image ..."/>
        <span className=" grid md:grid-cols-4 gap-4 mt-4  ">
          {galleryImg.map((item, i) => (
            <img
              onClick={() => setSelectedImage(item)}
              src={item}
              alt={item}
              className="h-20 w-40 object-cover"
            />
          ))}
        </span>
      </div>
    );
  }