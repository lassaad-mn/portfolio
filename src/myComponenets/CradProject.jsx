import React from 'react'
import soonImg from "./images/soon.jpg"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
function CradProject() {
  return (
    <div className='p-4'>
        <Card className=" relative  w-full max-w-sm p-5">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={soonImg}
        alt="soon"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary" className={"bg-(--accent) text-black"}>Soon</Badge>
        </CardAction>
        <CardTitle>Project soon </CardTitle>
        <CardDescription>
          soon...
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className={"bg-(--primary) w-full text-black" }>soon...</Button>
      </CardFooter>
    </Card>
    </div>
    
  )
}

export default CradProject
