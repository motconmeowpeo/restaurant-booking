import React from 'react'
import Footer from '../components/Footer/index'
import Navbar from "../components/Navbar/index"
import {Route} from "react-router-dom"
export default function HomeTemplate(props) {
  const { exact, path, component } = props;
  console.log(props)
  return <div>
    <Navbar/>
    <Route exact={exact} path={path} component={component} />
    <Footer/>
  </div>;
}
