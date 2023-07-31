import CategoryCard from "./CategoryCard";
import { services } from "../data/services";
import { useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

const CategoriesWrap = () => {
  //Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentList = services.slice(startIndex, endIndex);

  const prevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };
  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <div className="mt-6 py-4 px-2 border-[2px] border-gray-100 bg-slate-50">
      <h1 className="text-center text-2xl">TOP CATEGORIES</h1>
      <p className="mt-4 text-center text-gray-700">
        Dubai's rental market offers a wide range of products to cater to
        different needs and budgets. Fast, easy searching means you get to the
        details quickly.
      </p>

      <div className="w-[95%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {currentList.map((service, i) => {
          return <CategoryCard key={i + 1} service={service} />;
        })}
      </div>

      {/* prev and next options */}
      <div className="mt-8  m-auto flex justify-center gap-16">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="flex text-blue-700 hover:text-black cursor-pointer disabled:text-blue-300 disabled:cursor-not-allowed"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="mt-1 mr-1" />
          Prev
        </button>
        {currentPage + 1} / {totalPages}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="flex text-blue-700 hover:text-black cursor-pointer  disabled:text-blue-300 disabled:cursor-not-allowed"
        >
          Next
          <MdOutlineKeyboardDoubleArrowRight className="mt-1 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default CategoriesWrap;
