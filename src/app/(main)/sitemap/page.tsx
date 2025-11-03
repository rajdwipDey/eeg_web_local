'use client'

import Link from 'next/link'

export default function Sitemap() {
  const pages = [
    {
      category: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Products', url: '/services' },
        { name: 'Gallery', url: '/our-work' },
        { name: 'Blogs', url: '/blogs' },
        { name: 'Contact Us', url: '/contact' }
      ]
    },
    {
      category: 'Account',
      links: [
        { name: 'Dashboard', url: '/dashboard' },
        { name: 'Profile Settings', url: '/profile-settings' },
        { name: 'Security', url: '/security' },
        { name: 'Addresses', url: '/addresses' },
        { name: 'Order History', url: '/order-history' }
      ]
    },
    {
      category: 'Shopping',
      links: [
        { name: 'All Products', url: '/services' },
        { name: 'Product Details', url: '/services-detail' },
        { name: 'Shopping Cart', url: '/cart' }
      ]
    },
    {
      category: 'Content',
      links: [
        { name: 'Blog Articles', url: '/blogs' },
        { name: 'Blog Detail', url: '/blog-detail' }
      ]
    },
    {
      category: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy-policy' },
        { name: 'Terms of Service', url: '/terms-service' }
      ]
    }
  ]

  return (
    <>      
      {/* Hero Section */}
      <section className="bg-[#005d90] text-white py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Sitemap</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find all pages and sections of our website
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pages.map((section, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                    {section.category}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.url}
                          className="text-gray-600 dark:text-gray-400 hover:text-[#42b3e5] dark:hover:text-[#42b3e5] transition-colors duration-300 flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Website Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link href="/services" className="block text-[#42b3e5] hover:text-[#005d90] transition-colors">
                      Browse All Products →
                    </Link>
                    <Link href="/contact" className="block text-[#42b3e5] hover:text-[#005d90] transition-colors">
                      Get Support →
                    </Link>
                    <Link href="/blogs" className="block text-[#42b3e5] hover:text-[#005d90] transition-colors">
                      Read Latest Articles →
                    </Link>
                    <Link href="/dashboard" className="block text-[#42b3e5] hover:text-[#005d90] transition-colors">
                      Access Your Account →
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p><strong>Phone:</strong> 1-(844)-423-4976</p>
                    <p><strong>Email:</strong> info@aegysgroup.com</p>
                    <p><strong>Address:</strong> 123 Safety Drive, New York, NY 10001</p>
                    <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Functionality */}
            <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Can't find what you're looking for?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Use our search functionality to find specific content or contact us for assistance.
              </p>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
                <button className="px-6 py-3 bg-[#42b3e5] text-white rounded-lg hover:bg-[#005d90] transition-colors font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

