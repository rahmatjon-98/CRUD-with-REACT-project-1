import React from "react";

import logo from "../assets/3nTkzVa-removebg-preview 1.png";
import img from "../assets/Frame 32927.png";

const Footer = () => {
  return (
    <footer className="lg:px-32 py-10 px-3  bg-[#021a8405]">
      <div
        className="d1 flex lg:flex-row
       flex-col lg:items-center justify-between gap-3 lg:gap-0"
      >
        <div className="flex items-center gap-2">
          <input
            className="p-2.5 rounded-[8px] w-[300px] bg-white"
            type="text"
            placeholder="Enter your email address"
          />
          <button
            className="p-2.5 rounded-[8px] "
            style={{
              background: "linear-gradient(90deg, #EF463A 0%, #FCA939 100%)",
            }}
          >
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
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-[50%] bg-white ">
              <p>199</p>
            </div>
            <p className="text-[#999999]">Công việc</p>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-[50%] bg-white ">
              <p>199</p>
            </div>
            <p className="text-[#999999]">Công việc</p>
          </div>
        </div>
      </div>

      <div className="py-10 flex flex-wrap lg:flex-nowrap lg:justify-between justify-start gap-5 border-b-2 border-[#dadada] ">
        <div className="lg:w-[30%] w-full">
          <img className="py-2" src={logo} alt="" />
          <img className="py-2" src={img} alt="" />
        </div>

        <div className="w-1/3">
          <p className="text-[#021A84] text-[14px] lg:text-[18px] font-bold">
            Địa chỉ
          </p>
          <p className="text-[#999999] text-[14px] lg:text-[18px] ">
            Tòa nhà AC, 78 Duy Tân,
          </p>
          <p className="text-[#999999] text-[14px] lg:text-[18px] ">
            Quận Cầu Giấy, Hà Nội
          </p>
        </div>

        <div className="w-1/3">
          <p className="text-[#021A84] text-[14px] lg:text-[18px] font-bold">
            Liên hệ
          </p>
          <p className="text-[#999999] text-[14px] lg:text-[18px] ">
            0369 713 819
          </p>
          <p className="text-[#999999] text-[14px] lg:text-[18px] ">
            luat.nguyen@recland.co
          </p>
        </div>

        <div className="w-1/3">
          <p className="text-[#021A84] text-[14px] lg:text-[18px] font-bold">
            Menu
          </p>
          <p className="text-[#999999] text-[14px] lg:text-[18px] ">
            Trang chủ
          </p>
          <p className="text-[#999999] text-[14px] lg:text-[18px] ">
            Tìm kiếm công việc
          </p>
          <p className="text-[#999999] text-[14px] lg:text-[18px] ">Sitemap</p>
        </div>

        <div className="w-1/3">
          <p className="text-[#021A84] text-[14px] lg:text-[18px] font-bold">
            Tài khoản của tôi
          </p>
          <p className="text-[#999999] text-[14px] lg:text-[18px] ">
            Tổng quan
          </p>
          <p className="text-[#999999] text-[14px] lg:text-[18px] ">Kho CV</p>
          <p className="text-[#999999] text-[14px] lg:text-[18px] ">
            Thông tin cá nhân
          </p>
        </div>
      </div>


      <p className="text-center text-[14px] lg:text-[18px] text-[#999999] p-5 ">
        Copyright © 2022 Recland.co
      </p>
    </footer>
  );
};

export default Footer;
