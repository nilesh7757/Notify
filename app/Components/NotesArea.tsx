import React from 'react'
import SingleNote from './SingleNote'

const NotesArea = () => {
  return (
    <div className=' w-full h-[82%] gap-y-3 lg:gap-y-0 p-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-4  sm:grid-cols-2 gap-x-3 grid rounded-md overflow-y-auto'>
      <SingleNote/>
      <SingleNote/>
      <SingleNote/>
      <SingleNote/>
      <SingleNote/>
      <SingleNote/>
      <SingleNote/>
    </div>
  )
}

export default NotesArea
