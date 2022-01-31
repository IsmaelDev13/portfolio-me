/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ArrowUpIcon from "@mui/icons-material/ArrowUpward";
import { motion } from "framer-motion";
import { errorAnim } from "../util";

interface IFormInput {
  name: string;
  email: string;
  comment: string;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = ({ name, email, comment }) => {
    fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, comment }),
    })
      .then(() => {
        console.log(`${name}, your message has been sent`);
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
        }, 7500);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };
  return (
    <div
      id="contact"
      className="relative mx-auto mt-28 max-w-7xl rounded-md bg-white shadow-lg shadow-blue-100 lg:p-20"
    >
      {/* Left Part */}
      <div className="pt-10 pl-6">
        <h1 className="stroke-4 relative mb-4 transform  select-none text-2xl font-bold uppercase leading-4 tracking-widest  text-[#0F97B8] md:text-3xl">
          Let's talk business!
        </h1>
      </div>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex w-full flex-col items-start space-y-3 md:w-1/2">
          <img className="object-contain p-5" src="/contact.svg" alt="" />
          <p className="whitespace-pre-line p-5 font-sans text-lg tracking-wide">
            Have a startling idea, but don't know where to begin? Now is the
            time to put all those crazy ideas into action.
          </p>
          <h3 className="p-5 font-sans text-2xl font-medium drop-shadow-sm">
            Let's make it work.
          </h3>
          <a href="mailto:ismaeldev13@gmail.com">
            <h2 className="px-5 font-sans text-3xl text-[#0F97B8]">
              ismaeldev13@gmail.com
            </h2>
          </a>
        </div>
        {/* Right Part */}
        <div className="flex w-full flex-col pt-20 md:w-1/2 ">
          <h1 className="pl-5 font-sans text-2xl font-medium drop-shadow-lg">
            {!submitted
              ? "I'd love to hear from you"
              : "I'm glad we will work together!"}
          </h1>
          {submitted ? (
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={errorAnim}
              className="my-10 mx-auto flex max-w-2xl flex-col rounded border bg-[#0F97B8] p-10 text-white shadow"
            >
              <h3 className="text-center font-serif text-2xl font-semibold">
                Thank you for submitting your comment!
              </h3>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col p-5 "
            >
              <label className="mb-5 block">
                <span className="hidden text-gray-700 md:inline">Name</span>
                <input
                  {...register("name", { required: true })}
                  className="form-textarea mt-1 block w-full rounded border border-[#0F97B8] py-4 px-3 text-lg shadow outline-none"
                  placeholder="Name"
                  type="text"
                />
                {errors.name && (
                  <span className="text-red-500">- Please enter your name</span>
                )}
              </label>
              <label className="mb-5 block">
                <span className="hidden text-gray-700 md:inline">Email</span>
                <input
                  {...register("email", { required: true })}
                  className="form-textarea mt-1 block w-full rounded border border-[#0F97B8] py-4 px-3 text-lg shadow outline-none"
                  placeholder="Email Address"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-500">
                    - Enter a valid email address
                  </span>
                )}
              </label>
              <label className="mb-5 block">
                <span className="hidden text-gray-700 md:inline">Message</span>
                <textarea
                  {...register("comment", { required: true })}
                  className="form-textarea mt-1 block w-full rounded border border-[#0F97B8] py-4 px-3 text-lg shadow outline-none"
                  placeholder="Write your message..."
                  rows={8}
                />
                {errors.comment && (
                  <span className="text-red-500">
                    - Come on, pour your heart out...
                  </span>
                )}
              </label>

              <input
                type="submit"
                value={`${!submitted ? "Send Message" : "Message Sent"}`}
                className="focus:shadow-outline mx-auto mb-20 w-1/2 transform cursor-pointer rounded-full bg-[#0F97B8] py-4 text-lg font-semibold uppercase text-white shadow drop-shadow-md transition duration-200 ease-in-out hover:shadow-xl focus:outline-none md:w-full"
              />
            </form>
          )}
        </div>
      </div>
      <a
        href="#"
        className="absolute -bottom-6 right-[43%] transform rounded-full bg-[#eff7fa] p-4  transition duration-200 ease-in-out hover:translate-y-2 hover:bg-blue-100  md:-bottom-4  md:right-1/2"
      >
        <ArrowUpIcon />
      </a>
    </div>
  );
}

export default Contact;
