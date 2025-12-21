const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";
import CocktailList from "../components/CocktailList";


const searchCocktailQuery = (searchTerm)=>{
  
  return {
    
    queryKey :['search',searchTerm||'all'],
    queryFn:async ()=>{
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)      
      return response.data.drinks
    }
  }
}

export const loader =(queryClient) =>async({request}) =>{
  // const data = await request
 
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search') || 'a';

  await queryClient.ensureQueryData(searchCocktailQuery(searchTerm))
  
  // const url = new URL(request.URL)
// console.log(url);

  // const response = await axios.get()
  return {searchTerm};
};

const Landing = () => {
  const {searchTerm} = useLoaderData()
  // console.log(searchTerm);
  
  const {data:drinks} = useQuery(searchCocktailQuery(searchTerm));
  
  return (
    <div>
      <SearchForm searchTerm={searchTerm}></SearchForm>
      <CocktailList drinks={drinks}></CocktailList>
    </div>
  );
};

export default Landing;
