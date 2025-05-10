import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const PopularCategories = () => {
  // Sample categories data
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'Home & Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      name: 'Beauty',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
      id: 6,
      name: 'Game Station',
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-blue-500 sm:text-4xl">
              Popular Categories
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Shop from our most popular collections
            </p>
          </div>
         
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-64"
            >
              {/* Category Image */}
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              
              {/* Category Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-gray-200 mb-4">
                  {category.items}
                </p>
                <button className="flex items-center text-white font-medium hover:text-amber-300 transition-colors">
                  Shop now <FiArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View More Button */}
      </div>
    </section>
  );
};

export default PopularCategories;