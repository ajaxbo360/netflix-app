import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {MdChevronLeft,MdChevronRight } from "react-icons/md";

import Movie from './Movie';

const Row = ({ title, fetchURL,rowID }) => {
    const [movies, setMovies] = useState([]);

    const slideLeft = () => {
        let slider = document.getElementById("slider" + rowID);

        slider.scrollLeft = slider.screenLeft - 500;
    }
    const slideRight = () => {
        let slider = document.getElementById("slider" + rowID);

        slider.scrollLeft = slider.scrollLeft + 500

        // slider.scrollLeft = slider.screenLeft + 500;
    }
    

    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results);
       })
    }, [fetchURL])
    console.log(movies)
    return (
      <>
          <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>  
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block left-3 z-10' size={40} />
                <div id={"slider" + rowID} className= "w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"  >
                   
                    {movies.map((item,id) => (
                       <Movie item= {item} key={id} />
                    ))}
                    
                </div>
                <MdChevronRight onClick={slideRight}  className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block right-3 z-10'  size={40}/>
          </div>
      </>
  )
}

export default Row ;