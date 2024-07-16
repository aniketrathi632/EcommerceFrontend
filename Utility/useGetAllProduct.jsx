import {useState ,useEffect} from 'react'

const useGetAllProducts = () => {
    let [obj , setObj] = useState()
    let getData = async () => {
        let data = await fetch("https://fakestoreapi.com/products");
        let obj = await data.json();
        console.log(obj)
         setObj(obj)
      };
    
      useEffect(() => {
        getData();
      }, []);

      return obj ;
    
}

export default useGetAllProducts