"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import React from "react";

type ContactFormData = {
  name: string;
  phoneNumber: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phoneNumber: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormsEndpoint =
      "https://docs.google.com/forms/d/e/1FAIpQLSf7s6W-XvnfaPEBvtxGzkQ2DrwzqsR8ndOJMnhqVokkusD-2Q/formResponse"; // Replace with your Google Forms endpoint

    try {
      const formDataEncoded = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        const entryKey = `entry.${getEntryKey(key)}`;
        formDataEncoded.append(entryKey, value);
      });

      await fetch(googleFormsEndpoint, {
        method: "POST",
        body: formDataEncoded,
      });

      // Handle success
      router.push("/rsvp/success");
      setShowPopup(true); // Show the pop-up
      // Wait for 3 seconds before redirecting to the homepage
      setTimeout(() => {
        router.push("/");
      }, 6000);
    } catch (error) {
      // Handle submission error
      setShowPopup(true); // Show the pop-up
      // Wait for 3 seconds before redirecting to the homepage
      setTimeout(() => {
        router.push("/");
      }, 6000);
    }
  };

  const getEntryKey = (key: string) => {
    const entryKeys: Record<string, string> = {
      name: "208428600",
      phoneNumber: "1336455680",
      message: "265028106",
    };

    return entryKeys[key];
  };

  return (
    <div>
      <div>
        {/* Pop-up */}

        {showPopup && (
          <div className="p-5 rounded-xl bg-[#529864] text-white mx-auto my-8 z-50 shadow-md top-2/4 w-1/2 text-center font-sans">
            <h1 className="text-lg font-bold ">Thank You For Your Message</h1>
            <p>We Will Get Back To You Shortly</p>
          </div>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-col space-y-8">
        <label className=" flex text-lg space-x-10">
          <h2 className="">Name: </h2>
          <input
            placeholder="John Doe"
            className=" font-normal pl-2 rounded-lg text-black w-48"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className=" flex text-lg space-x-8">
          <h2 className="">Phone: </h2>
          <input
            placeholder="+260 97 5818744"
            className=" font-normal pl-2 rounded-lg text-black w-48"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className=" flex text-lg space-x-4">
          <h2 className="">Message: </h2>

          <input
            placeholder="Type your message"
            className=" font-normal pl-2 rounded-lg text-black pb-24 w-48"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </label>

        <div className="flex  justify-center">
          <button
            className="px-10 py-1 bg-[#dc0d0d] bg-opacity-70 text-sm font-bold mb-3 text-white rounded-3xl font-sans shadow-xl"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
