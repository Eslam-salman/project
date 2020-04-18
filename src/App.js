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
import Rent from './components/Rent';
import Seal from './components/seal';
import Adv from './components/adv';
function App() {
  return (
    <React.Fragment>
      <Navbar/> 
      <Search/> 
      <Switch>
      <Route exact path="/" component={HomeList}/>
      <Route path="/details" component={Details}/>
      <Route path="/result" component={Result}/>
      <Route path="/rent" component={Rent}/>
      <Route path="/seal" component={Seal}/>
      <Route path="/adv" component={Adv}/>
      </Switch>
    </React.Fragment>
   
    
  );
}

export default App;
