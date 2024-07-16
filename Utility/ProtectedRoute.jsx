import React, { useEffect, useState } from "react";
import { useGetUserQuery } from "./authApi";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (Component) => {
  return () => {
    
    let [user, setUser] = useState(null);
    let navigate = useNavigate();

    let { data, isLoading, isError, refetch } = useGetUserQuery();

    console.log(user);

    // useEffect(() => {
    //   refetch();
    // }, []);

    useEffect(() => {
        if(isLoading) return ;

        if (isError) {
            navigate("/login")
        }
      if (data && data.result == true) {
        setUser(data.data);
       
      }else{
        navigate("/login")
      } 
    },[isLoading, isError, data, navigate]);

    if (isLoading) {
      return <> .... loading </>;
    }

    return <>{user ? <Component></Component> : "...loading "}</>;
  };
};

export default ProtectedRoute;