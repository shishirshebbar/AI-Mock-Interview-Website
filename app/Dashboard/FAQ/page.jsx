import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from 'lucide-react'; 

function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>

      <div className="space-y-6">
        <Collapsible>
          <div className="border-b pb-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-xl font-semibold text-left">
              What is a Mock AI Interview?
              <ChevronsUpDown className="ml-2" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-gray-700 p-4">A Mock AI Interview is a simulated interview conducted using AI technology, designed to help you practice and improve your interview skills in a realistic setting. The AI will ask questions and provide feedback based on your responses.</p>
            </CollapsibleContent>
          </div>
        </Collapsible>

        <Collapsible>
          <div className="border-b pb-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-xl font-semibold text-left">
              How does the Mock AI Interview work?
              <ChevronsUpDown className="ml-2" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-gray-700 p-4">Once you begin the interview, the AI will ask you a series of questions similar to what you might encounter in a real interview. The AI evaluates your responses and provides feedback to help you improve.</p>
            </CollapsibleContent>
          </div>
        </Collapsible>

        <Collapsible>
          <div className="border-b pb-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-xl font-semibold text-left">
              What kind of interviews can I practice?
              <ChevronsUpDown className="ml-2" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-gray-700 p-4">You can practice for various types of interviews, including technical, behavioral, HR, and specific role-based interviews. The AI will tailor the questions to the type of interview you select.</p>
            </CollapsibleContent>
          </div>
        </Collapsible>

        <Collapsible>
          <div className="border-b pb-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-xl font-semibold text-left">
              Do I need an internet connection for the interview?
              <ChevronsUpDown className="ml-2" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-gray-700 p-4">Yes, you will need an internet connection to access the Mock AI Interview platform and interact with the AI system in real-time.</p>
            </CollapsibleContent>
          </div>
        </Collapsible>

        <Collapsible>
          <div className="border-b pb-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-xl font-semibold text-left">
              How can I receive feedback from the AI?
              <ChevronsUpDown className="ml-2" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-gray-700 p-4">After the interview, the AI will provide detailed feedback, highlighting areas where you performed well and areas where you can improve. This includes tips on communication, problem-solving, and technical knowledge.</p>
            </CollapsibleContent>
          </div>
        </Collapsible>

        <Collapsible>
          <div className="border-b pb-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-xl font-semibold text-left">
              Can I retake the Mock Interview?
              <ChevronsUpDown className="ml-2" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-gray-700 p-4">Yes, you can retake the interview as many times as you like. This is a great way to practice and track your improvement over time.</p>
            </CollapsibleContent>
          </div>
        </Collapsible>

        <Collapsible>
          <div className="border-b pb-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-xl font-semibold text-left">
              How accurate is the AI feedback?
              <ChevronsUpDown className="ml-2" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-gray-700 p-4">The AI provides feedback based on predefined algorithms, analyzing various factors like clarity, coherence, and technical depth in your answers. While the feedback is highly accurate, it is always a good idea to combine it with human judgment for the best results.</p>
            </CollapsibleContent>
          </div>
        </Collapsible>

        <Collapsible>
          <div className="border-b pb-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-xl font-semibold text-left">
              Do I need a microphone to participate in the interview?
              <ChevronsUpDown className="ml-2" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-gray-700 p-4">Yes, the Mock AI Interview requires you to speak your responses out loud. A microphone is necessary to communicate with the AI and receive voice-based feedback.</p>
            </CollapsibleContent>
          </div>
        </Collapsible>

        <Collapsible>
          <div className="border-b pb-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-xl font-semibold text-left">
              What if I am unable to answer a question during the interview?
              <ChevronsUpDown className="ml-2" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-gray-700 p-4">If you are unsure about a question, the AI will offer suggestions or ask clarifying questions to help guide you. Additionally, you can choose to skip the question and move on to the next one.</p>
            </CollapsibleContent>
          </div>
        </Collapsible>

        <Collapsible>
          <div>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-xl font-semibold text-left">
              Is there a time limit for the interview?
              <ChevronsUpDown className="ml-2" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-gray-700 p-4">Each mock interview has a time limit depending on the type and complexity of the interview. However, you can complete the interview at your own pace within that time frame.</p>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
    </div>
  );
}

export default FAQPage;
