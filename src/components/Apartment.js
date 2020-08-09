import React,{Component} from 'react';
import{Link} from "react-router-dom";
import {HomeConsumer} from './Context';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import NewHome from './newhome';

class Apartment extends Component{
   
    render(){
       
        return(
        <div>
            <Container>
            <div className="row ">
          
            <div className="mr-3 ">
          <h5 className="spborder  mb-0 p-3" style={{color:"#3f51b5"}}> شقق للبيع</h5>  
    </div>  
    <div className="hline mr-3 mt-0 pt-0" ></div>  
               
                               <HomeConsumer>
                               {value=>{
                                  
                                return value.obj.Home.map(items=>{
                                    if(items.category==='شقق'){
                                       return <NewHome key={items.id} item={items}/>;
                                    }
                                   });

                               }}
                           </HomeConsumer>

                       </div>
            </Container>
            </div>)}
            }

export default Apartment ;
const Container=styled.div`
    
    margin:2rem;
     padding:1rem;
     direction:rtl;
             `           