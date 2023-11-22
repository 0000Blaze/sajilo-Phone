import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);

  const setApiDataValue = (data) => {
    setApiData(data);
  };

  return (
    <DataContext.Provider value={{ apiData, setApiDataValue }}>
      {children}
    </DataContext.Provider>
  );
};

export const useApiData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useApiData must be used within an DataProvider");
  }
  return context;
};
