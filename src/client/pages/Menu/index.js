import {React,useEffect} from "react";
import "./style.css";
import {useDispatch,useSelector} from "react-redux"
import {getProduct} from "../../reducer/product/productSlice"
import { Item } from "rc-menu";
export default function Menu() {
  const dispatch = useDispatch();
   const data = useSelector((state)=>state.product)
   useEffect(()=>{
      dispatch(getProduct());
   },[])
  const renderFood = () =>{
    let count = 0;
    return data?.data.map((item)=>{
    if(item.type.type === "FOOD" && count<=4){
      count++;
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
  const renderDrink = () =>{
    let count = 0;
    return data?.data.map((item)=>{
    if(item.type.type === "DRINK" && count<=4){
      count++;
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
            <div className="menu-item">FOOD</div>
            <div className="item">
              {renderFood()}
            </div>
          </div>
          <div className="col-6">
            <div className="menu-item drink">DRINK</div>
            <div className="item">
              {renderDrink()}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main-content">
            MAIN
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

        <div className="lunch-content py-5">
          <div className="lunch-bg">
                    LUNCH
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
