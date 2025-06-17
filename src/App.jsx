import { useState } from "react";
import "./App.css";
import Header from "./components/header";

import Btnb from "./components/btnb";
import P1sec2 from "./components/p1sec2";
import Btnw from "./components/btnw";
import Cart from "./components/cart";

import img1 from "./assets/image 12.png";
import img2 from "./assets/Frame 3145.png";
import img3 from "./assets/unsplash_5MlBMYDsGBY2.png";
import img4 from "./assets/unsplash_5MlBMYDsGBY.png";
import img5 from "./assets/unsplash_gTV2osuOsJc.png";
import img6 from "./assets/unsplash_lVVs5skyWoo.png";
import img7 from "./assets/unsplash_MRjjcDIk3Gw.png";
import img8 from "./assets/unsplash_xShLnB1e9KU.png";
import img9 from "./assets/unsplash_gTV2osuOsJc.png";
import img10 from "./assets/unsplash_5MlBMYDsGBY.png";
import img11 from "./assets/unsplash_xShLnB1e9KU.png";

import img12 from "./assets/Frame.png";
import img13 from "./assets/Dollar.png";
import img14 from "./assets/Network.png";

import img15 from "./assets/unsplash_ljgDHg9H1pY.png";
import img16 from "./assets/unsplash_ljgDHg9H1pY (1).png";
import img17 from "./assets/unsplash_ljgDHg9H1pY (2).png";
import img18 from "./assets/unsplash_ljgDHg9H1pY (3).png";
import img19 from "./assets/unsplash_ljgDHg9H1pY (4).png";

import img20 from "./assets/Frame32994.png";
import img21 from "./assets/Frame32995.png";
import img22 from "./assets/Frame32996.png";
import img23 from "./assets/Add.png";
import img24 from "./assets/Search.png";
import img25 from "./assets/Shield.png";
import Cart2 from "./components/cart2";
import Footer from "./components/footer";

let p1sec2 = [
  { id: "2", name: "Reactj" },
  { id: "3", name: "VueJ" },
  { id: "4", name: "Angula" },
  { id: "5", name: "Design" },
  { id: "6", name: ".NET" },
  { id: "7", name: "PHP" },
  { id: "8", name: "jav" },
  { id: "9", name: "Mobil" },
];

let cartsec3 = [
  {
    img: "https://static-cse.canva.com/blob/847064/29.jpg",
    name: "Data Engineer",
    sena1: "12,000,000",
    sena2: " 50,000,000",
    id: "1",
    status: false,
  },
  {
    img: img4,
    name: "Junior PHP Developer ~ 15-2...",
    sena1: "12,000,000",
    sena2: " 50,000,000",
    id: "2",
    status: false,
  },
  {
    img: img3,
    name: "Data Engineer",
    sena1: "12,000,000",
    sena2: " 50,000,000",
    id: "3",
    status: false,
  },
  {
    img: img6,
    name: "Data Engineer",
    sena1: "12,000,000",
    sena2: " 50,000,000",
    id: "4",
    status: false,
  },
  {
    img: img7,
    name: "Data Engineer",
    sena1: "12,000,000",
    sena2: " 50,000,000",
    id: "5",
    status: true,
  },
  {
    img: img8,
    name: "Data Engineer",
    sena1: "12,000,000",
    sena2: " 50,000,000",
    id: "6",
    status: true,
  },
  {
    img: img9,
    name: "Data Engineer",
    sena1: "12,000,000",
    sena2: " 50,000,000",
    id: "7",
    status: true,
  },
  {
    img: img10,
    name: "Data Engineer",
    sena1: "12,000,000",
    sena2: " 50,000,000",
    id: "8",
    status: true,
  },
  {
    img: img11,
    name: "Data Engineer",
    sena1: "12,000,000",
    sena2: " 50,000,000",
    id: "9",
    status: true,
  },
];

