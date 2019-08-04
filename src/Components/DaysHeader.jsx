import React from "react";

export default function DaysHeader() {
  return (
    <>
      <DisplayDayOfWeek dayNum={0} />
      <DisplayDayOfWeek dayNum={1} />
      <DisplayDayOfWeek dayNum={2} />
      <DisplayDayOfWeek dayNum={3} />
      <DisplayDayOfWeek dayNum={4} />
      <DisplayDayOfWeek dayNum={5} />
      <DisplayDayOfWeek dayNum={6} />
    </>
  );
}

function DisplayDayOfWeek({ dayNum }) {
  // Top row of calendar, display days of week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  const day = daysOfWeek[dayNum];
  return (
    <div
      style={{
        width: 100,
        height: 25,
        display: "inline-grid",
        gridRowStart: 1,
        gridColumnStart: dayNum + 1,
        textAlign: "center"
      }}
    >
      {day}
    </div>
  );
}
