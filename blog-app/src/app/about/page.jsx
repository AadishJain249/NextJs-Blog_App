"use client";
import React from "react";
import "./about.css";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function About() {
  const theme = useSelector((store) => store.theme.dark);

  return (
    <>
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
          <div class="imgContainer">
            <img
              class="blueDots"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg"
            ></img>
            <img
              class="mainImg"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw2.svg"
            ></img>
          </div>
          <div class="responsive-container-block textSide">
            <p class="text-blk heading">About Me</p>
            <p class="text-blk subHeading">
              I am a dedicated and passionate student pursuing a Bachelor of
              Technology at Bhagwan Parshuram Institute of Technology. With a
              strong academic background and a cumulative GPA of 9.29/10.0, I
              have consistently demonstrated my commitment to excellence.Outside
              of academics, I have taken on leadership roles, serving as the DSA
              Head for Google Developer Student Club BPIT in 2022–2023.
              Organizing events with over 80 participants, I have honed my
              organizational and interpersonal skills. My technical skills span
              a wide range, including HTML, CSS, Java, JavaScript, Node JS, and
              MongoDB. I am well-versed in frameworks and libraries such as
              React, Express.js, Spring Boot, Redux, and Next JS. Proficient in
              tools like GitHub, Postman, VSCode, and Eclipse, I am equipped to
              handle diverse challenges in the realm of software development.
            </p>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <img
                  class="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                ></img>
              </div>
              <div class="cardText">
                <p class="text-blk cardHeading">Integrity</p>
                <p class="text-blk cardSubHeading">
                  Upholding honesty and strong moral principles in all actions,
                  even when faced with challenges.
                </p>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <img
                  class="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                ></img>
              </div>
              <div class="cardText">
                <p class="text-blk cardHeading">Respect </p>
                <p class="text-blk cardSubHeading">
                  Treating others with consideration, empathy, and acknowledging
                  the inherent worth and dignity of every individual.
                </p>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <img
                  class="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                ></img>
              </div>
              <div class="cardText">
                <p class="text-blk cardHeading">Responsibility</p>
                <p class="text-blk cardSubHeading">
                  Taking ownership of one's actions, being accountable, and
                  fulfilling commitments to oneself and others.{" "}
                </p>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <img
                  class="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                ></img>
              </div>
              <div class="cardText">
                <p class="text-blk cardHeading">Compassion</p>
                <p class="text-blk cardSubHeading">
                  Showing kindness and understanding towards others, especially
                  during difficult times.{" "}
                </p>
              </div>
            </div>
            <a>
              <Link href={"/contact"}>
                <button class="explore">Contact</button>
              </Link>
            </a>
          </div>
          <img
            class="redDots"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
          ></img>
        </div>
      </div>
    </>
  );
}

export default About;
