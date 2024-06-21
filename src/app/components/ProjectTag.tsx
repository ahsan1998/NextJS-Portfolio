import React from "react";

const ProjectTag = ({ name, onClick, isSelected }: any) => {
    const buttonStyles = isSelected? 'text-white bg-primary-500': "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button onClick={()=>onClick(name)} className={`${buttonStyles} rounded-full border-2  px-6 py-3 text-xl cursor-pointer`}>
      {name}
    </button>
  );
};
export default ProjectTag;
