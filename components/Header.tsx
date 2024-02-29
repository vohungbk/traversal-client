"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      setIsChecked(currentTheme === "dark");
    }
  }, []);

  function switchTheme(e: React.ChangeEvent<HTMLInputElement>) {
    const theme = e.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setIsChecked(e.target.checked);
  }

  function handleClick() {
    setIsActive(!isActive);
    const bodyElement = document.querySelector("body");
    bodyElement?.classList.add("noscroll");
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    if (window.innerWidth > 991) {
      const headerElement = document.querySelector("header");
      headerElement?.classList.remove("active");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const scroll = window.scrollY;
    const siteHeader = document.getElementById("site-header");

    if (scroll >= 80) {
      siteHeader?.classList.add("nav-fixed");
    } else {
      siteHeader?.classList.remove("nav-fixed");
    }
  }

  return (
    <header id="site-header" className={`fixed-top ${isActive ? "active" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke">
          <h1>
            <a className="navbar-brand mr-lg-5" href="index.html">
              Traversal
            </a>
          </h1>

          <button
            className="navbar-toggler collapsed bg-gradient"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto">
              <ActiveLink href="/">
                Home <span className="sr-only">(current)</span>
              </ActiveLink>
              <ActiveLink href="/about">About</ActiveLink>
              <ActiveLink href="/services">Destinations</ActiveLink>
              <ActiveLink href="/contact">Contact</ActiveLink>
            </ul>
          </div>
          <div className="d-lg-block d-none">
            <Link href="/contact" className="btn btn-style btn-secondary">
              Get In Touch
            </Link>
          </div>
          <div className="mobile-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" checked={isChecked} onChange={switchTheme} />
                  <div className="mode-container">
                    <i className="gg-sun"></i>
                    <i className="gg-moon"></i>
                  </div>
                </label>
              </div>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
