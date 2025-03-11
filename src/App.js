import React from "react";
import { useState, useEffect } from "react";
import { filterData, apiUrl } from "./data.js";
import Filter from "./components/FilterData.js";
import Header from "./components/Header.js";
import Cards from "./components/Cards.js";
import Sipnner from "./components/Sipnner.js";
import { toast } from "react-toastify";

const App = () => {
  // const [data, setData] = useState(filterData);
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);
  const [loading, setLoading] = useState(true);
  const populateCard = async () => {
    setLoading(true);
    try {
      const dataFetch = await fetch(apiUrl);
      const response = await dataFetch.json();
      setCourses(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    populateCard();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Header />
      </div>
      <div className="bg-bgDark2">
        <Filter
          filteringData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div
        className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"
      >
        {loading ? (
          <Sipnner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </div>
  );
};

export default App;
