"use client";
import { Button } from '@/components/ui/button';
import { db } from '@/utils/database';
import { MockAI } from '@/utils/dbschema';
import { eq } from 'drizzle-orm';
import { WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';

function Interview({ params }) {
  const [interviewdata, setInterviewdata] = useState(null); // Initialize as null
  const [webcamenable, setWebcamenable] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  // Get mock interview details
  const GetInterviewDetails = async () => {
    try {
      const result = await db.select().from(MockAI).where(eq(MockAI.mockId, params.interviewId));
      console.log("Fetched Data:", result); // Debug log
      if (result.length > 0) {
        setInterviewdata(result[0]);
      } else {
        console.warn("No data found for the given interviewId:", params.interviewId);
      }
    } catch (error) {
      console.error("Error fetching interview details:", error);
    }
  };
  

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl">Let's get going</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className="flex flex-col my-5 gap-5 ">
          <div className='p-5 rounded-lg border flex flex-col  gap-5'>
          {interviewdata ? (
            <>
              <h2>
                <strong>Job Role: </strong>
                {interviewdata.jobPositon}
              </h2>
              <h2>
                <strong>Job Description: </strong>
                {interviewdata.jobDesc}
              </h2>
              <h2>
                <strong>Job Experience: </strong>
                {interviewdata.jobExperience}
              </h2>
            </>
          ) : (
            <p>Loading interview details...</p>
          )}
          </div>
          <div className='p-5 rounded-lg border bg-yellow-200 border-yellow-300'>
            <h2  className='flex gap-2 items-center text-yellow-900'>
              <strong>Notice</strong></h2>
              <h2 className='mt-3 text-yellow-700'>Enable webcam and microphone to start your AI-powered mock interview. Practice your interview skills with real-time feedback and analysis. Get personalized insights to improve your answers and body language. Simulate various interview scenarios tailored to your job role. Gain confidence with our AI-driven performance metrics. Enhance your preparation with industry-specific mock interviews.</h2>

            
          </div>
        </div>
      <div>
        {webcamenable ? (
          <Webcam
            onUserMedia={() => setWebcamenable(true)}
            onUserMediaError={() => setWebcamenable(false)}
            mirrored={true}
            style={{
              height: 300,
              width: 300,
            }}
          />
        ) : (
          <>
            <WebcamIcon className="bg-secondary rounded-lg border-black-900 p-20 w-full h-80 my-5" />
            <Button  className="text-black w-full my-5" onClick={() => setWebcamenable(true)}>
              Enable web cam and microphone
            </Button>
          </>
        )}
      </div>
      

    </div>
    <div className='flex justify-end items-end'>
    <Button>
      Start Interview
    </Button>
    </div>
    </div>
  );
}

export default Interview;