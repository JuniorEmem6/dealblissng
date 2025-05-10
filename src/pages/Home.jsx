import Header from "../components/Header";
import PopularStores from "../components/Stores";
import TopDeals from "../components/Deals";
import PopularCategories from "../components/Categories";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-[20px]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[25px] sm:text-[10px] md:text-5xl font-bold text-[blue] mb-6">
            Top Coupon Codes, Discount Code and Deal
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Your trusted source for the best promo code at checkout. Dealbliss
            brings you verified discounts and exclusive offer from top brands and
            prop firms.
          </p>
        </div>
      </div>
      <PopularStores />
      <TopDeals />
      <PopularCategories />
      <Footer />
    </>
  );
};

export default Home;