let cart2sec5 = [
  {
    id: "1",
    img: img20,
    img2: img23,
    name: "Tạo một tài khoản",
    des: "Trở thành member trên RecLand",
  },
  {
    id: "2",
    img: img21,
    img2: img24,
    name: "Tạo một tài khoản",
    des: "Trở thành member trên RecLand",
  },
  {
    id: "3",
    img: img22,
    img2: img25,
    name: "Tạo một tài khoản",
    des: "Trở thành member trên RecLand",
  },
];

////////////////////////////////////////////////////////////////

function App() {
  let [carts, setCarts] = useState(cartsec3);

  //delete
  function deleteCart(id) {
    // carts = carts.filter((e) => e.id !== id); setCarts(carts);
    setCarts((c) => c.filter((e) => e.id !== id));
  }

  //add
  let [addModal, setAddModal] = useState(false);
  let [imgAddUrl, setImgAddUrl] = useState("");
  let [inpAddName, setInpAddName] = useState("");
  let [inpAddSena1, setInpAddSena1] = useState("");
  let [inpAddSena2, setInpAddSena2] = useState("");
  let [inpAddStatus, setInpAddStatus] = useState(true);

  let addCart = () => {
    let newCart = {
      id: Date.now().toString(),
      img: imgAddUrl,
      name: inpAddName,
      sena1: inpAddSena1,
      sena2: inpAddSena2,
      status: inpAddStatus,
    };
    setCarts([...carts, newCart]);
    setAddModal(false);
    setImgAddUrl("");
    setInpAddName("");
    setInpAddSena1("");
    setInpAddSena2("");
    setInpAddStatus(true);
  };

  //edit
  let [editModal, setEditModal] = useState({
    open: false,
    card: null,
  });
  let [imgEditUrl, setImgEditUrl] = useState("");
  let [inpEditName, setInpEditName] = useState("");
  let [inpEditSena1, setInpEditSena1] = useState("");
  let [inpEditSena2, setInpEditSena2] = useState("");
  let [inpEditStatus, setInpEditStatus] = useState(true);

  function editCart() {
    if (!editModal.card) return;

    let id = editModal.card.id;

    let newCart = {
      img: imgEditUrl,
      name: inpEditName,
      sena1: inpEditSena1,
      sena2: inpEditSena2,
      status: inpEditStatus,
    };

    setCarts((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...newCart } : e))
    );

    setEditModal({ open: false, card: null });
  }

  function onOpenEditModal(card) {
    setEditModal({ open: true, card });
    setImgEditUrl(card.img);
    setInpEditName(card.name);
    setInpEditSena1(card.sena1);
    setInpEditSena2(card.sena2);
    setInpEditStatus(card.status);
  }

  //info
  let [infoModal, setInfoModal] = useState({
    open: false,
    card: null,
  });

  function onOpenInfoModal(card) {
    setInfoModal({ open: true, card });
  }

  return (
    <div className="bg-[#edededcc]">
      <Header />

      <div className="sec1">
        <img className="w-full" src={img1} alt="" />
      </div>

      <div className="sec2 bg-[#edededcc] lg:px-32 lg:py-10 px-3 py-1 ">
        <div className="bg-[#ffffff5c] flex items-center justify-between p-2 rounded-[8px]">
          <div className="bg-white flex items-center rounded-[8px] p-0.5 px-2 text-[#999999] w-[50%] lg:w-[60%]">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              className="p-2 w-full outline-none"
              type="text"
              placeholder="Nhập vị trí hoặc từ khóa..."
            />
          </div>

          <div className="bg-white flex items-center rounded-[8px] p-0.5 px-2 text-[#999999] w-[23%]">
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <input
              className="bg-white p-2 w-full outline-none"
              type="text"
              placeholder="Chọn địa điểm"
            />
          </div>

          <Btnb name="Tìm Kiếm" />
        </div>

        <div className="flex flex-wrap lg:flex-nowrap p-2 items-center gap-2">
          <p className="text-[14px]">Đề xuất:</p>{" "}
          {p1sec2.map((e) => (
            <P1sec2 key={e.id} name={e.name} />
          ))}
        </div>
      </div>

      <div className=" sec3  bg-[#edededcc] lg:px-32 lg:py-10 px-3 py-1 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1 bg-[#ffffff5c] rounded-[50%] ">
              <img className="p-1.5 " src={img2} alt="" />
            </div>
            <p className="text-[#021A84] lg:text-[34px] text-[24px] font-semibold">
              Jobs tốt nhất
            </p>
          </div>

          <div className="flex gap-5">
            {/* <select
              value=""
              className="text-[14px] lg:text-[18px] py-2 text-[#021A84] px-10 border-2 border-[#021A84] rounded-[8px] "
            >
              <option value="true">Active</option>
              <option value="false">Inctive</option>
            </select> */}
            <button
              onClick={() => setAddModal(true)}
              className="text-[14px] lg:text-[18px] lg:py-2 py-0.5 text-[#021A84] px-1 lg:px-10 border-2 border-[#021A84] rounded-[8px] "
            >
              Add New User
            </button>
          </div>
        </div>

        {addModal && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)", // полупрозрачный фон чуть светлее
              backdropFilter: "blur(6px)", // размытие фона позади
              WebkitBackdropFilter: "blur(6px)", // для Safari
            }}
          >
            <div className="bg-white p-6 rounded shadow-lg w-[400px] flex flex-col">
              <p className="font-bold">Add New Cart</p> <br />
              <input
                type="text"
                placeholder="Img"
                value={imgAddUrl}
                onChange={(e) => setImgAddUrl(e.target.value)}
                className="border p-2 rounded my-2.5"
              />
              <input
                value={inpAddName}
                onChange={(e) => setInpAddName(e.target.value)}
                className="border p-2 rounded my-2.5"
                type="text"
                placeholder="Name"
              />
              <input
                type="text"
                placeholder="Min sena"
                value={inpAddSena1}
                onChange={(e) => setInpAddSena1(e.target.value)}
                className="border p-2 rounded my-2.5"
              />
              <input
                type="text"
                placeholder="Max sena"
                value={inpAddSena2}
                onChange={(e) => setInpAddSena2(e.target.value)}
                className="border p-2 rounded my-2.5"
              />
              <select
                value={inpAddStatus}
                onChange={(e) => setInpAddStatus(e.target.value === "true")}
                className="border p-2 rounded my-2.5"
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
              <br />
              <div className="flex justify-between">
                <button
                  onClick={() => setAddModal(false)}
                  className="text-white text-[14px] lg:text-[18px] bg-red-500 border-2 border-[#ff0000] rounded-[8px] py-2 px-10 "
                >
                  Cancel
                </button>

                <button
                  onClick={() => addCart()}
                  className="text-white text-[14px] lg:text-[18px] bg-[#021A84] border-2 border-[#021A84] rounded-[8px] py-2 px-10 "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {editModal.open && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)", // полупрозрачный фон чуть светлее
              backdropFilter: "blur(6px)", // размытие фона позади
              WebkitBackdropFilter: "blur(6px)", // для Safari
            }}
          >
            <div className="bg-white p-6 rounded shadow-lg w-[400px] flex flex-col">
              <p className="font-bold">Add New Cart</p> <br />
              <input
                type="text"
                placeholder="Img"
                value={imgEditUrl}
                onChange={(e) => setImgEditUrl(e.target.value)}
                className="border p-2 rounded my-2.5"
              />
              <input
                value={inpEditName}
                onChange={(e) => setInpEditName(e.target.value)}
                className="border p-2 rounded my-2.5"
                type="text"
                placeholder="Name"
              />
              <input
                type="text"
                placeholder="Min sena"
                value={inpEditSena1}
                onChange={(e) => setInpEditSena1(e.target.value)}
                className="border p-2 rounded my-2.5"
              />
              <input
                type="text"
                placeholder="Max sena"
                value={inpEditSena2}
                onChange={(e) => setInpEditSena2(e.target.value)}
                className="border p-2 rounded my-2.5"
              />
              <select
                value={inpEditStatus ? "true" : "false"}
                onChange={(e) => setInpEditStatus(e.target.value === "true")}
                className="border p-2 rounded my-2.5"
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
              <br />
              <div className="flex justify-between">
                <button
                  onClick={() => setEditModal({ open: false, card: null })}
                  className="text-white text-[14px] lg:text-[18px] bg-red-500 border-2 border-[#ff0000] rounded-[8px] py-2 px-10 "
                >
                  Cancel
                </button>

                <button
                  onClick={() => editCart()}
                  className="text-white text-[14px] lg:text-[18px] bg-[#021A84] border-2 border-[#021A84] rounded-[8px] py-2 px-10 "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {infoModal.open && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)", // полупрозрачный фон чуть светлее
              backdropFilter: "blur(6px)", // размытие фона позади
              WebkitBackdropFilter: "blur(6px)", // для Safari
            }}
          >
            <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full flex overflow-hidden">
              <div className="w-1/3 bg-gray-100 flex items-center justify-center p-4">
                {infoModal.card.img ? (
                  <img
                    src={infoModal.card.img}
                    alt="image"
                    className=" object-cover"
                  />
                ) : (
                  <img
                    className=" object-cover"
                    src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740"
                  />
                )}
              </div>

              <div className="w-2/3 p-6 overflow-y-auto max-h-[80vh]">
                <h2 className="text-2xl font-bold mb-4">
                  {infoModal.card.name}
                </h2>

                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>
                    <strong>Status:</strong>{" "}
                    {infoModal.card.status ? (
                      <span className="font-bold text-green-500">Active</span>
                    ) : (
                      <span className="font-bold text-red-500">Inactive</span>
                    )}
                  </li>

                  <li>
                    <strong>Min sena:</strong> {infoModal.card.sena1}
                  </li>
                  <li>
                    <strong>Max sena:</strong>
                    {infoModal.card.sena2}
                  </li>
                  <li>
                    <strong>ID:</strong> {infoModal.card.id}
                  </li>
                </ul>

                <button
                  onClick={() => setInfoModal(false)}
                  className="text-white text-[14px] lg:text-[18px] bg-red-500 border-2 border-[#ff0000] rounded-[8px] py-2 px-10 mt-5"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-start gap-[38px] py-10">
          {carts.map((e) => (
            <Cart
              key={e.id}
              status={e.status}
              id={e.id}
              img={e.img}
              name={e.name}
              sena1={e.sena1}
              sena2={e.sena2}
              onDelete={deleteCart}
              openEditModal={onOpenEditModal}
              openInfoModal={onOpenInfoModal}
            />
          ))}
        </div>
      </div>

      <div className="sec4  bg-[#edededcc] lg:px-32 lg:py-10 px-3 py-1 ">
        <p className="text-center text-[#021A84] text-[14px] lg:text-[18px] ">
          Why?
        </p>
        <p className="text-center text-[#021A84] lg:text-[34px] text-[24px] font-semibold">
          Jobs tốt nhất
        </p>

        <div className="flex flex-col lg:flex-row gap-4 text-center justify-between py-10">
          <div className="bg-[#2ada656a] flex justify-center items-center flex-col p-5 w-full lg:w-[30%]  lg:h-[45vh] rounded-[16px]  gap-2.5">
            <img src={img12} alt="" />
            <p className="text-[#177a38] text-[14px] lg:text-[18px] font-bold ">
              Đa dạng việc làm, thêm nhiều lựa chọn hấp dẫn
            </p>
            <p className="text-[#177a38] text-[14px]">
              Hơn 200+ việc làm IT, giúp các bạn REC có một kho việc làm để các
              bạn tìm kiếm, sale jobs đến những ứng viên phù hợp.
            </p>
          </div>

          <div className="bg-[#021a846c] flex justify-center items-center flex-col p-5  w-full lg:w-[30%]  lg:h-[45vh] rounded-[16px]  gap-2.5">
            <img src={img13} alt="" />
            <p className="text-[#021A84] text-[14px] lg:text-[18px] font-bold ">
              Cơ chế hoa hồng hấp dẫn, rõ ràng và minh bạch
            </p>
            <p className="text-[#021A84] text-[14px]">
              RecLand đem đến cho các bạn REC mức hoa hồng hấp dẫn, giúp cho các
              bạn REC có được mức thu nhập tương xứng mà không cần đến công ty
              làm việc
            </p>
          </div>

          <div className="bg-[#e5522a6f] flex justify-center items-center flex-col p-5  w-full lg:w-[30%]  lg:h-[45vh] rounded-[16px]  gap-2.5">
            <img src={img14} alt="" />
            <p className="text-[#E5532A] text-[14px] lg:text-[18px] font-bold ">
              Mở rộng network và học hỏi từ cộng đồng
            </p>
            <p className="text-[#E5532A] text-[14px]">
              RecLand cũng thường xuyên tổ chức những buổi chia sẻ, buổi offline
              nhằm giúp các bạn REC trau dồi, học hỏi và mở rộng được network
              trong lĩnh vực tuyển dụng.
            </p>
          </div>
        </div>
      </div>

      <div className="sec5 py-10">
        <p className="text-center text-[#021A84] lg:text-[34px] text-[24px] font-semibold">
          Đối Tác
        </p>

        <div className="flex justify-center gap-2 lg:gap-12 py-10 px-2">
          <div className="p-2.5 bg-white rounded-[8px] ">
            <img src={img15} alt="" />
          </div>

          <div className="p-2.5 bg-white rounded-[8px] ">
            <img src={img16} alt="" />
          </div>

          <div className="p-2.5 bg-white rounded-[8px] ">
            <img src={img19} alt="" />
          </div>

          <div className="p-2.5 bg-white rounded-[8px] ">
            <img src={img17} alt="" />
          </div>

          <div className="p-2.5 bg-white rounded-[8px] ">
            <img src={img18} alt="" />
          </div>
        </div>
      </div>

      <div className="sec5 lg:px-32 lg:py-10 px-3 py-1">
        <p className="text-center text-[#021A84] text-[14px] lg:text-[18px] ">
          Quy trình làm việc
        </p>
        <p className="text-center text-[#021A84] lg:text-[34px] text-[24px] font-semibold">
          Hợp tác cùng RecLand
        </p>

        <div className="flex justify-between gap-5 text-center p-2 py-10 lg:p-10 ">
          {cart2sec5.map((e) => (
            <Cart2
              key={e.id}
              img1={e.img}
              img2={e.img2}
              name={e.name}
              des={e.des}
            />
          ))}
        </div>
      </div>

      <div className="sec6 lg:px-32 lg:py-10 px-3 py-1">
        <div
          className="flex justify-between items-center lg:px-0 px-2 lg:pl-10 rounded-[16px]"
          style={{
            background:
              "linear-gradient(220.53deg, #0CC64B 0%, #26AB5B 76.95%)",
          }}
        >
          <div className="flex items-center">
            <div className="p-1 w-auto h-auto bg-[#9aedbb97] rounded-[50%] ">
              <img className="" src={img2} alt="" />
            </div>

            <div>
              <p className="lg:text-[26px] font-bold">Bạn muốn đến với Recland</p>
              <p className="text-[14px] lg:text-[18px]">
                Chúng tôi sẽ giúp bạn thành công trên con đường Recer
              </p>
            </div>
          </div>

          <div className="lg:bg-[#9aedbb97] lg:p-10 rounded-r-[16px] lg:w-auto w-[50%]">
            <Btnb name="Đăng Ký Ngay" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
