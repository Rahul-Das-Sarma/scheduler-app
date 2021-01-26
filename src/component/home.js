import React from 'react';
import scheduleLogo from "../assets/undraw_Online_calendar_re_wk3t.svg"
import "./home.css";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="main_container">
            <h1 style={{marginBottom: "40px"}}> Welcome to Your Scheduling APP! </h1>
          <img className="img_logo" src={scheduleLogo} alt="" />

                <h3 style={{marginBottom: "20px"}}> Schedule your Important Tasks </h3>
       <Link to="/addschedule"><button className="btn btn_primary">Start Scheduling</button></Link>
        
            
        </div>
    )
}

export default Home;
