"use client"

import { db } from '@/utils/database';
import { UserAnswer } from '@/utils/dbschema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import {  ChevronsUpDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';


  function feedback({params}) {

    const [feedbacklist,setfeedbacklist] = useState([]);
    const router = useRouter();
    useEffect(()=>{
        GetFeedback();
    },[]);
    const GetFeedback = async()=>{
        const result  = await db.select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef,params.interviewId))
        .orderBy(UserAnswer.id)

        console.log(result);
        setfeedbacklist(result);
    }
  return (
    <div className="p-10">
  <h2 className="text-3xl font-bold text-green-500">
    Congratulations on Completing Your Interview!
  </h2>
  <h2 className="font-bold text-2xl">
    Your Performance Feedback
  </h2>
  <h2 className="text-primary text-lg my-3">
    Overall Interview Score: <strong>7/10</strong>
  </h2>
  
  <h2 className="text-sm text-gray-500 mt-5">
    Find below the key interview questions, the correct answers, your responses, and feedback for further improvement.
  </h2>
  {feedbacklist&&feedbacklist.map((item,index)=>(
    <Collapsible key={index} className='mt-7'>
    <CollapsibleTrigger className='p-2 bg-secondary rounded-lg  my-2 text-left flex justify-between gap-7 w-full'>
    {item.question}   <ChevronsUpDown className='h-5 w-5'/>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <div className='flex flex-col gap-2'>
        <h2 className='text-red-500 p-2 border rounded-lg'>
            <strong>
                Rating: </strong>
            {item.rating}
        </h2>
        <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'>
            <strong>
                Your Answer: </strong>
                {item.userAns}
        </h2>
        <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'>
            <strong>
                Corect Answer: </strong>
                {item.correctAns}
        </h2>
        <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-primary'>
            <strong>
                Feedback: </strong>
                {item.feedback}
        </h2>
      </div>
    </CollapsibleContent>
  </Collapsible>
  
  ))}
  <Button onClick={()=>router.replace('/Dashboard')}>Go home</Button>
</div>

  )
}

export default feedback