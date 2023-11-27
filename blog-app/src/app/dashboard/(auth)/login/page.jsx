"use client";
import React, { useEffect, useState } from "react";
import "./login.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return (
      <>
        <h1 style={{ fontWeight: "100", textAlign: "center" }}>Loading</h1>
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
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <>
      <div className="log_container">
        <h1 className="log_title">{success ? success : "Welcome Back"}</h1>
        <h2 className="log_subtitle">Please sign in to see the dashboard.</h2>

        <form onSubmit={handleSubmit} className="log_form">
          <input
            type="text"
            placeholder="Email"
            required
            className="log_input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="log_input"
          />
          <button className="log_button">Login</button>
          {error && error}
        </form>
        <button
          onClick={() => {
            signIn("google");
          }}
          className="log_button"
        >
          Login with Google
        </button>
        <span className="log_or">- OR -</span>
        <Link className="log_link" href="/dashboard/register">
          Create new account
        </Link>
      </div>
    </>
  );
};

export default Login;
