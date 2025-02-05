import React from "react";
import parse from "html-react-parser";

const Sidebarelement = (props) => {
  return (
    <div className="flex items-center p-4 pe-0 hover:bg-gray-200 rounded-lg cursor-pointer duration-300">
      <div className="lg:pr-4">{props.icon}</div>
      <div className="text-lg font-sans hidden absolute  lg:contents lg:static">
        {props.text}
      </div>
    </div>
  );
};

export default Sidebarelement;
