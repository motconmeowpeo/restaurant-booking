import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faThumbsUp,faUtensils
  } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
   <>
    <div className="dinerAbout py-5">
  <div className="about__content container">
    <div className="row py-md-5">
      <div className="about__title col-lg-5 col-md-12 col-sm-12">
        <div className="title title--left">
          <h6>About Us</h6>
          <h3 className="mb-4">We found our creative space that is open for you.</h3>
        </div>
      </div>
      <div className="about__text col-lg-7 col-md-12 col-sm-12 pl-lg-5 mt-3">
        <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at
          tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit
          amet. Lorem ipsum init dolor sit, amet elit. Dolor ipsum non velit, culpa!Lorem ipsum init dolor
          sit.
          <br />
          <br />
          Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at
          tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit
          amet.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="dinerRest">
  <div className="rest__content px-lg-0">
    <div className="row">
      <div className="rest__left col-lg-6 px-lg-0 pt-lg-0 pt-5 ">
        <div className="left__img">
        </div>
      </div>
      <div className="rest__right col-lg-6 px-lg-4 py-lg-3 py-4">
        <div className="right__content p-md-5 p-3">
          <h6>More than 3000 Restaurants</h6>
          <h3>Book a table easly at the best price</h3>
          <p className="my-3">Vestibulum ante ipsum primis in faucibus orci luctus turpis sodales quis.
            Integer sit amet mattis quam.Vivamus a ligula quam tesque et libero ut justo ultrices in.
          </p>
          <div className="row mt-5">
            <div className="best__deal col-6">
              <div className="deal__icon mb-4">
                <i><FontAwesomeIcon icon={faThumbsUp} /></i>
              </div>
              <a href="#">Best Deals</a>
              <p className="mt-2">Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
            </div>
            <div className="best__food col-6">
              <div className="food__icon mb-4">
                <i><FontAwesomeIcon icon={faUtensils} /></i>
              </div>
              <a href="#">Best Food</a>
              <p className="mt-2">Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   </>

  )
}
