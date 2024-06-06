import React from "react";
import "./HeroStyle.css"
import { Carousel } from "react-bootstrap";
import { hero } from "../../constants/NoticeData";

const Hero = () => {
  return (
    <Carousel interval={5000} indicators={false} controls={false}>
      {hero.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="hero_info">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button className="btn_welcome">Welcome</button>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;
