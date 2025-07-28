"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState, FormEvent, useEffect } from "react"
import { useUser } from "@clerk/nextjs"

export default function ContactForm() {
  const { user } = useUser()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [whatsappNumber, setWhatsappNumber] = useState("")

  useEffect(() => {
    const fetchPhoneNumber = async () => {
      try {
        const response = await fetch('/api/portfolio/phone')
        const data = await response.json()
        if (data.phone) {
          const cleanNumber = data.phone.replace(/\D/g, '')
          setWhatsappNumber(cleanNumber)
        }
      } catch (error) {
        console.error('Error fetching phone number:', error)
      }
    }

    fetchPhoneNumber()
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const message = `Hello, ${user?.firstName}. I am interested and would like to book an appointment. Here is my necessary information:\n
    🙋‍♂️ Name: ${formData.firstName} ${formData.lastName}
    📧 Email: ${formData.email}
    📱 Phone: ${formData.phone}
    🏥 Service: ${formData.message};`

    if (!whatsappNumber) {
      alert('Phone number not available. Please try again later.')
      return
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
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
      <h3 className="text-xl font-bold dark:text-black">Send Inquiry</h3>
      <p className="text-sm text-gray-500 mb-4">
        Fill out the form below and we will contact you to confirm your inquiry.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="dark:text-black">
              First Name
            </Label>
            <Input
              id="firstName"
              onChange={handleChange}
              value={formData.firstName}
              className="border-red-500 !bg-white !text-black"
              placeholder="Malik"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="dark:text-black">
              Last Name
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border-red-500 !bg-white !text-black"
              placeholder="ACHIDI"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="dark:text-black">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            className="border-red-500 !bg-white !text-black"
            placeholder="malikachidi@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="dark:text-black">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            onChange={handleChange}
            value={formData.phone}
            className="border-red-500 !bg-white !text-black"
            placeholder="+237 6 456 7890"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="dark:text-black">
            Message
          </Label>
          <Textarea
            id="message"
            onChange={handleChange}
            value={formData.message}
            className="border-red-500 !bg-white !text-black resize-none h-32"
            placeholder="Write your message here..."
          />
        </div>
        <Button className="w-full bg-red-600 hover:bg-red-700 dark:text-white" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  )
}
