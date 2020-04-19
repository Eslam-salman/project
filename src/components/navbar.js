import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {NavbarContent}from './Navstyle.js';
import logo from '../logo.png';
import styled from 'styled-components';


class Navbar extends Component{
    render(){
        return(
            <NavbarContent className="navbar navbar-expand-sm navbar-light navbar-dark px-sm-5 ">
               <Link to='/' >
                   <div className="mr-2 pr-1 d-inline-block">
                        <img src={logo} alt="عقارك"style={{width:"5rem",height:"5rem"}} className="navbar-brand  "/>
                        <span className="nav-item Text-titlel">عقارك </span>
                   </div>
                   </Link>
                   <ul className="navbar-nav align-items-center ">
                     <li className="nav-item ">
                      <Link className="nav-link active" to='/'>الرئيسية </Link>
                          </li>
                     <li className="nav-item mr-2">
                     <Link className="nav-link"to= '/seal'>للبيع</Link>
                      </li>
                      <li className="nav-item mr-2">
                     <Link className="nav-link" to='/rent'>للايجار </Link>
                      </li>
                      <li className="nav-item mr-2">
                     <Link className="nav-link"to='/adv'>اعلن عن عقارك </Link>
                      </li>
                      </ul>
                </NavbarContent>
        )
    }
   
}

export default Navbar;
