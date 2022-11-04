import { ModeNight } from '@mui/icons-material'
import { Stack, Box, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { StyledInputBase, StyledAppBar, StyledToolbar, StyledTypography, InputBox } from './styles'
import { darkMode } from '../../App'
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import {AnimatePresence, motion} from 'framer-motion'
import { InputVariant } from './Variants'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [dark, toggleTheme] = useContext(darkMode)

  const [searchBar, setSearchBar] = useState(false)

  return (
    <>
        <StyledAppBar elevation={0} sx={{backgroundColor:"primary"}}>
            <StyledToolbar   >
              <Box
                mr={10}
                              
                sx={{
                    fontWeight: "bold", 
                    background: "#A77729",
                    backgroundClip: "text",
                    color: "transparent",
                    padding: "10px"                  
                  }}
              >
                <Typography 
                  variant="h4"
                  sx={{
                    fontFamily: "'Pacifico', cursive",
                    fontStyle:"italic",
                   
                  }}
                >  
                  Foody!
                </Typography>
              
              </Box>
              <Box>
                  <Stack 
                    direction="row"
                    spacing={18}
                    alignItems="center"
                  >
                    
                      <StyledTypography variant="body" fontWeight="bold">
                        <Link to="/" style={{textDecoration: "none", color:"inherit"}}>
                          Home
                        </Link>
                    
                      </StyledTypography>
                      <StyledTypography variant="body" fontWeight="bold">
                        <Link to="/recipes"  style={{textDecoration: "none", color:"inherit"}}>Recipes</Link>
                    
                      </StyledTypography>
                      <StyledTypography variant="body" fontWeight="bold">
                        <Link to="contact"  style={{textDecoration: "none", color:"inherit"}}>

                        Contact
                        </Link>
                    
                      </StyledTypography>
                 
                 

                  </Stack>
                </Box>

                <Box>
                  <Box >
                    
                      <InputBox>
                      <AnimatePresence exitBeforeEnter>

                        {searchBar?
                          <motion.div
                            key="input"
                            className="animatable"
                            variants={InputVariant}
                            initial="initial"
                            animate="then"
                            exit="exit"
                          >
                              <StyledInputBase                                  
                                placeholder="Search..." autoFocus />
                            </motion.div>:
                            <div></div>
                          }
                      
                        </AnimatePresence>
                                   
                      <SearchIcon  onClick={()=>setSearchBar(prev=>!prev)}/>
                    </InputBox>
                  </Box>
                </Box>
            </StyledToolbar>
        </StyledAppBar>
    </>
  )
}

export default Navbar