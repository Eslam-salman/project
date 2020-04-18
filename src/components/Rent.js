import React,{Component} from 'react';
import Home from './Home';
import {HomeConsumer} from './Context';
import styled from 'styled-components';

class Rent extends Component{
    render(){
      
        return(
          <React.Fragment>
              
          <Container className="py-5 px-5">
              <div className=".container-fluid px-0">
                  <div className="row ">
                      <HomeConsumer>
                      {value=>{
                            
                                return value.obj.Home.map(items=>{
                                    if(items.type==='للايجار'){
                                        return <Home key={items.id} item={items}/>;
                                    }
                                      
                                       
                                   });

                               }}
                      </HomeConsumer>

                  </div>
              </div>
         </Container>

      </React.Fragment>
       //
      
   )
}

}
export default Rent;
const Container=styled.div`
direction:rtl;
 `