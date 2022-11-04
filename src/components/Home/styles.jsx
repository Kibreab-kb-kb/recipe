import { Typography, styled, Button, Paper } from "@mui/material";

export const StyledTypography = styled(Typography)(({theme})=>({
    color: "transparent",
    backgroundClip: "text",
    backgroundImage: "linear-gradient(45deg, #09009f, #00ff95 80%)"
}))

export const StyledPaper = styled(Paper)(({theme})=>({
    borderRadius: "100px",
    color: "white",
    position: "relative",
    backgroundColor: "#A77729",
    transform: "translateX(50%)",
    maxWidth: "150px",
    textAlign: "center",
    alignItems:"center",
    marginTop: theme.spacing(4),
    



    "&:hover":{
        boxShadow: "0 20px 30px -7px rgba(0,0,0,.5)",
        transform: "TranslateY(-15%) translateX(50%)",
        transition: "all ease-in-out .3s"
    }

}))

export const StyledButton = styled(Button)(({theme})=>({
    borderRadius: "500px",
    color: "white",
    textTransform: "none",
    width: "100%",
    padding: theme.spacing(2)
}))