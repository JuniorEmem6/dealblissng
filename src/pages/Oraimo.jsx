import React, { useState } from 'react';
import { FiCopy, FiShoppingCart, FiClock, FiInfo, FiTag, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Oraimo = () => {
  const [activeTab, setActiveTab] = useState('coupons');
  const [expandedCoupon, setExpandedCoupon] = useState(null);
  const [copiedCoupon, setCopiedCoupon] = useState(null);

  // Sample store data
  const store = {
    name: "Oraimo",
    logo: "https://logo.clearbit.com/oraimo.com",
    rating: 4.7,
    categories: ["Electronics", "Power Bank"],
    description: "Shop oraimo online store — Unlock Savings Use Code LODVU80B for an Exclusive Discount."
  };

  // Sample coupons data
  const coupons = [
    {
      id: 1,
      code: "ERAGON",
      discount: "25% OFF",
      title: "Summer Sale Discount",
      description: "Get 25% off on selected summer items. Minimum purchase of $50 required. Exclusions apply.",
      expiry: "2023-08-31",
      terms: "Valid on select items. Cannot be combined with other offers. Limited time only.",
      verified: true,
      used: 1243
    },
    {
      id: 2,
      code: "FREESHIP",
      discount: "Free Shipping",
      title: "Free Shipping Offer",
      description: "Free standard shipping on all orders over $25. No code needed.",
      expiry: "2023-12-31",
      terms: "Applies to standard shipping only. Valid for continental US addresses.",
      verified: true,
      used: 892
    },
    {
      id: 3,
      code: "TECH15",
      discount: "15% OFF",
      title: "Tech Special",
      description: "15% off all electronics and tech accessories.",
      expiry: "2023-07-15",
      terms: "Only valid for electronics category. Max discount $100.",
      verified: true,
      used: 567
    }
  ];

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(id);
    setTimeout(() => setCopiedCoupon(null), 2000);
  };

  const toggleCouponExpand = (id) => {
    setExpandedCoupon(expandedCoupon === id ? null : id);
  };

  return (
    <> 
    
    
    <Header />
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Store Header */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex-shrink-0">
            <img 
              src={store.logo} 
              alt={`${store.name} logo`} 
              className="h-20 w-20 object-contain border border-gray-200 rounded-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/100';
              }}
            />
          </div>
          <div className="flex-grow">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{store.name}</h1>
            <div className="flex items-center mt-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(store.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {store.categories.map((category, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {category}
                </span>
              ))}
            </div>
            <p className="text-gray-600">{store.description}</p>
          </div>
          <a 
            href={`https://ng.oraimo.com/?affiliate_code=gQU41bWUcc`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md whitespace-nowrap text-center transition-colors"
          >
            Visit Store
          </a>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-4 px-6 text-center font-medium border-b-2 transition-colors ${activeTab === 'coupons' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            onClick={() => setActiveTab('coupons')}
          >
            Coupons & Deals
          </button>
          <button
            className={`py-4 px-6 text-center font-medium border-b-2 transition-colors ${activeTab === 'how-to-use' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            onClick={() => setActiveTab('how-to-use')}
          >
            How To Use
          </button>
          <button
            className={`py-4 px-6 text-center font-medium border-b-2 transition-colors ${activeTab === 'tips' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            onClick={() => setActiveTab('tips')}
          >
            Shopping Tips
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {activeTab === 'coupons' && (
            <div className="divide-y divide-gray-200">
              {coupons.map((coupon) => (
                <div key={coupon.id} className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0 w-full sm:w-48 flex items-center justify-center bg-blue-50 rounded-lg p-4 border-2 border-blue-100 border-dashed">
                      <span className="text-2xl font-bold text-blue-600">{coupon.discount}</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{coupon.title}</h3>
                          <p className="text-gray-600 mt-1">{coupon.description}</p>
                        </div>
                        {coupon.verified && (
                          <span className="flex-shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2">
                            Verified
                          </span>
                        )}
                      </div>
                      
                      {/* <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <FiClock className="mr-1" />
                          <span>Expires: {new Date(coupon.expiry).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <FiShoppingCart className="mr-1" />
                          <span>Used {coupon.used} times</span>
                        </div>
                      </div> */}
                      
                      <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-grow">
                          <input
                            type="text"
                            readOnly
                            value={coupon.code}
                            className="w-full px-4 py-2 pr-12 border border-gray-300 text-blue-600 rounded-md bg-gray-50 font-mono"
                          />
                          <button
                            onClick={() => handleCopyCode(coupon.code, coupon.id)}
                            className="absolute inset-y-0 right-0 px-3 flex items-center justify-center text-gray-500 hover:text-blue-600"
                          >
                            <FiCopy />
                            <span className="sr-only">Copy code</span>
                          </button>
                        </div>
                        {/* <button
                          onClick={() => toggleCouponExpand(coupon.id)}
                          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                          {expandedCoupon === coupon.id ? (
                            <>
                              <FiChevronUp className="mr-1" />
                              Less Details
                            </>
                          ) : (
                            <>
                              <FiChevronDown className="mr-1" />
                              More Details
                            </>
                          )}
                        </button> */}
                      </div>
                      
                      {expandedCoupon === coupon.id && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-md">
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                            <FiInfo className="mr-2 text-blue-500" />
                            Terms & Conditions
                          </h4>
                          <p className="text-gray-600 text-sm">{coupon.terms}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'how-to-use' && (
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use {store.name} Coupons</h2>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Find Your Coupon</h3>
                    <p className="text-gray-600">
                      Browse our list of available {store.name} coupons and select the one that best fits your purchase. 
                      Make sure to check the terms and conditions for any restrictions.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Copy the Code</h3>
                    <p className="text-gray-600">
                      Click the "Copy Code" button next to your selected coupon. Some coupons may be applied automatically 
                      when you click through our links without needing a code.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Shop at {store.name}</h3>
                    <p className="text-gray-600">
                      Proceed to {store.name}'s website and add items to your cart. During checkout, look for the 
                      "Promo Code" or "Discount Code" field and paste your copied code.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Apply and Verify</h3>
                    <p className="text-gray-600">
                      After applying the code, verify that the discount has been applied to your order total before 
                      completing your purchase. Some codes may require a minimum spend.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FiInfo className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Note:</strong> Some {store.name} coupons are limited to first-time customers or specific 
                      product categories. Always check the terms before using.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Smart Shopping Tips for {store.name}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <FiTag className="text-blue-500 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Stack Coupons</h3>
                  </div>
                  <p className="text-gray-600">
                    {store.name} sometimes allows combining multiple coupons. Try using a percentage-off code with 
                    a free shipping offer for maximum savings.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <FiClock className="text-blue-500 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Timing Matters</h3>
                  </div>
                  <p className="text-gray-600">
                    The best deals often appear during holiday weekends, Prime Day (for Amazon), or end-of-season 
                    sales. Sign up for their newsletter to get early access.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <FiShoppingCart className="text-blue-500 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Cart Tricks</h3>
                  </div>
                  <p className="text-gray-600">
                    Sometimes adding items to your cart and waiting a day can trigger {store.name} to send you a 
                    discount code to complete your purchase.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <FiInfo className="text-blue-500 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Price Tracking</h3>
                  </div>
                  <p className="text-gray-600">
                    Use {store.name}'s price history tools or third-party extensions to check if the current price 
                    is really a good deal compared to historical prices.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pro Tip: Subscription Savings</h3>
                <p className="text-gray-600 mb-4">
                  Many {store.name} items offer additional discounts (typically 5-15%) when you choose 
                  subscription options. You can often cancel after the first delivery while keeping the discount.
                </p>
                <p className="text-gray-600">
                  Also check for student/military discounts if applicable, and always compare prices with 
                  {store.name} Marketplace sellers who may offer better deals.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    <Footer />

    </>
  );
};

export default Oraimo;