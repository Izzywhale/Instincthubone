import { useState } from "react";

export default function LinkBox(props) {
    const [linkInput, setLinkInput] = useState("")
  const handleNewLink = (e) => {
    setLinkInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.setSelectedImage(linkInput)
    // Submit link to the server
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center justify-center"
      >
        <input
          type="text"
          name=""
          id="searchBox"
          onChange={handleNewLink}
          value={linkInput}
          className="w-full rounded-md p-1 bg-black placeholder:italic shadow-sm"
          placeholder="Paste an image link... }"
        />
        <button
          type="submit"
          className="bg-blue-500 border-blue-500 p-1.5 m-2 rounded-lg hover:bg-sky-700"
        >
          Submit
        </button>
        <p>Works with any image from the web.</p>
      </form>
    </div>
  );
}
