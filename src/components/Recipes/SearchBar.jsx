import { Search } from '@mui/icons-material'
import { Autocomplete, Box, Button, InputBase, Stack, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { StyledBox, StyledButton, StyledInputBase } from './styles'
import { SearchBoxVariant } from './Variants'
import { motion } from 'framer-motion'
import { AUTOCOMPLETE } from './reducer'
import { autoComplete, recipeApi } from '../../utils/api'

const SearchBar = ({state, dispatch, setIsLoading}) => {
  const[searchTerm, setSearchTerm] = useState("")

  const [show, setShow] = useState(false)
  const searchBox = useRef()
  
  const handleShow = () => {
    let a = (searchBox.current===document.activeElement)
    console.log(a)

    Boolean(state.terms.length)&&(searchBox.current===document.activeElement)?setShow(true):setShow(false)

   
    

  }

  const handleSubmit = async(e) => {
    setShow(false)
    e.preventDefault()
    setIsLoading(true)
    await recipeApi(searchTerm, dispatch)
    setIsLoading(false)
  }



  return (
    <Box m={5} 
      sx={{
        width: "100%",
        justifyContent:"space-between",
        display: "flex",
        
      }}
        variants={SearchBoxVariant}
        initial="initial"
        animate="then"
        component={motion.div}
        layout
    >
        <StyledBox
        
        >
          <form method="get" onSubmit={handleSubmit}>

          <StyledBox>



         
          <Search 
            sx={{
              color: "#aaa",
              marginLeft: "1em",
              
            }}
          />
           <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center"
            }}
            >

            <StyledInputBase 
              placeholder="What to eat..."
              value={searchTerm}
              inputRef={searchBox}
              onChange={(e)=>{
                setSearchTerm(e.target.value)
                handleShow()
                autoComplete(e.target.value, dispatch)
              }}      
              
              />
            {show ? 
              <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                transform: "translateX(-10%)",
                marginLeft: "50px",
                zIndex: 1000,
                backgroundColor: "white",
                
                minWidth: "100%",
                borderRadius: " 0 0 20px 20px"
              }}
                >
                  <Stack direction="column" ml={1} spacing={1}>

                    {state.terms?.slice(5).map((term,i)=>{
                      
                      
                      return(
                        <Button
                          key={term}
                          sx={{
                            textTransform: "none",
                              color:"#222",
                              display: "flex",
                              justifyContent: "flex-start"
                            }}

                            onClick={(e)=>{
                              setSearchTerm(term)
                              setShow(false)
                              handleSubmit(e)}}
                        >

                        <Typography >
                          {term}
                        </Typography>
                        </Button>
                      )
                          
                    }
                    
                    )
                    
                  }           
                  </Stack>
              </Box>
              : ""
              
            }
                </Box>
          <StyledButton 
            sx={{
              borderRadius: "100px",
              backgroundColor: "#fadb75",
              minWidth: "20%",
              padding: ".5em",
              margin: ".25em .25em",
              color: "#7d511c",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "1em"
            }}

            type="submit"
            >
              Search
          </StyledButton>
        </StyledBox>
        </form>
          </StyledBox>
    </Box>
  )
}

export default SearchBar