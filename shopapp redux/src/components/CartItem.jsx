import React from 'react'
import { toast } from 'react-hot-toast';
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import {remove} from '../Redux/Slices/CartSlice';



const Cartpost = ({post , postIndex}) => {

  const dispatch = useDispatch();

  function removeCartItem(){

    dispatch(remove(post.id));
    toast.error("Items removed from cart");
  }
  return (
    <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">

      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">

        <div className="w-[30%]">
          <img src= {post.image}/>
        </div>

        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{post.title}</h1>
          <p className="text-base text-slate-700 font-medium">{post.description}</p>
          <div className="flex items-center justify-between">
            <p  className="font-bold text-lg text-green-600">{post.price}</p>

            <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform 
            duration-300 cursor-pointer rounded-full p-3 mr-3"
             
             onClick={removeCartItem}>
              <AiFillDelete/>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cartpost