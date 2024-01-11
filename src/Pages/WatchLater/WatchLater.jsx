import React from 'react'
import WHL from '../../Components/WHL/WHL'
import { useSelector } from 'react-redux';

function WatchLater() {

  const watchLaterList = useSelector(state=>state.watchLaterReducer);
  // console.log(watchLaterList)

  // const WatchLater = [
  //   {
  //     _id: 1, 
  //     video_src: vid,
  //     Channel: "add",
  //     title: "Video 1",
  //     Uploader: "abc",
  //     description: "Description of Video 1"
  //   },
  //   {
  //     _id: 3, 
  //     video_src: vid,
  //     Channel: "cdd",
  //     title: "Video 3",
  //     Uploader: "abc",
  //     description: "Description of Video 3"
  //   },
  //   {
  //     _id: 5, 
  //     video_src: vid,
  //     Channel: "bdd",
  //     title: "Video 5",
  //     Uploader: "abc",
  //     description: "Description of Video 5"
  //   },
  // ]
  
  return (
    <WHL page={"Watch Later Videos"} videoList={watchLaterList} />
    )
}

export default WatchLater