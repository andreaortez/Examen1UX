import React, { memo, useEffect, useState } from 'react';
import { styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel';
import Stack from '@mui/material/Stack';
import { Card, CardMedia, CardContent, Typography, useMediaQuery, useTheme, CardActionArea, CardProps } from '@mui/material';

// Interfaces
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
//TOdo  de Styled se supone que es pal hover, pero capaz cambie
const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: '100%',
    transition: "transform 0.15s ease-in-out",
    position: 'relative',

    [theme.breakpoints.up('xs')]: {
        maxWidth: '100%',
    },
    [theme.breakpoints.up('sm')]: {
        maxWidth: '45%',
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: '30%',
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: '20%',
    },
    "&:hover": {
        transform: "scale3d(1.25, 1.25, 1)",
        zIndex: 10,
        transformOrigin: 'center'
    }
}));

// Functions
function Secciones({ titulo, cards }: Propiedades) {
    // Variables
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
        );
    };

    useEffect(() => {
        if (smallScreen) {
            setShowCards(2);
        } else if (mediumScreen) {
            setShowCards(3);
        } else if (largeScreen) {
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
                animation="slide"
                sx={{
                    zIndex: 1,
                    overflow: 'visible',
                    "&:hover": {
                        zIndex: 10,
                    },
                    width: '95vw',
                    mt: { xs: 0.5, sm: 1, md: 1.5 },
                    mb: { xs: 0.5, sm: 1, md: 1.5 },
                    ml: { xs: 1, sm: 2, md: 3 },
                }}
            >
                {row()}
            </Carousel>
        </div>
    );
}
function Item({ imagen, titulo }: cardProp) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledCard raised={isHovered}>
            <CardActionArea
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <CardMedia
                    component="img"
                    image={imagen}
                    alt={titulo}
                    sx={{ maxHeight: '200px', objectFit: 'cover' }}
                />
                {isHovered && (
                    <CardContent>
                        <Typography variant="h6">{titulo}</Typography>
                        <Typography variant="body2">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the
                            mussels, if you like.
                        </Typography>
                    </CardContent>
                )}
            </CardActionArea>
        </StyledCard>
    );
};


export default Secciones;
