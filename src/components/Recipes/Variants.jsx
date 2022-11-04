export const TextVariant = {
    initial:{
       opacity: 0,
        y: "-15vh"
    },
    then:{
        opacity: 1,
        y: 0,

        transition:{
            duration: 1,
            type: "spring",
            bounce: .5,
            staggerChildren:.1,
        }
    }
}

export const TextItemVariant = {
    initial:{
        opacity: 0,
         y: "-15vh"
     },
     then:{
         opacity: 1,
         y: 0,

        
    }
}

export const SearchBoxVariant = {
    initial:{
        scale: 0,
    },
    then:{
        scale:1,
        transition:{
            duration:1,
            delay: .35,
            type:"spring",
            bounce: .55
        }
    }
}

export const CuisineSliderVariant = {
    initial:{
        x: "200vw"
    },
    then:{
        x: 0,
        transition: {
            duration: 1,
            type: "spring",
            delay: .5
        }
    }
}

export const CuisineStackVariant = {
    initial:{
        x: "300vw"
    },
    then:{
        x: "-25vw",
        transition: {
            duration: 1,
            type: "spring",
            
            delay: 1
        }
    }
}

export const RecipeVariant = {
    initial:{
        y: "10vw",
        scale: .1
    },
    then:{
        y: 0,
        scale:1,
        transition: {
            duration: 1,
            type: "spring",
            bounce: .25,
            staggerChildren:.1,
            
        }
    }
}

export const RecipeItemVariant = {
    initial:{
        y: "10vw",
        scale: .1
    },
    then:{
        y: 0,
        scale:1,
      
    }
}