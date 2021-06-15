import React from "react";
import Services from "./Services";
import "../style/OurServices.css"

function OurServices() {
  return (
    <div className="our-services">
      <h1>Services</h1>
      <div className="services-offered">
        <Services
          id="12"
          title="Express Delivery"
          image="https://image3.jdomni.in/banner/6A/03/39/85214E0B5CB81A0C32D68BC773_1510750395559.jpg?output-format=webp"
        />
        <Services
          id="12"
          title="Standard Delivery"
          image="https://images.unsplash.com/photo-1595054225874-7d2315262e73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHBhY2thZ2UlMjBkZWxpdmVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <Services
          id="12"
          title="Corporate Delivery"
          image="https://images.unsplash.com/photo-1570300315788-5d3c46681461?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2UlMjBkZWxpdmVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <Services
          id="12"
          title="Heavy Goods Delivery"
          image="https://images.unsplash.com/photo-1607227063002-677dc5fdf96f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFja2FnZSUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
}

export default OurServices;
