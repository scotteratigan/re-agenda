import React from "react";
import YearPicker from "./YearPicker";
import MonthPicker from "./MonthPicker";
import ChangeMonthBtn from "./ChangeMonthBtn";

export default function DatePickerRow({
  selectedYear,
  setSelectedYear,
  monthList,
  yearList,
  selectedMonthIndex,
  changeSelectedMonth
}) {
  return (
    <div style={{ textAlign: "center", margin: 20 }}>
      <ChangeMonthBtn
        selectedYear={selectedYear}
        selectedMonthIndex={selectedMonthIndex}
        setSelectedYear={setSelectedYear}
        changeSelectedMonth={changeSelectedMonth}
        monthDelta={-1}
      />
      <MonthPicker
        selectedMonthIndex={selectedMonthIndex}
        changeSelectedMonth={changeSelectedMonth}
        monthList={monthList}
      />
      <YearPicker
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        yearList={yearList}
      />
      <ChangeMonthBtn
        selectedYear={selectedYear}
        selectedMonthIndex={selectedMonthIndex}
        setSelectedYear={setSelectedYear}
        changeSelectedMonth={changeSelectedMonth}
        monthDelta={1}
      />
    </div>
  );
}
