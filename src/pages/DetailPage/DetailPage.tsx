import React from 'react'
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch/useFetch';

export default function DetailPage() {
  const {id} = useParams();
  const {resultData, loading, error} = useFetch("https://rickandmortyapi.com/api/character/" + id)
  return (
    <>
      <div className=''>
        <img src={resultData.image} alt="" />
      </div>
    </>
  )
}
