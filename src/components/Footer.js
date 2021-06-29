import React from "react";
import "../style/Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "@material-ui/core";

const Footer = () => (
  <div className="foot">
    <div className="footer">
      <div className="footer_info">
        <h1>
          On-Time-Delivery<span>.</span>
        </h1>

        <div className="footer_para">
          <p>
            We are committed to offer fast, reliable <br/>and on-time deliveries of
            your consignments
            <br /> We specialize in the rapid, cost-effective and reliable
            <br /> delivery of parcels with active customer support.
          </p>
        </div>
      </div>

    

      <div className="foot_contact">
        <span>Quick Links</span>
        <Link to ="/">
          <p className="links">Home</p>
        </Link>
        <Link to = "/about">
          <p className="links">About</p>
        </Link>
        <Link to = "/auth">
          <p className="links">Login</p>
        </Link>
       
      </div>

      <div className="footer_contact">
        <div className="foot_contact">
          <span>Contact Us</span>
          <p>(+256)77908765</p>
          <p>ontimedelivery@gmail.com</p>
        </div>

        <div className="footer_icon">
          <Link to="facebook">
            <FacebookIcon className="face" />
          </Link>
          <Link to="twiter">
            <TwitterIcon className="twit" />
          </Link>
          <Link to="instagram">
            <InstagramIcon className="inst" />
          </Link>
        </div>
      </div>

      <div className="news_events">
        <span>New Latest</span>
        <p>Get the latest updates and offers</p>
        <input placeholder="Your Email" />
      </div>
    </div>

    <div className="lower_footer">
      <p>Terms&Conditions</p>
      <p>©2021copyright on-time-delivery</p>
      <p>Private Policy</p>
    </div>
  </div>
);

export default Footer;
