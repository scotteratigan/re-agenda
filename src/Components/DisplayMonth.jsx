import React from "react";
import moment from "moment";

import DisplayDay from "./DisplayDay";
import DaysHeader from "./DaysHeader";
import events from "../events.json";

export default function DisplayMonth({ displayMonth, displayYear }) {
  const firstDayStr = `${displayYear}/${displayMonth}/1`;
  const displayStartMoment = moment(firstDayStr, "YYYY/M/D"); // creating string 2019/August/1 for instance (using Date obj is depreciated in MomentJS)
  const startDayNum = displayStartMoment.day(); // Sunday is 0, Monday is 1
  const daysInMonth = displayStartMoment.daysInMonth();
  const dateArr = Array.apply(null, Array(daysInMonth));
  dateArr.forEach((elm, i) => (dateArr[i] = i + 1));
  const yearEvents = events[displayYear] || [];
  const monthEvents = yearEvents[displayMonth] || [];
  const currMoment = moment();
  const isCurrYear = moment().year() === parseInt(displayYear);
  const isCurrMonth = currMoment.month() + 1 === parseInt(displayMonth);
  return (
    <div style={{ display: "grid", gridGap: 1 }}>
      <DaysHeader />
      {dateArr.map((dayNum, i) => {
        const column = ((i + startDayNum) % 7) + 1;
        const row = Math.ceil((dayNum + startDayNum) / 7) + 1;
        const eventsToday = monthEvents[dayNum] || [];
        const isToday =
          isCurrYear && isCurrMonth && dayNum === currMoment.date();
        return (
          <DisplayDay
            date={dayNum}
            column={column}
            row={row}
            events={eventsToday}
            key={dayNum}
            isToday={isToday}
          />
        );
      })}
    </div>
  );
}
