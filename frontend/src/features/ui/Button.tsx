import React from "react";

interface ButtonProps {
  value: string;
  handleOnClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ value, handleOnClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleOnClick}
    >
      {value}
    </button>
  );
};

export default Button;
