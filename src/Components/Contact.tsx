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
        <div className='h-[1142px] w-full bg-datkGrey flex flex-row items-center space-x-5 justify-center'>
            <div className='h-[750px] w-[801px] flex flex-col justify-evenly'>
                <div className='w-full h-[202px] flex flex-col justify-between '>
                    <p className='text-white text-[56px] font-semibold w-[634px] leading-[4rem]'>Let&apos;s Build Something Great Together</p>
                    <p className='text-white w-[510px] text-base font-normal'>Have a question or want to discuss your project, we&apos;re here to help. Get in touch with us today!</p>
                </div>

                <div className='h-[452px] w-full'>
                    <Form {...ContactForm}>
                        <form onSubmit={ContactForm.handleSubmit(onSubmit)} className='w-full h-full flex flex-col justify-between'>
                            <div className='flex flex-col w-full h-[360px] justify-between'>
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
                                                    placeholder='Email'
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
                                                    placeholder='Company'
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <div className='w-full flex flex-row items-center justify-between'>
                                    <FormField
                                        control={ContactForm.control}
                                        name='country'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        icon={CountryIcon}
                                                        type='text'
                                                        isError={!!errors.country}
                                                        className='w-[395.5px]'
                                                        placeholder='Country'
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
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        icon={PhoneWhite}
                                                        type='text'
                                                        isError={!!errors.phone}
                                                        className='w-[395.5px]'
                                                        placeholder='Phone Number'
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
                                                    placeholder='Message/Project Details'
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button
                                type='submit'
                                className='w-[187px] h-[48px] text-white text-opacity-50 hover:text-opacity-100 transition ease-in-out font-bold text-base rounded-none bg-[#181818]'
                            >
                                Send Message
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>

            <div className='w-[449px] h-[712px] rounded-[24px] bg-[#111111] flex flex-col justify-evenly px-10'>
                <Quote />
                <p className='text-white text-base opacity-70'>TESTIMONIAL</p>
                <p className='text-[#EDEDEDB2] text-xl font-light w-[385px]'>Working with Webmacht has been an exceptional experience. They built our websites and applications with precision and delivered beyond our expectations. Their team's technical expertise and attention to detail are impressive, ensuring that everything performs at an optimal level. Thanks to Webmacht, our online presence is stronger than ever. I highly recommend them for any web development project.</p>
                <div className='h-[152px] flex flex-row space-x-5 items-center border-t-[1px] border-white border-opacity-30'>
                    <Avatar className='w-[80px] h-[80px]'>
                        <AvatarImage
                            src='https://res.cloudinary.com/debiu7z1b/image/upload/v1730836488/image_904_kgolpl.webp'
                            className='w-[80px] h-[80px]'
                        />
                    </Avatar>
                    <div className='flex flex-col h-[56px] justify-between'>
                        <p className='text-white font-bold text-xl'>Ufuk Asikoglu</p>
                        <p className='text-white text-base opacity-70'>CEO, Nefesol Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact