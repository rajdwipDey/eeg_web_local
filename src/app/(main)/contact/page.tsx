'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      subject: '',
      message: ''
    })
  }

  return (
    <main className="dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section
        className="py-20 relative after:content-[''] after:absolute after:inset-0 after:bg-[#005d90]/80"
        style={{ backgroundImage: "url('/img/ab1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto relative z-10 text-center space-y-3">
          <h1 className="text-4xl font-bold leading-tight text-white">Contact Us</h1>
          <a href="#contact-form" className="inline-block scroll-smooth">
            <svg className="size-6 mx-auto" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5.52689C11.7501 5.52689 11.5002 5.4656 11.2706 5.34302L5.36689 2.19099C3.97914 1.45006 2.49789 3.00163 3.16496 4.49746L10.5275 21.0072C10.8226 21.6691 11.4113 22 12 22"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                opacity="0.5"
                d="M12 5.52689C12.2499 5.52689 12.4998 5.4656 12.7294 5.34302L18.6331 2.19099C20.0209 1.45006 21.5021 3.00163 20.835 4.49746L13.4725 21.0072C13.1774 21.6691 12.5887 22 12 22"
                stroke="#fff"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact Details + Form Section */}
      <section id="contact-form" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Call Us',
                desc: 'Speak directly with our security experts',
                contact: '1-(844)-423-4976',
                icon: (
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                ),
              },
              {
                title: 'Email Us',
                desc: 'Send us your questions anytime',
                contact: 'info@aegysgroup.com',
                icon: (
                  <>
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </>
                ),
              },
              {
                title: 'Visit Us',
                desc: 'Our office hours',
                contact: (
                  <>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Sunday: Emergency Only</p>
                  </>
                ),
                icon: (
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group"
              >
                <div className="w-16 h-16 bg-[#6fb43f] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.desc}</p>
                {typeof item.contact === 'string' ? (
                  <a
                    href={item.title === 'Email Us' ? `mailto:${item.contact}` : `tel:${item.contact}`}
                    className="text-[#005d90] hover:text-[#6fb43f] font-semibold text-lg transition-colors duration-300"
                  >
                    {item.contact}
                  </a>
                ) : (
                  <div className="text-[#005d90] font-semibold">{item.contact}</div>
                )}
              </div>
            ))}
          </div>

          {/* Main Form + Right Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Get in touch with our experts to learn how we can enhance your MRI safety solutions.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['firstName', 'lastName'].map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={field}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {field === 'firstName' ? 'First Name *' : 'Last Name *'}
                      </label>
                      <input
                        id={field}
                        name={field}
                        type="text"
                        required
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        placeholder={field === 'firstName' ? 'John' : 'Doe'}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6fb43f] bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'john@example.com' },
                    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 123-4567' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {label}
                      </label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        value={(formData as any)[id]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6fb43f] bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6fb43f] bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                  >
                    <option value="">Select a service...</option>
                    <option value="mri-safety">MRI Safety Solutions</option>
                    <option value="medical-equipment">Medical Equipment Services</option>
                    <option value="healthcare-consulting">Healthcare Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6fb43f] bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your security needs..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6fb43f] bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6fb43f] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#5ca233] transition-all duration-300 focus:ring-2 focus:ring-[#6fb43f]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information & Additional Content */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Aegys?</h3>
                {['24/7 Monitoring', 'Expert Installation', 'Custom Solutions', 'Competitive Pricing'].map(
                  (item, i) => (
                    <div key={i} className="flex items-start gap-4 mb-4">
                      <div className="w-8 h-8 bg-[#005d90] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {i === 0
                            ? 'Round-the-clock security monitoring and emergency response'
                            : i === 1
                              ? 'Professional installation by certified security technicians'
                              : i === 2
                                ? 'Tailored security systems designed for your specific needs'
                                : 'Affordable security solutions without compromising quality'}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Quick Response */}
              <div className="bg-[#6fb43f] rounded-2xl shadow-xl p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                <p className="text-white/90 mb-6">For urgent security concerns or emergencies, call us directly</p>
                <a
                  href="tel:1-844-423-4976"
                  className="inline-block bg-white text-[#6fb43f] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Call Now: 1-(844)-423-4976
                </a>
              </div>

              {/* Service Areas */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Service Areas
                </h3>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    "Hospitals",
                    "Radiology Departments",
                    "Medical Clinics",
                    "Airport Scanning",
                  ].map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[#005d90]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Coverage Area:</strong> We provide MRI safety and diagnostic
                    imaging solutions across multiple regions. Contact us to confirm
                    availability in your facility.
                  </p>
                </div>
              </div>
            </div>



          </div>

        </div>
      </section>

      {/* Final Banner */}
      <section
        className="py-20 relative after:content-[''] after:absolute after:inset-0 after:bg-[#6fb43f]/80"
        style={{ backgroundImage: "url('/img/ab1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="mb-10">
            <span className="text-white text-sm font-medium uppercase block mb-4">It's All about safety</span>
            <span className="text-5xl inline-block font-light text-white leading-relaxed">
              <b className="font-semibold">We make protective solutions</b> <br /> for people’s safety.
            </span>
          </h1>
        </div>
      </section>
    </main>
  )
}
