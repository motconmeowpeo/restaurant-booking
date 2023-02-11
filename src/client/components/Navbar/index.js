import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"
import {
    faBars,faMoon,faSquareXmark,faMagnifyingGlass
  } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
    const [hideMenu,setHideMenu]= useState(false);
  return (
      <div>
       <div className="header">
       <div className="header__content container">
          <div className="header__logo">
            <h1 className="m-0">
              <a href="#">Diner</a>
            </h1>
          </div>
          <div className="header__navbar">
            <div className="header__search">
              <form className="position-relative">
                <input type="search" placeholder="Search here.." />
                <i><FontAwesomeIcon icon={faMagnifyingGlass}/></i>
              </form>
            </div>
            <div className="header__mode">
              <button id="switchButton">
                <FontAwesomeIcon icon={faMoon}/>
                <i className="far fa-sun" />
              </button>
            </div>
            <div className="mobile-nav-button">
              <button style={{color:"white"}} id="openNavs" type="button" onClick={()=>{
                setHideMenu(true);
              }}>
              <FontAwesomeIcon icon={faBars}/>
              </button>
            </div>
          </div>
          <div style={ hideMenu?{opacity:"1",display:"block"}:{opacity:"0",display:"none"}} className="overlay overlay-scale" id="showNavs">
            <button type="button" className="overlay-close" id="closeNavs"  onClick={()=>{
                setHideMenu(false)
              }}>
              <FontAwesomeIcon icon={faSquareXmark} aria-hidden="true"/>
            </button>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <Link to={"/order"}>Order</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="container header__bot">
          <div className="dinerBanner__content">
            <h3 className="mb-4">
              The only thing we love more than food is you!
            </h3>
            <p className="pr-lg-5 mt-md-4 mt-3">
              Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi
              vitae sit.Ea ipsum sed consequuntur illum facere.
            </p>
            <a className="btn mt-4 mr-2" href="about.html">
              Read More
              <span className="fa fa-chevron-right ml-2" aria-hidden="true" />
            </a>
          </div>
        </div>
       </div>
        <div className="dinerBanner"></div>
      </div>
  );
}
