import { Grid, Typography, Box } from '@mui/material'
import React, { useReducer, useState } from 'react'
import SearchBar from './SearchBar'
import { motion } from 'framer-motion'
import { TextVariant } from './Variants'
import Cuisines from './Cuisines'
import { reducer } from './reducer'
import Cards from './Cards'
import { Suspense } from 'react'


const initialState = {
  terms: [],
  recipes: [],
  filtered: [],
  error: '',

  variables:{
    img: '',
    yield: '',
    label: ''
  }
}

const Recipes = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [cuisine, setCuisine] = useState(null)

 

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Grid container mt={10}>
      <Box
        sx={{
          margin:"auto",
          display: "flex",
          alignItems: "center",
          
        }}

        component={motion.div}
        variants={TextVariant}
        initial="initial"
        animate="then"
      >

        <Typography variant="h4" 
          sx={{
            fontFamily: "'Pacifico', cursive",
            marginRight: ".5em",
            color: "#222"
          }}
          variants={TextVariant}
          component={motion.h4}
          >
        Find your
        </Typography>
        <Typography variant="h3"
          sx={{ 
            fontFamily: "'Pacifico', cursive",
            color: "#B77729",
            fontStyle: "italic"
          }}
          variants={TextVariant}
          component={motion.h3}
          >
            Recipe
        </Typography>
      </Box>
      <SearchBar dispatch={dispatch} state={state} setIsLoading={setIsLoading}/>
      <Cuisines cuisine={cuisine} setCuisine={setCuisine} dispatch={dispatch}/>

      {!state.error?!isLoading?<Cards state={state} dispatch={dispatch}/>: <div>Loading...</div>:state.error}
    

      
        
     
    </Grid>
  )
}

export default Recipes