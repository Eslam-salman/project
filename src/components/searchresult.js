import React, { Component } from "react";
import Home from "./Home";
import { HomeConsumer } from "./Context";
import styled from "styled-components";
import NewHome from "./newhome";

class Result extends Component {
  render() {
    var type = this.props.location.state.referrer.typeselect;
    var place = this.props.location.state.referrer.placeselect;
    var category = this.props.location.state.referrer.catselect;

    console.log(place, type, category);
    return (
      <React.Fragment>
        <Container>
          <div className="row ">
            <HomeConsumer>
              {(value) => {
                let filteredItems = value.obj.Home.filter((item) => {
                  return (
                    item.addres === place &&
                    item.type === type &&
                    item.category === category
                  );
                });
                if (filteredItems.length > 0)
                  return filteredItems.map((item) => {
                    return <NewHome key={item.id} item={item} />;
                  });
                return <h3 className="w-100 text-center">No results found</h3>;
              }}
            </HomeConsumer>
          </div>
        </Container>
      </React.Fragment>
      //
    );
  }
}
export default Result;
const Container = styled.div`
  margin: 2rem;
  padding: 1rem;
  direction: rtl;
`;
