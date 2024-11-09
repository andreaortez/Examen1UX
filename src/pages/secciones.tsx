import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Stack from '@mui/material/Stack';
import { Card, CardMedia, Typography, useMediaQuery, useTheme, Grid } from '@mui/material';
import { ShowChart } from '@mui/icons-material';

//Interfaces
interface Propiedades {
    titulo: string;
    cards: { 
        imagen: string;
        titulo: string;
    }[];
}
interface cardProp {
    titulo: string;
    imagen: string;
}


//Funciones
function Secciones({ titulo, cards }: Propiedades) {
    //Variables fijas
    const [showCards, setShowCards] = useState(6);
    const smallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
    const mediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
    const largeScreen = useMediaQuery(useTheme().breakpoints.down('lg'));
    const xlargeScreen = useMediaQuery(useTheme().breakpoints.down('xl'));
    const row = () => {


        let n_stack = Math.ceil(cards.length / showCards);
        return (
            Array.from({ length: n_stack }).map((item, i) =>
                <Stack key={i} direction={"row"} spacing={1} sx={{ justifyContent: "center" }}>
                    {
                        cards.slice(i * showCards, i * showCards + showCards).map((card, index) => (
                            <Item key={index} imagen={card.imagen} titulo={card.titulo} />
                        ))
                    }
                </Stack>
            )
        )
    }

    useEffect(() => {
        if (smallScreen) {
            setShowCards(2);
        } else if (mediumScreen) {
            setShowCards(3);
        }
        else if (largeScreen) {
            setShowCards(4);
        } else if (xlargeScreen) {
            setShowCards(6);
        }
    }, [smallScreen, mediumScreen, largeScreen, xlargeScreen]);

    return (
        <div>
            <Typography
                variant='h6'
                sx={{
                    mt: { xs: 0.5, sm: 1, md: 1.5 }, 
                    mb: { xs: 0.5, sm: 1, md: 1.5 }, 
                    ml: { xs: 1, sm: 2, md: 3 }, 
                }}
            >
                {titulo}
            </Typography>
    
            <Carousel
                indicators={false}
                autoPlay={false}
                sx={{
                    width: '95vw',
                    mt: { xs: 0.5, sm: 1, md: 1.5 }, 
                    mb: { xs: 0.5, sm: 1, md: 1.5 }, 
                    ml: { xs: 1, sm: 2, md: 3 }, 
                }}
            >
                {row()}
            </Carousel>
        </div>
    )
    
}

function Item({ imagen, titulo }: cardProp) {
    return (
        <Card sx={{ flexBasis: { xs: "45%", sm: "30%", md: "20%" }, maxWidth: "100%" }}>

            <CardMedia
                component="img"
                image={imagen}
                alt={titulo}
            />
        </Card>
    )
}


export default Secciones;