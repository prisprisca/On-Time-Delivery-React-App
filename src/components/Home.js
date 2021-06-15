import React from "react";
 import "../style/Home.css"

function Home() {
  return (
    <div className="home">
      <img
        src="https://image1.jdomni.in/banner/22102020/FE/C0/00/6712B4C4F7F672A139E639163C_1603376097800.png?output-format=webp"
        alt="delivery"
        height="420px"
        width="100%"
      />
      <div className="text">
        <span>Best On Time</span>
        <p>Courier Services</p>
        <p>Fill the form</p>
        <p>We collect</p>
        <p>Delivery</p>
        <button>Enquire Now</button>
      </div>
    </div>
  );
}

export default Home;
