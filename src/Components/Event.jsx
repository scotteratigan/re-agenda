import React, { useState } from "react";

export default function Event({ event }) {
  function hoverStart() {
    console.log("hovering");
    setHovered(true);
  }
  function hoverEnd() {
    console.log("not hovering");
    setHovered(false);
  }
  const [hovered, setHovered] = useState(false);
  const { name, description, federalHoliday } = event;
  return (
    <div
      onMouseEnter={hoverStart}
      onMouseLeave={hoverEnd}
      style={
        hovered
          ? {
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: 5,
              display: "absolute",
              zIndex: 3,
              width: "200%",
              transition: "all 0.3s"
            }
          : federalHoliday
          ? {
              fontSize: "0.8rem",
              color: "white",
              backgroundColor: "blue"
            }
          : { fontSize: "0.8rem" }
      }
    >
      {hovered ? (
        <div>
          <div
            style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            {name}
          </div>
          <div style={{ fontSize: "0.7rem" }}>{description}</div>
        </div>
      ) : (
        <div>{name}</div>
      )}
    </div>
  );
}
