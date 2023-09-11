export default function Tabs(setImageUrl) {
  return (
    <form className="flex flex-col justify-centre items-center" >
      <button
        type="button"
        className=" p-2 border-2 w-full  border-gray-600 bg-gray-600
        "
      >
        <label htmlFor="file">
          <input type="file" name="" id="file" className="hidden" />
          <img src="" alt="" />
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
    </form>
  );
}
