"use client";
import React, { useState, useRef } from "react";
import BottomNav from "@/components/BottomNav";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const form = useRef();
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
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
        )
        .then(() => {
          setConfirmMsg(true);
          form.current.children[0].value = "";
          form.current.children[1].value = "";
          form.current.children[2].value = "";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className='relative'>
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
            name='username'
          />
          {errors.username && (
            <span className='-mt-8 text-red-600 text-sm'>
              {errors.username}
            </span>
          )}

          <input
            className='bg-transparent focus:bg-white border focus:outline-none rounded-md px-4 h-12'
            type='email'
            placeholder='Email'
            onChange={handleChange}
            name='email'
          />
          {errors.email && (
            <span className='-mt-8 text-red-600 text-sm'>{errors.email}</span>
          )}

          <textarea
            className='bg-transparent focus:bg-white border focus:outline-none rounded-md p-4  h-48'
            type='text'
            placeholder='Message'
            autoComplete='off'
            name='message'
            onChange={handleChange}
          />
          {errors.message && (
            <span className='-mt-8 text-red-600 text-sm'>{errors.message}</span>
          )}

          <button
            type='submit'
            className='bg-main text-white w-48 h-14 rounded-lg font-semibold'>
            Send Message
          </button>
        </form>
        <AnimatePresence>
          {confirmMsg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.5 }}
              className='w-full h-screen bg-white/10 fixed top-0 right-0 flex-center'>
              <motion.div className='mx-4 bg-white w-full max-w-sm h-fit rounded-xl flex-center flex-col'>
                <Image
                  width={150}
                  height={151}
                  src={"/thank-you.png"}
                  alt='thank you'
                />
                <h1 className='font-bold text-xl'>
                  Thank you for reaching out!
                </h1>

                <button
                  onClick={() => setConfirmMsg(false)}
                  className=' bg-secondary/20 px-8 py-2 rounded-xl font-bold mt-6 mb-8 '>
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <BottomNav path={"/"} text={"Go Back Home."} />
    </div>
  );
};

export default Page;
