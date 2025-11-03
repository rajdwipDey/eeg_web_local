'use client'

export default function PrivacyPolicy() {
  return (
    <>      
      {/* Hero Section */}
      <section className="bg-[#005d90] text-white py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  <strong>Last updated:</strong> January 15, 2025
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us for support. This may include:
                </p>
                <ul>
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Account credentials (username and password)</li>
                  <li>Payment information (credit card details, billing address)</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                </ul>

                <h2>3. Information Sharing and Disclosure</h2>
                <p>We may share your information in the following circumstances:</p>
                <ul>
                  <li><strong>With your consent:</strong> We may share your information when you give us permission</li>
                  <li><strong>Service providers:</strong> We may share information with third-party vendors who perform services on our behalf</li>
                  <li><strong>Legal requirements:</strong> We may disclose information if required by law or to protect our rights</li>
                  <li><strong>Business transfers:</strong> We may share information in connection with a merger, acquisition, or sale of assets</li>
                </ul>

                <h2>4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet or electronic storage is 100% secure.
                </p>

                <h2>5. Your Rights and Choices</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access and update your personal information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Object to certain processing of your information</li>
                </ul>

                <h2>6. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to collect and use personal information about you. 
                  You can control cookies through your browser settings, but disabling cookies may affect the functionality 
                  of our services.
                </p>

                <h2>7. Third-Party Services</h2>
                <p>
                  Our services may contain links to third-party websites or services. We are not responsible for 
                  the privacy practices of these third parties. We encourage you to read their privacy policies.
                </p>

                <h2>8. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13. If we become aware that we have collected personal 
                  information from a child under 13, we will take steps to delete such information.
                </p>

                <h2>9. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your information in accordance with 
                  this privacy policy.
                </p>

                <h2>10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by 
                  posting the new privacy policy on this page and updating the "Last updated" date.
                </p>

                <h2>11. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mt-4">
                  <p><strong>Email:</strong> privacy@aegysgroup.com</p>
                  <p><strong>Phone:</strong> 1-(844)-423-4976</p>
                  <p><strong>Address:</strong> 123 Safety Drive, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

