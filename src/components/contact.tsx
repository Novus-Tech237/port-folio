"use client"
import { Github, Phone, Mail, Link as LinkIcon } from "lucide-react"
import ContactForm from "./contact-form"
import { motion } from "framer-motion"

interface ContactProps {
  phone: string | null;
  email: string;
  description_contact: string | null;
  links: string[]
}

export default function Contact({ phone, email, description_contact, links = [] }: ContactProps) {
  const links_list = Array.isArray(links) ? [...links] : []
  return (
    <section id="contact" className="py-20 flex flex-col items-center justify-center md:px-20 px-5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg px-3 py-1 text-sm text-red-700">
              Contact Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-500">Get in Touch</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description_contact || "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible 👨‍💻."}
            </p>
            <div className="space-y-4">
              {links_list && links_list.length > 0 && links_list.map((link, index) => (
                <div key={index} className="flex items-center gap-3">
                  <LinkIcon className="h-5 w-5 text-red-600" />
                  <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:underline">
                    {link}
                  </a>
                </div>
              ))}
              {phone && (
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <p>{phone}</p>
                </div>
              )}
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600" />
                <p>{email}</p>
              </div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-4 mx-auto">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

