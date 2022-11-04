import { Box, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Modal = () => {

    const [data, setData] = useState([])
    const params = useParams()

    

    const fetchApi = async(id) => {
    

      const request = {
        method: 'GET',
        url : `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=90832c6b&app_key=56b2b02c4315676780486ec6132c6123`
      }
      
      const res = await axios(request)
      const result = await res.data

      setData(result)
    }


    useEffect(()=>{
      const call = async() => {
        await fetchApi(params.id)
      }

      call()
    }
     
    ,[])


    console.log(data)

  return (
    <>
      <Box>
          <Grid container>
            <Grid item md={12} >
                <Typography variant="h2"sx={{
              display: "flex",
              justifyContent: "space-between",
              
            }}>
                    {data.recipe?.label}
                </Typography>
            </Grid>
            <Grid item md={3}>
              <img src={data.recipe?.image} />
            </Grid>
            <Grid item md={6}>
              <ul>
                {data.recipe?.ingredientLines.map((ingredient,i)=>{
                  return(
                    <li key={i}>{ingredient}</li>
                  )
                })}
              </ul>
            </Grid>
          </Grid>
      </Box>
    </>
  )
}

export default Modal