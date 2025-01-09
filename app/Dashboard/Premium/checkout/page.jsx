"use client"

import { useRouter } from 'next/navigation';
import React from 'react';


function PaymentPage() {
  const router = useRouter();


  const handlePayment = () => {
    //for demo
    alert('Payment successful! Redirecting to confirmation page...');
    router.push('/Dashboard/Premium/checkout/paymentsuccess');
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Upgrade Your Mock AI Interview Experience</h1>
        <p className="text-xl text-gray-600 mt-4">
          Unlock premium features to accelerate your career and get ready for your dream job with advanced mock AI interviews.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl p-8 mb-8 text-white">
        <h2 className="text-3xl font-semibold text-center">Why Upgrade?</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">1. Personalized Feedback</h3>
            <p>Get tailored feedback from AI and improve specific areas based on your strengths and weaknesses.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">2. Exclusive Mock Interviews</h3>
            <p>Access mock interviews tailored for your role with a higher difficulty level to truly challenge yourself.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">3. Unlimited Retakes</h3>
            <p>Practice as many times as you want with unlimited retakes to ensure you're fully prepared for any situation.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">4. Detailed Reports</h3>
            <p>Get detailed analytics and insights to track your progress and focus on your improvement areas.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Choose Your Plan</h2>
        <div className="mt-8 flex justify-around">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs w-full text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Basic Plan</h3>
            <p className="text-gray-600 mt-2">Perfect for beginners who want to practice basic interviews.</p>
            <p className="text-2xl font-bold mt-4">₹500/month</p>
            <button
              onClick={handlePayment}
              className="bg-gradient-to-r from-green-400 to-teal-400 text-white py-3 px-8 rounded-lg mt-6 hover:bg-teal-500 transform transition duration-300"
            >
              Pay Now
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs w-full text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Premium Plan</h3>
            <p className="text-gray-600 mt-2">For professionals looking for unlimited access to all features.</p>
            <p className="text-2xl font-bold mt-4">₹1000/month</p>
            <button
              onClick={handlePayment}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white py-3 px-8 rounded-lg mt-6 hover:bg-orange-500 transform transition duration-300"
            >
              Pay Now
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs w-full text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Ultimate Plan</h3>
            <p className="text-gray-600 mt-2">The ultimate package for interview preparation with all premium features.</p>
            <p className="text-2xl font-bold mt-4">₹1500/month</p>
            <button
              onClick={handlePayment}
              className="bg-gradient-to-r from-red-400 to-pink-400 text-white py-3 px-8 rounded-lg mt-6 hover:bg-pink-500 transform transition duration-300"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Assistance?</h3>
        <p className="text-lg text-gray-600 mb-8">
          If you have any questions about the plans or need support, feel free to reach out to us.
        </p>

        <button
          onClick={() => router.push('/Dashboard/contact')}
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-bold py-3 px-8 rounded-lg hover:bg-teal-600 transform transition duration-300"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
