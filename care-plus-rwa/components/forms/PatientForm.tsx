"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomFormField from "../CustomFormField"
import SubmitButtom from "../SubmitButtom"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATEPICKER = 'datepicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}
 
const PatientForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })
 
  async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);

    try {
        // const userData = {name, email, phone};

        // const user = await createUser(userData);

        // if(user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
       console.log(error); 
    }

  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="header">Hi There 👋</h1>
            <p className="text-dark-700">Book your first appointment</p>
        </section>

        <CustomFormField
            fieldType={FormFieldType.INPUT} 
            control={form.control}
            name='name'
            label="Fullname"
            placeholder="Mark G"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
        />

        <CustomFormField
            fieldType={FormFieldType.INPUT} 
            control={form.control}
            name='email'
            label="Email"
            placeholder="example@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
        />

        <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT} 
            control={form.control}
            name='phone'
            label="Phone number"
            placeholder="078xxxxxxxx"
        />
      
      <SubmitButtom isLoading={isLoading}>Get Started</SubmitButtom>
    </form>
  </Form>
  )
}

export default PatientForm

