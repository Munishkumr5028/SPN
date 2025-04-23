import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMini, setShowMini] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setShowMini(false);
      } else {
        setShowMini(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <div className={`mini-navbar ${showMini ? "visible" : "hidden"}`}>
        <div className="mini-left">
          <span>
            <FaEnvelope /> example@gmail.com
          </span>
          <span>
            <FaMapMarkerAlt /> Punjab, India
          </span>
          <span>
            <FaPhoneAlt /> +91 98765 43210
          </span>
        </div>
        <div className="mini-right">
          <Link to="#">
            <FaFacebookF />
          </Link>
          <Link to="#">
            <FaInstagram />
          </Link>
          <Link to="#">
            <FaTwitter />
          </Link>
        </div>
      </div>

      <div className="main-navbar">
        <div className="logo">Panjab University</div>
        <nav className={`nav-links ${showMenu ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/news">News</Link>
          <Link to="/students">Students</Link>
          <Link to="/alumni">Alumni</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <button className="admission-btn">Admission</button>
          <FaBars
            className="hamburger"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
