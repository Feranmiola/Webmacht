'use client'
import React from 'react'
import { Input } from './ui/input'
import { useForm, FieldValues } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form';
import { ContactFormSchema } from '@/Schema/ContactFormSchema';
import { Button } from './ui/button';


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
    });

    const { formState: { errors } } = ContactForm;

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }


    return (
        <div className='h-[1142px] w-full bg-datkGrey flex flex-row items-center justify-center'>

            <div className='h-[750px] w-[801px] flex flex-col justify-evenly'>
                <div className='w-full h-[202px] flex flex-col justify-between '>
                    <p className='text-white text-[56px] font-semibold w-[634px] leading-[4rem]'>Let&apos;s Build Something Great Together</p>
                    <p className='text-white w-[510px] text-base font-normal'>Have a question or want to discuss your project, we&apos;re here to help. Get in touch with us today!</p>
                </div>

                <div className='h-[452px] w-full'>
                    <Form {...ContactForm}>
                        <form onSubmit={ContactForm.handleSubmit(onSubmit)} className=' w-full h-full flex flex-col justify-between'>
                            <FormField
                                control={ContactForm.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                icon="EnvelopeClosedIcon"
                                                type='text'
                                                className={`${errors.name ? 'shad-input-width-error-auth' : ''} w-full `}
                                                placeholder='Name' {...field} />
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
                                                icon="EnvelopeClosedIcon"
                                                type='text'
                                                className={`${errors.email ? 'shad-input-width-error-auth' : ''} w-full `}
                                                placeholder='Email' {...field} />
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
                                                icon="EnvelopeClosedIcon"
                                                type='text'
                                                className={`${errors.company ? 'shad-input-width-error-auth' : ''} w-full `}
                                                placeholder='Company' {...field} />
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
                                                    icon="EnvelopeClosedIcon"
                                                    type='text'
                                                    className={`${errors.country ? 'shad-input-width-error-auth' : ''} w-[395.5px] `}
                                                    placeholder='Country' {...field} />
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
                                                    icon="EnvelopeClosedIcon"
                                                    type='text'
                                                    className={`${errors.phone ? 'shad-input-width-error-auth' : ''} w-[395.5px] `}
                                                    placeholder='Phone Number' {...field} />
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
                                                icon="EnvelopeClosedIcon"
                                                type='text'
                                                className={`${errors.message ? 'shad-input-width-error-auth' : ''} w-full `}
                                                placeholder='Message/Project Details' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <Button
                                type='submit'
                                className='w-[187px] h-[48px] text-white text-opacity-50 hover:text-opacity-100 transition ease-in-out font-bold text-base rounded-none bg-[#181818]'>
                                Send Message
                            </Button>
                        </form>
                    </Form>
                </div>

            </div>

        </div>
    )
}

export default Contact