import { db } from "@/database/db"
import { contactus } from "@/Model/ContactUs"
import {  contactUsSchemaValidation } from "@/Schema/ConotactUSValidationSchema"


export async function POST(request:Request) {

    const body = await request.json()
    const result = contactUsSchemaValidation.safeParse(body)

    if(!result.success){
        return Response.json({
            success:false,
            message:"No data received"
        },
        {status:401}
    )
    }

    


    const {email, message } = result.data

    const contactMessage = await db.insert(contactus).values({
        email:email,
        message:message
    })

    if(!contactMessage){
        return Response.json({
            success:false,
            message:"Failed to sent Message"
        },
        {status:401}
    )
    }

    return Response.json({
        success:true,
        message:"Message sent Succesfully"
    },
    {status:201}
)
    
}