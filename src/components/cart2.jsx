import React from "react";

const Cart2 = ({ img1, img2, name, des }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <p className="text-[14px] lg:text-[18px] font-bold">{name}</p>
      <p className="text-[14px]">{des}</p>
    </div>
  );
};

export default Cart2;
