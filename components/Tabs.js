import { useState } from "react";

export default function Tabs(props) {
  const [file, setFile] = useState(null);

  console.log(file);

  return (
    <form className="flex flex-col justify-centre items-center">
      <button
        type="button"
        className=" p-2 border-2 w-full  border-gray-600 bg-gray-600
        "
      >
        <label htmlFor="file">
          <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            accept="image/jpg, image/jpeg, image/png"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />

          <span> upload</span>
        </label>
      </button>

      <p className="m-4  text-white">
        {" "}
        Images wider than 1500 pixels work best.
      </p>
      <p className="m-4 text-white ">
        The maximum size per file is 5mb{" "}
        <span className="border-2  border-gray-600 from-neutral-100 bg-gray-600 rounded-md text-xs">
          PLUS
        </span>
      </p>

      {file && (
        <img
          src={URL.createObjectURL(file)}
          className="w-[700px] h-[1000px]"
          onClick={() => {
            props.setSelectedImage(URL.createObjectURL(file));
          }}
        />
      )}
    </form>
  );
}
