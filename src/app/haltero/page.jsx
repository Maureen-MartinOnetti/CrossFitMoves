"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const Acceuil = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const buttonData = [
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
    { label: "mouv", path: "/" },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = buttonData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(buttonData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/acceuil.jpg')] flex flex-col items-center justify-start w-full">
      <div className="flex-1 flex w-full h-full">
        <div className="grid grid-cols-3 gap-4 w-full p-4 m-6 grid-rows-3">
          {currentItems.map((button, index) => (
            <div
              key={index}
              className="flex justify-center items-center text-white text-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer p-4 rounded-lg transition-transform transform hover:scale-105"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                router.push(button.path);
              }}
            >
              {button.label}

              {/* <Heart className="absolute top-2 right-2 text-white bg-red-500" /> */}

              <div className="absolute top-2 right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-heart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    // fill="red"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-heart"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-center p-4">
        <div className="flex -center ">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mx-2 px-2 py-2 bg-[#272628] text-white rounded-lg"
          >
            <ArrowBigLeft />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 rounded-lg ${
                currentPage === index + 1
                  ? "bg-gray-500 text-white"
                  : "bg-[#272628] text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="mx-2 px-2 py-2 bg-[#272628] text-white rounded-lg"
          >
            <ArrowBigRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
