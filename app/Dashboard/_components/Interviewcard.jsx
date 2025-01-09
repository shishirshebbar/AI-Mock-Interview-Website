import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

import React from 'react'

function Interviewcard({interview}) {

    const router = useRouter();
    const onclick =()=>{
        router.push('/Dashboard/interview/'+interview?.mockId);
    }
    const clickfeedback = ()=>{
        router.push('/Dashboard/interview/'+interview.mockId+'/feedback')
        // router.push('/Dashboard/interview/'+interview?.mockId+'/feedback')
    }


  return (
    <div className='border shadow-sm rounded-lg p-3 '>
        <h2 className='font-bold text-primary'>{interview?.jobPositon}</h2>
        <h2 className='text-sm text-gray-800'>
              {interview?.jobExperience} {Number(interview?.jobExperience) === 1 ? 'year' : 'years'} of experience
          </h2>


        <h2 className='text-xs text-gray-800'>Created at: {interview.createdAt}</h2>
        <div className='flex justify-between mt-3 gap-5'>
        
        <Button size="sm" className="w-full "
        onClick={clickfeedback} >Feedback</Button>
       
        
        <Button className="w-full" size="sm"
        onClick={onclick}>Retake the interview</Button>
        </div>
    </div>
  )
}

export default Interviewcard