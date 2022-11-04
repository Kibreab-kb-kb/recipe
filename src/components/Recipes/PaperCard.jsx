import React from 'react'
import {Box, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';
import { StyledCard } from './styles';
import { motion, AnimatePresence } from 'framer-motion'
import { RecipeVariant } from './Variants';

const PaperCard = ({label, img, yields, }) => {
  return (
    <>
    <StyledCard
      component={motion.div}
      layout
      sx={{
        minWidth: "300px",
        maxWidth: "300px",
        height: "300px"
        
      }}

    
    >
      <CardMedia
        component="img"
        height="180"
        image={img}
        alt="green iguana"
      />

      <CardContent 
        sx={{
          padding:"1em",
          height: "15%",
        }}
      >
        <Typography gutterBottom variant="body" 
          fontWeight="bold"
        >
          {label}
        </Typography>
      </CardContent>
      <CardActions color="primary">
        <PeopleIcon />
        <Typography variant="body2">
          {yields}
        </Typography>
      </CardActions>
    </StyledCard>


</>
  )
}

export default PaperCard