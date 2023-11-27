"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
// import Image from "next/image";
import "./blog.css";
const Blog = () => {
  const [pdata, setData] = useState([{}]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get("http://localhost:3000/api/posts");
    const dat = await res.data;
    setData(dat.post);
  };
  if(pdata===undefined)
  {
    return (
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
  }
  return (
    <>
      {pdata.map((data) => (
        <div className="blog_mainContainer">
          <Link style={{textDecoration:"none"}} href={`/blog/${data._id}`} className="blog_container">
            <div className="blog_imageContainer">
              <img
                src={data.img}
                alt=""
                // width={400}
                // height={250}
                className="blog_image"
              />
            </div>
            <div className="blog_content">
              <h1 className="blog_title">{data.title}</h1>
              <p className="blog_desc">{data.desc}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Blog;
