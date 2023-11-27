"use client";
import React from "react";
import "./page.css";
// import Image from "next/image";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Link from "next/link";
function page() {
  const theme = useSelector((store) => store.theme.dark);
  return (
    <>
      <div className="whole">
        <div className="container">
          <div className="item">
            <h1 className="title">Blog App Created With Next Js.</h1>
            <p className="desc">
             An App built to help different people to connect with each other.
            </p>
            <Link href={"/blog"}>
              <button className="container_button">See My  Works</button>
            </Link>
          </div>
          <div className="item">
            <img
              src="https://i.pinimg.com/originals/c3/76/47/c37647d3cd724c0dc86a7db7627eaba5.jpg"
              alt="Text"
              className="imag"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
