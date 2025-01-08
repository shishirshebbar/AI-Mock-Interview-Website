import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Addnewinterview from './_components/Addnewinterview'
import Interviewlist from './_components/Interviewlist'

function Dashboard() {
  return (
    <div className='p-10'>
      <h2 className='font-bold text-2xl'>Dashboard</h2>
      <h2 className='text-gray-700'>Prepare for AI-driven interviews with personalized mock sessions, instant feedback, and performance analytics.</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>

        <Addnewinterview/>
      </div>
    
      <Interviewlist/>
    </div>
  )
}

export default Dashboard