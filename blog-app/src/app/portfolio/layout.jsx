import React from "react";
import './portfolio.css'
function Layout({ children }) {
  return (
    <div>
      <h1 className="mainTitle">Our Works</h1>
      {children}
    </div>
  );
}

export default Layout;
