import { useState, useEffect } from "react";

const useAppwrite = (fn) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fn();
        setData(res);
      } catch (error) {
        Alert.alert("Error", error.message);
      }
    };

    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};

export default useAppwrite;
