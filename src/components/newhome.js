import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {HomeConsumer} from './Context';
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Details from './Details';
import { withStyles } from "@material-ui/styles";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
const styles = (theme) => ({
    root: {
      display: "flex",
     
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
       
      width: 300,
     
    
    },
  

  });

    
class NewHome extends Component{
    
    
    render(){
        const { classes } = this.props;
        const{id,title,img,price,area,type,category,proparty,addres}=this.props.item;
     
          console.log(Object.values(this.props.item).length)
       
        return(
            <div className="col-md-12 mx-auto my-3  ">
         
           
            <HomeConsumer>
                {value=>(
                  
                       <div >
                     <div id={id}  onClick= {()=>value.handelDetails(id)} >
                          <Link to='/details'>
                     <Card style={{height:"200px"}} className={classes.root} >
                     <CardMedia className={classes.cover} component="img" style={{height:"200px", display:"flex"}}  image={img}  title={title} />
                     <div className={classes.details}>
                     
                       <CardContent className={classes.content}>
                         <Typography color='primary'  component="h5"  variant="h5">
                           {title}
                         </Typography>
                         <Typography className="py-3" 
                           variant="body1"
                         
                           component="p"
                           style={{color:"#da8410"}}
                         >
                             <LocalOfferIcon />
                          $ {price}
                         </Typography>
                         <Typography className="pt-5" 
                           variant="h6"
                           color='primary'
                           component="p"
                           
                         >
                            <span style={{color:"black"}}>{addres} </span>
                <span style={{color:"#aeaeaf"}} >| </span>
                {category}
                         </Typography>
                       </CardContent>
                       
                     </div>
                     
                   </Card>
                   </Link>
                   </div> </div>

       
        )}
         </HomeConsumer>
         </div>
       )
        
    }}
    export default withStyles(styles) (NewHome);