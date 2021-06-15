import React from "react";
import {Link} from "react-router-dom"
import "../style/About.css";

function About() {
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="about">
        <img
          src="https://image3.jdomni.in/banner/22102020/A6/DB/83/158FF7EAF7E0EB9B04F3DDAA27_1603376548668.jpg?output-format=webp"
          alt="delivering"
          height="360px"
        />
        <div className="about-text">
          <p>
            We, On-Time-Delivery situated in Nakawa, Kampala,Uganad are <br />
            one of the prominent courier service companies offering an array{" "}
            <br />
            of services, in a network, that covers a number of locations. <br />
            We are committed to offer fast, reliable and on-time deliveries of
            <br /> your consignments. We specialize in the rapid, cost-effective
            and <br />
            reliable delivery of parcels with active customer support.
          </p>
        <Link to="/about"> <button>Read More</button></Link> 
        </div>
      </div>

    </div>
  );
}

export default About;
