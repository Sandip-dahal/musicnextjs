"use client"
import React, {FormEvent, useState} from "react"
import { Meteors } from "@/components/ui/meteors"
import { Button } from "@/components/ui/moving-border"
import { useForm} from "react-hook-form"
import  axios, { AxiosError }  from "axios"
import { toast } from "@/components/ui/toast"
import { Loader2 } from "lucide-react"




function page() {

    const [email,setEmail] = useState("")
    const [ message,setMessage] = useState("")
    const [isError, setIsError] = useState<string>("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        

        try {
            setIsLoading(true)
            setIsError("")
            const response = await axios.post("/api/ContactUs",{
                email,
                message
            })
    
            if(!response || !response.data){
                setIsError(response.data.message)
                
            }
            console.log("RESPONSE :", response.data.message)
            toast.add({
                title : "Succesfully",
                description : response.data.message,
                
            })
             
        } catch (error) {
            console.error("Internal server error while sending data :",error)
            const errorMessage = axios.isAxiosError(error) ? error.response?.data?.message || "Something went wrong. Please try again." :"Something went wrong. Please try again."

            setIsError(errorMessage)
            

            toast.add({
                title:"Error",
                description : errorMessage
            })
            
        } finally{
            setIsLoading(false)

        }
        
    }
  return (
    
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative overflow-hidden">
        {"  "}
        <Meteors number={40}/>
        
        {/* Content with higher z-index */}
        <div className="max-w-2xl mx-auto p-4 relative z-10">
            {"  "}
            {/* Add relative and z-10 to bring content to the front */}
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                Contact Us
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                We&apos;re here to help with any questions about our courses,
                programs, or events. Reach out and let us know how we can assist you
                in your musical journey.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
                />
                <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
                    rows={5}
                    required
                >

                </textarea>
                <Button borderRadius="1.75rem"
                type="submit"
                disabled = {isLoading}
                
                className="bg-white dark:bg-slate-900 text-black dark:text-white  dark:border-slate-800"
                >
                    {isLoading  ? (
                    <Loader2 className="animate-spin"/>

                    ):("Send")}
                </Button>
                { isError && (
                    <p className="text-red-900 text-sm">{isError}</p>
                )}
                
            </form>

            

        </div>

    </div>
  )
}

export default page