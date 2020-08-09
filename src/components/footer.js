import React from 'react';
import styled from "styled-components";
const Footer =()=>{

  return (
     <FooterSection>
            <FooterP> copyright © 2020 by Eslam profile </FooterP>
        </FooterSection>
  )  
}
export default Footer;
export const FooterSection=styled.div` 
    text-align:center;
    width:100%;
  
    margin:auto;
    padding:15px 0;
    background:var(--mainBlack);!important;


 `

export const FooterP=styled.p` 
color:var(--mainWhite) !important;
 `
