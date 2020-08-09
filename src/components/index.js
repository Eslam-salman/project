import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Search from './searchcontainer';
import Details from './Details';
import HomeList from './HomeList';
import Result from './searchresult';
import Seal from './seal';
import Adv from './adv';
import CarouselPage from './Carousel'
import Services from './services'
import NewPost from './newpost'
class  Homeindex extends Component {
    render(){
  return (
   <div>
        <CarouselPage/>
       <Services/>
       <NewPost/>
       </div>)}
}
export default Homeindex;