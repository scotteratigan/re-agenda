import React from "react";

export default function CalendarHeader({year, month}) {
  return (
    <h1
      style={{
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "white",
        margin: "0 -15px",
        padding: "15px 0",
        clipPath: "polygon(0 0, 95% 0%, 80% 100%, 0% 100%)"
      }}
    >
      {month} {year}
    </h1>
  );
}
