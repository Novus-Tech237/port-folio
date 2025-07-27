"use client"
import { Github, Phone, Mail } from "lucide-react"
import ContactForm from "./contact-section"
import { motion } from "framer-motion"
export default function Contact() {
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
              I&apos;m currently open to freelance opportunities and interesting projects. Feel free to reach out if you have any questions or just want to say hi
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-red-600" />
                <a href="https://github.com/Novus-Tech237" className="hover:text-red-500 hover:underline">github.com/Novus-Tech237</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600" />
                <p>(+237) 6 71 40 03 46</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600" />
                <p>malikachidi1@gmail.com</p>
              </div>
              
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

