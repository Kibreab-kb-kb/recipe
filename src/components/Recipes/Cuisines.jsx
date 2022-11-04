import { Button, Stack, Typography, Box } from '@mui/material'

import React, { useEffect, useRef, useState } from 'react'
import data from '../../static.json'
import { StyledCuisineBox, StyledCuisineButton } from './styles'
import { motion } from 'framer-motion'
import { CuisineSliderVariant, CuisineStackVariant } from './Variants'
import { FILTERCUISINE } from './reducer'


const {cuisines} = data

const Cuisines = ({cuisine, setCuisine, dispatch}) => {

    const [width, setWidth] = useState()
    const slider = useRef()

   

   useEffect(()=>{
        const w = slider.current.scrollWidth
        const o = slider.current.offsetWidth
        
        setWidth(w-o+40)
   },[])


   const handleCuisineClick = (c) => {
        if(c==cuisine){
                        dispatch({
                            type: FILTERCUISINE,
                            payload: {
                                cuisine: "none"
                                }
                            })

                        setCuisine(null)
                        }
           
            else{
                dispatch({
                    type: FILTERCUISINE,
                    payload: {
                        cuisine: c.toLowerCase()
                    }
                    })

                    setCuisine(c)
                }

       
       
   }
    
  return (
      <Box mt={1} 
        sx={{
            position: "relative",
            display: "flex",
            justifyContent:"space-between",
            alignItems: "center"
        }}
      >
          
          <StyledCuisineBox 
            component={motion.div}
            variants={CuisineSliderVariant}
            initial="initial"
            animate="then"
          >
            
            

                <Stack direction="row"
                    component={motion.div}
                    drag="x"
                    dragConstraints={{right: 0, left: -width}}
                    
                    sx={{
                        zIndex:-1000,
                        width: "90vw"
                    }}

                    variants={CuisineStackVariant}
                    initial="initial"
                    animate="then"
                    ref={slider}
                    >

                    {cuisines.map((c,i)=>{
                        return(
                            <StyledCuisineButton
                                className={c==cuisine?"selected":""}
                                onClick={()=>handleCuisineClick(c)}
                                key={c}
                                
                            >
                                <Typography 

                                    variant="body"
                                    sx={{
                                        margin: ".2em .5em",
                                        fontSize: ".9em",
                                        fontWeight: 700
                                    }}
                                    >
                                    {c}
                                </Typography>
                            </StyledCuisineButton>
                        )
                    })}

                            
                </Stack>

                
            
            </StyledCuisineBox>
            
                    
            
        </Box>
  )
}

export default Cuisines