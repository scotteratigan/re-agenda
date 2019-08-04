import React from "react";

export default function YearPicker({
  selectedYear,
  setSelectedYear,
  yearList
}) {
  return (
    <select
      style={{ margin: "0 5px" }}
      value={selectedYear}
      onChange={e => setSelectedYear(e.target.value)}
    >
      {yearList.map(year => (
        <option value={year} key={year}>
          {year}
        </option>
      ))}
    </select>
  );
}
