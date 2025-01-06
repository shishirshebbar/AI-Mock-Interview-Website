"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react'


function RecordAnswer() {
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

      },[results])

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
          onClick={isRecording?stopSpeechToText:startSpeechToText}
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