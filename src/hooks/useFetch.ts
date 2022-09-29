import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig ) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>();

  useEffect(() => {
    api.get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      })
  }, []);

  return { data, isFetching, error }
}