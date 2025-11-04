"use client";

import React, { useState, useEffect } from "react";
import { counterData } from "../data/data";
import SectionTitle from "../components/SectionTitle";
import CounterItem from "../components/CounterItem";

export default function Facts() {
  const [counters, setCounters] = useState(counterData);
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  const handleSectionActive = () => {
    let sectionPosition: HTMLElement | any = document.querySelector("#facts");
    let postion = scroll + 500;

    if (
      postion >= sectionPosition.offsetTop &&
      postion <= sectionPosition.offsetTop + sectionPosition.offsetHeight
    ) {
      setActive(true);
    }
  };

  useEffect(() => {
    handleSectionActive();
  }, [scroll]);

  return (
    <section id="facts" className="facts">
      <div className="container">
        <SectionTitle
          title="facts"
          brief="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <div className="row">
          {counters &&
            active &&
            counters.length > 0 &&
            counters.map(counter => (
              <CounterItem key={counter.id} item={counter} />
            ))}
        </div>
      </div>
    </section>
  );
}
