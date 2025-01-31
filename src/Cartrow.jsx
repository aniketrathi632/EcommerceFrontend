import React from 'react'
import { useDispatch } from 'react-redux';
import {removeCart , incQuantity , decQuantity} from "../Utility/CartSlice"

const Cartrow = ({cartObj}) => {

    let {  title , rating , price , category , id , image } = cartObj.obj ;
    let {quantity } = cartObj ;

    let dispatch = useDispatch();

    let handleRemove = () => {
        dispatch(removeCart(id))
    }

    let handleQunatityDecrease = () => {
        dispatch (decQuantity(id))
    }
    let handleQunatityIncrease = () => {
       
        dispatch(incQuantity(id))
    }

  return (
    
      <tr className='text-2xl'>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20 bg-red-400">
                <img className='h-full w-full ' src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-sm">{title}</div>
              {/* <div className="text-sm opacity-50">{brand}</div> */}
            </div>
          </div>
        </td>
        <td className='capitalize text-sm'>
          {category}
        </td>

        <td> <span  className='capitalize text-sm'onClick={handleQunatityIncrease}>🔼</span> {quantity}  <span className='capitalize text-sm' onClick={handleQunatityDecrease}>🔽</span></td>
       
        <td className='capitalize text-sm'>${price}</td>
        <td className='capitalize text-sm'>{rating.rate}</td>
        <th>
          <button className="btn text-lg" onClick={handleRemove}>Remove </button>
        </th>
      </tr>
   
  )
}

export default Cartrow