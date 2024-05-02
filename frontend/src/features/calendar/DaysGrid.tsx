import React from "react";
import Badge from "../ui/Badge";

interface DayProps {
  day: number;
  notesCount: number;
  onClick: () => void;
}

const Day: React.FC<DayProps> = ({ day, notesCount, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="p-2 border cursor-pointer relative text-center"
    >
      {day}
      {notesCount > 0 && <Badge count={notesCount} />}
    </div>
  );
};

interface DaysGridProps {
  days: number[];
  notesCounts: Record<number, number>;
  onDayClick: (day: number) => void;
}

const DaysGrid: React.FC<DaysGridProps> = ({
  days,
  notesCounts,
  onDayClick,
}) => {
  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map((day) => (
        <Day
          key={day}
          day={day}
          notesCount={notesCounts[day] || 0}
          onClick={() => onDayClick(day)}
        />
      ))}
    </div>
  );
};

export default DaysGrid;
