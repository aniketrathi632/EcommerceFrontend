import React, { useState } from "react";
import { useGetUserQuery, useUpdateMutation } from "../Utility/authApi";

const PhoneNumberUpdate = () => {
  let [phoneNumber, setPhoneNumber] = useState("");

  let [update, { isLoading }] = useUpdateMutation();

  let { refetch } = useGetUserQuery();

  let addPhoneNumber = async () => {
    let obj = {
      phoneNumber: phoneNumber,
    };

    let res = await update(obj);
    refetch();
  };

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Update 
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl flex justify-center items-center">
          <input
            type="text"
            placeholder="phoneNumber"
            className="input input-bordered input-info w-full max-w-xs text-black "
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />

          <form method="dialog px-3 ">
            <button
              className="btn btn-outline btn-primary"
              onClick={addPhoneNumber}
            >
              Add
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default PhoneNumberUpdate;