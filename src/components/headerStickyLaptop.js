import React, { useEffect } from 'react';
import { DataLayer, useDataLayerValue } from "./dataLayer";
import './headerStickyLaptop.css'
import SearchIcon from "@mui/icons-material/Search";


const HeaderStickyLaptop = (props) => {
	const [{user},dispatch]=useDataLayerValue();
	useEffect(()=>{
		window.addEventListener("scroll",headerSticky)
		return () => {
			window.removeEventListener("scroll",headerSticky)
		}
	},[])

	const headerSticky = () => {
		const header = document.querySelector(".header-sticky-laptop");
		const scrollTop = window.scrollY;
		scrollTop>=20 ? header.classList.add("is-sticky") : header.classList.remove("is-sticky");
	}

	return (
		<>
			<div className="header-sticky-laptop">
				{props.search && <div className='search-page-wrap'>
					<div className="search-block">            
						<input type="text" name="" id="" className='search-input' placeholder='What do you want to listen to?'/>
						<SearchIcon className='search-btn'/> 
					</div>
				</div>}
				<button className='header-profile_btn'>
					<img src={user?.images[0]?.url} alt="" className='sticky-header-user-img'/>
					{user?.display_name || "Vaishali"}</button>
			</div>

		</>
	)
}

export default HeaderStickyLaptop