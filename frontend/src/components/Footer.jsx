import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex fles-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*------------Left Side-----*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Prescripto is a user-friendly app designed for seamless online
            doctor appointment bookings. It allows patients to browse through a
            list of healthcare professionals, view their availability, and
            schedule appointments with ease
          </p>
        </div>
        {/*------------Center Side-----*/}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*------------Right Side-----*/}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+94 333 12121</li>
            <li>prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      {/*--------Copyright Text-----*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Prescripto- All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
