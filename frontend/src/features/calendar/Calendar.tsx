import React, { useState } from "react";
import DaysGrid from "./DaysGrid";
import MonthNavigation from "./MonthNavigation";
import NotesPopup from "../notes/NotesPopup";
import { useAppSelector } from "../../app/hooks";
import { selectNotes } from "../notes/notesSlice";

const Calendar: React.FC = () => {
  const [month, setMonth] = useState(`${new Date().getMonth() + 1}`);
  const [year, setYear] = useState(`${new Date().getFullYear()}`);
  const notes = useAppSelector(selectNotes);

  const handleMonthChange = (newMonth: string) => {
    setMonth(newMonth);
  };

  const handleYearChange = (newYear: string) => {
    setYear(newYear);
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1); // Simplified; should adjust based on month/year
  const notesCounts = notes.reduce((acc, note) => {
    const day = parseInt(note.date.split("-")[2], 10); // Assuming date format is "YYYY-MM-DD"
    (acc as Array<number>)[day] = ((acc as Array<number>)[day] || 0) + 1;
    return acc;
  }, {});

  const handleDayClick = () => {};

  return (
    <div>
      <MonthNavigation
        month={month}
        year={year}
        onMonthChange={handleMonthChange}
        onYearChange={handleYearChange}
      />
      <div className="mt-4">
        <DaysGrid
          days={days}
          notesCounts={notesCounts}
          onDayClick={handleDayClick}
        />
      </div>
    </div>
  );
};

export default Calendar;
