import React from "react";
import leftChevron from "../icons/left_chevron.svg";
import rightChevron from "../icons/right_chevron.svg";

export default function ChangeMonthBtn({
  selectedYear,
  selectedMonthIndex,
  setSelectedYear,
  monthDelta, // direction of change, -1 for prev month, 1 for next month
  changeSelectedMonth
}) {
  function handleClick() {
    if (monthDelta === -1) {
      // subtract 1 from month:
      if (selectedMonthIndex > 0) {
        changeSelectedMonth(selectedMonthIndex - 1);
      } else {
        changeSelectedMonth(11);
        setSelectedYear(selectedYear - 1);
      }
    } else {
      // add 1 to month:
      if (selectedMonthIndex < 11) {
        changeSelectedMonth(selectedMonthIndex + 1);
      } else {
        changeSelectedMonth(0);
        setSelectedYear(selectedYear + 1);
      }
    }
  }

  return (
    <button type={"button"} onClick={handleClick} className="btn-chevron">
      {monthDelta === -1 ? (
        <img src={leftChevron} alt="<" style={{ height: ".6rem" }} />
      ) : (
        <img src={rightChevron} alt=">" style={{ height: ".6rem" }} />
      )}
    </button>
  );
}
