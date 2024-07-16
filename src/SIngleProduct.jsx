
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeStyle } from "../Utility/ThemeContext";
import useGetSingleProduct from "../Utility/useGetSingleProduct";
import { addCart } from "../Utility/CartSlice";

const SingleProduct = () => {
  let { theme } = useContext(ThemeStyle);

  let { id } = useParams();

  let dispatch = useDispatch();

  let obj = useGetSingleProduct(id);

  let idsArray = useSelector((state) => state.cart.ids);

  let [showIndex, setShowIndex] = useState(null);


  if (obj == null) {
    return <h1> ... loading </h1>;
  }

  let handleAddBtn = () => {
    dispatch(addCart(obj));
  };

  let {
    title,
    description,
    category,
    price,
    rating,
    image,

  } = obj;
  let darkTheme =
    "w-2/3 h-3/6  card card-side bg-[#0f172a] shadow-xl rounded-2xl border-4 border-base-100 ";
  let lightTheme =
    "w-2/3 h-3/6  card card-side bg-[#cbd5e1] text-black shadow-xl rounded-2xl  border-4 border-zinc-300 ";
  return (
    <div className="w-screen h-[90vh] bg-slate-200 flex flex-col justify-center items-center">
      <div className={theme == "light" ? lightTheme : darkTheme}>
        {idsArray.find((cartId) => cartId == id) != undefined ? (
          <p className="bg-black text-orange-500 absolute z-20 mt-5 ml-3 p-2 rounded-2xl text-sm font-bold">
            {" "}
            Added to cart{" "}
          </p>
        ) : (
          <></>
        )}

        <figure className="w-2/3 bg-white">
          <div className="carousel ">

            <div className="carousel-item w-full  rounded-2xl " >
              <img src={image} className="w-full rounded-2xl " />
            </div>

          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>{category}</p> <p>{price}</p> <p>{rating.rate}</p>
          {/* <p>{brand}</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleAddBtn}>
              Add
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SingleProduct;