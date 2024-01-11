import React from "react";
import "./Comments.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../../actions/comments";
import moment from "moment";

function DisplayComments({
	cId,
	commentBody,
	commentOn,
	userId,
	userCommented,
}) {
	const [Edit, setEdit] = useState(false);
	const [cmtBdy, setcmtBdy] = useState("");
	const [cmtId, setcmtId] = useState("");

	const dispatch = useDispatch();

	const CurrentUser = useSelector((state) => state?.currentUserReducer);

	const handleEdit = (ctId, ctBdy) => {
		setEdit(true);
		setcmtId(ctId);
		setcmtBdy(ctBdy);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (!cmtBdy) {
			alert("Type Your comments");
		} else {
			dispatch(
				editComment({
					id: cmtId,
					commentBody: cmtBdy,
				})
			);
			setcmtBdy("");
		}
		setEdit(false);
	};

	const handleDel = (cid) => {
		dispatch(deleteComment(cid))
	}

	return (
		<>
			{Edit ? (
				<>
					<form
						className="comments_sub_form_comments"
						onSubmit={handleOnSubmit}
					>
						<input
							className="comment_ibox"
							type="text"
							onChange={(e) => setcmtBdy(e.target.value)}
							value={cmtBdy}
							placeholder="Edit Comment..."
						/>
						<input
							className="comment_add_btn_comments"
							type="submit"
							value="Change"
						/>
					</form>
				</>
			) : (
				<>
					<p className="comment_body">{commentBody}</p>
				</>
			)}
			<p className="usercommented">
				{" "}
				- {userCommented} commented {moment(commentOn).fromNow()}
			</p>
			{CurrentUser?.result._id === userId && (
				<p className="EditDel_DisplayComment">
					<i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
					<i onClick={() => handleDel(cId)}>Delete</i>
				</p>
			)}
		</>
	);
}

export default DisplayComments;
