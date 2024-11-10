import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Box from '@mui/material/Box';

interface imagen {
    logo: string;
    sinopsis: string;
    poster: string;
    ageRating: string;
}

function Carrusel() {
    const slide: imagen[] = [
        {
            logo: "/imagenes/Money-Heist-TV-Series-Transparent-PNG.png",
            sinopsis: "Ocho atracadores toman rehenes en la Fábrica Nacional de la Moneda y Timbre española. Desde el encierro, su líder manipula a la policía para llevar a cabo un ambicioso plan.",
            poster: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc7R0qrWkseUdnsSLyVh5e5e_vgCraODavnyye0ZsJ7K7N4TlqDHzksDensvy44ZEZ8ukX6FqFnvA_UA3y0foZ3S7ye9vbsTEe1c.jpg?r=244",
            ageRating: "16+"
        },
        {
            logo: "/imagenes/wednesday.png",
            sinopsis: "Inteligente, sarcástica y un poco muerta por dentro, Merlina Addams investiga una ola de asesinatos mientras hace nuevos amigos (y enemigos) en la Academia Nunca Más.",
            poster: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXErLwqyljXtI6mMH6VMnF6B1L4085vOdGb62ZhaqZTL04oFjCUhzdkkK434vs50cKZVHoPJ2pNc-JY4dSw0UoyBRAZiD7sNADpJ.jpg?r=615g",
            ageRating: "13+"
        },
        {
            logo: "/imagenes/Stranger-Things-logo.png",
            sinopsis: "En 1983, un niño desaparece en plena noche. Sus amigos aplican su experiencia con juegos de rol para encontrarlo, pero algo extraño se retuerce debajo de la superficie.",
            poster: "/imagenes/465b406173028aa3d4b9def1be5d9dba.jpg",
            ageRating: "16+"
        },
        {
            logo: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUptnGA5PuT6zRp-GyzW2zKGzTITMPmhBUbI33s5y_7QqylLfYOL8bkxAvc2litm3FRrzVfprsPChmhTRXYqvF8-ZpsRgVW7ZZ74bh17itQxM0h7svhoqTe8BIkgK-_uP8HHMizTOIcuHoLEs-INupgA-4zQQwQk-OkQFDCMx_yoyd1SCWQgwg.png?r=90b",
            sinopsis: "Mientras las debutantes anhelan ser los diamantes más relucientes del baile, una discreta gema con una doble vida descubre su propio brillo entre secretos y sorpresas.",
            poster: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSnaAaERnfVT8smuWuTPQxLOPFiSz_QuZAQrXMtHpFbvwOBYbcT6aS13tbPvTGnuWF0UbGZSLhRohbMY6jH2t33HaLRM6z4kE0C2.jpg?r=036",
            ageRating: "16+"
        },
        {
            logo: "https://www.pngplay.com/wp-content/uploads/12/Jumanji-Free-PNG.png",
            sinopsis: "Un videojuego absorbe a cuatro estudiantes. Una vez en la selva, deben enbarcarse en una búsqueda en sus avatares, que no coinciden para nada con la realidad.",
            poster: "https://i.blogs.es/1932bb/cartel-jumanji-bienvenidos-a-la-jungla/1366_2000.jpg",
            ageRating: "13+"
        }
    ]

    return (
        <Carousel indicators={false} sx={{ width: '100vw' }}>
            {
                slide.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props: any) {
    return (
        <Paper
            style={{
                backgroundImage: `url(${props.item.poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '631px',
                color: 'white',
                position: 'relative',
                padding: '20px',
                fontFamily: 'Netflix Sans'
            }}
        >
            {/* Capa oscura en degradado*/}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
                    zIndex: 1,
                }}
            ></div>

            {/* Contenido del carrusel */}
            <div style={{
                position: 'absolute',
                bottom: '100px',
                left: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '10px',
                paddingRight: '60%',
                zIndex: 2,
                paddingLeft: '5px'
            }}>
                <img src={props.item.logo} alt="logo" width="80%" height="20%" />
                <p id="sinopsisStyle">{props.item.sinopsis}</p>
                <div id="buttonsStyle">
                    <Button className="CheckButton" id="playButton" style={{ textTransform: 'none' }}>
                        <img
                            src="./imagenes/tocar.png"
                            alt="Play"
                            style={{ width: "22px", height: "22px" }}
                        />
                        Reproducir
                    </Button>
                    <Button className="CheckButton" id="infoButton" style={{ textTransform: 'none' }}>
                        <img
                            src="./imagenes/informacion.png"
                            alt="Play"
                            style={{ width: "25px", height: "25px" }}
                        />
                        Más información
                    </Button>
                </div>
            </div>
            <Box id="ageStyle" sx={{
                position: 'absolute',
                right: '0px',
                top: '69%',
                alignItems: 'center',
                borderLeft: '3px solid white',
                color: 'white',
                zIndex: 2,
                display: { xs: 'none', md: 'flex' }
            }}>
                <p>{props.item.ageRating}</p>
            </Box>
        </Paper >
    )
}

export default Carrusel;