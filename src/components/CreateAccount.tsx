import { Button } from "./ui/moving-border"

const CreateAccount = () => {
  return (
    <main>
        
        <div className="py-16">
  <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20 ">
    <div className="flex items-center justify-center -space-x-2">
      <img
        loading="lazy"
        width="220"
        height="220"
        src="/grad1.jpg"
        alt="member photo"
        className="h-8 w-8 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width="220"
        height="220"
        src="/grad1.jpg"
        alt="member photo"
        className="h-12 w-12 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width="220"
        height="220"
        src="/grad1.jpg"
        alt="member photo"
        className="z-10 h-16 w-16 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width="220"
        height="220"
        src="/grad1.jpg"
        alt="member photo"
        className="relative h-12 w-12 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width="220"
        height="220"
        src="/grad1.jpg"
        alt="member photo"
        className="h-8 w-8 rounded-full object-cover"
      />
    </div>
    <div className="m-auto space-y-6 md:w-8/12 lg:w-7/12">
      <h1 className="text-center text-4xl font-bold text-white dark:text-white md:text-5xl">Your Story Starts Here.<br/>Get Started!</h1>
      <p className="text-center text-xl text-white dark:text-gray-300">
      Become part of a global movement of writers crafting the future with every word.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
      <div className="flex items-center w-full justify-center gap-6">
            <Button
            borderRadius="2rem"
            className=" dark:bg-slate-900 text-slate-200 dark:text-white border-neutral-200 dark:border-slate-800"
            >
            Sign Up
            </Button>
            <Button
            borderRadius="2rem"
            className=" dark:bg-slate-900 text-slate-200 dark:text-white border-neutral-200 dark:border-slate-800"
            >
            Community
            </Button>
      </div>
      </div>
    </div>
  </div>
</div>
                                    
    </main>
  )
}

export default CreateAccount
