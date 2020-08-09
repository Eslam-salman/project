import React,{Component} from 'react';
import Home from './Home';
import {HomeConsumer} from './Context';
import styled from 'styled-components';
import NewHome from './newhome';


class Result extends Component{
    render(){
        var type=this.props.location.state.referrer.typeselect;
        var palce=this.props.location.state.referrer.placeselect;
        var category=this.props.location.state.referrer.catselect;
        
        console.log(palce ,type,category);
        return(
          <React.Fragment>
           
              <Container>
            <div className="row ">
                      <HomeConsumer>
                      {value=>{
                                return value.obj.Home.map(items=>{
                                    if(items.addres===palce && items.type===type&&items.category===category){
                                        return <NewHome key={items.id} item={items}/>;
                                    }
                                    
                                      
                                       
                                   } );
                                
                                   
                               }}
                      </HomeConsumer>

                  </div>
             
         </Container>

      </React.Fragment>
       //
      
   )
}

}
export default Result;
const Container=styled.div`
margin:2rem;
padding:1rem;
direction:rtl;
 `