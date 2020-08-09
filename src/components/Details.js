import React,{Component} from 'react';
import{Link} from "react-router-dom";
import {HomeConsumer} from './Context';
import {ButttonCntainer}from './Navstyle';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';


class Details extends Component{
    render(){
        return(

           <HomeConsumer>
               {value=>{
                   const {id,title,img,price,room,bath,kitchen,livingRoom
                    ,addres,floor,type,info,area,category}=value.obj.detailHouse;
                   return(
                       <Container>
                           <Paper>
                       <div className="contianer py-5 px-5">
                           {/*titel*/}
                           
                           
                           <div className="row" >
                               
                               <div className="col-12 col-lg-6 col-sm-12  mx-auto col-md-12 my-3  d- text-capitalize">
                                   
                                   <h2 className="d-flex">{title}</h2>
                                   {(()=> { 
                                       if(category!=='أراضي'){
                                           return(
                                               <React.Fragment>
                                            <h4 className="Text-h4 text-uppercase text-muted  d-flex mt-3 mb-2">
                                            عدد الغرف:<span className="text-uppercase">{room}</span>
                                        </h4>
                                        <h4 className="Text-h4 text-uppercase d-flex text-muted mt-3 mb-2">
                                            حمام:<span className="text-uppercase">{bath}</span>
                                        </h4>
                                        <h4 className="Text-h4 text-uppercase d-flex text-muted mt-3 mb-2">
                                         مطابخ:<span className="text-uppercase">{kitchen}</span>
                                        </h4>
                                        <h4 className="Text-h4 text-uppercase d-flex text-muted mt-3 mb-2">
                                            صالة:<span className="text-uppercase">{livingRoom}</span>
                                        </h4>
                                        <h4 className="Text-h4 text-uppercase d-flex text-muted mt-3 mb-2">
                                            عنوان:<span className="text-uppercase">{addres}</span>
                                        </h4>
                                        <h4 className="Text-h4 text-uppercase d-flex text-muted mt-3 mb-2">
                                          طوابق:<span className="text-uppercase">{floor}</span>
                                        </h4>
                                        </React.Fragment>
                                           )
                                       }
                                       else{
                                           return (null)
                                       }
                                    })()}

                                   
                                   <h4 className="text-blue d-flex">
                                       <strong>
                                       المساحة:  {area}
                                       <span>م</span>
                                         
                                       </strong>

                                   </h4>
                                   <p className="text-capitalize d-flex font-weight-bold mt-3 mb-0">
                                     تفاصيل:
                                   </p>
                                   <p className="text-muted d-flex lead ">
                                      {info}
                                   </p>
                                   {/*button*/}
                                   <div>
                                       <Link to="/">
                                           <ButttonCntainer className="d-flex">
                                               الرئيسية
                                           </ButttonCntainer>
                                       </Link>
                                   </div>
                                  
                               </div>
                               <Productwrapper className="col-12 col-lg-6 col-sm-12  mx-auto col-md-12 my-3 ">
                               <div className="card mb-3"  style={{width: "18rem",height:"18rem"}} >
                               <div className="img-container">
                                
                               <img src={img} style={{width: "18rem",height:"18rem"}} alt ="House" className="card-img-top" />
                                     
                                  <span className="card-btn "> 
                                    $ {price}
                                       </span>
                                    <span className="card-span "> 
                                         {type}
                                     </span>
                                     </div>
                                     </div>
                               </Productwrapper>
                              
                               </div>
                           
                       </div>
                       </Paper>
                       </Container>
                   )
               }}
           </HomeConsumer>
          
        )
    }
   
}
export default Details;

const Productwrapper=styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;

}
.img-container{
    position:relative;
    overflow:hidden;
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

const Container=styled.div`
direction:rtl;
margin:2rem;
padding:1rem;



 `