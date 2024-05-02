import React from "react";

interface BadgeProps {
  count: number;
}

const Badge: React.FC<BadgeProps> = ({ count }) => {
  return (
    <span className="bg-blue-500 text-white p-1 rounded-full text-xs">
      {count}
    </span>
  );
};

export default Badge;
