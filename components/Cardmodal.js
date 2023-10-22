export default function CardModal({ setSelectedImage }) {
  const galleryImg = [
    "https://images.unsplash.com/photo-1526392587392-d1627b6c134a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1526392587392-d1627b6c134a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1526392587392-d1627b6c134a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1526392587392-d1627b6c134a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1526392587392-d1627b6c134a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1526392587392-d1627b6c134a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1526392587392-d1627b6c134a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
  ];
  return (
    <div className="flex flex-col items-start justify-start h-96 overflow-y-auto overflow-x-hidden p-4 w-full">
      <h3 className="font-semibold">COLOR & GRADIENT </h3>
      <span className=" grid md:grid-cols-4 gap-4 mt-4 ">
        {galleryImg.map((item, i) => (
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
