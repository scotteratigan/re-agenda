import React, { useState, useEffect } from "react";
import moment from "moment";

// Components:
import DatePickerRow from "./Components/DatePickerRow";
import DisplayMonth from "./Components/DisplayMonth";
import CalendarHeader from "./Components/CalendarHeader";
import Footer from "./Components/Footer";

// Background Images:
// todo: reduce the size of some of these
import januaryImg from "./images/fabian-mardi-kVKz9qnJC-k-unsplash.jpg";
import februaryImg from "./images/ian-matyssik--G3ouskaEKo-unsplash.jpg";
import marchImg from "./images/anthony-delanoix-urUdKCxsTUI-unsplash.jpg";
import aprilImg from "./images/vishal-bhutani-ugyfweYokVA-unsplash.jpg";
import mayImg from "./images/corina-ardeleanu-sWlxCweDzzs-unsplash.jpg";
import juneImg from "./images/florian-giorgio-8X19catOuNI-unsplash.jpg";
import julyImg from "./images/jacqueline-o-gara-kS4HtDY66Tg-unsplash.jpg";
import augustImg from "./images/mitchell-kmetz-ycGndhqg_QQ-unsplash.jpg";
import septemberImg from "./images/ben-rosett-nYugmV-SY6s-unsplash.jpg";
import octoberImg from "./images/flash-alexander-SDS53BJhAwc-unsplash.jpg";
import novemberImg from "./images/emma-francis-qNnd-DcoFGg-unsplash.jpg";
import decemberImg from "./images/wil-stewart-zlg4ExVKgAU-unsplash.jpg";

function App() {
  const currentYear = moment().year();
  const yearList = generateYearList(currentYear);
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const backgroundList = [
    januaryImg,
    februaryImg,
    marchImg,
    aprilImg,
    mayImg,
    juneImg,
    julyImg,
    augustImg,
    septemberImg,
    octoberImg,
    novemberImg,
    decemberImg
  ];
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(
    moment().month()
  );
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [backgroundImg, setBackgroundImg] = useState(null);
  function changeSelectedMonth(newMonthIndex) {
    setSelectedMonthIndex(newMonthIndex);
  }
  useEffect(() => {
    // Background Image SRC is set after page loads, to increase responsiveness:
    setTimeout(() => {
      setBackgroundImg(backgroundList[selectedMonthIndex]);
    }, 0);
  }, [backgroundList, selectedMonthIndex]);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: "background-image 1.2s ease-in-out"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8",
          padding: 15,
          borderRadius: 10
        }}
      >
        <CalendarHeader year={selectedYear} month={monthList[selectedMonthIndex]}/>
        <DatePickerRow
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          monthList={monthList}
          yearList={yearList}
          selectedMonthIndex={selectedMonthIndex}
          changeSelectedMonth={changeSelectedMonth}
        />
        <DisplayMonth
          displayMonth={selectedMonthIndex + 1}
          monthList={monthList}
          displayYear={selectedYear}
        />
        <Footer />
      </div>
    </div>
  );
}

function generateYearList(currentYear) {
  // returns an array of Numbers, from current year - 10 through current year + 10, given the current year as an Integer
  const yearList = new Array(21);
  for (let i = 0; i < yearList.length; i++) {
    yearList[i] = currentYear - 10 + i;
  }
  return yearList;
}

export default App;
