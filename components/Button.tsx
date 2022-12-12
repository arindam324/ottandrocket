import React from "react";

const Button: React.FC<{
  text: string;
  bg: string;
  onClick?: () => void;
  color: string;
}> = ({ text, bg, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ background: bg, color: color }}
      className={"inline-block px-10 py-2 text-sm font-semibold"}
    >
      {text}
    </button>
  );
};

export default Button;
