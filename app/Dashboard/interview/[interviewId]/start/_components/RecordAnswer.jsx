"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAI'


function RecordAnswer({ mockquestion,activequestionindex }) {
    const [useranswer,setuseranswer] = useState('');

    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });

      useEffect(()=>{
        results.map((result)=>{
            setuseranswer(prevAns=>prevAns+result?.transcript)
        })

      },[results]);

      const SaveUserAnswer =async ()=>{
        if(isRecording){
            stopSpeechToText()
            if(useranswer?.length<10){
                toast('error occured.try again...')
                return
            }
            const feedback = "Question: " + mockquestion[activequestionindex]?.question + 
            ", User Answer: " + useranswer + 
            ", Depending on the question and user answer please provide rating for user answer and feedback for improvement in just 5 lines in JSON Format with rating field and feedback field";
            const result = await chatSession.sendMessage(feedback)
            const jsonmockresp = (result.response.text()).replace(/```json/, '')
            .replace(/```/, '')
            .trim();
            console.log(jsonmockresp);
            
   }
        else{
            startSpeechToText()
        }
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

          <Button className="w-48"
          onClick={SaveUserAnswer}
          >
            {isRecording?
            <h2 className='text-red-100 flex gap-2'>
                <Mic/> Stop Recording..
            </h2>:
            
            
            'Record Answer'}</Button>

            
        </div>
    <Button className="mt-3 w-48" onClick={()=>console.log(useranswer)}>
        Show user answer
    </Button>

     
    </div>
  )
}

export default RecordAnswer