import React, { useRef, useState } from 'react'
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
import data from './data.json'
const ImageCarousel = () => {
  const containerRef = useRef(null);
  const [index, setindex] = useState(1);
  const length = data.urls.length;

  function moveRight(){
    if(containerRef.current){
      const newIndex = index+1;
      const scrollamount = containerRef.current.clientWidth;
      if(newIndex<length){
        containerRef.current.scrollLeft += scrollamount;
        setindex(newIndex);
      }
    }
  }
  function moveLeft(){
    if(containerRef.current){
      const newIndex = index-1;
      const scrollamount = containerRef.current.clientWidth;
      if(newIndex>0){
        containerRef.current.scrollLeft -= scrollamount;
        setindex(newIndex);

      }
    }
  }
  return (
    <div className='flex justify-center h-screen items-center gap-5'>
      <div className={`cursor-pointer ${index===1?'opacity-0':'opacity-100'}`}  onClick={moveLeft}><FaArrowAltCircleLeft /></div>
      <div className='flex w-2/4 overflow-hidden h-3/4 scroll-smooth' ref={containerRef}>
        {data.urls.map((srcc,index)=>(
          <img src={srcc} alt="" />
        ))}
      </div>
      <div className={`cursor-pointer ${index===length-1?'opacity-0':'opacity-100'}`} onClick={moveRight}><FaArrowAltCircleRight /></div>
    </div>
  )
}

export default ImageCarousel