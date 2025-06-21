import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(false);

  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setFinalData(data);
    setLoading(false);
  }

  //Add Url as a dependency so that if the url changes the data is refetched
  useEffect(() => {
    getDetails();
  }, [url]);
  return { finalData, loading };
};
