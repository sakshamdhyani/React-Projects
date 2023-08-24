import React from "react";
import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
  return (

    <div className="w-full h-auto min-h-[100vh] flex flex-col background">

      <h1 className="bg-white rounded-lg w-[90%] mx-auto text-center 
      mt-[40px] text-3xl p-3 font-bold">
      
      RANDOM GIFS
      
      </h1>


        <div className="flex flex-col w-full h-auto items-center gap-x-10 mt-[30px]">
          <Random/>
          <Tag/>
        </div>

      
    </div>
  );
}
