import React, { useState } from 'react'

function RecipeList({recipes}) {
    const[show,setShow]= useState(true);
    const paraStyle = {
            display: show ? 'block' : 'none'
    }
  return (
    <div className='recipe-list'>
             {recipes.map((recipe,index)=>{
             return  (<div className='recipe-container' key={index}>
                <img className='recipe-image' src={recipe["recipe"]["image"]} alt=''/>
                <div className='recipe-specs'>
                    <h2 className='recipe-name'>{recipe["recipe"]["label"]}</h2>
                    {/* <button key={index} onClick={()=>setShow(!show)}>{"ingredients"}</button> */}
      {/* <button onClick={()=>{setShow(!show)}}>Toggle Summary</button> */}
                    <button onClick={()=>setShow(!show)}>Click</button>
                    <p style={paraStyle} className='ingredients'><b>{'Ingredient: '}</b>{recipe["recipe"]["ingredientLines"]}</p>
                    {console.log(recipe["recipe"])}
                </div>    
                <div className='instruction'>
                    <button>INSTUCTION</button>
                </div>
                
            </div>)
        })}
    </div>
  )
}

export default RecipeList
