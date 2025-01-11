'use client';
import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { Button } from '@/components/ui/button'
import { TagsInput } from "react-tag-input-component";
import { Tag } from 'lucide-react';
import Select from 'react-select'
import './NoteForm.css'; // Import a CSS file for custom styles

interface NoteFormProps {
    isFormVisible: boolean;
    onClose: () => void;
}

interface Tags {
    tags: string[];
    settags: React.Dispatch<React.SetStateAction<string[]>>;
}

const NoteForm: React.FC<NoteFormProps> = ({ onClose, isFormVisible }) => {
    const SendData = (e: React.FormEvent) => {
        e.preventDefault();
        // Your data sending logic
    };

    const [tags, settags] = useState<string[]>([]);

    return (
        <div
            className={`p-8 card absolute flex justify-center w-full transition-all duration-150 ease-in-out border-gray-400 ${isFormVisible ? 'top-0' : 'top-96'}`}
        >
            <div className="flex flex-col px-3 py-2 font-bold border-2 w-[70vw] rounded-md bg-white items-center">
                <div className="flex justify-between w-full">
                    <div className="font-bold text-xl text-orange-600">Add a Note</div>
                    <button className="cross" onClick={onClose}>
                        <IoIosClose size={30} className="text-orange-600" />
                    </button>
                </div>
                <form onSubmit={SendData} className="mt-4 w-full relative">
                    <div>
                        <label className="text-gray-700 text-xl">Note Title</label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="mt-1 focus:border focus:border-red-500 outline-none px-3 rounded-md h-10 w-full text-10px border"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 text-xl">Note Description</label>
                        <textarea
                            placeholder="Description"
                            className="mt-1 focus:border focus:border-red-500 outline-none px-3 rounded-md h-32 w-full text-10px border"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 text-xl">Note Types</label>
                        <div className='border-2 border- rounded-md mt-1'>
                        <TagsInput
                            value={tags}
                            onChange={settags}
                            name="tags"
                            placeHolder="tags"
                        />
                        </div>
                    </div>
                    <div className="mt-2 w-full">
                        <Button type="submit" className="bg-red-500 relative hover:bg-red-700 right-0">
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NoteForm;
