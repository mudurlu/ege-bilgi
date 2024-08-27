import React from 'react'

export default function Navbar() {
  return (
    <div className=' justify-between flex mx-5'>
      <img className= "h-7  my-1" src="./logo.svg" alt="" />
      <div className='flex gap-7'>
        <a className='text-sm font-bold my-2' href="https://rickandmortyapi.com/documentation ">Docs</a>
        <a className='text-sm font-bold my-2' href="https://rickandmortyapi.com/documentation ">About</a>
        <a className='text-xs font-semibold rounded-lg border-2 px-2 p-1 m-1 border-amber-400' href="https://rickandmortyapi.com/documentation ">SUPPORT US</a>
      </div>
    </div>
  )
}
