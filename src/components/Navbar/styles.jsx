import { Box, AppBar, Toolbar, Typography, InputBase } from "@mui/material";
import { styled } from "@mui/material";


export const StyledAppBar = styled(AppBar)(({theme})=>({
    backgroundColor: "transparent",
    position: "sticky",
 
}))

export const StyledToolbar = styled(Toolbar)(({theme})=>({
    display: "flex",
    justifyContent:"space-between",
    color: "#B77729",
    
   
}))

export const StyledTypography = styled(Typography)(({theme})=>({
    cursor: "pointer",
    transition: "all ease-in-out .1s",
    position: "relative",
    color: theme.palette.grey[800],
    "&:after":{
        content:'""',
        width: "100%",
        height: "2px",
        backgroundColor: theme.palette.grey[800],
        left: 0,
        position: "absolute",
        bottom: 0,
        transition: "all ease-in-out .3s",
        transform: "scale(0,1)"
    },

    "&:hover:after":{
     
        transform: "scale(1,1)"
    }

}))

export const StyledInputBase = styled(InputBase)(({theme})=>({
    position: "relative",
    transition: "all ease-in-out .3s",
    "&:after":{
        content:'""',
        width: "110%",
        height: "2px",
        backgroundColor: "white",
        left: 0,
        position: "absolute",
        bottom: 0,
        transition: "all ease-in-out .3s"
    },
   

}))

export const InputBox = styled(Box)(({theme})=>({
    display: "flex",
    alignItems: "center",
    minWidth:"225px",
    justifyContent:"space-between",
    cursor:"pointer",
    color: "white"
}))

