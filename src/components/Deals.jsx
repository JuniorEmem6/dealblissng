import React from 'react';
import { FiClock, FiShoppingBag, FiTag, FiChevronRight } from 'react-icons/fi';

const TopDeals = () => {
  // Sample deals data
  const deals = [
    {
      id: 1,
      title: 'Oraimo Nigeria',
      discount: 'ORAIMONG10',
      description: 'Get an exclusive discount on Oraimo Nigeria',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      featured: true,
      link: "https://fundednext.com/?fpr=aniekan61"
    },
    {
      id: 2,
      title: 'FundedNext',
      discount: 'FUNDEDNEXT',
      description: 'Get an exclusive discount on FundedNext',
      category: 'Prop Firm',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: "https://fundednext.com/?fpr=aniekan61"

    },
    {
      id: 3,
      title: 'Shopinverse',
      discount: 'SHOPINV12',
      description: 'Get an exclusive discount on FundedNext',
      category: 'Appliances',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: "https://fundednext.com/?fpr=aniekan61"
    },

  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8">
          <div>
            <h2 className="text-[20px] font-bold text-blue-500 sm:text-3xl">
              Top Deals You Can't Miss Today
            </h2>
            {/* <p className="mt-2 text-lg text-gray-600">
              Limited-time offers ending soon
            </p> */}
          </div>
          {/* <button className="mt-4 sm:mt-0 flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
            View all deals <FiChevronRight className="ml-1" />
          </button> */}
        </div>

        {/* Timer Banner */}
        {/* <div className="bg-amber-500 text-white rounded-lg p-4 mb-8 flex items-center justify-center">
          <FiClock className="mr-2" />
          <span className="font-medium">These deals expire in: 12h 34m 56s</span>
        </div> */}

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <div 
              key={deal.id} 
              className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${deal.featured ? 'border-2 border-amber-400' : 'border border-gray-100'}`}
            >
              {/* Deal Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-full object-cover"
                />
                {deal.featured && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    HOT DEAL
                  </div>
                )}
              </div>
              
              {/* Deal Content */}
              <div className="p-5">
                <div className="flex items-center mb-1">
                  <FiTag className="text-amber-500 mr-2" />
                  <span className="text-sm text-gray-500">{deal.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {deal.title}
                </h3>
                
                <p className="text-gray-600 mb-3 line-clamp-2">
                  {deal.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-sm font-bold">
                    {deal.discount}
                  </span>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="px-5 pb-5">
                <a href={deal.link}>
                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center justify-center">
                  <FiShoppingBag className="mr-2" />
                  Visit Site
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View More Button */}
        {/* <div className="mt-8 text-center md:hidden">
          <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors">
            Load More Deals
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default TopDeals;