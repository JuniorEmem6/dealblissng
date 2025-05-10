import React from 'react';
import { FiUsers, FiAward, FiGlobe, FiHeart } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';

const AboutSection = () => {
  return (
    <>
    <Header />
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 sm:text-4xl mb-4">
            About Our Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the way people discover and share deals, connecting shoppers with the best discounts from trusted stores worldwide.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our team working together" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              Our Story & Mission
            </h3>
            
            <p className="text-gray-600 mb-6">
              Founded in 2023, we started as a small team passionate about helping people save money. Today, we've grown into a community-driven platform with thousands of active users and hundreds of partner stores.
            </p>
            
            <p className="text-gray-600 mb-8">
              Our mission is simple: to create the most comprehensive, user-friendly platform for deal hunters while supporting businesses in reaching new customers.
            </p>

            {/* Stats/Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <FiUsers className="text-3xl text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-1">100K+</h4>
                <p className="text-gray-600 text-sm">Active Community Members</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <FiAward className="text-3xl text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-1">500+</h4>
                <p className="text-gray-600 text-sm">Verified Stores</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <FiGlobe className="text-3xl text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-1">20+</h4>
                <p className="text-gray-600 text-sm">Countries Supported</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <FiHeart className="text-3xl text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-1">24/7</h4>
                <p className="text-gray-600 text-sm">Dedicated Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-blue-600 mb-12">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Transparency</h4>
              <p className="text-gray-600">
                We believe in complete honesty about deals, with no hidden terms or misleading offers.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Trust</h4>
              <p className="text-gray-600">
                Every deal and store is verified by our team to ensure reliability.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Community</h4>
              <p className="text-gray-600">
                Our platform thrives on user contributions and shared shopping wisdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default AboutSection;