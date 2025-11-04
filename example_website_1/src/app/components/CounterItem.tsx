import React from "react";
import "./CounterItem.css";
import CountUp from "react-countup";

export default function CounterItem({
  item,
}: {
  item: {
    icon: string;
    end: number;
    duration: number;
    name: string;
  };
}) {
  return (
    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div className="count-box">
        <i className={item.icon}></i>
        <span>
          <CountUp start={0} end={item.end} duration={item.duration} />
        </span>
        <p>{item.name}</p>
      </div>
    </div>
  );
}
