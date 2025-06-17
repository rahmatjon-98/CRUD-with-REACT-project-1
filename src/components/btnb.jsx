import React from "react";

const Btnb = ({ name }) => {
  return (
    <button className="text-white text-[14px] lg:text-[18px] bg-[#021A84] border-2 border-[#021A84] rounded-[8px] py-0.5 lg:py-2 px-1 lg:px-10 ">
      {name}
    </button>
  );
};

export default Btnb;
