import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {HomeConsumer} from './Context';
import PropTypes from 'prop-types'
class Home extends Component{
    
    render(){
        const{id,title,img,price,area,type}=this.props.item;
        return(
            <Productwrapper className="col-12 col-sm-12 col-md-6 col-lg-4 ">
            <div className="card mb-3"  style={{width: "18rem",height:"18rem"}} >
            <HomeConsumer>
                {value=>(
                    
                    <div className="img-container"   onClick= {()=>value.handelDetails(id)} >
                    <Link to='details'>
                    <img src={img} style={{width: "18rem",height:"16rem"}} alt ="House" className="card-img-top" />
                    </Link>
                    <span className="card-btn "> 
                    $ {price}
                     </span>
                     <span className="card-span "> 
                     {type}
                     </span>
                </div>

                )
                   
                }
              
               </HomeConsumer>
                        {/*card footer*/}
                 <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{title}</p>  
                    <h5 className="text-blue font-italic mb-0">
                    {area} <span className="mr-1">م</span> 
                      
                    </h5>
                </div>
            </div>
            </Productwrapper>
        )
    }
   
}
export default Home;
{/*to cach the type*/}

const Productwrapper=styled.div`
 .card{
     border-color:transparent;
     transition:all 1s linear;

 }
 .card-footer{
     background:transparent;
     border-top:transparent;
     transition:all 1s linear;

 }
 &:hover{
     .card{
         border:0.04rem solid rgba(0,0,0,0.2);
         box-shadow:2px 2px 5px 0 rgba(0,0,0,0.2);
     }
     .card-footer{
         background:rgb(247,247,247);
     }
 }
 .img-container{
     position:relative;
     overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;   
}

    .img-container:hover .card-img-top{
       transform: scale(1.2);
        }
    
 .card-btn{
     position :absolute;
     top:0px;
     right:0px;
     padding:0.2rem 0.4rem;
     background:rgba(0,0,0,0.3);
     color:var(--mainWhite);
     border:none;
     font-size:1.4rem;
     border-radius:0.5rem 0 0 0;
    
     
    
 }
 .card-span{
    position :absolute;
    top:0px;
    left:0px;
    padding:0.2rem 0.4rem;
    background:rgba(0,0,0,0.3);
    color:var(--mainWhite);
    border:none;
    font-size:1.4rem;
    border-radius:0 0.5rem 0 0 ;
   
    
   
}
 
`;
