import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { HandThumbUpIcon } from '@heroicons/react/24/outline';

const API_KEY = process.env.API_KEY;

const id = ({result}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  
  return (
    <div className='flex flex-col  justify-evenly  px-20 py-20 space-y-14'>
    <div className='group w-full h-full  flex items-center space-x-24 cursor-pointer p-2 '>

    <div className='w-1/2 h-1/2 object-contain transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 '>
        <Image
        layout='responsive'
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} 
        height={50}
        width={50}
        alt='image'/>
    </div>
    <div className=' flex flex-col'>
      <div>
        <p className='truncate max-w-md'>{result.popularity}</p>
        <h2 className='mt-1 text-3xl text-white transition-all duration-100 ease-in-out '>{result.title || result.original_name}</h2>
        <p className='flex items-center'>
            {result.media_type && `${result.media_type}`}{" "}
            
            {result.release_date || result.first_air_date}{" "}
            <HandThumbUpIcon className='h-5 mx-2' />{result.vote_count}
        </p>
      </div>
    </div>
    </div>
      <div className=''>
        <p className='flex items-center text-2xl'>
            {result.overview && `${result.overview}`}{" "}
            {/* <HandThumbUpIcon className='h-5 mx-2' />{result.vote_count} */}
        </p>
      </div>
      </div>
  )
}

export default id


export async function getServerSideProps(context){
  const id = context.query.id;
  const request  = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(res =>res.json())
  // const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(res => res.json());
  // const requests = ""
  return {
    props:{
      result: request
    }
  }
} 
