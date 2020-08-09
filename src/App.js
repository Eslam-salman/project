import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Search from './components/searchcontainer';
import Details from './components/Details';
import HomeList from './components/HomeList';
import Result from './components/searchresult';
import Seal from './components/seal';
import Adv from './components/adv';
import CarouselPage from './components/Carousel'
import Services from './components/services'
import NewPost from './components/newpost'
import Homeindex from './components/index'
import Land from './components/land'
import Apartment from './components/Apartment'
import Villa from './components/Villa'
import Room from './components/room'
import Building from './components/Building'
import Resort from './components/Resort'
import Footer from './components/footer'
function App() {
  return (
    <React.Fragment>
      <Navbar/> 
      <Search/> 
       
      <Switch>
      <Route exact path="/" component={Homeindex}/>
      <Route path="/details" component={Details}/>
      <Route path="/result" component={Result}/>
      <Route path="/land" component={Land}/>
      <Route path="/resort" component={Resort}/>
      <Route path="/building" component={Building}/>
      <Route path="/room" component={Room}/>
      <Route path="/villa" component={Villa}/>
      <Route path="/apartment" component={Apartment}/>
      <Route path="/seal" component={Seal}/>
      <Route path="/adv" component={Adv}/>
      </Switch>
      <Footer/>
    </React.Fragment>
   
    
  );
}

export default App;
