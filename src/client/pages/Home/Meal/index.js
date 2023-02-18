import React from 'react'
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBowlFood, faMugHot, faPizzaSlice, faBreadSlice, faBowlRice, faBacon
  } from "@fortawesome/free-solid-svg-icons";
export default function Meal() {
  return (
    <div>
        <div className="dinerMeal">
  <div className="meal__content container container container-md container-sm">
    <div className="row">
      <div className="meal__item col-lg-4 col-md-6 col-12">
        <div className="meal__card">
          <div className="meal__icon">
            <span><i><FontAwesomeIcon icon={faBowlFood} /></i></span>
            <p>
              <span>01</span>
              <br />
              <span>Soup</span>
            </p>
          </div>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.
          </p>
        </div>
      </div>
      <div className="meal__item col-lg-4 col-md-6 col-12">
        <div className="meal__card">
          <div className="meal__icon">
            <span><i><FontAwesomeIcon icon={faMugHot} /></i></span>
            <p>
              <span>02</span>
              <br />
              <span>Drinks</span>
            </p>
          </div>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.
          </p>
        </div>
      </div>
      <div className="meal__item col-lg-4 col-md-6 col-12">
        <div className="meal__card">
          <div className="meal__icon">
            <span><i><FontAwesomeIcon icon={faPizzaSlice} /></i></span>
            <p>
              <span>03</span>
              <br />
              <span>Pizza</span>
            </p>
          </div>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.
          </p>
        </div>
      </div>
      <div className="meal__item col-lg-4 col-md-6 col-12">
        <div className="meal__card">
          <div className="meal__icon">
            <span><i><FontAwesomeIcon icon={faBreadSlice} /></i></span>
            <p>
              <span>04</span>
              <br />
              <span>Breakfast</span>
            </p>
          </div>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.
          </p>
        </div>
      </div>
      <div className="meal__item col-lg-4 col-md-6 col-12">
        <div className="meal__card">
          <div className="meal__icon">
            <span><i><FontAwesomeIcon icon={faBowlRice} /></i></span>
            <p>
              <span>05</span>
              <br />
              <span>Lunch</span>
            </p>
          </div>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.
          </p>
        </div>
      </div>
      <div className="meal__item col-lg-4 col-md-6 col-12">
        <div className="meal__card">
          <div className="meal__icon">
            <span><i><FontAwesomeIcon icon={faBacon} /></i></span>
            <p>
              <span>06</span>
              <br />
              <span>Dinner</span>
            </p>
          </div>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
