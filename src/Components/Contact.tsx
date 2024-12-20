/* eslint-disable */
// @ts-nocheck
'use client'

import React, { useState } from 'react'
import { Input } from './ui/input'
import { CustomSelect} from './ui/dropdown'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/Components/ui/form'
import { ContactFormSchema } from '@/Schema/ContactFormSchema'
import { Button } from './ui/button'
import Quote from './Icons/Quote'
import AvatarIcon from './Icons/AvatarIcon'
import MailIcon from './Icons/MailIcon'
import CompanyIcon from './Icons/CompanyIcon'
import PhoneWhite from './Icons/PhoneWhite'
import MessageIcon from './Icons/MessageIcon'
import { Toaster } from "@/Components/ui/toaster"
import { ClipLoader } from "react-spinners"
import { useToast } from '@/hooks/use-toast'
import { countryOptions } from './Countries'


const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()
    const ContactForm = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: '',
            company: '',
            email: '',
            phone: '',
            country: '',
            message: '',
        },
    })

    const { formState: { errors } } = ContactForm

    const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
        setIsSubmitting(true)
        try {
            const response = await fetch('https://formspree.io/f/xldepvyv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                toast({
                    title: "Success",
                    description: "Ihre Nachricht wurde erfolgreich gesendet!",
                })
                ContactForm.reset()
            } else {
                throw new Error('Form submission failed')
            }
        } catch (error) {
            console.log(error)
            toast({
                title: "Error",
                description: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <div className='w-full bg-datkGrey flex flex-col items-center lg:flex-row lg:items-start max-md:space-y-5 md:space-y-10 lg:space-y-0 lg:space-x-5 justify-center py-10 md:py-16 lg:py-20'>
                <div className='w-[90%] md:w-[90%] lg:w-[801px] flex flex-col justify-evenly'>
                    <div className='w-full flex flex-col justify-between md:space-y-6 lg:space-y-8 mb-10'>
                        <p className='text-white text-[56px] max-md:text-2xl lg:h-[100px] lg:hidden lg:w-full md:text-4xl lg:text-[56px] font-semiboldtext-left'>Lassen Sie uns gemeinsam etwas Großartiges bauen</p>
                        <p className='text-white text-[56px] font-semibold leading-tight max-lg:hidden'>Lassen Sie uns gemeinsam etwas Großartiges bauen</p>
                        <p className='text-white w-full lg:w-[510px] text-base font-normal  text-left'>Haben Sie eine Frage oder möchten Sie Ihr Projekt besprechen? Wir sind hier, um zu helfen. Kontaktieren Sie uns noch heute!</p>
                    </div>

                    <div className='w-full'>
                        <Form {...ContactForm}>
                            <form onSubmit={ContactForm.handleSubmit(onSubmit)} className='w-full flex flex-col justify-between'>
                                <div className='flex flex-col w-full space-y-5'>
                                    <FormField
                                        control={ContactForm.control}
                                        name='name'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        icon={AvatarIcon}
                                                        type='text'
                                                        isError={!!errors.name}
                                                        className='w-full'
                                                        placeholder='Name'
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={ContactForm.control}
                                        name='email'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        icon={MailIcon}
                                                        type='text'
                                                        isError={!!errors.email}
                                                        className='w-full'
                                                        placeholder='E-Mail'
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={ContactForm.control}
                                        name='company'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        icon={CompanyIcon}
                                                        type='text'
                                                        isError={!!errors.company}
                                                        className='w-full'
                                                        placeholder='Firma'
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />

                                    <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5'>
                                        <FormField
                                            control={ContactForm.control}
                                            name="country"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <CustomSelect
                                                            options= {countryOptions}
                                                            placeholder='Land'
                                                            name="country"
                                                            control={ContactForm.control}
                                                            style="w-[395.5px]"
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />


                                        <FormField
                                            control={ContactForm.control}
                                            name='phone'
                                            render={({ field }) => (
                                                <FormItem className='flex-1'>
                                                    <FormControl>
                                                        <Input
                                                            icon={PhoneWhite}
                                                            type='text'
                                                            isError={!!errors.phone}
                                                            className='w-full'
                                                            placeholder='Telefonnummer'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={ContactForm.control}
                                        name='message'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        icon={MessageIcon}
                                                        type='text'
                                                        isError={!!errors.message}
                                                        className='w-full'
                                                        placeholder='Nachricht/Projekt Details'
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button
                                    type='submit'
                                    className='w-[187px] mt-8 h-[48px] text-white text-opacity-50 hover:text-opacity-100 transition ease-in-out font-bold text-base rounded-none bg-[#181818] flex items-center justify-center mx-auto md:mx-0'
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <ClipLoader color="#ffffff" size={20} />
                                    ) : (
                                        'Nachricht senden'
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>

                <div className='w-[90%] md:w-[90%] lg:w-[449px] rounded-[24px] bg-[#111111] flex flex-col justify-evenly px-10 py-12 mt-10 lg:mt-0'>
                    <Quote />
                    <p className='text-white text-base opacity-70 mt-8'>REFERENZ</p>
                    <p className='text-[#EDEDEDB2] text-[15.77px] md:text-base lg:text-xl font-light mt-4'>Die Zusammenarbeit mit Webmacht war eine außergewöhnliche Erfahrung. Sie haben unsere Websites und Anwendungen mit Präzision entwickelt und unsere Erwartungen übertroffen. Das technische Fachwissen ihres Teams und die Liebe zum Detail sind beeindruckend, wodurch alles optimal funktioniert. Dank Webmacht ist unsere Online-Präsenz stärker als je zuvor. Ich kann sie für jedes Webentwicklungsprojekt nur wärmstens empfehlen.</p>
                    <div className='flex flex-row space-x-5 items-center border-t-[1px] border-white border-opacity-30 mt-8 pt-8'>
                        <div className='flex flex-col justify-between'>
                            <p className='text-white font-bold text-xl'>Ufuk Asikoglu</p>
                            <p className='text-white text-base opacity-70'>CEO, Nefesol Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    )
}

export default Contact

