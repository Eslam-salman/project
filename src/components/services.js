import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HomeConsumer } from "./Context";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { green } from "@material-ui/core/colors";

class Services extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="row mrb2 inside">
            <div className="col-md-6 ">
              <div className="row">
                <div className="col-md-12">
                  <div className="titleBox bck d-flex  ">
                    <h3>
                      مرحباً بكم في عقارات{" "}
                      <span className="spantitle"> فلسطين</span>
                    </h3>
                    <Span></Span>
                  </div>
                </div>

                <div className=" homeCatogries col-lg-4 col-sm-6 col-xs-12 text-center  ">
                  <Link to="/apartment">
                    <span>
                      <img
                        src="https://uaeaq.com/upload/catogries/thumb/2016-12/real-estate-image-58660bb251b8911.png"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="cat_name ">شقق</span>{" "}
                    </span>
                  </Link>
                </div>
                <div className=" homeCatogries col-lg-4 col-sm-6 col-xs-12 text-center  ">
                  <Link to="/villa">
                    <span>
                      <img
                        src="https://uaeaq.com/upload/catogries/thumb/2016-12/real-estate-image-5865cde7425992.png"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="cat_name">فلل</span>{" "}
                    </span>
                  </Link>
                </div>

                <div className=" homeCatogries col-lg-4 col-sm-6 col-xs-12 text-center  ">
                  <Link to="/room">
                    <span>
                      <img
                        src="https://uaeaq.com/upload/catogries/thumb/2016-12/real-estate-image-5865cb56294e117.png"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="cat_name">استديوهات وغرف</span>{" "}
                    </span>
                  </Link>
                </div>
                <div className=" homeCatogries col-lg-4 col-sm-6 col-xs-12 text-center ">
                  <Link to="/land">
                    <span>
                      <img
                        src="https://uaeaq.com/upload/catogries/thumb/2016-12/real-estate-image-5865cd1d2db4b13.png"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="cat_name ">أراضي</span>{" "}
                    </span>
                  </Link>
                </div>
                <div className=" homeCatogries col-lg-4 col-sm-6 col-xs-12 text-center  ">
                  <Link to="/resort">
                    <span>
                      <img
                        src="https://uaeaq.com/upload/catogries/thumb/2016-12/real-estate-image-5865cc7e35fbe15.png"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="cat_name">شاليهات</span>{" "}
                    </span>
                  </Link>
                </div>

                <div className=" homeCatogries col-lg-4 col-sm-6 col-xs-12 text-center  ">
                  <Link to="/building">
                    <span>
                      <img
                        src="https://uaeaq.com/upload/catogries/thumb/2016-12/real-estate-image-5865cab992c8e3.png"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="cat_name">عمارات</span>{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="titleBox bck d-flex">
                    <h3> أضف عقارك الأن</h3>

                    <Span></Span>
                  </div>

                  <div className="d-flex  align-items-center">
                    <Link
                      to="/adv"
                      className="btn btn-warning  blocksm btn-icon btn-lg"
                    >
                      <h5>
                        {" "}
                        <AddCircleIcon style={{ color: "white" }} />
                        <span className="pr-2 " style={{ color: "white" }}>
                          أضف عقارك الأن{" "}
                        </span>
                      </h5>
                    </Link>
                  </div>
                </div>
                <div className=" row d-block ">
                  <div className="col-md-12 d-flex">
                    <ul className="list-unstyled pt-2 ">
                      <li className="d-flex">
                        <CheckBoxIcon style={{ color: green[500] }} />
                        أعلن الآن عن جميع العقارات فى فلسطين
                      </li>
                      <li className="d-flex">
                        <CheckBoxIcon style={{ color: green[500] }} />
                        عقارك يشاهده ملايين الأشخاص{" "}
                      </li>
                      <li className="d-flex">
                        <CheckBoxIcon style={{ color: green[500] }} />
                        بإمكانك اضافة صور للإعلان{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Services;
const Container = styled.div`
  direction: rtl;
  margin: 2rem;
  padding: 1rem;
  background: white;
`;
const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-bottom: 20px solid #eae9e3;
  border-left: 20px solid #fff;
  display: block;
`;
