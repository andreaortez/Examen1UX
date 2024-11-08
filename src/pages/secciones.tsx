import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia,Typography, Grid } from '@mui/material';

interface Propiedades {
    titulo: string;
}

function Secciones({titulo}:Propiedades) {
    const items = [
        {
            image: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
            title: "Anne with an E"
        },
        {
            image: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
            title: "Gossip Girl"
        },
        {
            image: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
            title: "Twilight"
        },
        {
            image: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
            title: "Anne with an 0"
        },
        {
            image: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
            title: "Gossip Girl"
        },
        // elementos
    ];
    return (
        <div>
            <Typography variant='h6'>{titulo}</Typography>
            <Carousel indicators={false} autoPlay={false} sx={{ width: '100vw' }}>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

function Item(props: any) {
    return (
        <Card sx={{ maxWidth: '20vw' }}>

            <CardMedia
                component="img"
                height="140"
                image={props.item.image}
                alt={props.item.title}
            />
        </Card>
    )
}


export default Secciones;