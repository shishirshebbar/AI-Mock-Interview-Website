"use client";

import { db } from '@/utils/database';
import { MockAI } from '@/utils/dbschema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import Interviewcard from './Interviewcard';

function Interviewlist() {
    const { user } = useUser();
    const [interviewlist, setinterviewlist] = useState([]);

    useEffect(() => {
        if (user) {
            GetInterviewDetails();
        }
    }, [user]);

    const GetInterviewDetails = async () => {
        try {
            const result = await db
                .select()
                .from(MockAI)
                .where(eq(MockAI.createdBy, user?.primaryEmailAddress?.emailAddress))
                .orderBy(desc(MockAI.id));
            console.log("Query Result: ", result);
            setinterviewlist(Array.isArray(result) ? result : []);
        } catch (error) {
            console.error("Error fetching interview details:", error);
            setinterviewlist([]);
        }
    };

    return (
        <div>
            <h2 className='font-bold text-2xl'>Mock Interviews - Previous Sessions</h2>
            <h2 className='text-gray-700'>
                Explore the list of past mock interview sessions to review performance and gain insights for improvement.
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {interviewlist.length > 0 ? (
                    interviewlist.map((interview, index) => (
                        <Interviewcard key={index} interview={interview} />
                    ))
                ) : (
                    <p>No interviews found.</p>
                )}
            </div>
        </div>
    );
}

export default Interviewlist;
