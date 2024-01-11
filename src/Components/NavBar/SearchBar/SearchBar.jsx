import React from "react";
import "./SearchBar.css";
import './SearchList.css';
import { BsMicFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import SearchList from "./SearchList";
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function SearchBar() {

    const [searchQuery, setSearchQuery] = useState("");

	const [searchListA, setSearchListA] = useState(false)
	const TitleArray = useSelector(s=>s.videoReducer)?.data?.filter((q) =>
	q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).map(m=>m?.videoTitle)

	// const TitleArray = ["Video1", "Video2", "Animaion video", "Movie video"].filter(q=>q.toLowerCase().includes(searchQuery.toLowerCase()))

	return (
		<>
			<div className="SearchBar_Container">
				<div className="SearchBar_Container2">
					<div className="search_div">
						<input type="text" className="iBox_SearchBox" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onClick={e=>setSearchListA(true)}	/>
						<Link to={`/search/${searchQuery}`} >
						<FaSearch className="searchIcon_SearchBar" onClick= {e=>setSearchListA(false)}/>

						</Link>
						<BsMicFill className="Mic_SearchBar" />
						{searchQuery && searchListA &&
							<SearchList 
							TitleArray = {TitleArray} 
							SetSearchQuery = {setSearchQuery}
							/>
						}
					</div>
				</div>
			</div>
		</>
	);
}

export default SearchBar;
