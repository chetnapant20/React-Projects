import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

const CocktailList = ({drinks}) => {
 if (!drinks) {
   return (
     <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
   );
 }

  const formattedData = drinks.map((drink)=>{
    if(!drink)
      return;

    const { idDrink: id, strDrink: name, strAlcoholic: info, strGlass :glass, 
strDrinkThumb
:image} = drink;
return {id,name,info,glass,image}})

  return (
    <Wrapper>
      {
        formattedData.map((drink)=>{
         return <CocktailCard {...drink} key={drink.id}/>
        })
      }
    </Wrapper>
  )
}

export default CocktailList
