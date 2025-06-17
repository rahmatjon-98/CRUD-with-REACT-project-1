import React from "react";

import logo from "../assets/3nTkzVa-removebg-preview 1.png";
import Btnw from "./btnw";
import Btnb from "./btnb";

const Header = () => {
  return (
    <header id="header" className="flex items-center justify-between py-5 px-2 lg:px-32">
      <img className="lg:w-auto w-[100px]" src={logo} alt="" />

      <div className="flex items-center gap-4">
        <p className="text-[14px]  lg:text-[18px]">
          Tất Cả Các Job
        </p>
        <Btnw name="Đăng ký" />
        <Btnb name="Đăng Nhập" />
      </div>

      <a className="fixed bottom-6 right-6" href="#header">
        <button className="  bg-[#021A84] text-white rounded-[50%] p-2.5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      </a>
    </header>
  );
};

export default Header;
