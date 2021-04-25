import React from "react";
import { NavLink } from "react-router-dom";
import "./View.scss";

const View = (props) => {
  return (
    <>
      <section id="header">
        <div className="container-fluid home-font ">
              <div className="row mx-5">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h1>
                    {props.name} <strong className="brand-name"> ours </strong>
                  </h1>
                  <h4 className="my-2" >we are always ready to show you the beauty of nature</h4>

                  <NavLink to={props.visit}>
                    <button className="btn mt-3 bg-primary">
                      {props.btname}
                    </button>
                  </NavLink>
                  
                </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} className="imgg-fluid" alt="home-img" />
              </div>
            </div>
            </div>

      </section>
    </>
  );
};

export default View;
