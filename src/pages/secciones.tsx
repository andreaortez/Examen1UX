import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel';
import Stack from '@mui/material/Stack';
import { Card, CardMedia, CardContent, Typography, useMediaQuery, useTheme, CardActionArea } from '@mui/material';

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
        maxWidth: '100%', // Full width on extra-small screens
    },
    [theme.breakpoints.up('sm')]: {
        maxWidth: '45%', // 45% width on small screens
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: '30%', // 30% width on medium screens
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: '20%', // 20% width on large screens
    },
    "&:hover": {
        transform: "scale3d(1.25, 1.25, 1)",
        position: 'relative',
        zIndex: 10,
    }
}));
// Update Typography styling to ensure it doesn't interfere
const StyledTypography = styled(Typography)(({ theme }) => ({
    position: 'relative',  // Ensure it has a positioning context
    zIndex: 1, // Give it a lower z-index than the card
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
            <StyledTypography
                variant='h6'
                sx={{
                    mt: { xs: 0.5, sm: 1, md: 1.5 },
                    mb: { xs: 0.5, sm: 1, md: 1.5 },
                    ml: { xs: 1, sm: 2, md: 3 },
                }}
            >
                {titulo}
            </StyledTypography>

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
    );
}

function Item({ imagen, titulo }: cardProp) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledCard
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            raised={isHovered}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={imagen}
                    alt={titulo}
                    sx={{ maxHeight: '200px', objectFit: 'cover' }} // Adjusts image styling for better display
                />
            </CardActionArea>
        </StyledCard>
    );
}

export default Secciones;
