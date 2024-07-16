import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ThemeStyle } from "../Utility/ThemeContext"
import { useDispatch } from "react-redux"
import { addCart } from "../Utility/CartSlice"

let ProductCard = ({obj}) => {
    let {image, title, price, rating, category, id, description} = obj
    let navigate = useNavigate();
    let dispatch = useDispatch()


    let handlechange=()=>{
        return(navigate(`/products/${id}`))

    }
    
    let handleaddcart=(event)=>{
        event.stopPropagation()
        dispatch(addCart(obj))
       
    }


    let [Theme] = useContext(ThemeStyle)

  let lighttheme = " border-blue-700 w-1/3 max-w-sm bg-[#cbd5e1] border rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 mt-6 h-auto p-4 dark:text-black ";
  let darktheme = " border-white w-1/3 max-w-sm bg-[#0f172a] border rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 mt-6 h-auto p-4 dark:text-white"
    return (

<div className={Theme=="light" ? lighttheme : darktheme} onClick={handlechange}>
            <div className="relative">
                <img className="w-full h-[30vh] transition duration-300 ease-in-out hover:scale-110 pl-7" src={image} alt="Product Image" />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE</div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2 capitalize">{title.substring(0, 55)}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-1 mt-4">{rating.rate}</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2 mt-4">{category}</span>
                <p className="text-gray-600 text-sm mt-4 mb-4 capitalize">{description.substring(0, 125)}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${price}</span>
                    <Link to="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleaddcart}>Add to cart</Link>
                </div>
            </div>
        </div>
  

        
    )
}

export default ProductCard;