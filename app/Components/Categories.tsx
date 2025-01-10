import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const Categories = () => {
    return (
        <div>
            <Tabs defaultValue="All"  className="w-full bg-white">
                <TabsList  className='bg-white '>
                    <TabsTrigger value="All">All</TabsTrigger>
                    <TabsTrigger value="Study">Study</TabsTrigger>
                    <TabsTrigger value="Travel">Travel</TabsTrigger>
                </TabsList>
                <TabsContent value="All"></TabsContent>
                <TabsContent value="Study"></TabsContent>
                <TabsContent value="Travel"></TabsContent>
            </Tabs>
        </div>
    )
}

export default Categories
