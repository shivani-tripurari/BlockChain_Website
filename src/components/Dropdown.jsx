const Dropdown = ({ currency, currencies, setCurrency, title = "" }) => {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <div className=" relative mt-1">
        <select
          className="w-full p-2 rounded-md bg-n-9/30 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {/*render favorites */}
          <hr />
          {currencies?.map((currency) => {
            return (
              <option className="bg-n-7/30" value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
