import React, { useState, useEffect } from "react";
import CharacterCard from "../../components/CharacterCard";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [searchFil, setSearchFil] = useState("");

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

  const searchFilter = characters.filter((user) =>
    user.name.toLowerCase().includes(searchFil.toLowerCase())
  );

  return (
    <>
      <div className="w-full relative">
        <img
          className=" m-auto opacity-15 h-48 "
          src="./backgroundcolor.svg"
          alt=""
        />
        <h2 className=" absolute font-extrabold inset-0 flex items-center justify-center text-5xl opacity-85">
          The Rick and Morty API
        </h2>
      </div>

      <div className=" bg-zinc-800">
        <input
          className=" w-full h-8 text-center m-auto font-bold animate-pulse hover:animate-none focus:animate-none"
          placeholder="Character Search"
          onChange={(e) => setSearchFil(e.target.value)}
          type="text"
        />
        <InfiniteScroll
          dataLength={characters.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4 className="text-center text-white">Loading...</h4>}
          endMessage={
            <p className=" text-center text-white">
              <b>You have seen it all</b>
            </p>
          }
        >
          <div className="grid p-24 py-16 gap-5 lg:grid-cols-2">
            {searchFilter.map((character, index) => (
              <Link to={`/detail/${character.id}`}>
                <CharacterCard key={index} item={character} />
              </Link>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
