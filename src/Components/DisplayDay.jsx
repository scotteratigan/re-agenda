import React from "react";

// Components
import Event from "./Event";

export default function DisplayDay({ date, events, row, column, isToday }) {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        border: "1px solid black",
        borderRadius: 5,
        display: "inline-grid",
        gridRowStart: row,
        gridColumnStart: column
      }}
      className={isToday ? "today-day" : ""}
    >
      <div className={"date-number"}>{date}:</div>
      {events &&
        events.map(event => {
          const { uuid } = event;
          return <Event key={uuid} event={event} />;
        })}
    </div>
  );
}
