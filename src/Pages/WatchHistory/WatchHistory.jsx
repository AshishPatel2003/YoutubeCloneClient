import React from 'react'
import WHL from '../../Components/WHL/WHL'
import { useSelector } from 'react-redux';

function WatchHistory() {

  const historyList = useSelector(state=>state.HistoryReducer);


  return (
    <WHL page={"History"} videoList={historyList} />
  )
}

export default WatchHistory