import { useGlobalContext } from "./Context";


const SearchForm = () => {
const {searchTerm , setSearchTerm} = useGlobalContext()

const handleSubmit = (e)=>{
  e.preventDefault();
  const searchTerm = e.target.elements.search.value;

  if(!searchTerm)
    return;
  setSearchTerm(searchTerm)  
}

  return (
    <section>
      <h1 className="title">unsplash images</h1>

      <form className='search-form' onSubmit={handleSubmit}>
        <input className='form-input search-input' name='search' type='text' placeholder='cat'></input>
        <button type='submit' className='btn'>search</button>
      </form>
    </section>
  );
}

export default SearchForm
