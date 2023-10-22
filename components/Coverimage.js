"use client";

import { useState } from "react";
import CardModal from "./CardModal";
import LinkBox from "./LinkBox";
import Tabs from "./Tabs";
import SplashModalList from "./SplashModalList";
import Image from "next/image";

export default function CoverImage() {
  // const [selectedImage, setSelectedImage] = useState("../public/cover1.jpg");
  const [selectedImage, setSelectedImage] = useState("");
  const [tab, setTab] = useState("Gallery");
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  

  const tabLinks = ["Gallery", "Upload", "Link", "Unsplash"];

  /* Update the imageUrl state when the input value changes */

  const handleInputChange = event => {
     setImageUrl(event.target.value);

  };

   /* Do something with the image url such as displaying it in a div*/

  const handleSubmit = event => {
   event.preventDefault(); 
  };

    /* Do something with the uploaded image file */
    

  return (
    <div className="w-full relative">
      <div className="w-full h-[400px]">
        <Image
          src={selectedImage}
          alt="CoverPicture"
          className="w-full h-full object-cover"
        />
      </div>

       <div className="w-full h-[400px]">
        <img
          src={selectedImage}
          alt="CoverPicture"
          className="w-full h-full object-cover"
        />
      </div>

      

      {open === false && (
        <button
          onClick={() => setOpen(true)}
          className="bg-gray-700 absolute right-24 bottom-5 p-3 border rounded-lg border-gray-700 outline-none"
        >
          Change cover
        </button>
      )}

      

      {open === true && (
        <div className="w-[750px] bg-gray-500 flex flex-col gap-0 rounded-md absolute right-24 top-[400px]">
          {/* TabHeader */}
          <div className="w-full border-b flex items-center justify-between gap-6 p-3">
            <ul className="w-fit flex items-center gap-4">


              {tabLinks.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setTab(item)}
                  className={`${
                    item === tab ? "border-2 border-black bg-blue-300" : ""
                  }  px-4 border-blue-300 rounded-md cursor-pointer`}
                >
                  <div className='flex'>

                  {item === "Unsplash" ? (
                    
                    <img src="/unsplash_icon.png" alt="unsplash-icon" className="w-[20px]  " />
                    ) : ""}
                  {item}
                  </div>
                </li>
              ))}
            </ul>

            <span
              onClick={() => setOpen(false)}
              className="flex flex-wrap gap-2"
            >
              {/* { <Image src="/icon.png" alt="" className="w-5 flex" /> } */}
              <img src="/icon.png" alt="" className="w-2 flex" />
              <button> Remove</button>
            </span>
          </div>

          {/* TabHeader1 */}

          <div className="w-full h-fit p-2">
            {tab === "Gallery" && <CardModal  setSelectedImage={setSelectedImage}/>}
          </div>

          {/* TabHeader2 */}

          <div>
            {tab === "Upload" && <Tabs  setSelectedImage={setSelectedImage}/>}
          </div>

          {/* TabHeader3 */}

          <div className="w-full h-fit p-2 pt-0">
            {tab === "Link" && <LinkBox setSelectedImage={setSelectedImage}/> }

          </div>

          {/* TabBody4 */}
          <div>
        {tab === "Unsplash" && <SplashModalList setSelectedImage={setSelectedImage}/>}
          </div>
        </div>
    
        
      )}
    </div>
  );
}
