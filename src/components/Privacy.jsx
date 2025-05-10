import React from 'react';
import { FiShield, FiLock, FiMail, FiDatabase, FiUser } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-6 sm:p-8">
          <div className="flex items-center">
            <FiShield className="text-white text-3xl mr-4" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="mt-2 text-blue-100">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 prose prose-blue max-w-none">
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              This Privacy Policy describes how we collect, use, and disclose your personal information when you use our website and services.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FiUser className="mr-2" />
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li><strong>Personal Information:</strong> Name, email address, contact details when you register or contact us</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, links clicked through analytics tools</li>
              <li><strong>Cookies:</strong> Small data files stored on your device to enhance your experience</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FiDatabase className="mr-2" />
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis to improve our website</li>
              <li>To monitor usage and detect technical issues</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FiLock className="mr-2" />
              Data Protection
            </h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>SSL encryption for data transmission</li>
              <li>Regular security audits</li>
              <li>Limited access to personal data</li>
              <li>Secure storage solutions</li>
            </ul>
            <p className="text-gray-600">
              However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FiMail className="mr-2" />
              Third-Party Services
            </h2>
            <p className="text-gray-600 mb-4">
              We may employ third-party companies and individuals for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>Website analytics (e.g., Google Analytics)</li>
              <li>Payment processing</li>
              <li>Email delivery services</li>
              <li>Cloud storage providers</li>
            </ul>
            <p className="text-gray-600">
              These third parties have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for other purposes.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Cookies Policy</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>Remember your preferences</li>
              <li>Understand how you use our site</li>
              <li>Deliver personalized content</li>
              <li>Improve our services</li>
            </ul>
            <p className="text-gray-600">
              You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <FiShield className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Your Rights:</strong> You may have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-blue-600 font-medium">privacy@ydealbliss.com</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;