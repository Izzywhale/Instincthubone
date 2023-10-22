import { useState } from "react";

export default function SplashModalList({ setSelectedImage }) {
	const [data, setData] = useState({});
	const [searchInput, setSearchInput] = useState("");

	const getUnsplashObject = async () => {
		console.log(searchInput);
		try {
			const req = await fetch(
				`https://api.unsplash.com/search/photos?query=${searchInput}&per_page=100&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
			);
			const response = await req.json();
			setData(response);
		} catch (error) {
			console.error("Error fetching getUnsplashObject:", error);
		}
	};

	return (
		<div className="flex flex-col items-start justify-start h-96 overflow-y-auto overflow-x-hidden p-4 w-full">
			<div className="flex justify-center items-center gap-6 ">
			<input
				type="text"
				name=""
				id="searchbox"
				className="w-[600px] rounded-md p-1 placeholder:italic shadow-sm"
				placeholder="Search for an image ..."
				onInput={(e) => setSearchInput(e.target.value)}
				value={searchInput}
			/>
			<button type="button" onClick={getUnsplashObject} className="  bg-blue-500 text-white px-3 py-1.5 rounded-md">
				Search
			</button>

			</div>
			<span className=" grid md:grid-cols-4 gap-4 mt-4  ">
				{data?.results?.map((option, index) => (
					<img
						style={{ cursor: "pointer" }}
						key={index}
						onClick={() => setSelectedImage(option.urls.regular)}
						src={option.urls.regular}
						alt={option}
						className="h-20 w-40 object-cover "
					/>
				))}
			</span>
		</div>
	);
}
