import React from "react";
import Image from "next/image";
import './contact.css'
function Contact() {
  return (
    <>
      <div className="contact_page">
        <h1 style={{textAlign:"center",marginTop:"20px",paddingBottom:"30px"}}>Let's Keep in touch</h1>
        <div className="contact_body">
          <Image
            src={
              "https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg"
            }
            width={350}
            height={350}
            alt="text"
          ></Image>
          <form className="contact_form">
            <label className="contact_label" for="name">Name:</label>
            <input className="contact_input" type="text" id="name" name="name" required></input>

            <label className="contact_label" for="email">Email:</label>
            <input className="contact_input" type="email" id="email" name="email" required></input>

            <label className="contact_label" for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
