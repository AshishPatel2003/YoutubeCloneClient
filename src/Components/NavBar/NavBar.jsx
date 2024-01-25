import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "./logo.ico";
import SearchBar from "./SearchBar/SearchBar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { gapi } from "gapi-script";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../Pages/Auth/Auth";

function NavBar({ toggleDrawer, setEditCreateChannelBtn, setIsLogin, setIsRegister }) {
	
	const [AuthBtn, setAuthBtn] = useState(false)

	// const CurrentUser = null;
	// const CurrentUser = {
	//     result: {
	//         email: "ashishkumarpatel2003@gmail.com",
	//         joinedOn: "222-07-15T09:57:23.489Z"
	//     }
	// }

	const CurrentUser = useSelector(state=>state.currentUserReducer)



	return (
		<>
			<div className="Container_Navbar">
				<div className="Burger_Logo_Navbar">
					<div className="burger" onClick={() => toggleDrawer()}>
						<p></p>
						<p></p>
						<p></p>
					</div>
					<Link to={"/"} className="logo_div_Navbar">
						<img src={logo} alt="" />
						<p className="logo_title_Navbar">YouTube</p>
					</Link>
				</div>
				<SearchBar />
				<RiVideoAddLine size={22} className="vid_bell_Navbar" />

				<div className="apps_Box">
					<p className="appBox"></p>
					<p className="appBox"></p>
					<p className="appBox"></p>
					<p className="appBox"></p>
					<p className="appBox"></p>
					<p className="appBox"></p>
					<p className="appBox"></p>
					<p className="appBox"></p>
					<p className="appBox"></p>
				</div>
				<IoMdNotificationsOutline
					size={22}
					className="vid_bell_Navbar"
				/>
				<div className="Auth_cont_Navbar">
					{CurrentUser ? (
						<div className="Channel_logo_App" onClick={()=> setAuthBtn(true)}>
							<p className="fstChar_logo_App">
								{CurrentUser?.result.name ? (
									<>
										{CurrentUser?.result?.name
											.charAt(0)
											.toUpperCase()}
									</>
								) : (
									<>
										{CurrentUser?.result?.email
											.charAt(0)
											.toUpperCase()}
									</>
								)}
							</p>
						</div>
					) : (
						<>
							<p
										onClick={()=>{setIsLogin(true)}}
										className="Auth_Btn"
									>
										<BiUserCircle size={22} />
										<p>SignIn</p>
									</p>
						</>
					)}
				</div>
			</div>
			{ AuthBtn && 
				<Auth 
				setEditCreateChannelBtn = {setEditCreateChannelBtn}
				setAuthBtn = {setAuthBtn}
				User = {CurrentUser}
				/>
			}
		</>
	);
}

export default NavBar;
