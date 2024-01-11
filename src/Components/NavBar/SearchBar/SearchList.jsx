import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchList({ TitleArray, SetSearchQuery }) {
	return (
		<div className="Container_SearchList">
			{TitleArray.map((m) => {
				return (
					<p 
                    className="titleItem"
                    key={m}
                    onClick={e=>SetSearchQuery(m)}>
						<FaSearch />
                        {m}
                    </p>
                    
				);
			})}
		</div>
	);
}

export default SearchList;
