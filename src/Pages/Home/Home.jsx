import React from 'react'
import "./Home.css"
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import { useSelector } from 'react-redux'

function Home() {

  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
  // console.log(vids)
  // const vids = [
  //    {
  //     _id: 1, 
  //     video_src: vid,
  //     Channel: "add",
  //     title: "Video 1",
  //     Uploader: "abc",
  //     description: "Description of Video 1"
  //    },
  //    {
  //     _id: 2, 
  //     video_src: vid,
  //     Channel: "bdd",
  //     title: "Video 2",
  //     Uploader: "abc",
  //     description: "Description of Video 2"
  //    },
  //    {
  //     _id: 3, 
  //     video_src: vid,
  //     Channel: "cdd",
  //     title: "Video 3",
  //     Uploader: "abc",
  //     description: "Description of Video 3"
  //    },
  //    {
  //     _id: 4, 
  //     video_src: vid,
  //     Channel: "bdd",
  //     title: "Video 4",
  //     Uploader: "abc",
  //     description: "Description of Video 4"
  //    },
  //    {
  //     _id: 5, 
  //     video_src: vid,
  //     Channel: "bdd",
  //     title: "Video 5",
  //     Uploader: "abc",
  //     description: "Description of Video 5"
  //    },
  // ]

  const NavList = [
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy"
  ]

  return (
    <div className='container_Pages_App'>
        <LeftSidebar />
        <div className="container2_Pages_App">
            <div className="navigation_Home">
            {
              NavList.map(m=>{
                return (
                  <p className="btn_nav_home">
                    {m}
                  </p>
                )
              })
            }
            </div>
            <ShowVideoGrid vids = {vids}/>
        </div>
    </div>
  )
}

export default Home