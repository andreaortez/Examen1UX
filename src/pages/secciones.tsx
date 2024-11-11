import React, { memo, useEffect, useState } from 'react';
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

interface CardProp {
    titulo: string;
    imagen: string;
}



// Functions
const Secciones = ({ titulo, cards }: Propiedades) => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const mediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const largeScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const xlargeScreen = useMediaQuery(theme.breakpoints.down('xl'));

    const [showCards, setShowCards] = useState(5);

    useEffect(() => {
        if (smallScreen) {
            setShowCards(2);
        } else if (mediumScreen) {
            setShowCards(3);
        } else if (largeScreen) {
            setShowCards(4);
        } else {
            setShowCards(5);
        }
    }, [smallScreen, mediumScreen, largeScreen, xlargeScreen]);

    const row = () => {
        const n_stack = Math.ceil(cards.length / showCards);
        return Array.from({ length: n_stack }).map((_, i) => (
            <Stack key={i} direction={"row"} spacing={1} sx={{ justifyContent: "center" }}>
                {cards.slice(i * showCards, i * showCards + showCards).map((card, index) => (
                    <Item key={index} imagen={card.imagen} titulo={card.titulo} />
                ))}
            </Stack>
        ));
    };

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
                    mr: { xs: 1, sm: 2, md: 3 },
                }}
            >
                {row()}
            </Carousel>
        </div>
    );
};

const Item = ({ imagen, titulo }: CardProp) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                position: 'relative',
                overflow: 'visible',
            }}
        >
            <Card
                raised={isHovered}
                sx={{
                    transform: isHovered ? "scale(1.25)" : "scale(1)",
                    zIndex: isHovered ? 10 : 1,
                    transition: "transform 0.15s ease-in-out",
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
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
                        <CardContent style={{ maxWidth: 200 }}>
                            <Typography variant="body2">{titulo}</Typography>
                            <Typography variant="body2">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the
                                mussels, if you like.
                            </Typography>
                        </CardContent>
                    )}
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Secciones;