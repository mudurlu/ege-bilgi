import React from 'react'
import useFetch from '../../hooks/useFetch/useFetch'

export default function CharacterCard({item}) {
  const {resultData, loading, error } = useFetch(item.episode[0])
  
  return (
    <div className='rounded-xl border-yellow-500 border-1 bg-zinc-700 flex z-1'>
        <img className= "rounded-l-xl h-36" src={item.image} alt="" />
        <div className='  text-white px-2'>
          <p className='text-xl font-bold'>{item.name}</p>
          <div className='flex '>
            <div>
              {item.status== "Alive"?(
                <div className=' h-2 w-2 rounded-md bg-green-700 m-1'></div>
              ):item.status== "Dead"?(
                <div className=' h-2 w-2 rounded-md bg-red-700 m-1'></div>
              ): <div className=' h-2 w-2 rounded-md bg-slate-500 m-1' ></div>}
            </div>
            <p className='text-sm'>{item.status} - {item.species}</p>
          </div>
          <div className='my-2'>
            <p className='text-xs  font-bold text-gray-400'>Last known location:</p>
            <p className='text-sm'>{item.location.name}</p>
          </div>
          <div className='my-2'>
            <p className='text-xs  font-bold text-gray-400'>First seen in:</p>
            <p className='text-sm'>{resultData.name}</p>
            
          </div>
        </div>
        
      </div>

  )
}
