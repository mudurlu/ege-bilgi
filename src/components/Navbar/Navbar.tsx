import React from 'react'

export default function Navbar() {
  return (
    <div className=' justify-between flex mx-5'>
      <a href="/"><img className= "h-7  my-1 hover:animate-spin" src="./logo.svg" alt="" /></a>
      <div className='flex gap-7'>
        <a className='text-sm font-bold my-2' href="https://rickandmortyapi.com/documentation ">Docs</a>
        <a className='text-sm font-bold my-2' href="https://rickandmortyapi.com/about ">About</a>
        <a className='text-xs font-semibold rounded-lg border-2 px-2 p-1 m-1 border-amber-500 transition ease-in-out delay-150  hover:scale-110 hover:bg-amber-500 hover:text-white duration-300 ' 
        href="https://rickandmortyapi.com/support-us ">SUPPORT US</a>
      </div>
    </div>
  )
}
