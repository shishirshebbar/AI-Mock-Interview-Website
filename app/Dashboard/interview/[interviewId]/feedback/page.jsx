"use client"

import { db } from '@/utils/database';
import { UserAnswer } from '@/utils/dbschema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

function Feedback({ params }) {
    const [feedbacklist, setFeedbacklist] = useState([]);
    const [averageScore, setAverageScore] = useState(null);
    const router = useRouter();

    useEffect(() => {
        GetFeedback();
    }, []);

    const GetFeedback = async () => {
      try {
        const result = await db
          .select()
          .from(UserAnswer)
          .where(eq(UserAnswer.mockIdRef, params.interviewId))
          .orderBy(UserAnswer.id);
    
        console.log(result);
        setFeedbacklist(result);
    
        if (result?.length > 0) {
          
          const maxRating = 5; 
          const scaledRatings = result.map((item) => (item.rating / maxRating) * 10);
    
          const totalRating = scaledRatings.reduce((sum, rating) => sum + rating, 0);
          const average = (totalRating / result.length).toFixed(1);
          setAverageScore(average);
        } else {
          setAverageScore(null); 
        }
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };
    
    

    return (
        <div className="p-10">
            {feedbacklist?.length === 0 ?
                <h2 className='font-bold text-2xl text-gray-500 pt-2'>No interview record found</h2>
                :
                <>
                    <h2 className="text-3xl font-bold text-green-500">
                        Congratulations on Completing Your Interview!
                    </h2>
                    <h2 className="font-bold text-2xl pt-2">
                        Your Performance Feedback
                    </h2>
                    <h2 className="text-primary text-lg my-3">
                        Overall Interview Score: <strong>{averageScore}/10</strong>
                    </h2>

                    <h2 className="text-sm text-gray-500 mt-5">
                        Find below the key interview questions, the correct answers, your responses, and feedback for further improvement.
                    </h2>
                    {feedbacklist && feedbacklist.map((item, index) => (
                        <Collapsible key={index} className='mt-7'>
                            <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 w-full'>
                                {item.question} <ChevronsUpDown className='h-5 w-5' />
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
                                            Correct Answer: </strong>
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
                </>
            }
            <div className='pt-3'>
                <Button onClick={() => router.replace('/Dashboard')}>Go home</Button>
            </div>
        </div>
    );
}

export default Feedback;
