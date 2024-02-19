import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import customFetch from "./axios";
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);
const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const removeUser = () => {
    setUser(null);
  };
  const logoutUser = async () => {
    try {
      await customFetch.delete("/auth/logout", {
        withCredentials: true,
      });
      removeUser();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await customFetch.get("/auth/showMe", {
          withCredentials: true,
        });
        setUser(data.user);
      } catch (error) {
        console.log("fetch error:", error);
        removeUser();
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser, logoutUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
