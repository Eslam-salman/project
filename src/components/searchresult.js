import React,{Component} from 'react';
import Home from './Home';
import {HomeConsumer} from './Context';
import styled from 'styled-components';

class Result extends Component{
    render(){
        var type=this.props.location.state.referrer.typeselect;
        var palce=this.props.location.state.referrer. placeselect;
        console.log(palce);
        return(
          <React.Fragment>
              
          <Container className="py-5 px-5">
              <div className=".container-fluid px-0">
                  <div className="row ">
                      <HomeConsumer>
                      {value=>{
                                return value.obj.Home.map(items=>{
                                    if(items.addres=== palce && items.type===type){
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
export default Result;
const Container=styled.div`
direction:rtl;
 `