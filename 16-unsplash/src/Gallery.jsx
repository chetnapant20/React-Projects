import {useQuery} from '@tanstack/react-query'
import { useGlobalContext } from './Context'
import axios from 'axios'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {

  const {searchTerm} = useGlobalContext();
  const response = useQuery({
    queryKey:['images', searchTerm],
    queryFn:async()=>{
      const result = await axios.get(`${url}&query=${searchTerm}`)
      return result.data
    }
  })

  const {isLoading, isError} = response
  const results = response?.data?.results
  
  if(isLoading)
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );

    if(isError)
      return <section className="image-container">
         <h4>Something went wrong</h4>
       </section>;

if(results.length<1)
return (
  <section className="image-container">
    <h4>No Results Found...</h4>
  </section>
);

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
}

export default Gallery
