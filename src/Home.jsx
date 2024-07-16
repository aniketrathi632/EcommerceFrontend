import ProductCard from "./ProductCard"
import { useEffect, useState, useContext } from "react"
import ShimmerUI from "./ShimmerUI"
import useGetAllProducts from "../Utility/useGetAllProduct";
import { useSelector } from "react-redux";

import { ThemeStyle } from "../Utility/ThemeContext"

function Home() {
    let [allData, setallData] = useState([])
    let [productArray, setProductArray] = useState([])
    let [searchText, setsearchText] = useState("")
    let [loading, setLoading] = useState(true);

    let idsArray = useSelector((state)=>state.cart.ids)
 
  let arr = useGetAllProducts(); 

  useEffect(() => {
    if (Array.isArray(arr) && arr.length > 0) {
        setallData(arr);
        setProductArray(arr);
        setLoading(false);
    }
}, [arr]);

    let FilterProduct = (procategory) => {
        let data = allData.filter((obj) => {
            return (
                procategory.toLowerCase() == obj.category.toLowerCase()
            )
        })
        setProductArray(data);
    }
    let FilterTopRated = () => {
        let data = allData.filter((obj) => {
            return (
                obj.rating.rate > 4
            )
        })
        setProductArray(data);
    }
    let searchBar = () => {
        let data = allData.filter((obj) => {
            return (
                obj.title.toLowerCase().includes(searchText.toLowerCase())
            )
        })
        setProductArray(data)
        setsearchText("")
    }
    if (loading) {
        return (
            <ShimmerUI></ShimmerUI>
        )
    }



    let [Theme, setTheme] = useContext(ThemeStyle)

    let lighttheme = "bg-[#cbd5e1] text-black border-blue-700";
    let darktheme = "bg-[#0f172a] text-white"

    return (
        <div className={Theme == "light" ? lighttheme : darktheme}>

            <div className="flex justify-around">
                <div><button onClick={FilterTopRated} className=" bg-[#1d4ed8] btn btn-primary mr-2">Top Rated</button>
                    <button onClick={() => FilterProduct("jewelery")} className="bg-[#1d4ed8] btn btn-primary ml-7 mr-7">Jewelery</button>
                    <button onClick={() => FilterProduct("electronics")} className="bg-[#1d4ed8] btn btn-primary ml-2">Electronics</button>
                </div>
                <div className=" flex justify-around ">
                    <div className="flex">
                        <input value={searchText} onChange={(e) => setsearchText(e.target.value)}
                            type="text" placeholder="Search Product" className="input input-bordered w-full max-w-xs" />
                        <button onClick={searchBar} className="btn btn-neutral ml-5">Search</button>
                    </div>

                </div>

            </div>
            <div className="flex justify-around flex-wrap">
                {productArray.map((obj) => (

                    <ProductCard obj={obj} key={obj.id}></ProductCard> 

                ))}
            </div>
        </div>
    )
}

export default Home