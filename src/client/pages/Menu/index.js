import {React,useEffect, useRef, useState} from "react";
import "./style.css";
import {useDispatch,useSelector} from "react-redux"
import {getProduct} from "../../reducer/product/productSlice"
export default function Menu() {
  const dispatch = useDispatch();
   const data = useSelector((state)=>state.product)
   useEffect(()=>{
      dispatch(getProduct());
   },[])
  const renderFood = () =>{
    return data?.data.map((item)=>{
    if(item.type.type === "FOOD"){
      return(
        <><div className="py-3">
          {" "}
          <h6>
            <span
              style={{
                backgroundColor: "#fff",
                position: "relative",
                zIndex: "9",
              }}
            >
              {" "}
              {item.name}
            </span>
            <span className="dotted"></span>
          </h6>
          {item.desc}
        </div></>)
    }
    })
  }
  const renderDrink = () =>{
    return data?.data.map((item)=>{
    if(item.type.type === "DRINK"){
      return(<div className="py-3">
      {" "}
      <h6>
        <span
          style={{
            backgroundColor: "#fff",
            position: "relative",
            zIndex: "9",
          }}
        >
          {" "}
          {item.name}
        </span>
        <span className="dotted"></span>
      </h6>
      {item.desc}
    </div>)
    }
    })
  }
  const renderMain = () =>{
    return data?.data.map((item)=>{
    if(item.type.type === "FOOD"){
      return(<div className="col-6 main-item mt-4">
      <img src={item.img}/>
       <div className="item-content">
          <h6>{item.name}</h6>
          <p>{item.desc}</p>
       </div>
       <div className="menu-price">
          {item.price}$
       </div>
      </div>)
    }
    })
  }
  const toTalDrink = () =>{
    let total = 0;
    data.data.map((item,key)=>{  
      if(item.type.type === "DRINK"){
       total = item.type.product.length
      }
    })
    return total
  }
  const toTalFood = () =>{
    let total = 0;
    data.data.map((item,key)=>{  
      if(item.type.type === "FOOD"){
       total = key+1;
      }
    })
    return total
  }
  return (
    <div className="py-5">
      <div className="title">
        <h6>The</h6>
        <h3>Menu</h3>
        <hr style={{ width: "20%", backgroundColor: "#ff6600" }} />
        <p>There are many variations of passages of Lorem Ipsum available.</p>
      </div>
      <div className="menu-content">
        <div className="row container">
          <div className="col-6">
          <div className="menu-item">FOOD {toTalFood()}</div>
            <div className="item">           
              {renderFood()}
            </div>
          </div>
          <div className="col-6">
            <div className="menu-item drink">DRINK {toTalDrink()}</div>
            <div className="item">
              {renderDrink()}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main-content">
            MAIN {toTalFood()}
          </div>
          <div className="row">
                {renderMain()}
            </div>
        </div>

        <div className="dinner-content py-5">
          <div className="dinner-bg">
                    DINNER
          </div>
          <div className="row container">
            <div className="col-6">
            <div className="item">
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
            </div>
            </div>
            <div className="col-6">
            <div className="item">
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="launch-content py-5">
          <div className="launch-bg">
                    LAUNCH
          </div>
          <div className="row container">
            <div className="col-6">
            <div className="item">
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
            </div>
            </div>
            <div className="col-6">
            <div className="item">
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="breakfast-content py-5">
          <div className="breakfast-bg">
                BREAKFAST
          </div>
          <div className="row container">
            <div className="col-6">
            <div className="item">
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
            </div>
            </div>
            <div className="col-6">
            <div className="item">
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
              <div className="py-3">
                {" "}
                <h6>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                      zIndex: "9",
                    }}
                  >
                    {" "}
                    QUAIL
                  </span>
                  <span className="dotted"></span>
                </h6>
                Smoked quail, crispy egg, spelt, girolles, parsley
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
