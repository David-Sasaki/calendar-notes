import React, { useState, useEffect } from "react";
import DaysGrid from "./DaysGrid";
import Navigation from "./Navigation";

const Calendar: React.FC = () => {
  const GridSize: number = 35; // 5 weeks
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [startDate, setStartDate] = useState(new Date());
  const [days, setDays] = useState(Array(GridSize).fill(0));
  const [clickables, setClickables] = useState(Array(GridSize).fill(false));

  const getPreviousDay = (date: Date) => {
    const previousDate = new Date(date.getTime());
    previousDate.setDate(date.getDate() - 1);
    return previousDate;
  };

  const getNextDay = (date: Date) => {
    const nextDate = new Date(date.getTime());
    nextDate.setDate(date.getDate() + 1);
    return nextDate;
  };

  useEffect(() => {
    let firstDay = new Date(year, month, 1);
    while (true) {
      if (firstDay.getDay() === 0) break;
      firstDay = getPreviousDay(firstDay);
    }
    setStartDate(firstDay);
  }, [year, month]);

  const getDays = () => {
    let firstDay = startDate;
    let newDays = Array(GridSize).fill(0);
    for (let i = 0; i < GridSize; i++) {
      newDays[i] = firstDay.getDate();
      firstDay = getNextDay(firstDay);
    }
    return newDays;
  };

  const getClickables = () => {
    let firstDay = startDate;
    let newClickables = Array(GridSize).fill(false);
    for (let i = 0; i < GridSize; i++) {
      newClickables[i] = firstDay.getMonth() === month;
      firstDay = getNextDay(firstDay);
    }
    return newClickables;
  };

  useEffect(() => {
    setDays(getDays());
    setClickables(getClickables());
  }, [startDate]);

  const handlePreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleYearSelect = (newYear: number) => {
    setYear(newYear);
  };

  return (
    <div>
      <Navigation
        year={year}
        month={month}
        onYearSelect={handleYearSelect}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
      />
      <div className="mt-4">
        <DaysGrid days={days} clickables={clickables} />
      </div>
    </div>
  );
};

export default Calendar;
