import axios from "axios";
import urls from "./../data/url.json";
const API = axios.create({ baseURL: urls.local_server_url });
API.interceptors.request.use((req) => {
	if (localStorage.getItem("Profile")) {
		req.headers.authorization = `Bearer ${JSON.parse(
			localStorage.getItem("Profile")).token
		}`;
	}

	return req;
});

export const login = (authData) => API.post("/user/login", authData);
export const updateChannelData = (id, updateData) => API.patch(`/user/update/${id}`, updateData);
export const fetchAllChannel = () => API.get('/user/getAllChannels');

export const uploadVideo = (fileData, fileOptions) => API.post('/video/uploadVideo', fileData, fileOptions);
export const getAllVideo = () => API.get('/video/getvideos');
export const likeVideo = (id, Like) => API.patch(`/video/like/${id}`, {Like})
export const viewsVideo = (id) => API.patch(`/video/views/${id}`);

export const addToLikedVideo = (likedVideoData) => API.post('/video/likeVideo', likedVideoData);
export const getAlllikedVideo = () => API.get('/video/getAlllikeVideo');
export const deleteLikedVideo = (videoId, Viewer) => API.delete(`/video/deleteLikedVideo/${videoId}/${Viewer}`)


export const addTowatchLater = (watchLaterData) => API.post('/video/watchLater', watchLaterData);
export const getAllwatchLater = () => API.get('/video/getAllwatchLater');
export const deleteWatchLater = (videoId, Viewer) => API.delete(`/video/deleteWatchLater/${videoId}/${Viewer}`)

export const addToHistory = (HistoryData) => API.post('/video/history', HistoryData);
export const getAllHistory = () => API.get('/video/getAllHistory');
export const clearHistory = (userId) => API.delete(`/video/clearHistory/${userId}`)

export const postComment = (CommentData) => API.post('/comment/post', CommentData)
export const deleteComment = (id) => API.delete(`/comment/delete/${id}`)
export const editComment = (id, commentBody) => API.patch(`/comment/edit/${id}`, {commentBody})
export const getAllComments = () => API.get(`/comment/get`)