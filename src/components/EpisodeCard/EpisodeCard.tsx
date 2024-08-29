import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";

export default function EpisodeCard({ episode }) {
  const { resultData } = useFetch(episode);
  return (
    <div className="grid p-4 mx-40 my-3 border-1 rounded-xl items-center animate-pulse bg-[rgb(0,255,100)] ">
      <p className=" block">Episode {episode.slice(40)}</p>
      <div className="p-2 gap-2">
        <p>Episode Name: {resultData.name}</p>
        <p>Episode Air Date: {resultData.air_date}</p>
      </div>
    </div>
  );
}
