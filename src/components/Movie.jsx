import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
    const [likes, setLikes] = useState(false);
  return (
      <>
       <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2 cursor-pointer ' >
                            <img className='w-full h-full block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                            <div className='absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white transition-all duration-200 ease-out'>
                                <p className='text-xs md:text-sm whitespace-normal flex justify-center items-center h-full text-center'>{item.title}</p>
                                <p>
                                    {likes ? <FaHeart className='absolute left-4 top-4 text-gray-300 cursor-pointer' /> : <FaRegHeart className='absolute left-4 top-4 text-gray-300 cursor-pointer' />}
                                </p>
                            </div>
                      </div></>
  )
}

export default Movie