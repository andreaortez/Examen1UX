import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Stack from '@mui/material/Stack';
import { Card, CardActions, CardActionArea , CardMedia, CardContent, IconButton, Typography, useMediaQuery, useTheme} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import LinearProgress from '@mui/material/LinearProgress';

// Interfaces
interface Propiedades {
    titulo: string;
    cards: {
        imagen: string;
        titulo: string;
        edad: string;
        detalle: string;//Si son series N° de temporadas, si son películas duración
        info: string;
        barra?: number;
        url: string;
    }[];
    
}

interface CardProp {
    titulo: string;
    imagen: string;
    edad: string;
    detalle: string;//Si son series N° de temporadas, si son películas duración
    info: string;
    barra?: number;
    url: string;
}

// Functions
function Secciones({ titulo, cards }: Propiedades) {
    // Variables
    const [showCards, setShowCards] = useState(6);
    const smallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
    const mediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
    const largeScreen = useMediaQuery(useTheme().breakpoints.down('lg'));
    const xlargeScreen = useMediaQuery(useTheme().breakpoints.down('xl'));

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

    const row = () => {
        const n_stack = Math.ceil(cards.length / showCards);
        return Array.from({ length: n_stack }).map((_, i) => (
            <Stack key={i} direction={"row"} spacing={1} sx={{ justifyContent: "center" }}>
                {cards.slice(i * showCards, i * showCards + showCards).map((card, index) => (
                    <Item key={index} imagen={card.imagen} titulo={card.titulo}
                        edad={card.edad} detalle={card.detalle} info={card.info} url={card.url} barra={card.barra} />
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
                navButtonsAlwaysInvisible={cards.at(0)?.barra ? true : false}
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

const Item = ({ imagen, titulo,edad,detalle,info,barra,url}: CardProp) => {
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
                    {isHovered ? (
                        <CardMedia
                            component="iframe"
                            src={url}
                            title={titulo}
                            sx={{
                                maxHeight: '200px',
                                width: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    ) : (
                        <div style={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                image={imagen}
                                alt={titulo}
                                sx={{ maxHeight: '200px', objectFit: 'cover' }}
                            />
                            {barra && (
                                <LinearProgress
                                    variant="determinate"
                                    value={barra} // Replace 50 with a dynamic value if needed
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '100%',
                                        height: '4px',
                                        backgroundColor: 'lightgray', 
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: 'red', 
                                            },
                                    }}
                                />
                            )}
                        </div>
                    )}

                    {isHovered && (
                        <CardContent style={{ maxWidth: 200 }}>
                            <CardActions>
                            <IconButton aria-label="play">
                                <PlayCircleFilledWhiteOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="add">
                                <AddCircleOutlineOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="recommended">
                                <RecommendOutlinedIcon />
                            </IconButton>
                            <IconButton>
                                <ExpandCircleDownOutlinedIcon />
                            </IconButton>
                            </CardActions>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {edad}{" "}{detalle}{" "}HD
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {info}
                            </Typography>
                            
                        </CardContent>
                    )}
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Secciones;