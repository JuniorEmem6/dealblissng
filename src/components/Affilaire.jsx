import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';

const AffiliateDisclosure = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-6 sm:p-8">
          <div className="flex items-center">
            <FiAlertTriangle className="text-white text-3xl mr-4" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Affiliate Disclosure</h1>
          </div>
          <p className="mt-2 text-blue-100">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 prose prose-blue max-w-none">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Relationship with Retailers</h2>
            <p className="text-gray-600 mb-4">
              Our website may contain links to products and services that we recommend. If you click 
              on these links and make a purchase, we may receive a commission at no additional cost to you.
            </p>
            <p className="text-gray-600">
              This affiliate advertising helps support our website and allows us to continue providing 
              free content and resources to our readers.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How Affiliate Links Work</h2>
            <p className="text-gray-600 mb-4">
              When you click on an affiliate link on our site:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>You will be directed to the retailer's website</li>
              <li>If you make a purchase, we may earn a commission</li>
              <li>The price you pay remains the same</li>
              <li>Your purchase is subject to the retailer's terms and conditions</li>
            </ul>
            <p className="text-gray-600">
              We only use cookies to track referrals for commission purposes, not for personal data collection.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Recommendations</h2>
            <p className="text-gray-600 mb-4">
              We maintain strict editorial independence:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>We only recommend products we genuinely believe in</li>
              <li>Affiliate relationships do not influence our content</li>
              <li>Our reviews and recommendations are always honest</li>
              <li>We prioritize products that offer the best value to our readers</li>
            </ul>
            <p className="text-gray-600">
              The compensation we receive may influence which products we feature, but never our opinions about them.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Transparency Commitment</h2>
            <p className="text-gray-600 mb-4">
              We believe in complete transparency with our readers:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li>All affiliate links are clearly disclosed</li>
              <li>We mark sponsored content appropriately</li>
              <li>We disclose any free products received for review</li>
              <li>We regularly update our disclosure statements</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <FiAlertTriangle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Note:</strong> As an Amazon Associate we earn from qualifying purchases. 
                  We participate in various other affiliate programs, and we may receive 
                  compensation for referring traffic to these sites.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our affiliate relationships or this disclosure, 
              please contact us at:
            </p>
            <p className="text-blue-600 font-medium">affiliates@yourwebsite.com</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AffiliateDisclosure;