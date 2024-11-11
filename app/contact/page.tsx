"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./contactUs.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4wq5dd9",
        "template_phkt3a7",
        formData,
        "FR94OPLJhovvnz1DX"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.status, result.text);
          setIsSent(true);
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <div
      className={`${styles.contactUsContainer} lg:flex text-white container mx-auto py-8 px-5`}
    >
      <div className="w-full lg:w-6/12 md:pr-10">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Make a Real Change?
        </h2>
        <p className="mb-6">
          If you're tired of cookie-cutter AI solutions and consultants who
          speak in jargon, let's talk. We promise a refreshing experience—puns
          included.
        </p>
      </div>
      {!isSent && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full lg:w-6/12 text-black"
        >
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border py-4 px-2 rounded text-gray-700 outline-none w-full"
            />
          </div>
          <div className="flex lg:flex-row flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border py-4 px-2 rounded text-gray-700 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border py-4 px-2 rounded text-gray-700  outline-none"
            />
          </div>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="border py-4 px-2 rounded bg-white outline:none focus:outline-none"
          >
            <option className="" value="" disabled>
              What is your budget for this project?
            </option>
            <option value="Less than $5000">Less than $5000</option>
            <option value="$5000-$10000">$5000-$10000</option>
            <option value="$10000-$20000">$10000-$20000</option>
            <option value="$20000-$40000">$20000-$40000</option>
            <option value="$40000+">$40000+</option>
          </select>
          <textarea
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            required
            className="border py-4 px-2 rounded md:col-span-2 text-gray-700 outline-none"
          />
          <button
            type="submit"
            className="bg-primary hver:bg-secondary text-white py-4 rounded md:col-span-2"
          >
            Get in Touch
          </button>
        </form>
      )}
      {isSent && (
        <p className="mt-4 text-primary">
          Thanks a lot reaching out! We'll get back to you shortly.
        </p>
      )}
    </div>
  );
};

export default Contact;
