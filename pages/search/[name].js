import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Thumbnail from '../../components/Thumbnail';
import FlipMove from 'react-flip-move'
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Results from '../../components/Results';

const API_KEY = process.env.API_KEY;

const BASE_URL = "https://image.tmdb.org/t/p/original/";
const name = ({results}) => {
  return (
    <>
    <Header/>
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3'>
        {
            results.results.map((result)=>(
                <Thumbnail key={result.id} result={result}/>
            ))
        }
    </FlipMove>
    </>
  )
}


export default name

export async function getServerSideProps(context){
  const id = context.query.name;
// https://api.themoviedb.org/3/search/movie?query=JackReacher&api_key=cb6437113ea61d0ca2679ca9bce0b541
  const request  = await fetch(`https://api.themoviedb.org/3/search/movie?query=${id}&api_key=${API_KEY}`).then(res =>res.json())
  // const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(res => res.json());
  // const requests = ""
  return {
    props:{
      results: request
    }
  }
} 


