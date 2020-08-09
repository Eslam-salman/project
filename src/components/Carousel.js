import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'; 
import styled from 'styled-components';

const CarouselPage = () => {
 return(
    <Container>
      <Paper className="p-4">
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img style={{height:"300px"}}
              className="d-block w-100"
              src="img/adv7.jpg"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h1-responsive"> نقدم لك</h3>
            <p className="adv">أفضل العروض</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img style={{height:"300px"}}
              className="d-block w-100"
              src="img/adv5.jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"></h3>
            <p className="adv strong"></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img style={{height:"300px"}}
              className="d-block w-100"
              src="img/adv6.jpeg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"></h3>
            <p className="adv strong"></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    </Paper>
     </Container>

  );
}

export default CarouselPage;
const Container=styled.div`
direction:rtl;
margin:2rem;


 `