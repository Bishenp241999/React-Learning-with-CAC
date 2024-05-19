// CUSTOM HOOK

import { useEffect, useState } from "react";
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json - old url

// Get the currency list with EUR as base currency on date 2024-03-06: - new url
// https://latest.currency-api.pages.dev/v1/currencies/eur.json

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])

    // console.log(data);
    return data;
}

export default useCurrencyInfo;