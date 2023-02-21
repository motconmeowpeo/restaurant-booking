import React from "react";
import "./style.css"
import { Tabs } from "antd"
import TabPane from "antd/es/tabs/TabPane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faMartiniGlassCitrus, faPieChart, faBowlFood
} from "@fortawesome/free-solid-svg-icons";
export default function Category() {
   return (
      <div className="whatNew">
         <div className="title--center title">
            <h6>What's New</h6>
            <h3>Popular Categories</h3>
         </div>
         <div className="category-content">
            {/* <Tabs tabPosition="left">
               <Tabs.TabPane tab={<div><FontAwesomeIcon style={{ marginRight: "5px", fontSize: "20px" }} icon={faPieChart} />Desserts</div>} key="desserts">
                  <div className="row">
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                  </div>
               </Tabs.TabPane>
               <Tabs.TabPane tab={<div><FontAwesomeIcon style={{ marginRight: "5px", fontSize: "20px" }} icon={faMartiniGlassCitrus} />Dinks</div>} key="drinks">
                  <div className="row">
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                  </div>
               </Tabs.TabPane>
               <Tabs.TabPane tab={<div><FontAwesomeIcon style={{ marginRight: "5px", fontSize: "20px" }} icon={faBowlFood} />Main</div>} key="main">
                  <div className="row">
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                     <div className="col-5 category-item">
                        <img src="./img/g1.jpg" />
                        <div className="item-content">
                           <h6>Drinks</h6>
                           <p>Smoked quail, crispy egg, spelt, girolles </p>
                        </div>
                        <div className="price">
                           10$
                        </div>
                     </div>
                  </div>
               </Tabs.TabPane>
            </Tabs> */}
         </div>
      </div>
   );
}
