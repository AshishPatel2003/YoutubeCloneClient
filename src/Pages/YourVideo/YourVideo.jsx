import React from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import "./YourVideo.css";
import { useSelector } from "react-redux";

function YourVideo() {
	const CurrentUser = useSelector((state) => state?.currentUserReducer);
	const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChannel===CurrentUser?.result._id).reverse();
	
	
	// const vids = [
	// 	{
	// 		_id: 1,
	// 		video_src: vid,
	// 		Channel: "add",
	// 		title: "Video 1",
	// 		Uploader: "abc",
	// 		description: "Description of Video 1",
	// 	},
	// 	{
	// 		_id: 2,
	// 		video_src: vid,
	// 		Channel: "bdd",
	// 		title: "Video 2",
	// 		Uploader: "abc",
	// 		description: "Description of Video 2",
	// 	},
	// 	{
	// 		_id: 3,
	// 		video_src: vid,
	// 		Channel: "cdd",
	// 		title: "Video 3",
	// 		Uploader: "abc",
	// 		description: "Description of Video 3",
	// 	},
	// 	{
	// 		_id: 4,
	// 		video_src: vid,
	// 		Channel: "bdd",
	// 		title: "Video 4",
	// 		Uploader: "abc",
	// 		description: "Description of Video 4",
	// 	},
	// 	{
	// 		_id: 5,
	// 		video_src: vid,
	// 		Channel: "bdd",
	// 		title: "Video 5",
	// 		Uploader: "abc",
	// 		description: "Description of Video 5",
	// 	},
	// ];

	return (
		<div className="container_Pages_App">
			<LeftSidebar />
			<div className="container2_Pages_App">
				<div className="container_yourvideo">
					<h1>Your Videos</h1>
					{
						CurrentUser ? (<>
							<ShowVideoGrid vids={vids} />
						</>) : (<>
						<h3>Please Login to see Your uploaded Video List</h3>
						</>)
					}
				</div>
			</div>
		</div>
	);
}

export default YourVideo;
