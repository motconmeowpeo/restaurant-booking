import { faCalendar, faCheck, faClock, faL, faLocation, faLocationDot, faSquare, faSquareXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { async } from "q";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Swal from "sweetalert2";

import { getProduct } from "../../reducer/product/productSlice";
import "./Order.css"
import { addToCart } from "../../reducer/order/orderSlice";
var curr = new Date();
curr.setDate(curr.getDate());
var dateStr = curr.toISOString().substring(0, 10);
var minDate = new Date();
minDate.setDate(minDate.getDate() + 1);
var min = minDate.toISOString().substring(0, 10);
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const nameRegex = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/
function Order() {
    const dispatch = useDispatch()
    const dataFood = useSelector((state) => state.product)
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    const handleValidateName = (e) => {
        const name = e.target.value;
        if (name.length === 0) {
            setMessageName("Name is required")
            return false
        }
        else {
            if (nameRegex.test(name) === false) {
                setMessageName("Name must be letter")
                return false;
            }
            else {
                setMessageName("")
                return true
            }
        }
    }
    const handleValidatePhone = (e) => {
        const name = e.target.value;

        if (name.length === 0) {
            setMessagePhone("Phone number is required")
            return false
        }
        else {
            setMessagePhone("")
            return true
        }
    }
    const handleValidateMail = (e) => {
        const name = e.target.value;

        if (name.length === 0) {
            setMessageEmail("Email is required")
            return false
        }
        else {
            if (emailRegex.test(name) === false) {
                setMessageEmail("Email is wrong")
                return false
            }
            else {
                setMessageEmail("")
                return true
            }
        }


    }
    const handleShowItem = () => {


    }


    const [messageName, setMessageName] = useState("")
    const [messageEmail, setMessageEmail] = useState("")
    const [messagePhone, setMessagePhone] = useState("")
    const [foodNext, setFoodNext] = useState(0);
    const [showFood, setShowFood] = useState(false)
    const [showItemOr, setShowItemOr] = useState(false)
    const [step, setStep] = useState(true)

    const [date, setDate] = useState(dateStr)
    const [people, setPeople] = useState("1 person")
    const [time, setTime] = useState("7:00")
    const [checkPhone, setCheckPhone] = useState(false)
    const [checkMail, setCheckMail] = useState(false)

    const [checkName, setCheckName] = useState(false)
    const [itemOrder, setItemOrder] = useState([]);
    const cart = useSelector((state) => state.order)
    console.log(cart.cartItem)
    const handelItem = (item) => {

        const newArr = [...itemOrder];
        const index = newArr.indexOf(item);
        if (index < 0) {
            newArr.push(item)
            setItemOrder(newArr)

        }
        else {
            newArr.pop(item)
            setItemOrder(newArr)
        }
        const arrStr = JSON.stringify(newArr)
        localStorage.setItem("item_order", arrStr)
    }
    const handleAddToCart = (product, quanlity) => {
        sessionStorage.setItem('quantity', quanlity)
        dispatch(addToCart(product))
    }
    return (<div className="order">
        <div className="order_container">
            <Link to="/" className="order_logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141 32" fill="none" title="OpenTable" aria-label="OpenTable">

                    <path className="logo-red" fillRule="evenodd" clipRule="evenodd" d="M0 15.9993C0 13.814 1.75031 12.0417 3.90913 12.0417C6.06794 12.0417 7.81891 13.814 7.81891 15.9993C7.81891 18.186 6.06794 19.9583 3.90913 19.9583C1.75031 19.9583 0 18.186 0 15.9993V15.9993ZM27.4601 19.9583C25.3013 19.9583 23.5513 18.186 23.5513 15.9997C23.5513 13.814 25.3013 12.0417 27.4601 12.0417C29.6192 12.0417 31.3702 13.814 31.3702 15.9997C31.3702 18.186 29.6192 19.9583 27.4601 19.9583ZM27.4607 0.166672C18.8242 0.166672 11.8229 7.25567 11.8229 15.9997C11.8229 24.7447 18.8242 31.8333 27.4607 31.8333C36.0977 31.8333 43.0986 24.7447 43.0986 15.9997C43.0986 7.25567 36.0977 0.166672 27.4607 0.166672V0.166672Z"></path>
                    <path className="logo-primary" fillRule="evenodd" clipRule="evenodd" d="M139.226 14.7747C139.473 14.7747 139.619 14.6627 139.619 14.459C139.61914.2747 139.519 14.1537 139.244 14.1537H138.988V14.7747H139.226ZM138.613 13.8393H139.307C139.692 13.8393 
                    140.021 13.9963 140.021 14.441C140.021 14.6626 139.884 14.8766 139.683 14.95L140.104 15.7193H139.683L139.362 15.071H138.988V15.7193H138.613V13.8393ZM140.634 14.802C140.634 13.932 140.039 13.311 139.272 13.311C138.503 13.311 137.917 13.932 137.917
                     14.802C137.917 15.682 138.503 16.2836 139.272 16.2836C140.039 16.2836 140.634 15.682 140.634 14.802ZM137.551 14.802C137.551 13.7183 138.329 12.9773 139.272 12.9773C140.223 12.9773 141 13.7183 141 14.802C141 15.8856 140.223 16.6266 139.272 
                     16.6266C138.329 16.6266 137.551 15.8856 137.551 14.802ZM126.075 22.2086C126.307 22.2086 126.503 22.0129 126.503 21.7786V20.1893C126.503 19.9546 126.31 19.7593 126.078 19.7593H126.01C125.818 19.7593 125.626 19.5663 125.626 19.3719L125.626 
                     19.3019V9.95461C125.626 9.73961 125.414 9.52461 125.202 9.52461H123.638C123.426 9.52461 123.214 9.73961 123.214 9.95461V20.3866L123.22 20.6583C123.22 21.4349 123.987 22.2109 124.754 22.2109L126.075 22.2086ZM57.277 12.0127C59.4032 12.0127 
                     61.1983 13.8363 61.1983 15.999C61.1983 18.181 59.4385 19.953 57.277 19.953C55.1251 19.953 53.3751 18.181 53.3751 15.999C53.3751 13.8007 55.1251 12.0127 57.277 12.0127ZM57.277 9.50164C53.7579 9.50164 50.8951 12.4166 50.8951 15.9993C50.8951 
                     19.6243 53.6966 22.4643 57.277 22.4643C60.8669 22.4643 63.6783 19.6243 63.6783 15.9993C63.6783 12.4166 60.8056 9.50164 57.277 9.50164ZM108.204 19.6336C108.088 19.966 107.393 20.5913 106.602 20.5913C105.772 20.5913 105.309 20.083 105.309 
                     19.321C105.309 18.52 105.869 18.0313 106.891 18.0313C107.605 18.0313 108.204 18.305 108.204 18.305V19.6336ZM107.162 12.9699C105.714 12.9699 104.305 13.3413 104.112 13.4196C103.919 13.4779 103.745 13.6343 103.823 13.9666L104.016 14.9829C104.054 
                     15.2563 104.228 15.4713 104.518 15.3736C105.039 15.2173 106.216 15.0416 107.027 15.0416C107.972 15.0416 108.3 15.5886 108.262 16.7416C108.262 16.7416 107.451 16.4876 106.544 16.4876C104.286 16.4876 102.993 17.7186 102.993 19.3209C102.993 21.2556 
                     104.228 22.4086 106.004 22.4086C107.393 22.4086 108.281 21.7833 108.802 21.2753V21.7603C108.802 21.9949 108.995 22.1903 109.227 22.1903H109.384C109.401 22.1936 109.42 22.1936 109.439 22.1936H110.095C110.327 22.1936 110.52 21.9983 110.52 
                     21.7636V16.8979C110.52 14.4356 109.941 12.9699 107.162 12.9699ZM90.9592 12.9699C89.251 12.9699 88.4212 13.8983 88.0898 14.2729V13.5953C88.0898 13.3609 87.8967 13.1653 87.6651 13.1653H86.6554C86.4429 13.1653 86.2308 13.3413 86.2308 
                     13.5953V21.7636C86.2308 21.9983 86.4429 22.1936 86.6554 22.1936H88.0835C88.5082 22.1936 88.6432 22.0959 88.6432 21.7636V16.6046C88.8554 15.9793 89.4151 15.1976 90.5731 15.1976C91.654 15.1976 92.1172 15.9209 92.1172 17.0933V21.7636C92.1172 
                     21.9983 92.3102 22.1936 92.5418 22.1936H94.105C94.3175 22.1936 94.5296 21.9983 94.5296 21.7636V17.0933C94.5296 14.9046 93.7963 12.9699 90.9592 12.9699ZM69.7097 20.181C68.5903 20.181 67.8569 19.6727 67.8569 19.6727V16.4483C68.05 15.9403 
                     68.6673 15.1976 69.8257 15.1976C71.2152 15.1976 71.9291 16.429 71.9291 17.699C71.9291 18.9693 71.1767 20.181 69.7097 20.181ZM70.1538 12.9699C68.3201 12.9699 67.3034 14.2369 67.2425 14.3149V13.5953C67.2425 13.3609 67.0494 13.1653 
                     66.8179 13.1653H65.8691C65.6375 13.1653 65.4444 13.3609 65.4444 13.5953V25.4373C65.4444 25.6523 65.6375 25.8673 65.8691 25.8673H67.4323C67.6447 25.8673 67.8569 25.6523 67.8569 25.4373V22.0373C68.2621 22.1936 69.1114 22.4086 
                     69.9993 22.4086C72.6628 22.4086 74.419 20.3373 74.419 17.6989C74.419 14.9633 72.5854 12.9699 70.1538 12.9699ZM133.801 16.5453C133.763 15.6663 133.068 14.9826 132.083 14.9826C131.003 14.9826 130.308 15.6466 130.192 16.5453H133.801ZM132.142 
                     12.9696C134.457 12.9696 136.233 14.7089 136.233 17.1513C136.233 17.2879 136.214 17.6006 136.194 17.7376C136.175 17.9723 135.963 18.1479 135.77 18.1479H130.057C130.076 19.2616 130.983 20.2386 132.277 20.2386C133.164 20.2386 133.782 19.9066 134.187 19.5746C134.4 19.3983 134.631 19.3789 134.766 19.5746L135.519 20.5903C135.673 20.7663 135.692 20.9813 135.48 21.1766C134.708 21.8409 133.608 22.4079 132.161 22.4079C129.498 22.4079 127.645 20.2583 127.645 17.6789C127.645 15.1386 129.498 12.9696 132.142 12.9696ZM117.037 20.181C115.879 20.181 115.261 19.4383 115.068 18.9303V15.706C115.068 15.706 115.802 15.1976 116.921 15.1976C118.388 15.1976 119.141 16.4093 119.141 17.6797C119.141 18.9497 118.427 20.181 117.037 20.181ZM117.249 12.97C116.361 12.97 115.474 13.185 115.068 13.361V9.92164C115.068 9.70664 114.875 9.49164 114.644 9.49164H113.08C112.868 9.49164 112.656 9.70664 112.656 9.92164V21.7636C112.656 21.9983 112.868 22.1936 113.08 22.1936H113.756C113.769 22.1936 113.782 22.1936 113.795 22.1903H113.975C114.209 22.1903 114.402 21.995 114.402 21.7603V21.0926L114.412 21.0603C114.412 21.0603 115.435 22.4086 117.384 22.4086C119.816 22.4086 121.572 20.259 121.572 17.6796C121.572 15.0416 119.893 12.97 117.249 12.97ZM103.594 9.49164H94.5165C94.3043 9.49164 94.1498 9.66764 94.1498 9.86297V11.4653C94.1498 11.6606 94.3043 11.8366 94.5165 11.8366H97.7911V21.8223C97.7911 22.0176 97.9647 22.1936 98.1578 22.1936H99.9529C100.146 22.1936 100.32 22.0176 100.32 21.8223V11.8366H103.594C103.806 11.8366 103.961 11.6606 103.961 11.4653V9.86297C103.961 9.66764 103.806 9.49164 103.594 9.49164ZM81.9843 16.5453C81.9454 15.6663 81.251 14.9826 80.2666 14.9826C79.186 14.9826 78.4909 15.6466 78.3756 16.5453H81.9843ZM80.3245 12.9696C82.6405 12.9696 84.4158 14.7089 84.4158 17.1513C84.4158 17.2879 84.3967 17.6006 84.3776 17.7376C84.3579 17.9723 84.1457 18.1479 83.9527 18.1479H78.2402C78.2596 19.2616 79.1666 20.2386 80.4596 20.2386C81.3474 20.2386 81.9651 19.9066 82.3704 19.5746C82.5825 19.3983 82.8141 19.3789 82.9492 19.5746L83.702 20.5903C83.8565 20.7663 83.8756 20.9813 83.6631 21.1766C82.8912 21.8409 81.7912 22.4079 80.3436 22.4079C77.6805 22.4079 75.8277 20.2583 75.8277 17.6789C75.8277 15.1386 77.6805 12.9696 80.3245 12.9696V12.9696Z" ></path>

                </svg>
            </Link>
            <h5 className="order_title">Reservation at Restaurant Booking - Akron</h5>
            <div style={step ? { display: "block" } : { display: "none" }} className="order_content">
                <div className="order_step">
                    <span>1.Choose Your Time</span>
                    <span>2.Your Detail</span>

                </div>
                <div className="order_info">
                    <div className="order_people">
                        <select onChange={(e) => setPeople(e.target.value)}>
                            <option >1 person</option>
                            <option >2 people</option>
                            <option >3 people</option>
                            <option >4 people</option>
                            <option >5 people</option>
                            <option >6 people</option>
                            <option >7 people</option>
                            <option >8 people</option>
                            <option >9 people</option>
                            <option >10 people</option>
                            <option >11 people</option>
                            <option >12 people</option>
                            <option >13 people</option>
                            <option >14 people</option>
                            <option >15 people</option>
                            <option >16 people</option>
                        </select>
                    </div>
                    <div className="order_date">
                        <input onChange={(e) => setDate(e.target.value)} type="date" defaultValue={dateStr} min={min} />
                    </div>
                    <div className="order_time">
                        <select onChange={(e) => setTime(e.target.value)}>
                            <option>7:00</option>
                            <option>8:00</option>
                            <option>9:00</option>
                            <option>10:00</option>
                            <option>11:00</option>
                            <option>12:00</option>
                            <option>13:00</option>
                            <option>14:00</option>
                            <option>15:00</option>
                            <option>16:00</option>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                            <option>23:00</option>
                        </select>
                    </div>
                    <div className="order_button">
                        <button onClick={() => setShowFood(true)}>Choose Food</button>
                    </div>
                </div>
                <div style={showFood ? { display: "flex" } : { display: "none" }} className="order_food">
                    <ul style={foodNext === 0 ? { display: "flex" } : { display: "none" }} className="appetizer_list">
                        {dataFood.data.map((item, index) => {
                            if (item.type.type === "FOOD")
                                return (
                                    <li key={item._id} className="food_item">
                                        <img src={item.img} />
                                        <div className="item_info">
                                            <h6>{item.name}</h6>
                                            <span>{item.desc}</span>
                                            <span>${item.price}</span>
                                        </div>
                                        <label onChange={() => { handelItem(item) }} className="food_check">
                                            <input key={item._id} type="checkbox" />
                                            <span className="checkmark"></span>

                                        </label>
                                        <input type="number" className="input_quatity" defaultValue={1} min={1} onChange={(event) => handleAddToCart(item, event.target.value)
                                        } />

                                    </li>
                                )
                        })}
                        <button onClick={() => setFoodNext(1)} className="btn_next">Next</button>
                    </ul>
                    <ul style={foodNext === 1 ? { display: "flex" } : { display: "none" }} className="main_list">
                        {dataFood.data.map((item, index) => {
                            if (item.type.type === "CHEF")
                                return (
                                    <li key={item._id} className="food_item">
                                        <img src={item.img} />
                                        <div className="item_info">
                                            <h6>{item.name}</h6>
                                            <span>{item.desc}</span>
                                            <span>${item.price}</span>
                                        </div>
                                        <label onChange={() => { handelItem(item) }} className="food_check">
                                            <input key={item._id} type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <input type="number" className="input_quatity" defaultValue={1} min={1} onChange={(event) => handleAddToCart(item, event.target.value)} />


                                    </li>
                                )
                        })}
                        <button onClick={() => setFoodNext(0)} className="btn_prev">Prev</button>
                        <button onClick={() => setFoodNext(2)} className="btn_next">Next</button>
                    </ul>
                    <ul style={foodNext === 2 ? { display: "flex" } : { display: "none" }} className="desserts_list">
                        {dataFood.data.map((item, index) => {
                            if (item.type.type === "DRINK")
                                return (
                                    <li key={item._id} className="food_item">
                                        <img src={item.img} />
                                        <div className="item_info">
                                            <h6>{item.name}</h6>
                                            <span>{item.desc}</span>
                                            <span>${item.price}</span>
                                        </div>
                                        <label onChange={() => { handelItem(item) }} className="food_check">
                                            <input key={item._id} type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <input type="number" className="input_quatity" defaultValue={1} min={1} onChange={(event) => handleAddToCart(item, event.target.value)} />

                                    </li>
                                )
                        })}
                        <button onClick={() => setFoodNext(1)} className="btn_prev">Prev</button>

                        <button onClick={() => setFoodNext(3)} className="btn_next">Next</button>
                    </ul>
                    <ul style={foodNext === 3 ? { display: "flex" } : { display: "none" }} className="desserts_list">
                        {dataFood.data.map((item, index) => {
                            if (item.type.type === "COCKTAIL")
                                return (
                                    <li key={item._id} className="food_item">
                                        <img src={item.img} />
                                        <div className="item_info">
                                            <h6>{item.name}</h6>
                                            <span>{item.desc}</span>
                                            <span>${item.price}</span>
                                        </div>
                                        <label onChange={() => { handelItem(item) }} className="food_check">
                                            <input key={item._id} type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <input type="number" className="input_quatity" defaultValue={1} min={1} onChange={(event) => handleAddToCart(item, event.target.value)} />

                                    </li>
                                )
                        })}
                        <button onClick={() => setFoodNext(2)} className="btn_prev">Prev</button>

                        <button onClick={() => setStep(false)} className="btn_next">Finish</button>
                    </ul>
                </div>

            </div>
            <div style={step ? { display: "none" } : { display: "block" }} className="order_content">
                <div className="detail_step">
                    <span onClick={() => setStep(true)}>
                        <FontAwesomeIcon icon={faCheck} />
                        1.Choose Your Time</span>
                    <span>
                        2.Your Detail</span>
                </div>
                <div className="detail_content">
                    <div className="detail_input">
                        <input type="text" placeholder="Fullname" onBlur={(e) => {
                            const result = handleValidateName(e)
                            setCheckName(result)
                        }
                        } pattern="^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$" />
                        <span className="message">{messageName}</span>

                        <input type="number" onBlur={(e) => {
                            const result = handleValidatePhone(e)
                            setCheckPhone(result)
                        }} placeholder="Phone number" />
                        <span className="message">{messagePhone}</span>
                        <input type="email" onBlur={(e) => {
                            const result = handleValidateMail(e)
                            setCheckMail(result)
                        }} placeholder="Email" />
                        <span className="message">{messageEmail}</span>
                        <button onClick={async () => {
                            sessionStorage.clear()
                            await Swal.fire({
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            window.location.replace("/")
                        }}
                            style={!checkMail || !checkName || !checkPhone ? { cursor: "no-drop" } : { backgroundColor: "#ff6600", color: "#FFF", cursor: "pointer" }}
                            disabled={!checkMail || !checkName || !checkPhone ? true : false}
                            className="detail_confirm">
                            Confirm

                        </button>
                    </div>
                    <div className="detail_info">
                        <div className="info_title">
                            Spaghetti Warehouse - Akron
                        </div>
                        <div className="info_date">
                            <FontAwesomeIcon icon={faCalendar} />
                            <span>{date}</span>
                        </div>
                        <div className="info_people">
                            <FontAwesomeIcon icon={faUser} />
                            <span>{people}</span>
                        </div>
                        <div className="info_time">
                            <FontAwesomeIcon icon={faClock} />
                            <span>{time}</span>
                        </div>
                        <div className="info_location">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>510 S. Main St. Akron, OH, 44311</span>
                        </div>
                        <button onClick={() => { setShowItemOr(true) }} className="info_menu">Your Food</button>

                    </div>
                </div>
                <div style={showItemOr ? { display: "block" } : { display: "none" }} className="item_order">
                    <div className="item_overlay" onClick={() => { setShowItemOr(false) }}></div>
                    <div className="item_content">
                        <ul className="content_list">
                            {
                                itemOrder.map((item, index) => {
                                    return (
                                        <li key={index} className="content_item">
                                            <img src={item.img} />
                                            <div className="item_info">
                                                <h6>{item.name}</h6>
                                                <span>{item.desc}</span>
                                                <span>${item.price}</span>
                                                {cart.cartItem.map((itemOd) => {

                                                    if (itemOd._id === item._id)
                                                        return (
                                                            <span>Quantity:{itemOd.cartQuanlity}</span>
                                                        )
                                                })}
                                            </div>


                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <span onClick={() => { setShowItemOr(false) }} className="close">
                            <FontAwesomeIcon icon={faSquareXmark} />
                        </span>
                    </div>
                </div>
            </div>

        </div>

    </div >
    )
}
export default Order
