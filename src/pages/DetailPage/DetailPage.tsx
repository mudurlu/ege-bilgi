import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch/useFetch";
import EpisodeCard from "../../components/EpisodeCard";
export default function DetailPage() {
  const { id } = useParams();
  const { resultData, loading, error } = useFetch(
    "https://rickandmortyapi.com/api/character/" + id
  );

  return (
    <>
      <div className=" m-10 mx-20 border-1 rounded-xl items-center bg-yellow-500 shadow-[0px_5px_70px_20px_yellow]">
        <div className="p-5 mx-auto flex">
          <img
            className="border-1 rounded-xl w-48 h-48"
            src={resultData.image}
            alt=""
          />
          <div className="px-10 py-5">
            <h2 className="font-bold">
              Name: <span className="font-normal">{resultData.name}</span>
            </h2>
            <h2 className="font-bold">
              Status: <span className="font-normal">{resultData.status}</span>
            </h2>
            <h2 className="font-bold">
              Species: <span className="font-normal">{resultData.species}</span>
            </h2>
            <h2 className="font-bold">
              Type: <span className="font-normal">{resultData.type}</span>
            </h2>
            <h2 className="font-bold">
              Gender: <span className="font-normal">{resultData.gender}</span>
            </h2>
            <h2 className="font-bold">
              Location:{" "}
              <span className="font-normal">{resultData.location?.name}</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="my-10">
        {resultData.episode?.map((episodeItem: string, index) => (
          <EpisodeCard key={index} episode={episodeItem} />
        ))}
      </div>
    </>
  );
}
