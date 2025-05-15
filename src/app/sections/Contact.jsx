'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_USER_ID'
      );

      setStatus({ submitted: true, submitting: false, info: { error: false, msg: 'Message sent successfully!' } });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } });
      }, 4000);
    } catch (error) {
      setStatus({ submitted: false, submitting: false, info: { error: true, msg: 'Something went wrong. Please try again later.' } });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-200">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-300 dark:to-dark-400 rounded-xl p-6 shadow-xl">
              <ContactInfo icon={<FiMail />} label="Email" value="abdxllah.khan17@gmail.com" link="mailto:abd248778@gmail.com" />
              <ContactInfo icon={<FiPhone />} label="Phone" value="+92 346 0219660" link="tel:+923460219660" />
              <ContactInfo icon={<FiMapPin />} label="Location" value="Lahore, Pakistan" />
              <ContactInfo icon={<FiLinkedin />} label="LinkedIn" value="linkedin.com/in/abdullah-khan-6ba998280" link="https://www.linkedin.com/in/abdullah-khan-6ba998280" />
              <ContactInfo icon={<FiGithub />} label="GitHub" value="github.com/abdullah-kz17" link="https://github.com/abdullah-kz17" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 bg-white dark:bg-dark-100 p-8 rounded-xl shadow-xl border border-gray-100 dark:border-dark-300"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="input-field" />
              <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="input-field" />
            </div>
            <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} className="input-field" />
            <textarea name="message" placeholder="Your Message" rows={5} required value={formData.message} onChange={handleChange} className="input-field"></textarea>

            <button
              type="submit"
              className="btn-primary w-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>

            {status.info.msg && (
              <p className={`text-sm ${status.info.error ? 'text-red-500' : 'text-green-500'}`}>
                {status.info.msg}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value, link }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-primary-200 dark:bg-dark-400 rounded-full text-primary-700 dark:text-primary-300 shadow-md">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{label}</h4>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 dark:text-primary-400 hover:underline break-all">
            {value}
          </a>
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-400 break-all">{value}</p>
        )}
      </div>
    </div>
  );
}
