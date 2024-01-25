import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import DrawerSidebar from "./Components/LeftSidebar/DrawerSidebar";
import NavBar from "./Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import RegisterPage from "./Pages/RegisterPage/RegsiterPage.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import { useDispatch } from "react-redux";
import { fetchAllChannel } from "./actions/channelUser";
import { getAllVideo } from "./actions/video";
import { getAlllikedVideo } from "./actions/likedVideo";
import { getAllwatchLater } from "./actions/watchLater";
import { getAllHistory } from "./actions/history";
import { getAllComments } from "./actions/comments";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllChannel());
		dispatch(getAllVideo());
		dispatch(getAlllikedVideo());
		dispatch(getAllwatchLater());
		dispatch(getAllHistory());
		dispatch(getAllComments());
	}, [dispatch]);

	const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
		display: "none",
	});

	const toggleDrawer = () => {
		if (toggleDrawerSidebar.display === "none") {
			setToggleDrawerSidebar({
				display: "flex",
			});
		} else {
			setToggleDrawerSidebar({
				display: "none",
			});
		}
	};

	const [vidUploadPage, setVidUploadPage] = useState(false);
	const [EditCreateChannelBtn, setEditCreateChannelBtn] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [isRegister, setIsRegister] = useState(false);

	return (
		<Router>
			{vidUploadPage && (
				<VideoUpload setVidUploadPage={setVidUploadPage} />
			)}
			{EditCreateChannelBtn && (
				<CreateEditChannel
					setEditCreateChannelBtn={setEditCreateChannelBtn}
				/>
			)}
			{isLogin && (
				<LoginPage
					setIsLogin={setIsLogin}
					setIsRegister={setIsRegister}
				/>
			)}
			{isRegister && (
				<RegisterPage
					setIsLogin={setIsLogin}
					setIsRegister={setIsRegister}
				/>
			)}

			<NavBar
				setEditCreateChannelBtn={setEditCreateChannelBtn}
				toggleDrawer={toggleDrawer}
				setIsLogin={setIsLogin}
					setIsRegister={setIsRegister}
				
			/>

			<DrawerSidebar
				toggleDrawer={toggleDrawer}
				toggleDrawerSidebar={toggleDrawerSidebar}
			/>

			<AllRoutes
				setVidUploadPage={setVidUploadPage}
				setEditCreateChannelBtn={setEditCreateChannelBtn}
			/>
		</Router>
	);
}

export default App;
