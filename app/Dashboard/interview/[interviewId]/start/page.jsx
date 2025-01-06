"use client";

import { db } from '@/utils/database';
import { MockAI } from '@/utils/dbschema';
import { eq } from 'drizzle-orm';
import React, { useState, useEffect } from 'react';
import Questions from './_components/Questions';
import RecordAnswer from './_components/RecordAnswer';

function StartInterview({ params }) {
  const [interviewdata, setInterviewdata] = useState(null);
  const [mockquestion, setmockquestion] = useState([]);
  const [activequestionindex,setactivequestionindex] = useState(0);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    try {
      const result = await db.select().from(MockAI).where(eq(MockAI.mockId, params.interviewId));
      const jsonmock = JSON.parse(result[0].jsonMockResponse);
  
      // Extract the array from 'interview_questions'
      const mockQuestions = Array.isArray(jsonmock.interview_questions)
        ? jsonmock.interview_questions
        : [];
  
      console.log("mockQuestions:", mockQuestions); // Verify the extracted questions
  
      setmockquestion(mockQuestions);
      setInterviewdata(result[0]);
    } catch (error) {
      console.error("Error fetching interview details:", error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* questions */}
        <Questions mockquestion={mockquestion} 
        activequestionindex = {activequestionindex}
        />
        {/*record answer*/}
        <RecordAnswer
         mockquestion={mockquestion} 
         activequestionindex = {activequestionindex}
        />
      </div>

    </div>
  );
}

export default StartInterview;
