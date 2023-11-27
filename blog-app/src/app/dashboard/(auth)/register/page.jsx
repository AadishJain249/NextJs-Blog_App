"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./register.css"
import { useRouter } from "next/navigation";
const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className="reg_container">
      <h1 className="reg_title">Create an Account</h1>
      <h2 className="reg_subtitle">Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className="reg_form">
        <input type="text" placeholder="Username" required className="reg_input" />
        <input type="text" placeholder="Email" required className="reg_input" />
        <input
          type="password"
          placeholder="Password"
          required
          className="reg_input"
        />
        <button className="reg_button">Register</button>
        {error && "Something went wrong!"}
      </form>
      <span className="reg_or">- OR -</span>
      <Link className="reg_link" href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
