import React from "react";
import {
  FiFileText,
  FiAlertCircle,
  FiShoppingCart,
  FiCreditCard,
  FiTerminal,
} from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header */}

          {/* Content */}
          <div className="p-6 sm:p-8 prose prose-blue max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                Please read these Terms and Conditions carefully before using
                our website and services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FiAlertCircle className="mr-2" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 mb-4">
                By accessing or using our website, you agree to be bound by
                these Terms. If you disagree with any part, you may not access
                the service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FiShoppingCart className="mr-2" />
                Purchases and Payments
              </h2>
              <p className="text-gray-600 mb-4">
                If you make purchases through our website:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>
                  You agree to provide current, complete, and accurate purchase
                  information
                </li>
                <li>
                  We reserve the right to refuse or cancel orders at our
                  discretion
                </li>
                <li>Prices are subject to change without notice</li>
                <li>
                  You are responsible for any taxes associated with your
                  purchase
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FiCreditCard className="mr-2" />
                Refund Policy
              </h2>
              <p className="text-gray-600 mb-4">
                Our refund policy is as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>Digital products: No refunds after download</li>
                <li>
                  Physical products: 30-day return policy for unused items
                </li>
                <li>
                  Services: Refundable within 14 days if service not rendered
                </li>
              </ul>
              <p className="text-gray-600">
                To request a refund, contact us at support@yourwebsite.com.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FiTerminal className="mr-2" />
                User Accounts
              </h2>
              <p className="text-gray-600 mb-4">
                When you create an account with us:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining account security</li>
                <li>You must notify us immediately of any unauthorized use</li>
                <li>
                  We reserve the right to suspend or terminate accounts at our
                  discretion
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600 mb-4">
                The service and its original content, features, and
                functionality are owned by us and are protected by international
                copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Prohibited Uses
              </h2>
              <p className="text-gray-600 mb-4">You may not use our website:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>For any unlawful purpose</li>
                <li>To solicit others to perform unlawful acts</li>
                <li>To violate any regulations, rules, or laws</li>
                <li>To harass, abuse, or harm others</li>
                <li>To upload or transmit viruses or malicious code</li>
                <li>To collect personal information without consent</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-4">
                In no event shall we be liable for any indirect, incidental,
                special, consequential or punitive damages arising from your use
                of the service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Country/State], without regard to its
                conflict of law provisions.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. Your
                continued use of the service constitutes acceptance of those
                changes.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FiAlertCircle className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Disclaimer:</strong> The service is provided "as is"
                    without warranties of any kind. We do not guarantee
                    uninterrupted or error-free service.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <p className="text-blue-600 font-medium">legal@yourwebsite.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
