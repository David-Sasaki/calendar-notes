import React from "react";
import Dropdown from "../ui/Dropdown";

interface MonthNavigationProps {
  month: string;
  year: string;
  onMonthChange: (month: string) => void;
  onYearChange: (year: string) => void;
}

const MonthNavigation: React.FC<MonthNavigationProps> = ({
  month,
  year,
  onMonthChange,
  onYearChange,
}) => {
  const months = Array.from({ length: 12 }, (_, i) => ({
    value: `${i + 1}`,
    label: new Date(0, i).toLocaleString("default", { month: "long" }),
  }));
  const years = Array.from({ length: 10 }, (_, i) => ({
    value: `${new Date().getFullYear() - 5 + i}`,
    label: `${new Date().getFullYear() - 5 + i}`,
  }));

  return (
    <div className="flex justify-between items-center p-2 bg-blue-100 rounded">
      <Dropdown options={months} value={month} onChange={onMonthChange} />
      <Dropdown options={years} value={year} onChange={onYearChange} />
    </div>
  );
};

export default MonthNavigation;
