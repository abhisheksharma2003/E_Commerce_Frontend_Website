import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            Our e-commerce platform is designed to deliver a seamless and
            engaging shopping experience by combining modern design with
            intuitive functionality. We offer a curated selection of quality
            products, easy navigation, and a responsive interface that works
            smoothly across all devices. With features like product collections,
            best sellers, and a user-friendly cart system, our goal is to make
            online shopping simple, reliable, and enjoyable for every customer.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 7217661602</li>
            <li>abhishek7217661602@gmail.com</li>
            <li>
              <a
                href="https://www.linkedin.com/in/abhishek-sharma-712833260/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="text-gray-400" />
        <p className="py-5 text-sm text-center text-gray-400">
          Copyright 2026@ abhishek - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
