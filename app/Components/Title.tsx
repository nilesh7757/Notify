// 'use client'
import React from 'react'
import { FaNoteSticky } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
interface TitleProps{
  isFormVisible:Boolean;
   onAddNoteClick: ()=>void;
}
const Title:React.FC<TitleProps> = ({onAddNoteClick}) => {
  return (
    <div className='flex gap-3 justify-between  items-center font-semibold'>
     
      <div className='text-3xl flex gap-2 mb-1'> <FaNoteSticky size={35}  className='text-red-600'/> <span>Noti<span className='text-red-600'>fy</span></span></div>
      <Button  onClick={onAddNoteClick} className='bg-white cross border-red-600 border-2 hover:bg-red-700 hover:text-white text-red-600'>Add Your Note</Button>
    </div>
  )
}

export default Title
 