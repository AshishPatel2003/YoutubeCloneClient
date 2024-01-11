import React from "react";
import "./Library.css";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import "./Library.css";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import WHLVideoList from "./../../Components/WHL/WHLVideoList";
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from "react-redux";


function Library() {
	const CurrentUser = useSelector(state=>state.currentUserReducer);

	const watchLaterList = useSelector(state=>state.watchLaterReducer);
	const historyList = useSelector(state=>state.HistoryReducer);
	const likedVideoList = useSelector(state=>state.likedVideoReducer);

	return (
		<div className="container_Pages_App">
			<LeftSidebar />
			<div className="container2_Pages_App">
				<div className="container_libraryPage">
					<h1 className="title_container_LibraryPage">
						<b>
							<FaHistory />
							<b>History</b>
						</b>
					</h1>
					<div className="container_videoList_LibraryPage">
						<WHLVideoList page={"History"} videoList={historyList} CurrentUser={CurrentUser?.result._id} />
					</div>
				</div>
        <div className="container_libraryPage">
					<h1 className="title_container_LibraryPage">
						<b>
							<MdOutlineWatchLater />
							<b>Watch Later</b>
						</b>
					</h1>
					<div className="container_videoList_LibraryPage">
						<WHLVideoList page={"Watch Later"} videoList={watchLaterList} CurrentUser={CurrentUser?.result._id} />
					</div>
				</div>
        <div className="container_libraryPage">
					<h1 className="title_container_LibraryPage">
						<b>
							<AiOutlineLike />
							<b>Liked Videos</b>
						</b>
					</h1>
					<div className="container_videoList_LibraryPage">
						<WHLVideoList page={"Liked Videos"} videoList={likedVideoList} CurrentUser={CurrentUser?.result._id} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Library;
