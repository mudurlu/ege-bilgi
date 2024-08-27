import React, { useState, useEffect } from 'react'
import useFetch from "../../hooks/useFetch/useFetch";
import CharacterCard from '../../components/CharacterCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const { resultData, loading, error } = useFetch("https://rickandmortyapi.com/api/character")
  const [characters, setCharacters] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    if (page == totalPages + 1) {
      setHasMore(false);
      return;
    }

    const res = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );

    setCharacters((prevPosts) => [...prevPosts, ...res.data.results]);
    setTotalPages(res.data.info.pages);
    setPage((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    fetchData();
  }, []); 


  return (
    <>  

    <div className='w-full relative'>
      <img className=' m-auto opacity-15 h-48 ' src="./backgroundcolor.svg" alt="" />
      <h2 className=' absolute font-extrabold inset-0 flex items-center justify-center text-5xl opacity-85'>The Rick and Morty API
      </h2>
    </div>


    
    <div className='p-[5vw] px-[10vw] bg-zinc-800'>
    
    <InfiniteScroll
    dataLength={characters.length}
    next={fetchData}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
    endMessage={
      <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
      </p>
    }
>
  <div className='grid  gap-5 lg:grid-cols-2 )'>
        {characters.map((character, index) => (
          <Link to={`/detail/${character.id}`}>
            <CharacterCard key={index} item={character}/>
          </Link>
        ))}
    </div>
      </InfiniteScroll>
    </div>
  </>
)
}
