import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { ThemeStyle } from "../Utility/ThemeContext"
import { useSelector } from "react-redux";
import { useGetUserQuery, useLogoutMutation } from "../Utility/authApi";

 
function Navbar() {
    let [theme, setTheme] = useContext(ThemeStyle)

    let navigate = useNavigate();
  let {refetch } = useGetUserQuery()

  let totalProducts = useSelector((state) => state.cart.totalProducts);


    let [logout , {isLoading , isError}] = useLogoutMutation();

    let handleLogout = async () => {
        await logout();
        
        navigate("/login");
    } 
  
    useEffect(() => {
      localStorage.setItem("Theme", theme);
    }, [theme]);



    const HandleTheme = () => {
        if (theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
  let lighttheme = "bg-[#cbd5e1] text-black border-blue-700";
  let darktheme = "bg-[#0f172a] text-white"


    return (
        <>
            <nav className={theme=="light" ? lighttheme : darktheme}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/">
                        <img
                            src="https://w7.pngwing.com/pngs/495/411/png-transparent-glasgow-one-stop-retail-business-convenience-shop-uk-blue-text-retail.png"
                            className="h-8"
                            alt="OneStop Logo"
                        />
                    </Link>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            <li><Link to="/about">
                                About
                            </Link>
                            </li>
                            <li><Link to="/cart">
                               Cart <sup className="text-xl text-red-700 font-bold">
                {" "}
                {totalProducts}{" "}
              </sup>
                            </Link>
                            </li>
                            <li><Link to="/contact">
                                Contact
                            </Link>
                           </li>

                        </ul>
                    </div>
                    <div><label onClick ={HandleTheme} className="flex cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label></div>
                    <button className="btn sm:btn-sm md:btn-md lg:btn-lg" onClick={handleLogout} >Logout</button>

                </div>


            </nav>


        </>
    )
}

export default Navbar