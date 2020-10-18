import React ,{useState} from 'react'
import "./Banner.css"
import {Button} from "@material-ui/core"
import Search from "./Search"
function Banner() {
    const [showSearch,setShowSearch]=useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search/>}
                <Button onClick={()=>setShowSearch(!showSearch)} variant="outlines" className="banner__searchButton">{showSearch ? "Hide" : "Search Dates"}</Button>
            </div>
                <div className="banner__info">
                    <h1>Get out and stretch your imagination</h1>
                    <h5>Plan a different kind of gateway to uncover the hidden gems near you.</h5>
                    <Button variant="outlined">Explore NearBy</Button> 
                </div>
        </div>
    )
}

export default Banner
