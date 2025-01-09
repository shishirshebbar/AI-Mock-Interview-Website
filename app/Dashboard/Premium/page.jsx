"use client"
import React from 'react';
import { useRouter } from 'next/navigation';


function UpgradePage() {
  const router = useRouter();

 
  const handlePayment = () => {
  
    console.log('Redirecting to payment gateway...');
    
    router.push('/Dashboard/Premium/checkout');
  };
  const onclick =()=>{
    router.push('/Dashboard/FAQ');
}

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Unlock Your Full Potential with Premium</h1>
        <p className="text-xl text-gray-600 mt-4">
          Upgrade to Premium and experience an enhanced AI mock interview with exclusive features.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-semibold text-white text-center">Why Upgrade to Premium?</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="text-white space-y-4">
            <h3 className="text-2xl font-bold">Advanced AI Features</h3>
            <p>Gain access to advanced AI-driven simulations that mimic real-life interview scenarios with better response evaluation.</p>
          </div>

          <div className="text-white space-y-4">
            <h3 className="text-2xl font-bold">Unlimited Mock Interviews</h3>
            <p>Take unlimited mock interviews with customized difficulty levels and specific industry roles tailored to your needs.</p>
          </div>

          <div className="text-white space-y-4">
            <h3 className="text-2xl font-bold">Instant Feedback</h3>
            <p>Get detailed, real-time feedback on your answers with tips on improving your communication, problem-solving, and technical skills.</p>
          </div>

          <div className="text-white space-y-4">
            <h3 className="text-2xl font-bold">Personalized Interview Plans</h3>
            <p>Receive a personalized interview preparation plan based on your strengths and areas of improvement.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Become a Premium Member Today</h2>
        <p className="text-lg text-gray-600 mb-8">
          With Premium, you unlock the full potential of your interview preparation. Take the next step in your career with confidence!
        </p>
        
        <button
          onClick={handlePayment}
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-bold py-3 px-8 rounded-lg hover:bg-green-600 transform transition duration-300"
        >
          Upgrade to Premium
        </button>

        <p className="text-gray-500 mt-4">
          <span>Need more info? </span>
          <button
            onClick={onclick}
            className="text-blue-400 underline cursor-pointer"
          >
            Check out our FAQ.
          </button>
        </p>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800">Still not sure? Here's what you'll get:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
           
            <h4 className="text-xl font-semibold mt-4">Full Access to All Questions</h4>
            <p className="text-gray-700 mt-2">Practice with a wide variety of questions across multiple domains.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            
            <h4 className="text-xl font-semibold mt-4">Unlimited Retakes</h4>
            <p className="text-gray-700 mt-2">Take the interview as many times as you need to perfect your answers.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
           
            <h4 className="text-xl font-semibold mt-4">Exclusive Premium Content</h4>
            <p className="text-gray-700 mt-2">Unlock exclusive interview content designed for top-tier job roles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpgradePage;
