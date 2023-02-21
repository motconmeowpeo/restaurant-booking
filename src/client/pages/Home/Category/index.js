import React, { useEffect } from "react";
import "./style.css"
import { Tabs } from "antd"
import TabPane from "antd/es/tabs/TabPane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faMartiniGlassCitrus, faPieChart, faBowlFood
} from "@fortawesome/free-solid-svg-icons";
import {useDispatch,useSelector} from "react-redux"
import {getProduct} from "../../../reducer/product/productSlice"
export default function Category() {
   const dispatch = useDispatch();
   const data = useSelector((state)=>state.product)
   useEffect(()=>{
      dispatch(getProduct());
   },[])
   const renderDrink = () =>{
      let count = 0;
      return data?.data.map((item,index)=>{
         if(item.type.type==="COCKTAIL" && count <= 3){
            count++;
            return (
               <div key={index} className="col-5 category-item">
               <img src={item.img} />
               <div className="item-content">
                  <h6>{item.name}</h6>
                  <p>{item.desc}</p>
               </div>
               <div className="price">
                  {item.price}$
               </div>
            </div>)
         }
      })
   }
   const renderFood = () =>{
      let count = 0;
      return data?.data.map((item,index)=>{
         if(item.type.type==="FOOD" && count <= 3){
            count++;
            return (
               <div key={index} className="col-5 category-item">
               <img src={item.img} />
               <div className="item-content">
                  <h6>{item.name}</h6>
                  <p>{item.desc}</p>
               </div>
               <div className="price">
                  {item.price}$
               </div>
            </div>)
         }
         
      })
   }
   const renderDessert = () =>{
      let count = 0;
      return data?.data.map((item,index)=>{
         if(item.type.type==="DRINK" && count<= 3){
            count++;
            return (
               <div key={index} className="col-5 category-item">
               <img src={item.img} />
               <div className="item-content">
                  <h6>{item.name}</h6>
                  <p>{item.desc}</p>
               </div>
               <div className="price">
                  {item.price}$
               </div>
            </div>)
         }
         
      })
   }
     return (
      <div className="whatNew">
         <div className="title--center title">
            <h6>What's New</h6>
            <h3>Popular Categories</h3>
         </div>
         <div className="category-content">
            <Tabs tabPosition="left">
               <Tabs.TabPane tab={<div><FontAwesomeIcon style={{ marginRight: "5px", fontSize: "20px" }} icon={faMartiniGlassCitrus} />Drinks</div>} key="drinks">
                  <div className="row">
                     {renderDrink()}
                  </div>
               </Tabs.TabPane>
               <Tabs.TabPane tab={<div><FontAwesomeIcon style={{ marginRight: "5px", fontSize: "20px" }} icon={faBowlFood} />Foods</div>} key="main">
                  <div className="row">
                   {renderFood()}
                  </div>
               </Tabs.TabPane>
               <Tabs.TabPane tab={<div><FontAwesomeIcon style={{ marginRight: "5px", fontSize: "20px" }} icon={faPieChart} />Desserts</div>} key="Desserts">
                  <div className="row">
                   {renderDessert()}
                  </div>
               </Tabs.TabPane>
            </Tabs>
         </div>
      </div>
   );
}
