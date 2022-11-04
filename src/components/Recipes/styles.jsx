import { Button, InputBase, styled, Box, Card } from "@mui/material";


export const StyledInputBase = styled(InputBase)(({theme})=>({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    borderRadius: "100px",
    minWidth: "30vw"


    
}))

export const StyledButton = styled(Button)(({theme})=>({
    boxShadow: theme.shadows[3],
    
    "&:hover":{
        backgroundColor: "#ffe382",
        boxShadow: theme.shadows[4]
    }
}))


export const StyledBox = styled(Box)(({theme})=>({
    margin: "0 auto!important",
    float: "none",
    display: "flex",
    alignItems: "center",
    background: "white",
    borderRadius: "100px",
    boxShadow: theme.shadows[24],
    width: "45vw!important",
    justifyContent:"space-between",
    "&.Mui-focused":{
        boxShadow: theme.shadows[24],
    }
}))

export const StyledCuisineButton = styled(Button)(({theme})=>({
    textTransform: "none",
    backgroundColor: "#fadb75",
    borderRadius: "100px",
    boxShadow: theme.shadows[5],
    minWidth: "135px",
    maxHeight: "40px",
    padding: "0 .2em",
    transform: "scale(.85)",
    color: "black",
    fontFamily: "'Comfortaa', cursive",

    "&.selected":{
        background: "white"
    }
}))

export const StyledCuisineBox = styled(Box)(({theme})=>({
    boxShadow: "inset 0px 0px 5px 0px rgba(0,0,0,.25)",
    borderRadius: theme.shape.borderRadius*8,
    padding: ".25em 0",
    width: "90vw",
    position: "relative",
    overflow: "hidden",
    cursor: "grab",
    "&:active":{
        cursor: "grabbing"
    }

    
}))


export const StyledCard = styled(Card)(({theme})=>({
    transition: "all ease .3s",
    cursor: "pointer",
    borderRadius: "10px",

    "&:hover":{
        transform: "scale(1.05)",
        backgroundColor: "#fff",
        boxShadow: theme.shadows[15]
    }
}))