import React from "react";
// import styles from "./page.module.css";
// import Button from "@/components/Button/Button";
import Image from "next/image";
import './category.css'
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className="port_container">
      <h1 className="port_catTitle">{params.category}</h1>

      {data.map((item) => (
        <div className="port_item" key={item.id}>
          <div className="port_content">
            <h1 className="port_title">{item.title}</h1>
            <p className="port_desc">{item.desc}</p>
            <button>See More</button>
          </div>
          <div className="port_imgContainer">
            <img
              className="port_img"
              // fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;