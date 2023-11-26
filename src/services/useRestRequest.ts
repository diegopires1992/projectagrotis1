import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface UseRestRequestProps {
  url: string;
  requestFn?: (config: AxiosRequestConfig) => Promise<AxiosResponse<unknown>>;
  method?: string;
  headers?: AxiosRequestConfig['headers'];
  body?: unknown;
}

interface UseRestRequestResult {
  data: unknown;
  loading: boolean;
  error: unknown;
}

const useRestRequest = ({
  url,
  requestFn = axios,
  method = 'get',
  headers = {},
  body = null,
}: UseRestRequestProps): UseRestRequestResult => {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await requestFn({
          method,
          url,
          headers,
          data: body,
        });

        setData(response.data);
      } catch (error) {
        handleRequestError(error as AxiosError, setError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, headers, body, requestFn]);

  return { data, loading, error };
};

export default useRestRequest;

const handleRequestError = (error: AxiosError, setError: (error: unknown) => void) => {
  setError(error.message);
};
