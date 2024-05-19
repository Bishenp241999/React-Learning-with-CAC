import { useId } from "react";

/* eslint-disable react/prop-types */
export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* FROM / TO */}
      <div className="w-1-2">
        <label htmlFor={id} className="text-bllack/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* currency type */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-bllack/40 mb-2 w-full">Currency Type</p>
        <select
          type=""
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisabled}
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
