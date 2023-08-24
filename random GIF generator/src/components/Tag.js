import React, { useState } from 'react'
import useGif from '../hooks/useGif'
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const[tag , setTag] = useState('Car');

  const {gif , loading , fetchData} = useGif(tag);  

  return (

    <div className='w-1/2 bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='text-3xl underline uppercase font-bold mt-[14px]'>
      
      A Random {tag} Gif
      
      </h1>

      
        {loading ? (<Spinner/>) : (<img src= {`${gif}`} width={350} height={300}/>)}


        <input
          className='w-10/12 text-lg py-2 rounded-lg text-center'
          onChange={(event) => setTag(event.target.value)}
          value = {tag}
        />
      

      <button onClick={() => fetchData()}
      
      className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>
        Generate
      </button>

    </div>
  )
}

export default Tag