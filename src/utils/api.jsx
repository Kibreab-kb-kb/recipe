import axios from 'axios'
import { AUTOCOMPLETE, SEARCHRECIPE } from '../components/Recipes/reducer'

export const stringParse = (url) => {
    let parts = url.split("_")
    let id = parts[1]

    return id
    
}


export const recipeApi = async(searchTerm, callback) => {
    const request = {
        method: "GET",
        url: "https://api.edamam.com/api/recipes/v2?&?app_id=90832c6b&app_key=56b2b02c4315676780486ec6132c6123&type=public",
        params:{
            q: searchTerm,
            
        }
    }

    const res = await axios(request)
    const result = res.data

    
    console.log(result)
    callback({
        type: SEARCHRECIPE,
        payload:{
            data: result
        }
    })
}


export const autoComplete = async(term, callback) => {
    const request = {
        method: "GET",
        url: "https://api.edamam.com/auto-complete?app_id=3f55af6b&app_key=%20ac4dc5b00044bc86400d271cc7418d74&limit=1",
        params:{
            q: term
        }
    }

    const res = await axios(request)
    const result = res.data

    console.log(result)
    
   
    callback({
        type:AUTOCOMPLETE,
        payload:{
            data: result
        }
    })

}

