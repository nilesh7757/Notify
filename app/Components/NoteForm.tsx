'use client'
import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
// import './NotesForm.css';
// import { FaFontAwesome } from 'react-icons/fa6'
// import { FaWindowClose } from 'react-icons/fa'
// import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button';
interface NoteFormProps {
    onClose: () => void; // Define the type for the function passed as a prop
  }
  
const NoteForm: React.FC<NoteFormProps> = ({ onClose }) => {
    const SendData = ()=>{

    }

    return (
        (<div className='p-8 card absolute top-0 flex justify-center w-full  border-gray-400'>
            <div className='flex flex-col px-3 py-2 font-bold border-2 w-[70vw]  rounded-md bg-white  items-center '>
                <div className='flex justify-between w-full'>
                    <div className='font-bold text-xl text-orange-600'>Add a Note</div>
                    <button className='cross' onClick={onClose} ><IoIosClose  size={30} className='text-orange-600' /></button>
                </div>
                <form onSubmit={SendData} className='mt-4 w-full relative'>
                    <div>
                        <label className="text-gray-700 text-xl">Note Title</label>
                        <input
                            type="text"
                            placeholder='Name'
                            className='mt-1 focus:border focus:border-red-500 outline-none px-3 rounded-md h-10 w-full text-10px border '
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-700  text-xl">Note Description</label>
                        <textarea
                            placeholder='Description'
                            className='mt-1 focus:border focus:border-red-500 outline-none px-3 rounded-md h-32 w-full text-10px border '
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 text-xl">Note Types</label>
                        <input
                            type="text"
                            placeholder='Types'
                            className='mt-1 focus:border focus:border-red-500 outline-none px-3 rounded-md h-10 w-full text-10px border '
                            required
                        />
                    </div>
                    <div className='mt-2 w-full '>
                        <Button onSubmit={onClose}  className='bg-red-500 relative hover:bg-red-700  right-0'>Save</Button>
                    </div>
                </form>
            </div>
        </div>
)    )
}

export default NoteForm
