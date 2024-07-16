<><div className={Theme=="light" ? lighttheme : darktheme} onClick={handlechange}>
           
                <img className="max-w-xs transition duration-300 ease-in-out hover:scale-110 p-8 rounded-t-lg  object-right " src={image}  alt="product image" />
           
            <div className="px-5 pb-5">
                
                    <h5 className="text-xl font-semibold tracking-tight  ">{title}</h5>
                

                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-1 mt-4">{rating.rate}</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2 mt-4">{category}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">${price}</span>
                <Link to="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={handleaddcart}>Add to cart</Link>
           
            </div>
        </div>


</>
