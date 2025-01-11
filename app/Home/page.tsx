'use client'
import React,{useState} from 'react'
import Title from '../Components/Title'
import Categories from '../Components/Categories'
import NotesArea from '../Components/NotesArea'
import NoteForm from '../Components/NoteForm'
const App = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState); // Toggle visibility
  };
  return (
    <div className='lg:w-[75vw] relative lg:h-[80vh] w-[90vw] h-[95vh]  bg-white p-2 rounded-md shadow-md lg:p-7'>
      <Title isFormVisible={isFormVisible} onAddNoteClick={toggleFormVisibility}/>
      <Categories />
      <NotesArea/>
      <div className={`${isFormVisible?'opacity-1':'opacity-0'}`}><NoteForm  isFormVisible={isFormVisible} onClose={toggleFormVisibility} /></div>
    </div>
  )
}

export default App