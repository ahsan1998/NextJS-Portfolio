import React from "react";
import { motion } from "framer-motion";
const TabButton = ({ active, selectedTab, children }: any) => {
  const variant = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem" },
  };
  const buttonClasses = active
    ? "text-white"
    : "text-[#ADB7BE] ";
  return (
    <button onClick={selectedTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variant}
        className={"h-1 bg-primary-500 mt-2 mr-3"}
      ></motion.div>
    </button>
  );
};
export default TabButton;
