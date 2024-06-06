import React from "react";
import "./HomeStyle.css";
import Carousel from "react-bootstrap/Carousel";
import Images from "../../constants/Images";
import Notices from "../../components/Notice/Notice";
import LatestUpdates from "../../components/LatestUpadates/LatestUpadates";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  

  return (
    <div className="main_page">
      <div className="carousel">
      <Carousel  interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Images.paddyFields}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Images.greenTea}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Images.plantations}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Images.youngAsian}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      </div>
      <div className="content">
        <div className="notice">
          <i className="gov_icon fas fa-university"></i>
          <Notices />
        </div>
        <div className="latestupdate">
          <LatestUpdates />
        </div>
        <div className="hero">
          <Hero/>
        </div>
      </div>
    </div>
  );
};

export default Home;
