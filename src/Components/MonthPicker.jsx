import React from "react";

export default function MonthPicker({
  selectedMonth,
  // setSelectedMonth,
  selectedMonthIndex,
  changeSelectedMonth,
  monthList
}) {
  return (
    <select
      style={{ margin: "0 5px" }}
      value={selectedMonthIndex}
      onChange={e => changeSelectedMonth(parseInt(e.target.value))}
    >
      {monthList.map((month, i) => (
        <option value={i} key={month}>
          {month}
        </option>
      ))}
    </select>
  );
}
