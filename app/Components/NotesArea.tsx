import React from 'react'
import SingleNote from './SingleNote'
import { useGlobalProvider } from '../ContextApi'

const NotesArea = () => {
  const { notesObject: { allNotes } } = useGlobalProvider();
  
  // Check if `allNotes` is populated

  return (
    <div className='w-full h-[82%] gap-y-3 lg:gap-y-0 p-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-x-3 grid rounded-md overflow-y-auto'>
      {
        allNotes.length > 0 ? (
          allNotes.map((singleNote) => (
            <SingleNote key={singleNote.id} note={singleNote} />
          ))
        ) : (
          <p>No notes available</p> // Display message when no notes are available
        )
      }
    </div>
  )
}

export default NotesArea;
