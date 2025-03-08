import React from "react";
import parse from "html-react-parser";

const Sidebarelement = (props) => {
  return (
    <div className="flex w-[220px] p-[12px] items-center  hover:bg-gray-200 rounded-lg cursor-pointer duration-300">
      <div className="lg:pr-[16px]">{props.icon}</div>
      <div className="text-lg pl-[16px] font-sans hidden absolute  lg:contents lg:static">
        {props.text}
      </div>
    </div>
  );
};

export default Sidebarelement;
