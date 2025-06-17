import React from "react";

const Cart = ({
  id,
  status,
  img,
  name,
  sena1,
  sena2,
  onDelete,
  openEditModal,
  openInfoModal,
}) => {
  return (
    <div className="bg-white border-2 border-[#021A84] rounded-[16px] w-[100%] lg:w-[31%] p-2.5 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 border-b border-[#E5E5E5] py-2.5">
          {img ? (
            <img
              className="w-[32px] h-[32px] object-cover"
              src={img}
              alt="image"
            />
          ) : (
            <img
              className="w-[32px] h-[32px] object-cover"
              src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740"
            />
          )}
          <p className="w-[60%]  text-[#171717] font-semibold ">{name}</p>
          <p>
            {status ? (
              <p className="text-green-600 bg-green-100 text-[12px] py-0.5 px-3 rounded-[8px] font-bold ">
                Active
              </p>
            ) : (
              <p className="text-red-600 bg-red-100 text-[12px] py-0.5 px-3 rounded-[8px] font-bold ">
                Inactive
              </p>
            )}
          </p>
        </div>

        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-[12px]">Hoa hồng</p>
            <p className="font-bold text-[14px]">
              {sena1} <span className="font-normal text-[#adadad]">VNĐ</span>
            </p>
          </div>

          <p className="h-[15px]  border border-[#E5E5E5]" />

          <div>
            <p className="text-[12px]">Thưởng</p>
            <p className="font-bold text-[14px]">
              {sena2} <span className="font-normal text-[#adadad]">VNĐ</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-1">
        <div className="flex items-center gap-4 ">
          <button
            onClick={() =>
              openEditModal({ id, img, name, sena1, sena2, status })
            }
            className="bg-[#F2F2F2] text-[#021A84] text-[12px] rounded-[8px] py-1 px-4 "
          >
            Edit
          </button>

          <button
            onClick={() =>
              openInfoModal({ id, status, img, name, sena1, sena2 })
            }
            className="bg-[#F2F2F2] text-[#021A84] text-[12px] rounded-[8px] py-1 px-4 "
          >
            Info
          </button>
        </div>
        <button
          onClick={() => onDelete(id)}
          className="text-white bg-[#FE4C4C] text-[12px] rounded-[8px] py-1 px-4 "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Cart;
