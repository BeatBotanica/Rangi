"use client";

import { useState, useEffect } from "react";
import "./side_nav.css";
import Link from "next/link";
import MusicIcon from "@mui/icons-material/MusicNote";
import StarIcon from "@mui/icons-material/Star";
import HamburgerIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Search from "@/components/search/search";

export default function SideNavigation() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const SMALL_SCREEN = 1023;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // if mobile size, get nav bar component and add "mobile" class
      if (windowWidth <= SMALL_SCREEN) {
        const nav = document.getElementsByClassName("sidenav")[0];
        nav.classList.add("mobile");
      }
      // if desktop size, get nav bar component and remove "mobile" class
      else {
        const nav = document.getElementsByClassName("sidenav")[0];
        nav.classList.remove("mobile");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  useEffect(() => {
    const nav = document.getElementsByClassName("sidenav")[0];
    if (expanded) {
      nav.classList.add("expanded");
    } else {
      nav.classList.remove("expanded");
    }
  }, [expanded]);

  const toggleExpanded = () => {
    if (windowWidth <= SMALL_SCREEN) {
      if (expanded) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    }
  };

  return (
    <div className="sidenav">
      {/* always toggle expanded */}
      <button className="toggle backdrop-blur-lg" onClick={toggleExpanded}>
        {expanded ? (
          <CloseIcon />
        ) : (
          <div className="h-full flex items-center justify-center pb-1">
            <HamburgerIcon />
          </div>
        )}
      </button>
      {/* only toggle expanded if currently expanded */}
      <div className="item nav-search">
        <Search onResultClick={expanded ? toggleExpanded : () => {}} />
      </div>
      <div className="divider" />
      <Link href="/" onClick={expanded ? toggleExpanded : () => {}}>
        <div className="listitem">
          <MusicIcon />
          <h2 className="text-lg font-semibold">Home</h2>
        </div>
      </Link>
      <Link href="/stars" onClick={expanded ? toggleExpanded : () => {}}>
        <div className="listitem">
          <StarIcon />
          <h2 className="text-lg font-semibold">Stars</h2>
        </div>
      </Link>
      <div className="divider" />
    </div>
  );
}
