import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import Button from "./Button.jsx";
import Header from "./Header.jsx";
import Dropdown from "./Dropdown.jsx";
import { useEffect, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
// currencies -> https://api.frankfurter.app/currencies
// conversion -> https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
const Currency = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();

      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const convertCurrency = async () => {
    //logic of convert button
    if (!amount) return;
    setConverting(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
    } catch (error) {
      console.error("Error Fetching", error);
    } finally {
      setConverting(false);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <>
      <Header />
      <Section
        className="pt-[14rem] -mt-[7.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="currency"
      >
        <div className="container relative">
          <div className="relative z-1">
            <Heading
              title="Currency converter"
              text="Experience the power of advanced trading tools and real-time
              market analysis, tailored for both beginners and experts."
            />
            <div className="container relative z-1 flex flex-col justify-evenly items-start bg-n-7/40 shadow-lg backdrop-blur border border-n-1/10 h-[28rem] mb-5 p-8 rounded-3xl overflow-hidden lg: p-20 xl: h-[36rem] ">
              <div className="container body-1 p-7 mt-11 mb-7  md:flex flex-row justify-start gap-[4rem] items-end">
                <Dropdown
                  currencies={currencies}
                  title="From :"
                  currency={fromCurrency}
                  setCurrency={setFromCurrency}
                />
                {/*swap currency button*/}

                <div className="flex justify-center ">
                  <button
                    onClick={swapCurrencies}
                    className=" p-3 rounded-full cursor-pointer sm:bg-transparent md:bg-n-6 hover:bg-n-7 h-[3rem] w-[3rem]"
                  >
                    <FaArrowRightArrowLeft />
                  </button>
                </div>

                <Dropdown
                  currencies={currencies}
                  title="To :"
                  currency={toCurrency}
                  setCurrency={setToCurrency}
                />
              </div>

              <div>
                <label htmlFor="amount" className="body-1 p-7  mb-3 block ">
                  Amount:
                </label>
                <input
                  className="ml-7 bg-n-9/30 w-full p-2 border border-n-9/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="flex mt-6">
                <Button
                  onClick={convertCurrency}
                  white
                  className={`px-5 py-2 ml-7 ${
                    converting ? "animate-pulse" : ""
                  }`}
                >
                  Convert
                </Button>
              </div>

              {convertedAmount && (
                <div className="body-1 text-violet-500 font-bold mt-7 ml-7">
                  Converted Amount: {convertedAmount}
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Currency;
