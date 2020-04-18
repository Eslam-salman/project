import React,{Component} from 'react';
import {House,detailHouse} from '../data';
const ProviderContext=React.createContext();

  class HomeProvider extends Component{
    state={
       Home:House,
       detailHouse:detailHouse
      
      
    };
  /* componentDidMount(){
        this.setHome();
        console.log(this.state.Home);
    }
    setHome=()=>{
        let tempProduct=[];
        House.forEach(item =>{
         tempProduct.push(item);
        });
        this.setState({
           Home:tempProduct
        });
    };*/
   
    getHouse=(id)=>{
      const details=this.state.Home.find(item=>item.id===id );
      return details;

    }
    
    handelDetails=(id)=>{
    const details=this.getHouse(id)
       
        this.setState({
            detailHouse: details
        })
    };
    
    closemodel=()=>{
        this.setState({
            modelopen:false
        });
    }
    openmodel=(id)=>{
        const product=this.getProduct(id);
        this.setState({
            modelprodact:product,
            modelopen:true
        });

    }
    Search=(type,place)=>{
        const search=this.state.Home.find(item=>item.addres===place&&item.type===type );
        this.setState({
            search: search
        })
      }
    

    render(){
        return(
           <ProviderContext.Provider value={{
               obj:this.state,
               handelDetails:this.handelDetails,
               openmodel:this.openmodel,
               closemodel:this.closemodel,
               Search:this.Search
              
           }}>
               {this.props.children}
           </ProviderContext.Provider>
        );
    }
   
}
  export const HomeConsumer=ProviderContext.Consumer;
export default HomeProvider;