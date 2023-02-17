
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import RecipeCard from './component/RecipeCard';
import SearchBar from './component/SearchBar';


function App() {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
  
  const [isLoading,setIsLoading] =useState(false);
  const [query,setQuery] = useState("")
  const [recipes,setRecipes] = useState([]);


  const searchRecipe = async()=>{
        setIsLoading(true);
        const url = apiUrl + query;
        const res = await fetch(url);
        const data = await res.json()
        console.log(data)
        setRecipes(data.meals);
        setIsLoading(false)
  }

  useEffect(()=>{
      searchRecipe()
  },[])

const handleSubmit = (event) =>{
  event.preventDefault()
  searchRecipe()
}

  return (
    <div className="App">
          <div className='container'> 
              <h2>Our Recipe App</h2> 
              <SearchBar
                handleSubmit = {handleSubmit}
                onChange = {event=>setQuery(event.target.value)}
                isLoading = {isLoading}
                value= {query}
              />
              <div className='recipes'>
                {recipes ? recipes.map((recipe)=>{
                 return <RecipeCard 
                    key={recipe.idMeal}
                    recipe={recipe}
                  />
                }):"No Recipe!"}
                </div>         
          </div>
      </div>
      
        
    
  );
}

export default App;
