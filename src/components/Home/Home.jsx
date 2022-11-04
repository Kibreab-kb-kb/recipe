import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { StyledButton, StyledPaper, StyledTypography } from './styles'
import {motion} from 'framer-motion'
import { ButtonVariant, GridVariant, ImageVariant, ItemVariant } from './Variants'
import Front from '../../img/front.png'
import Wood from '../../img/wood.jpg'

const Home = () => {
  return (
      <Grid container pt={8}>
        <Grid container spacing={2} p={4} >
            <Grid 
                item 
                md={6} 
                mt={10} 
                component={motion.div}
                variants={GridVariant}
                initial="initial"
                animate="then"
            >
                <StyledTypography  variant="h2" fontWeight="bold" component={motion.h2} variants={ItemVariant} >
                    Pure exotic taste
                </StyledTypography>
                <Typography variant="h6" mt={3} sx={{
                    lineHeight:"1.8",
                    opacity: .8
                }} 
                    component={motion.h6}
                    variants={ItemVariant}            
                >
                    Make your dream meal from the comfort of <br />your home. Fresh, delicious, and loving!
                </Typography>
                
                
                    
                    <StyledPaper component={motion.div} variants={ItemVariant} >

                        <StyledButton>
                        
                                <Typography>
                                    Browse Dishes
                                </Typography>
                        
                        </StyledButton>
                    </StyledPaper>
            
        

            </Grid>
            <Grid item md={6} sx={{position: "relative"}}>
                <motion.img src={Front} 
                    variants={ImageVariant} 
                    initial="initial" 
                    animate="then"/>
                
            </Grid>
            <Box
                sx={{
                    width: "800px",
                    height: "800px",
                    backgroundImage: `url(${Wood})`,
                    position: "absolute",
                    top: -50,
                    left: "65%",
                    borderRadius: "100%",
                    zIndex: -1000
                }}>

                </Box>
        </Grid>
        <Grid container pt={10}  sx={{
            textAlign: "center",
            display: "flex",
            justifyContent:"space-around",
            flexDirection:"column",
            width: "100vw",
            color: "#00aeff"
        }}>
           <Typography variant="h3">
                Advantages   
            </Typography>
            <Stack direction="row">
                
            </Stack>    
        </Grid>
    </Grid>

  )
}

export default Home