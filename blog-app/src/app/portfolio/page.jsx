import React from "react";
import Link from "next/link";
import './portfolio.css'
const Portfolio = () => {
  return (
    <div className="port_container">
      <h1 className="port_selectTitle">Choose a gallery</h1>
      <div className="port_items">
        <Link href="/portfolio/illustrations" className="port_item">
          <span className="port_title">Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className="port_item">
          <span className="port_title">Websites</span>
        </Link>
        <Link href="/portfolio/application" className="port_item">
          <span className="port_title">Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;