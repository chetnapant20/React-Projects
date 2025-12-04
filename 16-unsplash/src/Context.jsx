import { useContext, createContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children})=>{

  const [isDarkTheme, setDarkTheme] = useState(false);
  const toggleTheme =()=>{
    setDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme',isDarkTheme)
  }
 const [searchTerm , setSearchTerm ] = useState('cat')

  return <AppContext.Provider value={{isDarkTheme,toggleTheme,searchTerm,setSearchTerm}}>
    {children}
  </AppContext.Provider>

}

export default AppProvider

export const useGlobalContext=()=>{
  return useContext(AppContext);
}