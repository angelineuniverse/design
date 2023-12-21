import React from "react";

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }: ButtonProps) => {
  return (
    <button className="text-red-500 rounded-lg bg-blue-300 px-3 py-1 line-clamp-1">
      {label}
    </button>
  );
};

export default Button;
