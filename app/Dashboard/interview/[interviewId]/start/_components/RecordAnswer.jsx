"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAI'
import { UserAnswer } from '@/utils/dbschema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'


function RecordAnswer({ mockquestion,activequestionindex ,interviewdata}) {
    const [useranswer,setuseranswer] = useState('');
    const {user} = useUser();
    const [loading,setloading] = useState(false);
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });

      useEffect(()=>{
        results.map((result)=>{
            setuseranswer(prevAns=>prevAns+result?.transcript)
        })

      },[results]);

      useEffect(()=>{
        if(!isRecording&&useranswer.length>10){
          Updateuseranswer();
        }

      //   if(useranswer?.length<10){
      //     setloading(false);
      //     toast('error occured.try again...')
      //     return
      // }

      },[useranswer])


      const Startandstoprecording =async ()=>{
        if(isRecording){
          
            stopSpeechToText()
            
            
            
            
   }
        else{
            startSpeechToText()
        }
      }

      const Updateuseranswer= async()=>{
        console.log(useranswer);
        setloading(true);
        const feedback = "Question: " + mockquestion[activequestionindex]?.question + 
            ", User Answer: " + useranswer + 
            ", Depending on the question and user answer please provide rating for user answer and feedback for improvement in  5 lines in JSON Format with rating field and feedback field";
            const result = await chatSession.sendMessage(feedback)
            const jsonmockresp = (result.response.text()).replace(/```json/, '')
            .replace(/```/, '')
            .trim();
            console.log(jsonmockresp);
            const jsonfeedback = JSON.parse(jsonmockresp);
            const resp = await db.insert(UserAnswer).values({
              mockIdRef:interviewdata?.mockId,
              question:mockquestion[activequestionindex]?.question,
              correctAns:mockquestion[activequestionindex]?.answer,
              userAns:useranswer,
              feedback:jsonfeedback?.feedback,
              rating:jsonfeedback?.rating,
              userEmail:user?.primaryEmailAddress?.emailAddress,
              createdAt:moment().format('DD-MM-yyyy')


            })
            if(resp){
              toast('user recorded successfully')
              setuseranswer('');
              setResults([]);
            }
            setResults([]);
            
            setloading(false);


      }

  return (
    <div className='flex items-center justify-center flex-col'>
        <div className='flex flex-col justify-center items-center my-20 bg-gray-200 rounded-lg p-5 mb-0'>
        <Image src = {'/icon.png'} width={200} height={200}
        className='absolute'/>
        <Webcam
        mirrored={true}
        style={{
            height:300,
            width:'100%',
            zIndex:10,
        }}   
        
         />
         
    </div>
    <div className="my-10 mt-7 mb-0 ">

          <Button 
          disabled= {loading}
          className="w-48"
          onClick={Startandstoprecording}
          >
            {isRecording?
            <h2 className='text-red-100 flex gap-2 animate-pulse items-center'>
                <StopCircle/> Stop Recording..
            </h2>:
            <h2 className='text-red-100 flex gap-2 items-center'><Mic/>Record answer</h2>
            
            }</Button>

            
        </div>
    {/* <Button className="mt-3 w-48" onClick={()=>console.log(useranswer)}>
        Show user answer
    </Button> */}

     
    </div>
  )
}

export default RecordAnswer