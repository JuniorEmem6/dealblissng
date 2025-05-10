import React, { useState } from 'react';
import { FiUpload, FiLink, FiDollarSign, FiShoppingBag, FiMapPin, FiMail, FiGlobe } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SubmissionSection = () => {
  const [activeTab, setActiveTab] = useState('coupon');
  const [formData, setFormData] = useState({
    coupon: {
      title: '',
      url: '',
      code: '',
      description: '',
      category: '',
      expiry: ''
    },
    store: {
      name: '',
      website: '',
      category: '',
      description: '',
      location: '',
      email: ''
    }
  });

  const handleChange = (type, field, value) => {
    setFormData(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting ${activeTab}:`, formData[activeTab]);
    // Here you would typically send the data to your backend
    alert(`${activeTab === 'coupon' ? 'Coupon' : 'Store'} submitted successfully!`);
  };

  return (
    <>
    <Header />
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[25px] font-bold text-blue-500 sm:text-4xl mb-4">
            Share With Our Community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help others save money by submitting coupons or recommending great stores
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          {/* <button
            className={`flex-1 py-4 px-1 text-center font-medium text-sm border-b-2 transition-colors ${activeTab === 'coupon' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            onClick={() => setActiveTab('coupon')}
          >
            <div className="flex items-center justify-center gap-2">
              <FiDollarSign className="text-lg" />
              Submit a Coupon
            </div>
          </button> */}
          <button
            className={`flex-1 py-4 px-1 text-center font-medium text-sm border-b-2 transition-colors ${activeTab === 'coupon' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            onClick={() => setActiveTab('store')}
          >
            <div className="flex items-center justify-center gap-2">
              <FiShoppingBag className="text-lg" />
              Submit a Store
            </div>
          </button>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            {activeTab === 'store' ? (
              <div className="space-y-6">
                <div>
                  <label htmlFor="coupon-title" className="block text-sm font-medium text-gray-700 mb-1">
                    Coupon Title*
                  </label>
                  <input
                    type="text"
                    id="coupon-title"
                    className="w-full text-[13px] text-gray-500 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 50% Off Summer Sale"
                    value={formData.coupon.title}
                    onChange={(e) => handleChange('coupon', 'title', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="coupon-url" className="block text-sm font-medium text-gray-700 mb-1">
                      Store URL*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLink className="text-gray-400" />
                      </div>
                      <input
                        type="url"
                        id="coupon-url"
                        className="w-full text-[13px] text-gray-500 pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://example.com"
                        value={formData.coupon.url}
                        onChange={(e) => handleChange('coupon', 'url', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="coupon-code" className="block text-sm font-medium text-gray-700 mb-1">
                      Coupon Code
                    </label>
                    <input
                      type="text"
                      id="coupon-code"
                      className="w-full text-[13px] text-gray-500 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Optional"
                      value={formData.coupon.code}
                      onChange={(e) => handleChange('coupon', 'code', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="coupon-description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description*
                  </label>
                  <textarea
                    id="coupon-description"
                    rows={3}
                    className="w-full text-[13px] text-gray-500 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe the coupon details and any restrictions"
                    value={formData.coupon.description}
                    onChange={(e) => handleChange('coupon', 'description', e.target.value)}
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label htmlFor="store-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Store Name*
                  </label>
                  <input
                    type="text"
                    id="store-name"
                    className="w-full text-[13px] text-gray-500 px-4 py-2 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Amazon, Walmart"
                    value={formData.store.name}
                    onChange={(e) => handleChange('store', 'name', e.target.value)}
                    required
                  />
                </div>

                <div className='mt-[10px]'>
                  <label htmlFor="store-website" className="block text-sm font-medium text-gray-700 mb-1">
                    Website URL*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiGlobe className="text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="store-website"
                      className="w-full text-[13px] text-gray-500 pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://example.com"
                      value={formData.store.website}
                      onChange={(e) => handleChange('store', 'website', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className='mt-[10px]'>
                  <label htmlFor="store-website" className="block text-sm font-medium text-gray-700 mb-1">
                    Discount Code
                  </label>
                  <div className="relative">
                    
                    <input
                      type="url"
                      id="store-website"
                      className="w-full text-[13px] text-gray-500 pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={formData.store.website}
                      onChange={(e) => handleChange('store', 'website', e.target.value)}
                      required
                    />
                  </div>
                </div>


                <div className='mt-[10px]'>
                  <label htmlFor="store-description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description*
                  </label>
                  <textarea
                    id="store-description"
                    rows={3}
                    className="w-full text-[13px] text-gray-500 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about the store and why you recommend it"
                    value={formData.store.description}
                    onChange={(e) => handleChange('store', 'description', e.target.value)}
                    required
                  />
                </div>

               
              </div>
            )}

            <div className="mt-8">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <FiUpload className="mr-2" />
                Submit {activeTab === 'store' ? 'Coupon' : 'Store'}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>By submitting, you agree to our terms of service and privacy policy</p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default SubmissionSection;