import { useContext } from "react";
import React from "react";
import Cartrow from "./Cartrow";
import { clearCart } from "../Utility/CartSlice";
import CartDetail from "./CartDetail";
import { ThemeStyle } from "../Utility/ThemeContext";

import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  let cartData = useSelector((state) => state.cart.items || []);

  let dispatch = useDispatch();

  let [theme] = useContext(ThemeStyle);

  let handleClearCart = () => {
    dispatch(clearCart());
  };

  let darkTheme = "bg-[#0f172a] text-white min-h-screen ";
  let lightTheme = "bg-[#cbd5e1] text-black min-h-screen "
  return (
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className="overflow-x-auto mx-10 text-2xl">
        <table className="table">
          <thead>
            <tr className="text-xl text-blue-900">
              <th>Product Name</th>
              <th>Category</th>
              <th> Quantity </th>
              <th>Price </th>
              <th>
                <span> 🔼 </span> Rating <span> 🔽 </span>
              </th>
              <th>
                <CartDetail></CartDetail>
              </th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
              <Cartrow cartObj={item} key={item.id}></Cartrow>
            ))}
          </tbody>
        </table>
        <div className="w-full text-center mb-5 mt-5 ">
        
          <button className=" bg-red-400 btn btn-circle btn-outline " onClick={handleClearCart}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;