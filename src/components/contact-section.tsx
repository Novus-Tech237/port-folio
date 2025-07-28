"use client"

import { Button } from "@/components/ui/button"
import { useState, FormEvent } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    date: "",
  })
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const message = `Hello, Achidi Malik. I am interested and would like to book an appointment. Here is my necessary information:\n
                      🙋‍♂️ Name: ${formData.firstName} ${formData.lastName}
                      📧 Email: ${formData.email}
                      📱 Phone: ${formData.phone}
                      🏥 Service: ${formData.message}
                      📅 Preferred Date: ${formData.date}`;

    // Replace this with your WhatsApp number (international format without + or spaces)
    const whatsappNumber = "237671400346"; // Example number

    // Create WhatsApp URL with encoded message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold dark:text-black">Book an Appointment</h3>
      <p className="text-sm text-gray-500 mb-4">
        Fill out the form below and we will contact you to confirm your appointment.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed dark:text-black peer-disabled:opacity-70"
            >
              First Name
            </label>
            <input
              id="firstName"
              onChange={handleChange}
              value={formData.firstName}
              className="flex h-10 w-full rounded-md border border-red-500 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:cursor-not-allowed disabled:opacity-50 !bg-white !text-black"
              placeholder="Malik"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed dark:text-black peer-disabled:opacity-70"
            >
              Last Name
            </label>
            <input
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-red-500 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:cursor-not-allowed disabled:opacity-50 !bg-white !text-black"
              placeholder="ACHIDI"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed dark:text-black peer-disabled:opacity-70"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            className="flex h-10 w-full rounded-md border border-red-500 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:cursor-not-allowed disabled:opacity-50 !bg-white !text-black"
            placeholder="malikachidi@example.com"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed dark:text-black peer-disabled:opacity-70"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            onChange={handleChange}
            value={formData.phone}
            className="flex h-10 w-full rounded-md border border-red-500 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:cursor-not-allowed disabled:opacity-50 !bg-white !text-black"
            placeholder="+237 6 456 7890"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed dark:text-black peer-disabled:opacity-70"
          >
            Message
          </label>
          <textarea
            id="message"
            onChange={handleChange}
            value={formData.message}
            className="flex w-full rounded-md border border-red-500 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:cursor-not-allowed disabled:opacity-50 resize-none h-32 !bg-white !text-black"
            placeholder="Write your message here..."
          />
        </div>
        <Button className="w-full bg-red-600 hover:bg-red-700 dark:text-white" type="submit">Request an Appointment</Button>
      </form>
    </div>
  )
}
