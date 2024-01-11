import React, { useState } from "react";
import "./CreateEditChannel.css";
import { useDispatch, useSelector } from "react-redux";
import { updateChannelData } from "../../actions/channelUser";
import { login } from "../../actions/auth";

function CreateEditChannel({ setEditCreateChannelBtn }) {
	// const CurrentUser = {
	// 	result: {
	// 		email: "ashishkumarpatel2003@gmail.com",
	// 		joinedOn: "222-07-15T09:57:23.489Z",
	// 	},
	// };

	const CurrentUser = useSelector(state=>state.currentUserReducer)


	const [name, setName] = useState(CurrentUser?.result.name);
	const [desc, setDesc] = useState(CurrentUser?.result.desc);

    const dispatch = useDispatch();
	const handleSubmit = () => {
        if (!name){
            alert("Plz Enter Name!")
        } else if (!desc) {
            alert("Plz Enter Description !")
        } else {
            dispatch(updateChannelData(CurrentUser?.result._id, {
                name: name,
                desc: desc
            }));
            setEditCreateChannelBtn(false)
            setTimeout(() => {
                dispatch(login({email: CurrentUser?.result.email}));
            }, 5000);
        }
    };

	return (
		<div className="container_CreateEditChannel">
			<input
				type="submit"
				value={"X"}
				name="text"
				className="ibtn_x"
				onClick={() => setEditCreateChannelBtn(false)}
			/>
			<div className="container2_CreateEditChannel">
				<h1>
					{CurrentUser?.result.name ? <>Edit</> : <>Create</>} Your
					Channel
				</h1>
				<input
					type="text"
					name="text"
					placeholder="Enter Your/Channel Name"
					className="ibox"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<textarea
					type="text"
					placeholder="Enter Channel Description"
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
					className="ibox"
					rows="15"
				></textarea>
				<input type="submit" value="Submit" className="ibtn" onClick={handleSubmit} />
			</div>
		</div>
	);
}

export default CreateEditChannel;
