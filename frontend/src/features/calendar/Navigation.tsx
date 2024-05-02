import React from "react";
import Button from "../ui/Button";
import Dropdown from "../ui/Dropdown";

interface NavigationProps {
  year: number;
  month: number;
  onYearSelect: (year: number) => void;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

const months = [
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
  "December",
];

const Navigation: React.FC<NavigationProps> = ({
  year,
  month,
  onYearSelect,
  onPreviousMonth,
  onNextMonth,
}) => {
  const years = Array.from({ length: 10 }, (_, i) => ({
    value: new Date().getFullYear() - 5 + i,
    label: new Date().getFullYear() - 5 + i,
  }));

  return (
    <div className="flex justify-between items-center p-2 bg-blue-100 rounded">
      <div className="flex justify-between gap-6">
        <Button value="Previous Month" handleOnClick={onPreviousMonth} />
        <p className="text-lg text-gray-800 font-bold shadow-md">
          {months[month]}
        </p>
        <Button value="Next Month" handleOnClick={onNextMonth} />
      </div>
      <Dropdown options={years} value={year} onChange={onYearSelect} />
    </div>
  );
};

export default Navigation;
