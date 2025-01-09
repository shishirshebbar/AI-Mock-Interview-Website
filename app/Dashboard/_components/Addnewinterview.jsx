"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { chatSession } from '@/utils/GeminiAI';
import { LoaderCircle } from 'lucide-react';
import { db } from '@/utils/database';
import { MockAI } from '@/utils/dbschema';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useRouter } from 'next/navigation';


function Addnewinterview() {
    const [opendialog, setopendialog] = useState(false);
    const [jobposition, setjobposition] = useState();
    const [jobdescription, setjobdecription] = useState();
    const [jobexperience, setjobexperience] = useState();
    const [loading, setloading] = useState(false);
    const [jsonresponse,setjsonresponse] = useState([]);
    const {user} = useUser();
    const router = useRouter();

    const onSubmit = async (e) => {
        setloading(true);
        e.preventDefault();
        console.log(jobposition, jobdescription, jobexperience);
        const InputPrompt = `Please provide some practice interview question and answers in json format for the following job description:
        Job Position: ${jobposition}
        Job description: ${jobdescription}
        Job Experience: ${jobexperience}`;
        const result = await chatSession.sendMessage(InputPrompt);
        const rawResponse = await result.response.text();
        const jsonMockResp = rawResponse
            .replace(/```json/, '')
            .replace(/```/, '')
            .trim();
        const parsedResponse = JSON.parse(jsonMockResp);
        console.log(parsedResponse);
        setjsonresponse(jsonMockResp);
        if(jsonMockResp){
        const dbresponse = await db.insert(MockAI).values({
            mockId:uuidv4(),
            jsonMockResponse:jsonMockResp,
            jobPositon:jobposition,
            jobDesc:jobdescription,
            jobExperience:jobexperience,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD-MM-yyyy')
        }).returning({mockId:MockAI.mockId})
        console.log("Inserted ID: ",dbresponse)
        if(dbresponse){
            setopendialog(false);
            router.push('/Dashboard/interview/'+dbresponse[0]?.mockId);
        }
    }
    else{
        console.log("ERROR")
    }


        setloading(false);
    };
    
    // Helper function to check if a string is valid JSON
    const isValidJson = (str) => {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    };
    



    return (
        <div>
            <div className='p-8 border rounded-lg bg-blue-700 hover:scale-105 hover:shadow-md cursor-pointer transition-all'
                onClick={() => setopendialog(true)}>
                <h2 className='text-lg text-center text-red-100'>
                Start your journey by participating in a mock interview
                </h2>
            </div>
            <Dialog open={opendialog} onClose={() => setopendialog(false)}>

                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">Please provide more details about the interview</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={onSubmit}>
                                <div>
                                    <h2>
                                        Please provide details about the job role, description, and required years of experience.
                                    </h2>
                                    <div className="mt-7 my-3">
                                        <label>Job Role/Description</label>
                                        <Input placeholder="E.g. Full Stack Developer" required
                                            onChange={(event) => setjobposition(event.target.value)} />
                                    </div>
                                    <div className="my-3">
                                        <label>Technologies/Skills (Short list)</label>
                                        <Textarea placeholder="E.g. React, Next.js, Node.js, Django" required
                                            onChange={(event) => setjobdecription(event.target.value)} />
                                    </div>
                                    <div className="my-3">
                                        <label>Years of Experience</label>
                                        <Input placeholder="E.g. 5" type="number" max="100" required
                                            onChange={(event) => setjobexperience(event.target.value)} />
                                    </div>
                                </div>

                                <div className="flex gap-4 py-5 justify-end text-gray-900">
                                    <Button variant="outline" type="button"
                                        className="hover:bg-red-500 hover:text-white transition-colors"
                                        onClick={() => setopendialog(false)}>
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="outline"
                                        type="submit"
                                        disabled={loading}
                                        className="hover:bg-red-500 hover:text-white transition-colors"
                                    >
                                        {loading ? (
                                            <>
                                                <LoaderCircle className="animate-spin" />
                                                <span>Generating from AI</span>
                                            </>
                                        ) : (
                                            'Start Interview'
                                        )}
                                    </Button>


                                </div>
                            </form>

                        </DialogDescription>
                    </DialogHeader>

                </DialogContent >
            </Dialog>

        </div>

    )
}

export default Addnewinterview

    // const onSubmit = async (e) => {
    //     setloading(true);
    //     e.preventDefault();
    //     console.log(jobposition, jobdescription, jobexperience);
    //     const InputPrompt = `Please provide some practice interview question and answers in json format for the following job description:
    //     Job Position: ${jobposition}
    //     Job description: ${jobdescription}
    //     Job Experience: ${jobexperience}`;
    
    //     try {
    //         const result = await chatSession.sendMessage(InputPrompt);
    //         const rawResponse = await result.response.text();  // Get raw response
    //         console.log("Raw Response:", rawResponse);  // Log the raw response for debugging
            
    //         const jsonMockResp = rawResponse
    //             .replace(/```json/, '')  // Remove opening code block tag
    //             .replace(/```/, '')      // Remove closing code block tag
    //             .trim();                 // Clean up extra spaces
            
    //         console.log("Cleaned Response:", jsonMockResp);  // Log cleaned response for debugging
            
    //         // Validate if the response is valid JSON
    //         if (isValidJson(jsonMockResp)) {
    //             const parsedResponse = JSON.parse(jsonMockResp);
    //             console.log(parsedResponse);
    //         } else {
    //             console.error("Invalid JSON response:", jsonMockResp);
    //         }
    //     } catch (error) {
    //         console.error('Error generating interview questions:', error);
    //     }
    //     setloading(false);
    // };