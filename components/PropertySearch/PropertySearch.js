import { useEffect } from "react";

export const PropertySearch = () => {
  useEffect(() => {
    const search = async () => {
      const response = await fetch(`/api/search`);
      const data = await response.json();
      console.log("SEARCH DATA: ", data);
    };
    search();
  }, []);

  return <div>property search</div>;
};
