import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import * as React from 'react';
import Carrusel from './carrusel';
import AppBar from './appbar';
import Secciones from './secciones';

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
            <Secciones titulo="Lo nuevo de Netflix" cards={N_cards} />
            <Secciones titulo="Volver a verlo" cards={v_cards} />
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
//Lo nuevo de Netflix
const N_cards = [
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
