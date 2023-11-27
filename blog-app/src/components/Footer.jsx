import React from "react";
import Image from "next/image";
import "./Footer.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="container_footer">
      <p>©2023 Aadish. All rights reserved.</p>
      <div className="social">
        <Link href={"https://www.instagram.com/__aadishjain/"}>
          <Image
            src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg"
            width={30}
            height={30}
            className="icon"
            alt="Lama Dev Facebook Account"
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/aadish-jain-872066215/"}>
          <Image
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
            width={30}
            height={30}
            className="icon"
            alt="Lama Dev"
          />
        </Link>
        <Link href={"https://github.com/AadishJain249"}>
          <Image
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            width={30}
            height={30}
            className="icon"
            alt="Lama Dev"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
