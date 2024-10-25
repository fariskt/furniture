import React, { useEffect, useRef } from "react";

const SearchItems = ({
  filteredProducts,
  searchValue,
  handleSearchProducts,
  inputRef,
  setSearchValue,
}) => {
  const searchItemsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        searchItemsRef.current &&
        !searchItemsRef.current.contains(event.target)
      ) {
        setSearchValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {searchValue && (
        <div
          ref={searchItemsRef}
          className="max-h-[300px] overflow-y-auto w-[350px] rounded-b-lg fixed right-44 bg-gray-500 bg-opacity-100 text-white z-10 mt-20 flex flex-col gap-4 p-4"
        >
          {searchValue &&
            filteredProducts.length > 0 ? filteredProducts.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 border-b cursor-pointer border-gray-300 pb-2 hover:bg-gray-800"
                onClick={() => handleSearchProducts(item.id)}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-16 h-16 ml-2 mt-2 bg-white object-contain"
                />
                <div>
                  <h4>{item.name}</h4>
                  <h4>₹ {item.price}</h4>
                </div>
              </div>
            )): <p className="text-sm text-gray-300">No data found</p>}
        </div>
      )}
    </>
  );
};

export default SearchItems;
