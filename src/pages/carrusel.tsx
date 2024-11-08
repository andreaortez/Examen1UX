import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Carrusel() {
    var items = [
        {
            logo: "/imagenes/Money-Heist-TV-Series-Transparent-PNG.png",
            sinopsis: "Ocho atracadores toman rehenes en la Fábrica Nacional de la Moneda y Timbre española. Desde el encierro, su líder manipula a la policía para llevar a cabo un ambicioso plan.",
            poster: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/08/casa-papel-5a-2453721.jpg?tf=3840x"
        },
        {
            name: "Random Name #2",
            sinopsis: "Hello World!",
            poster: "https://www.magazinespain.com/wp-content/uploads/2019/06/la-casa-de-papel-3-poster-portada.jpg"
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props: any) {
    return (
        <Paper
            style={{
                backgroundImage: `url(${props.item.poster})`,  // Usa la imagen como fondo
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px',  // Ajusta la altura
                color: 'white',
                position: 'relative',
                padding: '20px'
            }}
        >
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '10px',
                paddingRight: '50%'
            }}>
                <img src={props.item.logo} alt="logo" width="80%" height="20%" />
                <p>{props.item.sinopsis}</p>
                <Button className="CheckButton" id="playButton">
                    <img
                        src="./imagenes/tocar.png"
                        alt="Play"
                        style={{ width: "5%", height: "5%" }}
                    />
                    Reproducir
                </Button>
            </div>

        </Paper>
    )
}

export default Carrusel;