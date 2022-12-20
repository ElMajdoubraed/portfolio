import React from 'react'
import { PhoneIcon, MapIcon, MailIcon } from '@heroicons/react/solid'
import { useForm } from "react-hook-form";

type Props = {}


type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactMe({}: Props) {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => {
        window.location.href = `mailto:raed.elmajdoub@gmail.com?subject=${data.subject}&
        body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
    });
    // firstName and lastName will have correct type
  return (
    <div className='h-screen flex relative text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            ContactMe
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need. {" "}
                <span className='decoration-[#F7AB0A]/50 underline'>
                    Lets Talk.
                </span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className='text-2xl'>+216 29 497 446</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className='text-2xl'>+216 29 497 446</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MailIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className='text-2xl'>+216 29 497 446</p>
                </div>
            </div>
            <form onSubmit={onSubmit} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register("name")} className='cntactInput' placeholder='Name' required type="text" />
                    <input {...register("email")} className='cntactInput' placeholder='Email' required type="email" />
                </div>
                <input {...register("subject")} placeholder='Subject' className='cntactInput' required type="text" />

                <textarea {...register("message")} placeholder='Message' className='cntactInput' required />
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}