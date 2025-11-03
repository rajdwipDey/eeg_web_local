"use client";

export default function ContactSection() {
  return (
    <section
      className="py-[100px] relative overflow-hidden"
      style={{
        backgroundImage: "url('/img/bg-workers1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact info */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Get In <span className="text-[#6fb43f]">Touch</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Get in touch with our experts to learn how we can enhance your MRI safety solutions.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4 contact-info-item">
                <div className="w-12 h-12 bg-[#6fb43f] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1007 13.359L16.5562 12.9062C17.1858 12.2801 18.1672 12.1515 18.9728 12.5894L20.8833 13.628C22.1102 14.2949 22.3806 15.9295 21.4217 16.883L20.0011 18.2954C19.6399 18.6546 19.1917 18.9171 18.6763 18.9651M4.00289 5.74561C3.96765 5.12559 4.25823 4.56668 4.69185 4.13552L6.26145 2.57483C7.13596 1.70529 8.61028 1.83992 9.37326 2.85908L10.6342 4.54348C11.2507 5.36691 11.1841 6.49484 10.4775 7.19738L10.1907 7.48257"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      opacity="0.5"
                      d="M18.6763 18.9656C17.0469 19.1175 13.0622 18.9497 8.8154 14.727C4.81076 10.7451 4.09308 7.33231 4.00293 5.74609"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-300">1-(844)-423-4976</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 contact-info-item">
                <div className="w-12 h-12 bg-[#6fb43f] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-300">info@aegysgroup.com</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-4 contact-info-item">
                <div className="w-12 h-12 bg-[#6fb43f] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Response Time</h3>
                  <p className="text-gray-300">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="mb-8">
              <span className="text-[#102030] text-sm font-medium uppercase block mb-2">
                Contact Form
              </span>
              <h2 className="text-3xl font-bold text-[#005d90] mb-3">Send Us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6" id="contactForm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Service Interest</label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="mri-safety">MRI Safety Solutions</option>
                    <option value="medical-equipment">Medical Equipment Services</option>
                    <option value="healthcare-consulting">Healthcare Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-300 placeholder-gray-400 resize-none"
                  placeholder="Tell us about your security needs..."
                  required
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className="w-4 h-4 text-[#42b3e5] bg-gray-100 border-gray-300 rounded focus:ring-[#42b3e5] focus:ring-2"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-[#6fb43f] font-bold hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#6fb43f] font-bold hover:underline">
                    Terms of Service
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6fb43f] to-[#6fb43f] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Send Message
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>

              <p className="text-center text-sm text-gray-500">
                We'll respond within 24 hours. For urgent matters, please call us directly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
