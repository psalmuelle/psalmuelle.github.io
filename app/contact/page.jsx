"use client";
import React, { useState, useRef } from "react";
import BottomNav from "@/components/BottomNav";
import emailjs from '@emailjs/browser';

const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const form = useRef()
  const [errors, setErrors] = useState({});
  const [confirmMsg, setConfirmMsg] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "Name is required!";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required!";
    } else if (
      !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(formData.email)
    ) {
      validationErrors.email = "Invalid Email!";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message cannot be empty!";
    }

    setErrors(validationErrors);
    
  
    if (Object.keys(validationErrors).length === 0) {
      
      emailjs.sendForm('service_ucyuin8','template_recchh7',form.current, 'vf_hPfCcRr4cRaUVy').then((res)=>{
        console.log(res)
        setConfirmMsg(true);
      }).catch((err)=>{
        console.log(err)
      })
    }
  };

  return (
    <div>
      <h1 className='title'>Contact.</h1>
      <div className='max-w-xl mb-12'>
        <p className='mb-10 mt-6'>
          Feel free to reach out or send me an email directly at{" "}
          <span className='font-bold'>psalmuelle1@gmail.com</span>
        </p>
        <form
          ref={form}
          className='flex flex-col  gap-8'
          onSubmit={handleSubmit}>
            <input
              className='bg-transparent focus:bg-white border focus:outline-none rounded-md px-4 h-12'
              type='text'
              placeholder='Name'
              onChange={handleChange}
              name="username"
              />
              {errors.username && <span className="-mt-8 text-red-600 text-sm">{errors.username}</span>}
          
            <input
              className='bg-transparent focus:bg-white border focus:outline-none rounded-md px-4 h-12'
              type='email'
              placeholder='Email'
              onChange={handleChange}
              name="email"
            />
            {errors.email && <span className="-mt-8 text-red-600 text-sm">{errors.email}</span>}
        
          
            <textarea
              className='bg-transparent focus:bg-white border focus:outline-none rounded-md p-4  h-48'
              type='text'
              placeholder='Message'
              autoComplete='off'
              name="message"
              onChange={handleChange}
            />
            {errors.message && <span className="-mt-8 text-red-600 text-sm">{errors.message}</span>}
         

          <button
            type='submit'
            className='bg-[#0b0c15] text-white w-48 h-14 rounded-lg font-semibold'>
            Send Message
          </button>
        </form>
        {
          !confirmMsg &&(
            <div>

            </div>
          )
        }
      </div>
      <BottomNav path={"/"} text={"Go Back Home"} />
    </div>
  );
};

export default Page;
