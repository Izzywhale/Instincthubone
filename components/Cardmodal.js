export default function CardModal({ setSelectedImage }) {
  const galleryImg = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fplain-color-background&psig=AOvVaw33GNBkopS9H0Vit-QuYy-c&ust=1697203603795000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIiZzqHO8IEDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapersafari.com%2Fplain-color-wallpaper%2F&psig=AOvVaw33GNBkopS9H0Vit-QuYy-c&ust=1697203603795000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIiZzqHO8IEDFQAAAAAdAAAAABAJ",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dplain%2Bcolor%2Bbackground&psig=AOvVaw3gpiDG2pn3MN3V8cVCGYLu&ust=1697213010786000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjR46bx8IEDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fsolid-color-backgrounds&psig=AOvVaw3gpiDG2pn3MN3V8cVCGYLu&ust=1697213010786000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjR46bx8IEDFQAAAAAdAAAAABAJ",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fplain-color-background&psig=AOvVaw3gpiDG2pn3MN3V8cVCGYLu&ust=1697213010786000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjR46bx8IEDFQAAAAAdAAAAABAS",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F004%2F611%2F187%2Fsmall%2Fred-floor-and-wall-background-3d-rendering-free-photo.jpg&tbnid=4MVZcLOpVS9eMM&vet=12ahUKEwjHkMvQ8fCBAxUSoUwKHer5C9MQMygcegUIARCwAQ..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fplain-color&docid=6XU92sTIqum7jM&w=250&h=200&q=plain%20color%20pictures&ved=2ahUKEwjHkMvQ8fCBAxUSoUwKHer5C9MQMygcegUIARCwAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffw800%2Fbackground%2F20200821%2Fpngtree-plain-red-solid-color-background-image_396556.jpg&tbnid=Q6O-5kADXD_geM&vet=12ahUKEwjHkMvQ8fCBAxUSoUwKHer5C9MQMygoegUIARDSAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffreebackground%2Fplain-red-solid-color-background_1218986.html&docid=jE-mSK5h6PBtlM&w=960&h=686&q=plain%20color%20pictures&ved=2ahUKEwjHkMvQ8fCBAxUSoUwKHer5C9MQMygoegUIARDSAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1667811946004-7c03b11fcd11%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhaW4lMjBjb2xvcnxlbnwwfHwwfHx8MA%253D%253D%26w%3D1000%26q%3D80&tbnid=C-eRTiRjal_VlM&vet=12ahUKEwjHkMvQ8fCBAxUSoUwKHer5C9MQMygzegUIARDrAQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fplain-color&docid=u9632blbIY2V0M&w=1000&h=750&q=plain%20color%20pictures&ved=2ahUKEwjHkMvQ8fCBAxUSoUwKHer5C9MQMygzegUIARDrAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsironatherapeutichorsemanship.files.wordpress.com%2F2017%2F09%2Fplain-green-wallpaper.jpg&tbnid=qes4m2pQ_XcHVM&vet=12ahUKEwjHkMvQ8fCBAxUSoUwKHer5C9MQMyg-egUIARCJAg..i&imgrefurl=https%3A%2F%2Fsironaequine.org.uk%2Fplain-green-wallpaper%2F&docid=LSpybmNzuVKEZM&w=730&h=400&q=plain%20color%20pictures&ved=2ahUKEwjHkMvQ8fCBAxUSoUwKHer5C9MQMyg-egUIARCJAg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Forange-background_23-2147674307.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1413502914.1697068800%26semt%3Dais&tbnid=-La7zAPi9y22tM&vet=12ahUKEwjHkMvQ8fCBAxUSoUwKHer5C9MQMyhQegUIARC3Ag..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fsolid-color&docid=ubaU7mu6H79YXM&w=626&h=417&q=plain%20color%20pictures&ved=2ahUKEwjHkMvQ8fCBAxUSoUwKHer5C9MQMyhQegUIARC3Ag",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fplain-colour&psig=AOvVaw3e793mlvWmq9WRqhUdrzoh&ust=1697213099682000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD4wtLx8IEDFQAAAAAdAAAAABAF",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers-hub.art%2Fgroup%2Fplain-color-computer&psig=AOvVaw3e793mlvWmq9WRqhUdrzoh&ust=1697213099682000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD4wtLx8IEDFQAAAAAdAAAAABAK",
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
