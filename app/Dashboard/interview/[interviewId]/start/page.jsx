
"use client";

import { db } from '@/utils/database';
import { MockAI } from '@/utils/dbschema';
import { eq } from 'drizzle-orm';
import React, { useState, useEffect } from 'react';
import Questions from './_components/Questions';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the RecordAnswer component with SSR disabled
const RecordAnswer = dynamic(
  () => import('./_components/RecordAnswer'),
  {
    ssr: false,
    loading: () => <p>Loading recording interface...</p> // Show a loading message while the component loads on the client
  }
);

function StartInterview({ params }) {
  const [interviewdata, setInterviewdata] = useState(null);
  const [mockquestion, setmockquestion] = useState([]);
  const [activequestionindex, setactivequestionindex] = useState(0);

  // Fetch interview details when the component mounts
  useEffect(() => {
    GetInterviewDetails();
  }, []); // Empty dependency array means this runs once on mount

  // Function to fetch interview data from the database
  const GetInterviewDetails = async () => {
    try {
      // Query the database for the specific interview using the ID from params
      const result = await db.select().from(MockAI).where(eq(MockAI.mockId, params.interviewId));

      // Check if a result was found and has the necessary data
      if (!result || result.length === 0 || !result[0] || !result[0].jsonMockResponse) {
        console.log("No interview data or JSON response found for ID:", params.interviewId);
        // Handle case where no data is found (e.g., show an error message)
        return;
      }

      // Parse the JSON response string from the database
      const jsonmock = JSON.parse(result[0].jsonMockResponse);

      // Extract the questions array using the correct key 'interviewQuestions'
      const mockQuestions = Array.isArray(jsonmock?.interviewQuestions)
        ? jsonmock.interviewQuestions
        : [];

      // Update state only if questions were successfully extracted
      if (mockQuestions.length > 0) {
        setmockquestion(mockQuestions);
      } else {
         console.log("Extracted mockQuestions array is empty or not an array.");
         // Handle case where the JSON structure is unexpected or empty
      }

      // Set the full interview data object in state
      setInterviewdata(result[0]);

    } catch (error) {
      // Log and handle any errors during the fetch or parsing process
      console.error("Error fetching interview details:", error);
      // You might want to set an error state here to display to the user
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Component to display the list of questions and the current question */}
        <Questions
          mockquestion={mockquestion}
          activequestionindex={activequestionindex}
        />
        {/* Component for recording the user's answer using speech-to-text and webcam */}
        {/* This component is dynamically loaded and only runs on the client */}
        <RecordAnswer
          mockquestion={mockquestion}
          activequestionindex={activequestionindex}
          interviewdata={interviewdata}
        />
      </div>

      {/* Navigation buttons for questions */}
      <div className="flex justify-end gap-6 mr-20">
        {/* Only show buttons if questions have been loaded */}
        {mockquestion.length > 0 && (
          <>
            {/* Previous Question button */}
            {activequestionindex > 0 && (
              <Button onClick={() => setactivequestionindex(activequestionindex - 1)}>
                Previous Question
              </Button>
            )}
            {/* Next Question button */}
            {activequestionindex < mockquestion.length - 1 && (
              <Button onClick={() => setactivequestionindex(activequestionindex + 1)}>
                Next Question
              </Button>
            )}
            {/* End Interview button (shown on the last question) */}
            {activequestionindex === mockquestion.length - 1 &&
             interviewdata?.mockId && ( // Ensure interview data is loaded before creating the link
                <Link href={'/Dashboard/interview/' + interviewdata.mockId + '/feedback'}>
                  <Button>End Interview</Button>
                </Link>
              )}
          </>
        )}
      </div>
    </div>
  );
}

export default StartInterview;