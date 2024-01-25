import React, { useEffect } from "react";
import { FaEdit, FaUpload } from "react-icons/fa";
import "./DescribeChannel.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { fetchAllChannel } from "../../actions/channelUser";

function DescribeChannel({setVidUploadPage, Cid, setEditCreateChannelBtn }) {

	
	
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(login({email: CurrentUser?.result.email}))
		dispatch(fetchAllChannel());
	}, [])
	
	const channels = useSelector(state=>state.channelReducers);

	const CurrentUser = useSelector(state=>state.currentUserReducer);
	console.log("Channel", channels);
	console.log("Ashish", CurrentUser);

	const currentChannel = channels.filter((c) => c._id === Cid)[0];

	console.log(currentChannel);

	return (
		<div className="container3_channel">
			<div className="channel_logo_channel">
				<b>{currentChannel?.name.charAt(0).toUpperCase()}</b>
			</div>
			<div className="description_channel">
				<b>{currentChannel?.name}</b>
				<p>{currentChannel?.desc}</p>
			</div>
			{CurrentUser?.result._id === currentChannel?._id && (
				<>
					<p
						className="editbtn_channel"
						onClick={() => setEditCreateChannelBtn(true)}
					>
						<FaEdit />
						<b>Edit Channel</b>
					</p>
					<p className="uploadbtn_channel" onClick={() => setVidUploadPage(true)}>
						<FaUpload />
						<b>Upload Video</b>
					</p>
				</>
			)}
		</div>
	);
}

export default DescribeChannel;
