"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./blogpost.css";
import axios from "axios";
const BlogPost = ({ params }) => {
  // console.log(params);
  const [blogpost, setBlogPost] = useState();
  const { id } = params;
  useEffect(() => {
    getPostData();
  }, []);
  async function getPostData() {
    try {
      const res = await axios.get(`http://localhost:3000/api/posts/${id}`);
      const data = await res.data;
      // console.log(data);
      setBlogPost(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  if (blogpost === undefined)
    return (
      <>
        <h1 style={{fontWeight:"100",textAlign:"center"}}>Loading</h1>
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );

  return (
    <>
      <div className="Sblog_container">
        <div className="Sblog_top">
          <div className="Sblog_info">
            <h1 className="Sblog_title">{blogpost.title}</h1>
            <p className="Sblog_desc">{blogpost.desc}</p>
            <div className="Sblog_author">
              <img
                src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                alt=""
                width={40}
                height={40}
                className="Sblog_avatar"
              />
              <span className="Sblog_username">{blogpost.username}</span>
            </div>
          </div>
          <div className="Sblog_imageContainer">
            <img src={blogpost.img} alt="" className="Sblog_image" />
          </div>
        </div>
        <div className="Sblog_content">
          <p className="Sblog_text">{blogpost.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
