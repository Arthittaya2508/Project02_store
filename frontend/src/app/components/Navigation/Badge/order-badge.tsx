import React from "react";

type BadgeProps = {
  label: string;
  bgColor: string;
};

const Badge: React.FC<BadgeProps> = ({ label, bgColor }) => {
  return (
    <span className={`px-2 py-1 rounded-xl ${bgColor} text-white`}>
      {label}
    </span>
  );
};

export default Badge;
