import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className="bg-white">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt=""
          src={'/Home.jpg'}          
          className="absolute inset-0 h-full w-full object-cover"
        />
      </aside>
  
      <main
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div className="max-w-xl lg:max-w-3xl">
          <a className="block text-blue-600" href="#">
            <span className="sr-only">Home</span>
            
          </a>
  
          <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to MockAI 
          </h1>
  
          <p className="mt-4 my-4 leading-relaxed text-gray-500">
          Join us to prepare for AI-driven interviews with personalized mock sessions, instant feedback, and performance analytics.
          </p>
  <SignUp />



    </div>
    </main>
  </div>
</section>
  )

}