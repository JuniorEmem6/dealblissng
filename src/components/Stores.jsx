import React from "react";
import { Link } from "react-router-dom";

const PopularStores = () => {
  // Sample store data
  const stores = [
    {
      id: 1,
      name: "Oraimo Nigeria",
      logo: "https://logo.clearbit.com/oraimo.com",
      category: "Electronic",
      link: "https://ng.oraimo.com/?affiliate_code=gQU41bWUcc",
      address: "/oraimo",
      rating: 4.8,
    },
    {
      id: 2,
      name: "FundedNext",
      logo: "https://logo.clearbit.com/fundednext.com",
      category: "Prop Firm",
      link: "",
      address: "/fundednext",
      rating: 4.5,
    },

    {
      id: 2,
      name: "Maven",
      logo: "https://logo.clearbit.com/maven.com",
      category: "Prop Firm",
      link: "",
      address: "/maven",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Headway",
      logo: "https://logo.clearbit.com/headway.com",
      category: "Broker",
      link: "https://headway.partners/user/signup?hwp=498720",
      rating: 4.6,
    },
    {
      id: 4,
      name: "Shopinverse",
      logo: "https://logo.clearbit.com/shopinverse.com",
      category: "Appliances",
      link: "https://shopinverse.com/?sca_ref=7992792.NTMFPOs63NA",
      rating: 4.3,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3f3fce] sm:text-4xl">
            Popular Stores
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular retail partners and start shopping
          </p>
        </div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={store.logo}
                    alt={`${store.name} logo`}
                    className="h-12 w-12 object-contain mr-4"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/48"; // Fallback image
                    }}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {store.name}
                    </h3>
                    <p className="text-sm text-gray-500">{store.category}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(store.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {store.rating}
                    </span>
                  </div>

                  {store.address ? (
                    <Link to={store.address}>
                      <p className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">Visit Store</p>
                    </Link>
                  ) : (
                    <a
                      href={store.link}
                      className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="mt-10 text-center">
          <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors">
            View All Stores
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default PopularStores;
