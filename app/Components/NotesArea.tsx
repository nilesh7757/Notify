import React from 'react'
import SingleNote from './SingleNote'

const NotesArea = () => {
  return (
    <div className=' w-full h-[82%] p-1 grid-cols-4 sm:grid-cols-3 gap-x-3 grid rounded-md overflow-y-auto'>
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
