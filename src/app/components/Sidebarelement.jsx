import React from "react";
import parse from "html-react-parser";

const Sidebarelement = (props) => {
  return (
    <div className="flex items-center p-4">
      <div className="pr-4">
        <svg
          aria-label="Home"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>{props.text}</title>
          <path
            clipRule="evenodd"
            d={props.svg}
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="text-lg font-sans">{props.text}</div>
    </div>
  );
};

export default Sidebarelement;
