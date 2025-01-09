"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const onclick =()=>{
    router.push('/Dashboard');
}
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-primary mb-5 p-5 text-center text-2xl rounded-lg bg-gray-300">
        Welcome to <strong>MockAI</strong>. Your personalized AI-enabled mock interview website. Click on the button below to begin your journey with us.
      </h2>
      <Button onClick={onclick} className="w-50 h-15 text-lg">
        Start
      </Button>
    </div>
  );
}
