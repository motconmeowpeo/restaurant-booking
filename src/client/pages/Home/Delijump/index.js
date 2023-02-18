import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUtensils,
  faUser,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
export default function DeliJump() {
  return (
    <div>
      <div className="deliJump">
        <div className="jump__content py-5 ">
          <div className="jump__text container pt-lg-2 pb-lg-4 py-4 ">
            <h2 className="py-lg-5">Deliciousness jumping into the mouth.</h2>
            <div className="jump__button pb-lg-5">
              <button>
                Read More
              </button>
              <button>
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div className="row container py-lg-0 pd-md-5 py-4 jump__branch">
          <div className="jump__item jump__item1 col-6 col-md-3 mt-md-0 mt-4">
            <div className="jump__bg">
              <i><FontAwesomeIcon icon={faBuilding} /></i>
              <h2 className="counter">15,100</h2>
              <p>Branches</p>
            </div>
          </div>
          <div className="jump__item jump__item2 col-6 col-md-3 mt-md-0 mt-4">
            <div className="jump__bg">
            <i><FontAwesomeIcon icon={faUtensils} /></i>
              <h2 className="counter">19,256</h2>
              <p>Food Items</p>
            </div>
          </div>
          <div className="jump__item jump__item3 col-6 col-md-3 mt-md-0 mt-4">
            <div className="jump__bg">
            <i><FontAwesomeIcon icon={faUser} /></i>
              <h2 className="counter">12,100</h2>
              <p>Chefs</p>
            </div>
          </div>
          <div className="jump__item jump__item4 col-6 col-md-3 mt-md-0 mt-4">
            <div className="jump__bg">
            <i><FontAwesomeIcon icon={faFaceSmile} /></i>
              <h2 className="counter">2,560</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
