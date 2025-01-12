'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
interface Note {
  id: number;
  noteName: string;
  noteContent: string;
  categories: string[];
  dateCreation: Date;
}

interface SingleNoteProps {
  note: Note;  // Expect 'note' prop here
}

import { HiDotsHorizontal } from "react-icons/hi";
import { Button } from '@/components/ui/button';

const SingleNote: React.FC<SingleNoteProps> = ({ note }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className='flex justify-between'>
            <CardTitle>{note.noteName}</CardTitle>
            <HiDotsHorizontal
              className="cursor-pointer"
              // onClick={() => deleteNote(note.id)}
            />
          </div>
          <span className="text-sm text-gray-400">{note.dateCreation.toLocaleString()}</span>
        </CardHeader>
        <CardContent>
          <p>{note.noteContent}</p>
        </CardContent>
        <CardFooter className='flex gap-2'>
          {
            note.categories.map((category, index) => {
              return (  // Ensure you explicitly return the Button JSX element
                <Button 
                  key={index}  // You can also use `category` as a key if it's unique
                  disabled 
                  className='bg-red-600 disabled:opacity-1 hover:bg-red-700'>
                  {category}
                </Button>
              )
            })
          }
        </CardFooter>
      </Card>
    </div>
  )
}

export default SingleNote;
