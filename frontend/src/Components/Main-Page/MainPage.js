import React ,{useState} from "react";
import {Link} from 'react-router-dom'
import front from './../../assets/undraw.png';
import './MainPage.css';

function MainPage(){


    return(
        <div className="row front-container p-5 w-100 align-items-center">
            <div className="col-md-6 col-sm-12 text-center">
                <img  src={front} alt="" />
            </div>
            <div className="col-md-6 col-sm-12  ">
                <div className="row h-25 text-center align-items-start project-name">                    
                    <h1 >RENTAL-ROOM-WORLD</h1>
                </div>
                <div className="row h-25 text-center align-items-end">                    
                    <h2 className="text-secondary">Find the Best Pg, Hostel for you</h2>
                </div>
                <br />
                <br />

                <div className="row w-100 text-center align-items-start g-3">
                    <div className="col-lg-6 col-sm-12">
                        <Link to="/all-rooms">
                            <button className="btn search-button rounded-pill">For Tenants</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 cik-sm-12">
                        <Link to="/get-details-of-owner">
                            <button className="btn add-button rounded-pill">For Owners</button>
                        </Link>
                    </div>
                </div>
            </div>
           
        </div>

    );
}

export default MainPage;