import React from "react";

const Button = ({ text, bgColor }) => {
  return (
    <a href="#" 
       className={`relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-500 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${bgColor}`}
       role="button">
      {text}
    </a>
  );
};

export default Button;
