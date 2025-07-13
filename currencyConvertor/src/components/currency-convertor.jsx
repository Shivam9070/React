import { useEffect, useState } from "react";

const CurrencyConverter = () => {
  const [currencies, setCurrency] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [favourites, setFavourites] = useState([]);

  // Fetch currency list
  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrency(Object.keys(data));
    } catch (error) {
      console.log("Error fetching currencies:", error);
    }
  };

  // Currency conversion
  const convertCurrency = async () => {
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      return;
    }

    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConvertedAmount(data.rates[toCurrency]);
    } catch (error) {
      console.log("Conversion error:", error);
    }
  };

  // Toggle favourites
  const handleFavourite = (currency) => {
    setFavourites((prev) =>
      prev.includes(currency)
        ? prev.filter((cur) => cur !== currency)
        : [...prev, currency]
    );
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">
        Currency Converter
      </h2>

      <div className="flex gap-3">
        {/* From Currency */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">From:</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur} {favourites.includes(cur) ? "⭐" : ""}
              </option>
            ))}
          </select>
          <button
            onClick={() => handleFavourite(fromCurrency)}
            className="text-xs text-blue-500 mt-1"
          >
            {favourites.includes(fromCurrency)
              ? "Remove from favourites"
              : "Add to favourites"}
          </button>
        </div>

        {/* Swap Button */}
        <div className="flex items-center">
          <button
            onClick={() => {
              const temp = fromCurrency;
              setFromCurrency(toCurrency);
              setToCurrency(temp);
            }}
            className="mt-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            title="Swap currencies"
          >
            ⇄
          </button>
        </div>

        {/* To Currency */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">To:</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur} {favourites.includes(cur) ? "⭐" : ""}
              </option>
            ))}
          </select>
          <button
            onClick={() => handleFavourite(toCurrency)}
            className="text-xs text-blue-500 mt-1"
          >
            {favourites.includes(toCurrency)
              ? "Remove from favourites"
              : "Add to favourites"}
          </button>
        </div>
      </div>

      {/* Amount Input */}
      <div className="mt-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount:
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Convert Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={convertCurrency}
          className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2"
        >
          Convert
        </button>
      </div>

      {/* Result */}
      {convertedAmount !== null && (
        <div className="mt-4 text-lg font-medium text-green-600">
          Converted Amount: {convertedAmount} {toCurrency}
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
