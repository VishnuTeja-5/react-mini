import { useEffect, useState } from "react"

function useCurrency(currency){

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.8.13/v1/currencies/${currency}.json`)
        .then( res => res.json() )
        .then( res => setData(res[currency]) )
        .catch("failed to retrieve data")
    },[currency]);

    return data;

}

export default useCurrency;