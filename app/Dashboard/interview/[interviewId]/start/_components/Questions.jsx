import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';


function Questions({ mockquestion,activequestionindex }) {
    const questions = Array.isArray(mockquestion) ? mockquestion : [];
  
    const textToSpeech=(text)=>{
      if('speechSynthesis' in window){
        const speech  = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech)
      }
      else{
        alert("your browser is not compatible");
      }
    }
    return mockquestion&&(
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
          {questions.length > 0 ? (
            questions.map((question, index) => (
              <div key={index} >
                <h2 className={`p-2 border rounded-full
                text-xs md:text-sm text-center cursor-pointer
                ${activequestionindex== index&&'bg-primary text-white'}`}>
                    Question # {index + 1}
                    </h2>
                
              </div>
            ))
          ) : (
            <p>No questions available.</p>
          )}
          
        </div>
        <h2 className='my-5 text-sm md:text-lg'>{mockquestion[activequestionindex]?.question}</h2>
        <Volume2 onClick={()=>textToSpeech(mockquestion[activequestionindex]?.question)}
          className='cursor-pointer'
          />
          <div className='border rounded-lg p-5 bg-zinc-400  mt-10'>
          <h2 className='flex gap-2 items-center text-blue-700'>
            <Lightbulb/>
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm text-primary my-2">
          Click the "Record Answer" button when you're ready to respond to the question. At the end, you'll receive detailed feedback, including the correct answers and your responses, allowing you to compare and learn effectively.
        </h2>

          </div>
      
      
      </div>
    );
  }
  
  export default Questions;
  