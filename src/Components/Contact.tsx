'use client'

import React from 'react'
import { Input } from './ui/input'
import { useForm, FieldValues } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/Components/ui/form'
import { ContactFormSchema } from '@/Schema/ContactFormSchema'
import { Button } from './ui/button'
import Quote from './Icons/Quote'
import { Avatar, AvatarImage } from './ui/avatar'
import AvatarIcon from './Icons/AvatarIcon'
import MailIcon from './Icons/MailIcon'
import CompanyIcon from './Icons/CompanyIcon'
import CountryIcon from './Icons/CountryIcon'
import PhoneWhite from './Icons/PhoneWhite'
import MessageIcon from './Icons/MessageIcon'

const Contact = () => {
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

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <div className='w-full bg-datkGrey flex flex-col md:items-center lg:flex-row lg:items-start max-md:space-y-5 md:space-y-10 lg:space-y-0 lg:space-x-5 justify-center py-10 md:py-16 lg:py-20'>
            <div className='md:w-[90%] lg:w-[801px] max-md:w-[90%] flex flex-col justify-evenly'>
                <div className='w-full flex flex-col justify-between md:space-y-6 lg:space-y-8 mb-10'>
                    <p className='text-white text-[56px] max-md:text-2xl lg:h-[100px] lg:hidden lg:w-full md:text-4xl lg:text-[56px] font-semibold '>Lassen Sie uns gemeinsam etwas Großartiges bauen</p>
                    <p className='text-white text-[56px] font-semibold leading-tight max-lg:hidden '>Lassen Sie uns gemeinsam etwas Großartiges bauen</p>
                    <p className='text-white w-full lg:w-[510px] text-base font-normal'>Haben Sie eine Frage oder möchten Sie Ihr Projekt besprechen? Wir sind hier, um zu helfen. Kontaktieren Sie uns noch heute!</p>
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
                                        name='country'
                                        render={({ field }) => (
                                            <FormItem className='flex-1'>
                                                <FormControl>
                                                    <Input
                                                        icon={CountryIcon}
                                                        type='text'
                                                        isError={!!errors.country}
                                                        className='w-full'
                                                        placeholder='Land'
                                                        {...field}
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
                                className='w-[187px] mt-8 h-[48px] text-white text-opacity-50 hover:text-opacity-100 transition ease-in-out font-bold text-base rounded-none bg-[#181818]'
                            >
                                Nachricht senden
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
                    <Avatar className='w-[80px] h-[80px]'>
                        <AvatarImage
                            src='https://res.cloudinary.com/debiu7z1b/image/upload/v1730836488/image_904_kgolpl.webp'
                            className='w-[80px] h-[80px]'
                        />
                    </Avatar>
                    <div className='flex flex-col justify-between'>
                        <p className='text-white font-bold text-xl'>Ufuk Asikoglu</p>
                        <p className='text-white text-base opacity-70'>CEO, Nefesol Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

