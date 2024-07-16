import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Cart from './Cart.jsx';
import LoginUser from './LoginUser.jsx';
import SignupUser from './SignupUser.jsx';
import SingleProduct from './SIngleProduct.jsx';
import ThemeContext from "../Utility/ThemeContext";
import { Provider } from "react-redux"
import AppStore from "../Utility/AppStore";
import ProtectedRoute from "../Utility/ProtectedRoute.jsx";
import ErrorPage from './ErrorPage.jsx';

let AppProtected = ProtectedRoute(App);


let Router = createBrowserRouter([
  {
    path: "/",
    element: <AppProtected></AppProtected>,
    children:[{
      path: "/",
      element: <Home></Home>,
    },{
      path: "/about",
      element:<About></About>
    },{
      path: "/cart",
      element:<Cart></Cart>
    },{
      path: "/contact",
      element:<Contact></Contact>
    },{
      path:"/products/:id",
      element:<SingleProduct></SingleProduct>
    }],
    errorElement: <ErrorPage></ErrorPage>,
    
  },
  {
    path: "/login",
    element: <LoginUser></LoginUser>
  },
  {
    path: "/signup",
    element: <SignupUser></SignupUser>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <Provider store={AppStore}>
  <ThemeContext>
  <RouterProvider router={Router}> </RouterProvider>
  </ThemeContext>
  </Provider>
  </>
)
