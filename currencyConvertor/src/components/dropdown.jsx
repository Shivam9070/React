import React from 'react';
import { HiOutlineStar } from "react-icons/hi2";

const CurrencyDropdown = ({
  currencies = [],
  currency,
  setCurrency,
  favourites = [],
  handleFavourite,
  title = ""
}) => {
  return (
    <div className="relative w-full mb-4">
      <label htmlFor={title} className="block text-sm font-medium text-gray-700">
        {title}
      </label>

      <div className="flex items-center mt-1 relative">
        <select
          id={title}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => handleFavourite(currency)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-500 hover:text-yellow-600"
          title="Add to favourites"
        >
          <HiOutlineStar />
        </button>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
