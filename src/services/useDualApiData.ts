import { useState, useEffect } from 'react';
import useRestRequest from './useRestRequest'; // Substitua pelo caminho correto do seu arquivo useRestRequest

interface ApiResponse {
  data: unknown; 
}

interface UseFetchDataProps {
  labUrl: string;
  propUrl: string;
}

interface UseFetchDataResult {
  labData: ApiResponse['data'] | null;
  loadingLab: boolean;
  errorLab: Error | null;
  propData: ApiResponse['data'] | null;
  loadingProp: boolean;
  errorProp: Error | null;
}

const useDualApiData = ({ labUrl, propUrl }: UseFetchDataProps): UseFetchDataResult => {
  const [labData, setLabData] = useState<ApiResponse['data'] | null>(null);
  const [loadingLab, setLoadingLab] = useState<boolean>(true);
  const [errorLab, setErrorLab] = useState<Error | null>(null);

  const [propData, setPropData] = useState<ApiResponse['data'] | null>(null);
  const [loadingProp, setLoadingProp] = useState<boolean>(true);
  const [errorProp, setErrorProp] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [labResponse, propResponse] = await Promise.all([
          useRestRequest(labUrl),
          useRestRequest(propUrl),
        ]);
        setLabData(labResponse.data);
        setPropData(propResponse.data);
      } catch (error) {
        setErrorLab(error as Error);
        setErrorProp(error as Error);
      } finally {
        setLoadingLab(false);
        setLoadingProp(false);
      }
    };

    fetchData();
  }, [labUrl, propUrl]);

  return { labData, loadingLab, errorLab, propData, loadingProp, errorProp };
};

export default useDualApiData;
