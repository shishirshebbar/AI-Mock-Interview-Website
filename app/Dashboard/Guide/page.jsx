"use client"

import React from 'react';

import { useRouter } from 'next/navigation';


function GuidePage() {
  const router = useRouter();

 
  const onclick =()=>{
    router.push('/Dashboard/FAQ');
}

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Your Ultimate Guide to Mock AI Interviews</h1>
        <p className="text-xl text-gray-600 mt-4">
          Learn how to make the most of your AI-powered mock interviews and ace your next job interview with confidence!
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-semibold text-white text-center">How to Use Mock AI Interviews Effectively</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="text-white space-y-4">
            <h3 className="text-2xl font-bold">1. Start with Basic Interviews</h3>
            <p>Begin with basic interviews to get familiar with the platform and start building your confidence.</p>
          </div>

          <div className="text-white space-y-4">
            <h3 className="text-2xl font-bold">2. Customize Interview Difficulty</h3>
            <p>Gradually increase the difficulty level of your mock interviews as you improve, simulating real-life scenarios.</p>
          </div>

          <div className="text-white space-y-4">
            <h3 className="text-2xl font-bold">3. Focus on Your Weaknesses</h3>
            <p>Use feedback to identify areas where you need improvement and focus on strengthening them.</p>
          </div>

          <div className="text-white space-y-4">
            <h3 className="text-2xl font-bold">4. Practice with Specific Roles</h3>
            <p>Choose your desired job role and practice interviews that match the specific skills and knowledge needed.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Advanced Tips for Success</h2>
        <p className="text-lg text-gray-600 mb-8">
          Here are some advanced tips that can help you take your interview skills to the next level:
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            
            <h4 className="text-xl font-semibold mt-4">Master Non-Technical Skills</h4>
            <p className="text-gray-700 mt-2">Don’t just focus on technical skills. Work on communication, problem-solving, and leadership abilities.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          
            <h4 className="text-xl font-semibold mt-4">Review Interview Feedback Thoroughly</h4>
            <p className="text-gray-700 mt-2">Understand your strengths and weaknesses through feedback, and make sure to implement improvements.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
           
            <h4 className="text-xl font-semibold mt-4">Take Retakes and Refine</h4>
            <p className="text-gray-700 mt-2">Don’t be afraid to retake the mock interview until you get the desired result.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
        <p className="text-lg text-gray-600 mb-8">
          For more information, tips, and tricks, head to our FAQ section or contact us for personalized guidance.
        </p>

        <button
          onClick={onclick}
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transform transition duration-300"
        >
          Visit FAQ
        </button>
      </div>
    </div>
  );
}

export default GuidePage;
