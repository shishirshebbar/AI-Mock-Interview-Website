"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
 const onclick = () => {
  console.log("Button clicked!");
  router.push('/Dashboard');
  console.log("router.push called for /Dashboard");
};

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 p-5">
      <div className="text-center mb-8">
        <h1 className="text-white text-4xl font-extrabold mb-4 animate__animated animate__fadeIn">
          Welcome to <span className="text-yellow-300">MockAI</span>
        </h1>
        <p className="text-white text-lg font-light animate__animated animate__fadeIn animate__delay-1s">
          Your personalized AI-enabled mock interview platform. Click below to start your journey towards success!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <Button 
          onClick={onclick} 
          className="px-10 py-4 text-white text-lg font-semibold bg-yellow-500 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:shadow-xl"
        >
          Start
        </Button>
        <p className="text-white text-sm mt-4">
          Get personalized feedback and improve your interview skills.
        </p>
      </div>
    </div>
  );
}
