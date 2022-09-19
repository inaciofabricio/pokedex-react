import axios from "axios";
import { useEffect, useState } from "react";
import { getCache, setCache } from "../util/util";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
});

export default function useApi(url) {

    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        let cache = getCache(url);

        if(cache) {
            setData(cache);
        } else {

            api.get(url)
                .then(response => {
                    setData(response.data);
                    setCache(url, response.data);
                })
                .catch((err) => {
                    const { data: message, status } = err.response ? err.response : {message : "localStorage Lotado", status: 500};
                    setError({ message, status });
                    setCache(url, { message, status });
                })
                .finally(() => {
                    setIsFetching(false);
                })
        }

    }, [url]);

    return { data, error, isFetching };
}