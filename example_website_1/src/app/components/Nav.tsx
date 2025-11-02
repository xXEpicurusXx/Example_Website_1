"use client";

import React, { useState } from "react";
import { navs } from "../data/data";
import "./nav.css";

export default function Nav() {
  const [navList, setNavList] = useState(navs);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  const handleScrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (mobileNavOpen) {
      setMobileNavOpen(false);
    }
  };

  return (
    <>
      <button
        className={`mobile-nav-toggle ${mobileNavOpen ? "active" : ""}`}
        onClick={toggleMobileNav}
        aria-label="Toggle navigation"
      >
        <i className={mobileNavOpen ? "bx bx-x" : "bx bx-menu"}></i>
      </button>

      <div
        className={`mobile-nav-overlay ${mobileNavOpen ? "active" : ""}`}
        onClick={toggleMobileNav}
      ></div>

      <nav
        id="navbar"
        className={`navbar nav-menu ${mobileNavOpen ? "mobile-nav-active" : ""}`}
      >
        <ul>
          {navList.map((nav) => (
            <li key={nav.id}>
              <a
                onClick={() => handleScrollTo(nav.target)}
                href={`#${nav.target}`}
                className={`nav-link scrollto ${nav.active ? "active" : ""}`}
              >
                <i className={nav.icon}></i>
                <span>{nav.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
