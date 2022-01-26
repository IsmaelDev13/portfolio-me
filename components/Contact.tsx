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
      className="relative max-w-7xl mx-auto mt-28 rounded-md shadow-lg shadow-blue-100 bg-white lg:p-20"
    >
      {/* Left Part */}
      <div className="pt-10 pl-6">
        <h1 className="font-bold stroke-4 mb-4 text-2xl  md:text-3xl uppercase leading-4 text-[#0F97B8] tracking-widest transform  relative select-none">
          Let's talk business!
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col w-full md:w-1/2 items-start space-y-3">
          <img className="object-contain p-5" src="/contact.svg" alt="" />
          <p className="tracking-wide text-lg font-sans whitespace-pre-line p-5">
            Have a startling idea, but don't know where to begin? Now is the
            time to put all those crazy ideas into action.
          </p>
          <h3 className="font-sans drop-shadow-sm text-2xl font-medium p-5">
            Let's make it work.
          </h3>
          <a href="mailto:ismaeldev13@gmail.com">
            <h2 className="text-[#0F97B8] font-sans text-3xl px-5">
              ismaeldev13@gmail.com
            </h2>
          </a>
        </div>
        {/* Right Part */}
        <div className="w-full md:w-1/2 flex flex-col pt-20 ">
          <h1 className="font-sans drop-shadow-lg text-2xl font-medium pl-5">
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
              className="flex flex-col rounded border shadow p-10 my-10 bg-[#0F97B8] text-white max-w-2xl mx-auto"
            >
              <h3 className="text-center text-2xl font-semibold font-serif">
                Thank you for submitting your comment!
              </h3>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col p-5 "
            >
              <label className="block mb-5">
                <span className="hidden md:inline text-gray-700">Name</span>
                <input
                  {...register("name", { required: true })}
                  className="shadow border border-[#0F97B8] rounded py-4 px-3 form-textarea mt-1 block w-full outline-none text-lg"
                  placeholder="Name"
                  type="text"
                />
                {errors.name && (
                  <span className="text-red-500">- Please enter your name</span>
                )}
              </label>
              <label className="block mb-5">
                <span className="hidden md:inline text-gray-700">Email</span>
                <input
                  {...register("email", { required: true })}
                  className="shadow border text-lg border-[#0F97B8] rounded py-4 px-3 form-textarea mt-1 block w-full outline-none"
                  placeholder="Email Address"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-500">
                    - Enter a valid email address
                  </span>
                )}
              </label>
              <label className="block mb-5">
                <span className="hidden md:inline text-gray-700">Message</span>
                <textarea
                  {...register("comment", { required: true })}
                  className="shadow border border-[#0F97B8] rounded text-lg py-4 px-3 form-textarea mt-1 block w-full outline-none"
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
                className="shadow bg-[#0F97B8] w-1/2 md:w-full text-lg mx-auto transition transform duration-200 ease-in-out hover:shadow-xl focus:shadow-outline focus:outline-none text-white font-semibold py-4 drop-shadow-md rounded-full uppercase cursor-pointer mb-20"
              />
            </form>
          )}
        </div>
      </div>
      <a
        href="#"
        className="absolute transition transform duration-200 ease-in-out rounded-full -bottom-6  md:-bottom-4 bg-[#eff7fa] hover:translate-y-2 right-[43%] md:right-1/2  hover:bg-blue-100  p-4"
      >
        <ArrowUpIcon />
      </a>
    </div>
  );
}

export default Contact;
