


export const AUTOCOMPLETE = "AUTOCOMPLETE"
export const SEARCHRECIPE = "SEARCHRECIPE"
export const FILTERCUISINE = "FILTERCUISINE"
export const SETIMG = "SETIMG"
export const SETLABEL = "SETLABEL"
export const SETYIELD = "SETYIELD"

export const reducer = (state, action) => {
  switch(action.type){
    case AUTOCOMPLETE:

      
      return {...state, terms:action.payload.data, error:''}
      
    
    case SEARCHRECIPE:
      

      return {...state, recipes:action.payload.data, filtered: action.payload.data.hits , error: ""}
      

    case FILTERCUISINE:

      if(action.payload.cuisine==="none"){
        return {...state, filtered: state.recipes.hits, error:""}
      }

      const filteredRecipes = state.recipes.hits.filter((recipe)=>recipe.recipe.cuisineType[0]===action.payload.cuisine)
      if(!filteredRecipes.length){
        return {...state, error: "no matching food found"}
      }
      

       return {...state, filtered: filteredRecipes, error: ""} 

    case SETLABEL:
    
      return {...state, variables:{...state.variables, label: action.payload}}

    case SETIMG:

      return {...state, variables:{...state.variables, img: action.payload}}

    case SETYIELD:

      return {...state, variables:{...state.variables, yield: action.payload}}
    
    default: 
        return state
  }

  
}