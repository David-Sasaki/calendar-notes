import React from "react";

interface DropdownProps {
  options: { value: number; label: number }[];
  value: number;
  onChange: (value: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="p-2 border rounded"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
