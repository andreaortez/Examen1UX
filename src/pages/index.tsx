import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import * as React from 'react';
import Carrusel from './carrusel';
import AppBar from './appbar';
import Secciones from './secciones';
import Footer from './footer';

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function Home() {
    return (
        <>
            <Head>
                <link rel="icon" href="/imagenes/netflixLogo.png" />
                <title>Netflix</title>
            </Head>
            <AppBar />
            <Carrusel />
            <Secciones titulo="Continuar Viendo" cards={cv_cards} />
            <Secciones titulo="Romance" cards={r_cards} />
            <Secciones titulo="Series premiadas" cards={sp_cards} />
            <Secciones titulo="Favoritos del público" cards={fp_cards} />
            <Secciones titulo="Series Dramáticas" cards={N_cards} />
            <Secciones titulo="Volver a verlo" cards={v_cards} />
            <Footer />
        </>
    );
}

//(12 cards para que haya simetria en las operaciones matematicas del showCards)
//Continuar Viendo Cards 
const cv_cards = [
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an E"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an 0"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an E"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an 0"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    // agregar/editar mas elementos no le se a Netflix :')
];
//Romance Cards
const r_cards = [
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an E"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an 0"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an E"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an 0"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    // agregar/editar mas elementos no le se a Netflix :')
];
//Series premiadas
const sp_cards = [
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an E"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an 0"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an E"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an 0"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    // agregar/editar mas elementos no le se a Netflix :')
];
//Favoritos del público
const fp_cards = [
    {
        imagen: "https://www.natasjaonline.nl/wp-content/uploads/20181112-la-casa-de-papel.jpg",
        titulo: "La Casa de Papel"
    },
    {
        imagen: "https://pbs.twimg.com/media/FD2Zu2BWQAEdOmu.jpg:large",
        titulo: "Riverdale"
    },
    {
        imagen: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ7ZdH174DQXtc-Nwij90sXbIdj_wymzelGtsPoLWjyyQNHToo36rKEte-WdQ2j476J8IduCXcALjHXhLbga3QlidKsA3FbSULTiDc5doA5samf4vIFhRj9QAZDmu0a-NZr6Qg.jpg?r=ba6",
        titulo: "13 Reasons Why"
    },
    {
        imagen: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRb2lXsm6CuKe9xekeQbUJ4XVX5SxHoEvt9zVlLTajfl0s73EHkTIYGZHlclz0P-5Zn7SJP7s06zlq26IlpA14DL4V8Z_5vjKdZON8PosPq2TowOFMGYyv458nfJAPL2-xezYg.jpg?r=2f8",
        titulo: "Queen Charlotte"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABepf9edTvCH-NdiTRbwewk9cevGjQrtfRRtJe4IVSWQAyU4iI1FLeuSsD-jPQy7LbxPWrkXPh7Jlq2pKCeElFRIhFNhspEWbd128u8wogEgwJzSHfoEVg4if3Qie8hHMzSM7Lw.webp?r=1ff",
        titulo: "You"
    },
    {
        imagen: "https://www.heavenofhorror.com/wp-content/uploads/2021/09/squid-game-netflix-review.jpg",
        titulo: "Squid Game"
    },
    {
        imagen: "https://odysseynewsmagazine.net/wp-content/uploads/2018/04/alexa-and-katie-1.jpg",
        titulo: "Alexa & Katie"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd0Bv5g-GqyxQHei8ZKFgtQmmQOk8Fz9w3-DenVlbiALbbpum4Ok0aSEg4qjjWYgE47O-7i9IfHkvopV-qWG4DpUPwZiT0SOQvN0.jpg?r=21a",
        titulo: "Fate: The Winx Saga"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABckvovw1iqrxj2NNM0TlGfiyo4tWhsB0_nQALO4yhVunGfFc8yDgtkzoTb_gONJ00EOF_tvchFLROblfKg3sLXSOvG-6j5856ANuw86TyCNrrIVMbXSaIh5j1SCmt7ZQevEaUA.webp?r=2c8",
        titulo: "Purple Hearts"
    },
    {
        imagen: "https://occ-0-8407-1001.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQIdpHKApLtiIyY3Cv9c0z8-sAFXsHL5XA5fw1lj-2wmgZ3tL_AxJ_yM-O-hlsg78dT-bNcK7L2CjdkWvn9dkjPazHm4D3BMvF1KKFYFTx88K6VvJhzTTAaKMSCUweDUgRBJQg.jpg?r=027",
        titulo: "A Todos los Chicos de los que me Enamoré"
    },
    {
        imagen: "https://media.licdn.com/dms/image/C4E12AQHeUAUGosjeXQ/article-cover_image-shrink_600_2000/0/1645616618414?e=2147483647&v=beta&t=kvSEVF4JJMfzsfaJQ_A1rJDDIapbhacP84cxzHfOzSU",
        titulo: "Emily en París"
    },
    {
        imagen: "https://ntvb.tmsimg.com/assets/p23063500_b_h8_ad.jpg?w=1280&h=720",
        titulo: "Wednesday"
    },
    // agregar/editar mas elementos no le se a Netflix :')
];
//Series Dramáticas
const N_cards = [
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYjDc3pGyffzUgHX43Www7hkXPnSEOrR58hSukrmnmYQNjktFksLxgnSlnEyMTdhS3OIAawREIvcpbU81CJRDEeUQmmB-LjvBlhn0WrQvbiVhPw2ZHMWhVmvexrACttN-uu-BIHTFc5lOeRWBJ6eNUKNRKhTaAkzmH7a2HovL9k6Nyf8Uhf8sDUA-7S0gEvzTcntDUY2VHeak4upX217VGEp7Jw7LUIeEUOo9FKbQX35pTx_4qtZeMnmBjtzsYv6CJtkqeOT0dKz3dKbzdbONErE17LZqOlNv1yr7U6Ps2a_QUS8iYiNqLukJTvfKBXP8KLoYnuORVex-nd1lvW50TdNsWJ7rYliu-6xnLaPNX1EY1I.webp?r=a7b",
        titulo: "Outer Banks"
    },
    {
        imagen: "https://www.diariodecultura.com.ar/wp-content/uploads/2020/12/Gambito-de-Dama.jpg",
        titulo: "Gambito de Dama"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABepf9edTvCH-NdiTRbwewk9cevGjQrtfRRtJe4IVSWQAyU4iI1FLeuSsD-jPQy7LbxPWrkXPh7Jlq2pKCeElFRIhFNhspEWbd128u8wogEgwJzSHfoEVg4if3Qie8hHMzSM7Lw.webp?r=1ff",
        titulo: "You"
    },
    {
        imagen: "https://occ-0-8407-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd8a42aJ3IszCeJGuQmI-ArelDkFJrgi8mCn50lYYtwGk29XOkVmokWNDxDgJ-iWiwdStrUszuuIV3ztZwJUdyh5601a4f2-0dX_ln0m7lFseIujZX_mHomRjD8Kl4qMg7DLtg.webp?r=a3d",
        titulo: "Sex Education"
    },
    {
        imagen: "https://media.a24.com/p/5552f42a5982614b53f71b8444f5624d/adjuntos/296/imagenes/008/674/0008674192/the-walking-deadpng.png",
        titulo: "The Walking Dead"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeuRpoaXrsl6T63a3pdZURhikMPOs8AjxwPMkcC1cDEVsF2Fdsd5BBiS3Bzog3Cr__IZbAK2Bnp66RK0YmiJnDqUTthkR-_-IrF8FUtZu2SEajNQbZiCqkM7rwdxISXKvCWhyw.webp?r=007",
        titulo: "Orange is the New Black"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb6h5K7kF5r1_x9RDFQ6lKLPfcAqtIIRDLoLbAj3Cl6_rPPA61zj31Wlq8KGanlfEX_CdBZl_XSh64f3VIDcX7YSI00-RGp4ifur.jpg?r=9ff",
        titulo: "Breaking Bad"
    },
    {
        imagen: "https://www.heavenofhorror.com/wp-content/uploads/2021/09/squid-game-netflix-review.jpg",
        titulo: "Squid Game"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRnPMzKK6qT_YBnhoKOAPbPJSmWhYWXa4Y6kr8MXzkeHXoGC9y45EL0oWEFOxnrxvVKwu7sJ4l64gtxqcecTog29erkk8QDV-JKIlTLtlJvmnmgCRGfEBpJmCv9d1Lj3_zCnNQ.webp?r=d7b",
        titulo: "XO, Kitty"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-37.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXIR8fBjQAg-VTYF6FxzdFOdASkSyMO2_M_HdKjvfyeIxKuVO63HCD4Y8NlPbgPh5CjM-JcUCuT8ZDBDlABxYcKrC2q1g5YfFsLta8oJSaFXrDTdIZrzwzhXseL97CJaCVGN3w.jpg?r=b30",
        titulo: "Good Girls"
    },
    {
        imagen: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRb2lXsm6CuKe9xekeQbUJ4XVX5SxHoEvt9zVlLTajfl0s73EHkTIYGZHlclz0P-5Zn7SJP7s06zlq26IlpA14DL4V8Z_5vjKdZON8PosPq2TowOFMGYyv458nfJAPL2-xezYg.jpg?r=2f8",
        titulo: "Queen Charlotte"
    },
    // agregar/editar mas elementos no le se a Netflix :')
];
//Volver a verlo
const v_cards = [
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an E"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an 0"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an E"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an 0"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl"
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcHrq_UTs2hUAYWArWmZOZzkFDi-m9eT-z7Y-in5OSegW4lUAAiKqcV6PYkaKP_gfGyeKTcJP_PpuGu9Fx0LXOsGTKzEnEVV2gX.jpg?r=38f",
        titulo: "Twilight"
    },
    // agregar/editar mas elementos no le se a Netflix :')
];
