import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { HiDotsHorizontal } from "react-icons/hi";
import { Button } from '@/components/ui/button';
const SingleNote = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <div className='flex justify-between'>
                        <CardTitle>Card Title</CardTitle>
                        <HiDotsHorizontal />
                        </div>
                    {/* <CardDescription>Card Description</CardDescription> */}
                    <span className="text-sm text-gray-400">Jan 10, 2025</span>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <Button disabled className='bg-red-600 disabled:opacity-1 hover:bg-red-700 '>Study</Button>
                </CardFooter>
            </Card>

        </div>
    )
}

export default SingleNote
