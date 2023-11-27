"use client";
import { toggleTheme } from "@/utils/theme";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { MdWbSunny } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./Navbar.css";
import Link from "next/link";
function NavBar() {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme.dark);
  function handleChangeTheme() {
    setIsChecked(!isChecked);
    dispatch(toggleTheme());
  }
  const session = useSession();
  return (
    <>
      <header>
        <div className="nav-wrapper">
          <div className="logo-container">
            <p className="nav_title">Next Blog</p>
          </div>
          <nav>
            <input className="hidden" type="checkbox" id="menuToggle"></input>
            <label className="menu-btn" htmlFor="menuToggle">
              <div className="menu"></div>
              <div className="menu"></div>
              <div className="menu"></div>
            </label>
            <div className="nav-container">
              <ul className="nav-tabs">
                <Link href={"/"}>
                  <li className="nav-tab">
                    {!isChecked ? (
                      <MdWbSunny
                        style={{ marginTop: "2px" }}
                        onClick={(e) => handleChangeTheme(e)}
                      />
                    ) : (
                      <MdNightlight
                        style={{ marginTop: "2px" }}
                        onClick={(e) => handleChangeTheme(e)}
                      ></MdNightlight>
                    )}
                  </li>
                </Link>
                <Link
                  className="link_style"
                  style={{ textDecorationLine: "none", color: "black" }}
                  href={"/"}
                >
                  <li className="nav-tab">Home</li>
                </Link>
                {/* <Link
                  className="link_style"
                  style={{ textDecorationLine: "none", color: "black" }}
                  href={"/portfolio"}
                >
                  <li className="nav-tab">Portfolio</li>
                </Link> */}
                <Link
                  className="link_style"
                  style={{ textDecorationLine: "none", color: "black" }}
                  href={"/blog"}
                >
                  <li className="nav-tab">Blog</li>
                </Link>
                <Link
                  className="link_style"
                  style={{ textDecorationLine: "none", color: "black" }}
                  href={"/about"}
                >
                  <li className="nav-tab">About</li>
                </Link>
                <Link
                  className="link_style"
                  style={{ textDecorationLine: "none", color: "black" }}
                  href={"/contact"}
                >
                  <li className="nav-tab">Contact</li>
                </Link>
                <Link
                  className="link_style"
                  style={{ textDecorationLine: "none", color: "black" }}
                  href={"/dashboard"}
                >
                  <li className="nav-tab">Dashboard</li>
                </Link>
                {session.status === "authenticated" && (
                  <button className="logout" onClick={signOut}>
                    Logout
                  </button>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
export default NavBar;
