import React from "react";
import "./Comments.css";
import { useState } from "react";
import DisplayComments from "./DisplayComments";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../actions/comments";

function Comments({videoId}) {

    const [commentText, setCommentText] = useState("");

	const CurrentUser = useSelector((state) => state?.currentUserReducer);

    const commentsList = useSelector(s=>s?.commentReducer)

    const dispatch = useDispatch();


    const handleOnSubmit = (e) =>{
        e.preventDefault();

        if (!CurrentUser){
            alert("Please Login to post your comment.")
        } else {
        if (!commentText) {
            alert("Please Type your comment !")
        } else {
            dispatch(postComment({
                videoId: videoId,
                userId: CurrentUser?.result._id,
                commentBody: commentText,
                userCommented: CurrentUser?.result.name,
            }));
            setCommentText("");
        }}
    }

	return (
		<>
			<form className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
				<input
					className="comment_ibox"
					type="text"
                    onChange={(e)=>setCommentText(e.target.value)}
                    value={commentText}
					placeholder="Add Comment..."
				/>
				<input
					className="comment_add_btn_comments"
					type="submit"
					value="Add"
				/>
			</form>
            <div className="display_comment_container">
                {
                    commentsList?.data?.filter(q=>videoId === q?.videoId).reverse().map(m=>{
                        return (
                        <DisplayComments 
                        cId={m._id}
                        userId = {m.userId}
                        commentBody={m.commentBody}
                        commentOn = {m.commentOn}
                        userCommented={m.userCommented}
                        />
                        )
                    })
                }
            </div>
		</>
	);
}

export default Comments;
