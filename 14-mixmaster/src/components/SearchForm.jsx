import { Form, useNavigation } from "react-router-dom"
import Wrapper from "../assets/wrappers/SearchForm"
// import { useNavigation } from "react-router-dom";


const SearchForm = ({searchTerm}) => {
  const navigation = useNavigation();
  const isSearching = navigation.state == 'submitting'

  return (
    <Wrapper>
      <Form className="form">
       <input 
      name="search" type="search"  className="form-input" />
       <button type="submitting" className="btn">
        {isSearching? 'searching...':"search"}
       </button>
      </Form>
    </Wrapper>
  )
}

export default SearchForm

