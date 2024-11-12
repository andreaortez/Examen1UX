import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import * as React from 'react';
import Carrusel from './carrusel';
import AppBar from './appbar';
import Secciones from './secciones';
import Footer from './footer';

export default function Home() {
    return (
        <>
            <Head>
                <link rel="icon" href="/imagenes/netflixLogo.png" />
                <title>Netflix</title>
            </Head>
            <AppBar />
            <Carrusel />
            <Secciones titulo="Continuar Viendo" cards={typeof cv_cards === "undefined" ? [] : cv_cards} />
            <Secciones titulo="Series para Maratonear" cards={typeof r_cards === "undefined" ? [] : r_cards} />
            <Secciones titulo="Mi Lista" cards={typeof sp_cards === "undefined" ? [] : sp_cards} />
            <Secciones titulo="Favoritos del público" cards={typeof fp_cards === "undefined" ? [] : fp_cards} />
            <Secciones titulo="Series Dramáticas" cards={typeof N_cards === "undefined" ? [] : N_cards} />
            <Secciones titulo="Volver a verlo" cards={typeof v_cards === "undefined" ? [] : v_cards} />
            <Footer />
        </>
    );
}

//(12 cards para que haya simetria en las operaciones matematicas del showCards)
//Continuar Viendo Cards 
const cv_cards = [
    {
        imagen: "https://ntvb.tmsimg.com/assets/p18974714_b_h10_ao.jpg?w=960&h=540",
        titulo: "Bridgerton",
        edad: "16+",
        info: "Drama romántico · Escandaloso · Historia de época",
        detalle: "3 temporadas",
        url: "https://www.youtube.com/embed/NyR6u4aUCa4?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=NyR6u4aUCa4",
        barra: 50,
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl",
        edad: "16+",
        info: "Picante · Misterio · Drama adolescente",
        detalle: "6 temporadas",
        url: "https://www.youtube.com/embed/6eCoR6vmNzQ?si=QrBQPff8PpEAxWIy?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=6eCoR6vmNzQ",
        barra: 50,
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an E",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "3 temporadas",
        url: "https://www.youtube.com/embed/S5qJXYNNINo?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=S5qJXYNNINo",
        barra: 10,

    },

    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYjDc3pGyffzUgHX43Www7hkXPnSEOrR58hSukrmnmYQNjktFksLxgnSlnEyMTdhS3OIAawREIvcpbU81CJRDEeUQmmB-LjvBlhn0WrQvbiVhPw2ZHMWhVmvexrACttN-uu-BIHTFc5lOeRWBJ6eNUKNRKhTaAkzmH7a2HovL9k6Nyf8Uhf8sDUA-7S0gEvzTcntDUY2VHeak4upX217VGEp7Jw7LUIeEUOo9FKbQX35pTx_4qtZeMnmBjtzsYv6CJtkqeOT0dKz3dKbzdbONErE17LZqOlNv1yr7U6Ps2a_QUS8iYiNqLukJTvfKBXP8KLoYnuORVex-nd1lvW50TdNsWJ7rYliu-6xnLaPNX1EY1I.webp?r=a7b",
        titulo: "Outer Banks",
        edad: "16+",
        info: "Aventura · Misterio · Emocionante",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/Abje_mBb7Pc?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=Abje_mBb7Pc",
        barra: 90,
    },
    {
        imagen: "https://www.diariodecultura.com.ar/wp-content/uploads/2020/12/Gambito-de-Dama.jpg",
        titulo: "Gambito de Dama",
        edad: "16+",
        info: "Conmovedor · Inteligente · Drama",
        detalle: "1 temporada",
        url: "https://www.youtube.com/embed/9bu1azQufKk?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=9bu1azQufKk",
        barra: 30,
    },
    {
        imagen: "https://e1.pxfuel.com/desktop-wallpaper/455/336/desktop-wallpaper-dynasty-netflix-dynasty.jpg",
        titulo: "Dinastía",
        edad: "13+",
        info: "Dramático · Glamoroso · Intriga familiar",
        detalle: "3 temporadas",
        url: "https://www.youtube.com/embed/Uq0soWMpkv8?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=Uq0soWMpkv8",
        barra: 40,
    },
];
//Series para Maratonear Cards
const r_cards = [
    {
        imagen: "https://ntvb.tmsimg.com/assets/p23063500_b_h8_ad.jpg?w=1280&h=720",
        titulo: "Wednesday",
        edad: "13+",
        info: "Fantástico · Misterioso · Adolescente",
        detalle: "1 temporada",
        url: "https://www.youtube.com/embed/Di310WS8zLk?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=Di310WS8zLk",
    },
    {
        imagen: "https://ntvb.tmsimg.com/assets/p18974714_b_h10_ao.jpg?w=960&h=540",
        titulo: "Bridgerton",
        edad: "13+",
        info: "Romántico · Drama · Siglo XIX",
        detalle: "3 temporadas",
        url: "https://www.youtube.com/embed/NyR6u4aUCa4?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=NyR6u4aUCa4",
    },
    {
        imagen: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa-9wVzzFizieXcM9ceFRCGt_6jMsNygtN-6c5uXGePyDVSWvpKJ-UdHqiWVhZzMUHSnKUivc0skQmMrMRaCvsx8VHsn3W18RSakfYERLi4u_cIC5EBCitbIvMkzL9PNDaMfEA.jpg?r=44e",
        titulo: "Inventando A Anna",
        edad: "16+",
        info: "Basado en hechos reales · Escandaloso · Drama",
        detalle: "1 temporada",
        url: "https://www.youtube.com/embed/AdAsm37WX4U?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=AdAsm37WX4U",
    },
    {
        imagen: "https://occ-0-8407-448.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVxZ562fXNhjXzg29zfZoWLN7D9ToJkgibe4e3O6C0KEtStbLwc5gCzIy78shsbSrfBTcEMQyhCd1D7CY9-T4EokKo_Ud_VnfzCfQ1sdEBVVtX3gFKKzwzZOwXJU-umkCsEjfg.jpg?r=401",
        titulo: "The Umbrella Academy",
        edad: "13+",
        info: "Acción · Aventura · Drama",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/0DAmWHxeoKw?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=0DAmWHxeoKw",
    },
    {
        imagen: "https://e1.pxfuel.com/desktop-wallpaper/455/336/desktop-wallpaper-dynasty-netflix-dynasty.jpg",
        titulo: "Dinastía",
        edad: "13+",
        info: "Drama · Familia · Lujo",
        detalle: "3 temporadas",
        url: "https://www.youtube.com/embed/Uq0soWMpkv8?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=Uq0soWMpkv8",
    },
    {
        imagen: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ7ZdH174DQXtc-Nwij90sXbIdj_wymzelGtsPoLWjyyQNHToo36rKEte-WdQ2j476J8IduCXcALjHXhLbga3QlidKsA3FbSULTiDc5doA5samf4vIFhRj9QAZDmu0a-NZr6Qg.jpg?r=ba6",
        titulo: "13 Reasons Why",
        edad: "13+",
        info: "Drama · Emotivo · Adolescente",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/0XuOkYlUWIs?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=0XuOkYlUWIs",
    },
    {
        imagen: "https://www.heavenofhorror.com/wp-content/uploads/2021/09/squid-game-netflix-review.jpg",
        titulo: "Squid Game",
        edad: "13+",
        info: "Tensión · Suspenso · Competencia",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/lQBmZBJCYcY?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=lQBmZBJCYcY",
    },
    {
        imagen: "https://www.diariodecultura.com.ar/wp-content/uploads/2020/12/Gambito-de-Dama.jpg",
        titulo: "Gambito de Dama",
        edad: "13+",
        info: "Deporte · Drama · Estrategia",
        detalle: "1 temporada",
        url: "https://www.youtube.com/embed/9bu1azQufKk?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=9bu1azQufKk",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABepf9edTvCH-NdiTRbwewk9cevGjQrtfRRtJe4IVSWQAyU4iI1FLeuSsD-jPQy7LbxPWrkXPh7Jlq2pKCeElFRIhFNhspEWbd128u8wogEgwJzSHfoEVg4if3Qie8hHMzSM7Lw.webp?r=1ff",
        titulo: "You",
        edad: "13+",
        info: "Psicológico · Thriller · Amor",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/ga1m0wjzscU?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=ga1m0wjzscU",
    },
    {
        imagen: "https://www.natasjaonline.nl/wp-content/uploads/20181112-la-casa-de-papel.jpg",
        titulo: "La Casa de Papel",
        edad: "13+",
        info: "Acción · Suspenso · Robos",
        detalle: "5 temporadas",
        url: "https://www.youtube.com/embed/3y-6iaveY6c?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=3y-6iaveY6c",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeuRpoaXrsl6T63a3pdZURhikMPOs8AjxwPMkcC1cDEVsF2Fdsd5BBiS3Bzog3Cr__IZbAK2Bnp66RK0YmiJnDqUTthkR-_-IrF8FUtZu2SEajNQbZiCqkM7rwdxISXKvCWhyw.webp?r=007",
        titulo: "Orange is the New Black",
        edad: "16+",
        info: "Cárceles · Drama · Rehabilitación",
        detalle: "7 temporadas",
        url: "https://www.youtube.com/embed/AiB1iv8DQcg?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=AiB1iv8DQcg",
    },
    {
        imagen: "https://media.a24.com/p/5552f42a5982614b53f71b8444f5624d/adjuntos/296/imagenes/008/674/0008674192/the-walking-deadpng.png",
        titulo: "The Walking Dead",
        edad: "18+",
        info: "Apocalíptico · Terror · Sobrevivencia",
        detalle: "11 temporadas",
        url: "https://www.youtube.com/embed/qwOWJ8pPgk8?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=qwOWJ8pPgk8",
    },
];
//Mi Lista
const sp_cards = [
    {
        imagen: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRb2lXsm6CuKe9xekeQbUJ4XVX5SxHoEvt9zVlLTajfl0s73EHkTIYGZHlclz0P-5Zn7SJP7s06zlq26IlpA14DL4V8Z_5vjKdZON8PosPq2TowOFMGYyv458nfJAPL2-xezYg.jpg?r=2f8",
        titulo: "Queen Charlotte",
        edad: "16+",
        info: "Romance real · Poder político ",
        detalle: "1 temporada",
        url: "https://www.youtube.com/embed/oLtnNw0KT78?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=oLtnNw0KT78",
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an E",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "3 temporadas",
        url: "https://www.youtube.com/embed/S5qJXYNNINo?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=S5qJXYNNINo",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl",
        edad: "13+",
        info: "Drama juvenil · Romance · Secretos de la alta sociedad",
        detalle: "6 temporadas",
        url: "https://www.youtube.com/embed/6eCoR6vmNzQ?si=QrBQPff8PpEAxWIy?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=6eCoR6vmNzQ",
    },
    {
        imagen: "https://www.heavenofhorror.com/wp-content/uploads/2021/09/squid-game-netflix-review.jpg",
        titulo: "Squid Game",
        edad: "18+",
        info: "Juego mortal · Supervivencia · Drama psicológico",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/lQBmZBJCYcY?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=lQBmZBJCYcY",
    },
    {
        imagen: "https://ntvb.tmsimg.com/assets/p18974714_b_h10_ao.jpg?w=960&h=540",
        titulo: "Bridgerton",
        edad: "16+",
        info: "Romance histórico · Drama social · Pasiones prohibidas",
        detalle: "3 temporadas",
        url: "https://www.youtube.com/embed/uF6q-XMA0e0?si=C1o4pAmpApENq1wz?cohttps://www.youtube.com/embed/NyR6u4aUCa4?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=NyR6u4aUCa4",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABepf9edTvCH-NdiTRbwewk9cevGjQrtfRRtJe4IVSWQAyU4iI1FLeuSsD-jPQy7LbxPWrkXPh7Jlq2pKCeElFRIhFNhspEWbd128u8wogEgwJzSHfoEVg4if3Qie8hHMzSM7Lw.webp?r=1ff",
        titulo: "You",
        edad: "16+",
        info: "Thriller psicológico · Romance oscuro",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/ga1m0wjzscU?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=ga1m0wjzscU",
    },
    {
        imagen: "https://media.licdn.com/dms/image/C4E12AQHeUAUGosjeXQ/article-cover_image-shrink_600_2000/0/1645616618414?e=2147483647&v=beta&t=kvSEVF4JJMfzsfaJQ_A1rJDDIapbhacP84cxzHfOzSU",
        titulo: "Emily en París",
        edad: "13+",
        info: "Comedia · Moda · Amor · Sueños",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/lptctjAT-Mk?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=lptctjAT-Mk",
    },
    {
        imagen: "https://ntvb.tmsimg.com/assets/p34319_v_h8_av.jpg?w=1280&h=720",
        titulo: "Mean Girls",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "1 h 37 min",
        url: "https://www.youtube.com/embed/oDU84nmSDZY?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=oDU84nmSDZY",
    },
    {
        imagen: "https://www.natasjaonline.nl/wp-content/uploads/20181112-la-casa-de-papel.jpg",
        titulo: "La Casa de Papel",
        edad: "16+",
        info: "Acción · Suspenso · Robo",
        detalle: "5 temporadas",
        url: "https://www.youtube.com/embed/3y-6iaveY6c?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=3y-6iaveY6c",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABckvovw1iqrxj2NNM0TlGfiyo4tWhsB0_nQALO4yhVunGfFc8yDgtkzoTb_gONJ00EOF_tvchFLROblfKg3sLXSOvG-6j5856ANuw86TyCNrrIVMbXSaIh5j1SCmt7ZQevEaUA.webp?r=2c8",
        titulo: "Purple Hearts",
        edad: "13+",
        info: "Romance · Emocional",
        detalle: "2 h 2 min",
        url: "https://www.youtube.com/embed/WTLgg8oRSBE?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=WTLgg8oRSBE",
    },
    {
        imagen: "https://ntvb.tmsimg.com/assets/p23063500_b_h8_ad.jpg?w=1280&h=720",
        titulo: "Wednesday",
        edad: "13+",
        info: "Misterio · Aventura",
        detalle: "1 temporada",
        url: "https://www.youtube.com/embed/Di310WS8zLk?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=Di310WS8zLk",
    },
    {
        imagen: "https://www.diariodecultura.com.ar/wp-content/uploads/2020/12/Gambito-de-Dama.jpg",
        titulo: "Gambito de Dama",
        edad: "16+",
        info: "Drama · Superación · Desafíos mentales",
        detalle: "1 temporada",
        url: "https://www.youtube.com/embed/9bu1azQufKk?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=9bu1azQufKk",
    },
];
//Favoritos del público
const fp_cards = [
    {
        imagen: "https://www.natasjaonline.nl/wp-content/uploads/20181112-la-casa-de-papel.jpg",
        titulo: "La Casa de Papel",
        edad: "18+",
        info: "Acción · Suspenso · Robo",
        detalle: "5 temporadas",
        url: "https://www.youtube.com/embed/3y-6iaveY6c?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=3y-6iaveY6c",
    },
    {
        imagen: "https://pbs.twimg.com/media/FD2Zu2BWQAEdOmu.jpg:large",
        titulo: "Riverdale",
        edad: "13+",
        info: "Drama · Misterio · Secretos oscuros",
        detalle: "7 temporadas",
        url: "https://www.youtube.com/embed/HxtLlByaYTc?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=HxtLlByaYTc",
    },
    {
        imagen: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ7ZdH174DQXtc-Nwij90sXbIdj_wymzelGtsPoLWjyyQNHToo36rKEte-WdQ2j476J8IduCXcALjHXhLbga3QlidKsA3FbSULTiDc5doA5samf4vIFhRj9QAZDmu0a-NZr6Qg.jpg?r=ba6",
        titulo: "13 Reasons Why",
        edad: "16+",
        info: "Drama · Tragedia",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/0XuOkYlUWIs?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=0XuOkYlUWIs",
    },
    {
        imagen: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRb2lXsm6CuKe9xekeQbUJ4XVX5SxHoEvt9zVlLTajfl0s73EHkTIYGZHlclz0P-5Zn7SJP7s06zlq26IlpA14DL4V8Z_5vjKdZON8PosPq2TowOFMGYyv458nfJAPL2-xezYg.jpg?r=2f8",
        titulo: "Queen Charlotte",
        edad: "16+",
        info: "Romance · Drama político · Pasiones",
        detalle: "1 temporada",
        url: "https://www.youtube.com/embed/oLtnNw0KT78?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=oLtnNw0KT78",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABepf9edTvCH-NdiTRbwewk9cevGjQrtfRRtJe4IVSWQAyU4iI1FLeuSsD-jPQy7LbxPWrkXPh7Jlq2pKCeElFRIhFNhspEWbd128u8wogEgwJzSHfoEVg4if3Qie8hHMzSM7Lw.webp?r=1ff",
        titulo: "You",
        edad: "16+",
        info: "Thriller psicológico · Obsesión · Amor peligroso",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/ga1m0wjzscU?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=ga1m0wjzscU",
    },
    {
        imagen: "https://www.heavenofhorror.com/wp-content/uploads/2021/09/squid-game-netflix-review.jpg",
        titulo: "Squid Game",
        edad: "18+",
        info: "Juegos mortales · Supervivencia · Drama humano",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/lQBmZBJCYcY?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=lQBmZBJCYcY",
    },
    {
        imagen: "https://odysseynewsmagazine.net/wp-content/uploads/2018/04/alexa-and-katie-1.jpg",
        titulo: "Alexa & Katie",
        edad: "7+",
        info: "Comedia · Amistad · Superación",
        detalle: "3 temporadas",
        url: "http https://www.youtube.com/embed/AN-Wmg8ByVI?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=AN-Wmg8ByVI",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd0Bv5g-GqyxQHei8ZKFgtQmmQOk8Fz9w3-DenVlbiALbbpum4Ok0aSEg4qjjWYgE47O-7i9IfHkvopV-qWG4DpUPwZiT0SOQvN0.jpg?r=21a",
        titulo: "Fate: The Winx Saga",
        edad: "13+",
        info: "Magia · Aventuras · Desafíos",
        detalle: "2 temporadas",
        url: "https://www.youtube.com/embed/dfXRud1AIiw?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=dfXRud1AIiw",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABckvovw1iqrxj2NNM0TlGfiyo4tWhsB0_nQALO4yhVunGfFc8yDgtkzoTb_gONJ00EOF_tvchFLROblfKg3sLXSOvG-6j5856ANuw86TyCNrrIVMbXSaIh5j1SCmt7ZQevEaUA.webp?r=2c8",
        titulo: "Purple Hearts",
        edad: "13+",
        info: "Romance · Conflictos emocionales · Guerra",
        detalle: "2 h 2 min",
        url: "https://www.youtube.com/embed/WTLgg8oRSBE?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=WTLgg8oRSBE",
    },
    {
        imagen: "https://occ-0-8407-1001.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQIdpHKApLtiIyY3Cv9c0z8-sAFXsHL5XA5fw1lj-2wmgZ3tL_AxJ_yM-O-hlsg78dT-bNcK7L2CjdkWvn9dkjPazHm4D3BMvF1KKFYFTx88K6VvJhzTTAaKMSCUweDUgRBJQg.jpg?r=027",
        titulo: "A Todos los Chicos de los que me Enamoré",
        edad: "13+",
        info: "Romance · Secretos · Amistad",
        detalle: "1 h 39 min",
        url: "https://www.youtube.com/embed/3gAKmD51ML4?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=3gAKmD51ML4",
    },
    {
        imagen: "https://media.licdn.com/dms/image/C4E12AQHeUAUGosjeXQ/article-cover_image-shrink_600_2000/0/1645616618414?e=2147483647&v=beta&t=kvSEVF4JJMfzsfaJQ_A1rJDDIapbhacP84cxzHfOzSU",
        titulo: "Emily en París",
        edad: "13+",
        info: "Comedia romántica · Moda · Oportunidades",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/lptctjAT-Mk?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=lptctjAT-Mk",
    },
    {
        imagen: "https://ntvb.tmsimg.com/assets/p23063500_b_h8_ad.jpg?w=1280&h=720",
        titulo: "Wednesday",
        edad: "13+",
        info: "Aventura · Misterio",
        detalle: "1 temporada",
        url: "https://www.youtube.com/embed/Di310WS8zLk?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=Di310WS8zLk",
    },
];

//:') ay
//Series Dramáticas
const N_cards = [
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYjDc3pGyffzUgHX43Www7hkXPnSEOrR58hSukrmnmYQNjktFksLxgnSlnEyMTdhS3OIAawREIvcpbU81CJRDEeUQmmB-LjvBlhn0WrQvbiVhPw2ZHMWhVmvexrACttN-uu-BIHTFc5lOeRWBJ6eNUKNRKhTaAkzmH7a2HovL9k6Nyf8Uhf8sDUA-7S0gEvzTcntDUY2VHeak4upX217VGEp7Jw7LUIeEUOo9FKbQX35pTx_4qtZeMnmBjtzsYv6CJtkqeOT0dKz3dKbzdbONErE17LZqOlNv1yr7U6Ps2a_QUS8iYiNqLukJTvfKBXP8KLoYnuORVex-nd1lvW50TdNsWJ7rYliu-6xnLaPNX1EY1I.webp?r=a7b",
        titulo: "Outer Banks",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/Abje_mBb7Pc?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=Abje_mBb7Pc",
    },
    {
        imagen: "https://www.diariodecultura.com.ar/wp-content/uploads/2020/12/Gambito-de-Dama.jpg",
        titulo: "Gambito de Dama",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "1 temporada",
        url: "https://www.youtube.com/embed/9bu1azQufKk?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=9bu1azQufKk",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABepf9edTvCH-NdiTRbwewk9cevGjQrtfRRtJe4IVSWQAyU4iI1FLeuSsD-jPQy7LbxPWrkXPh7Jlq2pKCeElFRIhFNhspEWbd128u8wogEgwJzSHfoEVg4if3Qie8hHMzSM7Lw.webp?r=1ff",
        titulo: "You",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/ga1m0wjzscU?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=ga1m0wjzscU",
    },
    {
        imagen: "https://occ-0-8407-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd8a42aJ3IszCeJGuQmI-ArelDkFJrgi8mCn50lYYtwGk29XOkVmokWNDxDgJ-iWiwdStrUszuuIV3ztZwJUdyh5601a4f2-0dX_ln0m7lFseIujZX_mHomRjD8Kl4qMg7DLtg.webp?r=a3d",
        titulo: "Sex Education",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/TJjMJmYLMWs?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=TJjMJmYLMWs",
    },
    {
        imagen: "https://media.a24.com/p/5552f42a5982614b53f71b8444f5624d/adjuntos/296/imagenes/008/674/0008674192/the-walking-deadpng.png",
        titulo: "The Walking Dead",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "11 temporadas",
        url: "https://www.youtube.com/embed/qwOWJ8pPgk8?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=qwOWJ8pPgk8",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeuRpoaXrsl6T63a3pdZURhikMPOs8AjxwPMkcC1cDEVsF2Fdsd5BBiS3Bzog3Cr__IZbAK2Bnp66RK0YmiJnDqUTthkR-_-IrF8FUtZu2SEajNQbZiCqkM7rwdxISXKvCWhyw.webp?r=007",
        titulo: "Orange is the New Black",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "7 temporadas",
        url: "https://www.youtube.com/embed/AiB1iv8DQcg?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=AiB1iv8DQcg",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb6h5K7kF5r1_x9RDFQ6lKLPfcAqtIIRDLoLbAj3Cl6_rPPA61zj31Wlq8KGanlfEX_CdBZl_XSh64f3VIDcX7YSI00-RGp4ifur.jpg?r=9ff",
        titulo: "Breaking Bad",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "5 temporadas",
        url: "https://www.youtube.com/embed/2gTC4uWP3_Y?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=2gTC4uWP3_Y",
    },
    {
        imagen: "https://www.heavenofhorror.com/wp-content/uploads/2021/09/squid-game-netflix-review.jpg",
        titulo: "Squid Game",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/lQBmZBJCYcY?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=lQBmZBJCYcY",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRnPMzKK6qT_YBnhoKOAPbPJSmWhYWXa4Y6kr8MXzkeHXoGC9y45EL0oWEFOxnrxvVKwu7sJ4l64gtxqcecTog29erkk8QDV-JKIlTLtlJvmnmgCRGfEBpJmCv9d1Lj3_zCnNQ.webp?r=d7b",
        titulo: "XO, Kitty",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "1 temporada",
        url: "https://www.youtube.com/embed/EshcItJCT5k?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=EshcItJCT5k",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHBPcqLrRXU-c0-t3vw2PYAaHfaOtbLYlLluR_XiJ9t5awR1TvlN6BKVJj89gSRFW1rxi8-SC0OjhSMfh446rlbdkR8w_mKv6qJkKi36y1sF4xg40RBMdVma-PylYS4FZibt6VFMHyORksAy1k4TFp6t6-rGbhgBuIHVwNfhTdfGD4vHp97yekJwJaTLs4rwxHzc1XSkKtXWF1iH9Z7mJGFSCcCM1NIeEJCzQNQJsaQeUcUvwUgoqEHw2EXrA44EpzcJZsQR6gEaCkzNZBszCIE-wC8G04ePr49UFwLZcM5WTKRBcpAf62O-Li6S47dGVxMBNVVgcLjxR3LFT5GBt7k.webp?r=8e5",
        titulo: "Gossip Girl",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "6 temporadas",
        url: "https://www.youtube.com/embed/6eCoR6vmNzQ?si=QrBQPff8PpEAxWIy?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=6eCoR6vmNzQ",
    },
    {
        imagen: "https://occ-0-8407-37.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXIR8fBjQAg-VTYF6FxzdFOdASkSyMO2_M_HdKjvfyeIxKuVO63HCD4Y8NlPbgPh5CjM-JcUCuT8ZDBDlABxYcKrC2q1g5YfFsLta8oJSaFXrDTdIZrzwzhXseL97CJaCVGN3w.jpg?r=b30",
        titulo: "Good Girls",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/LsNWydZ2wdQ?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=LsNWydZ2wdQ",
    },
    {
        imagen: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRb2lXsm6CuKe9xekeQbUJ4XVX5SxHoEvt9zVlLTajfl0s73EHkTIYGZHlclz0P-5Zn7SJP7s06zlq26IlpA14DL4V8Z_5vjKdZON8PosPq2TowOFMGYyv458nfJAPL2-xezYg.jpg?r=2f8",
        titulo: "Queen Charlotte",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "1 temporada",
        url: "https://www.youtube.com/embed/oLtnNw0KT78?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=oLtnNw0KT78",
    },
];
//Volver a verlo
const v_cards = [
    {
        imagen: "https://occ-0-8407-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV7iVd0Kv7FI1mXZTXkG0vrCE_54kyou-aVgDQYCCN_EWNEJjO71xpFuvYSL25kNR8gsl3CGcwHtJyoBmYrtpoD5Lv1kFCN6XE1ytwQIWeTRL2e6jQ5Xfp5RsaNMercLGK6aBg.jpg?r=114",
        titulo: "Intercambio de Princesas 2",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "1 h 38 min",
        url: "https://www.youtube.com/embed/QJIe--MDVmA?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=QJIe--MDVmA",
    },
    {
        imagen: "https://occ-0-8407-1723.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbVKWm7X0fw7-3O8HHhorEUvfv9Y19twEPMEN4RN9ZvuQ7rkcm4_f6h0VuXCCn1vKQnLilULpkiIOjWYCf14GM2P4uVR4qi8im2t.jpg?r=99c",
        titulo: "Crepúsculo: Luna Nueva",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "2 h 10 min",
        url: "https://www.youtube.com/embed/oDu2ifwrQNA?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=oDu2ifwrQNA",
    },
    {
        imagen: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQUqOqbCW_7dmSH8pTTdTJic8vWWPDbJpVgUAhu5ZHfOacllc7XPbQlhH-F1F5PPzlthyweshkfqra-1o3z4o6oO7QktgU5nNONG.jpg?r=7005",
        titulo: "Si yo Tuviera 30",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "1 h 38 min",
        url: "https://www.youtube.com/embed/_pmFp2W65Fs?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=_pmFp2W65Fs",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfYBeFIpqh_7wDdBAxg0JKNrf6vcQyo8UW9gftOBrzu8aopuG6DlZmuQfyZap2-Ajh-OiJocJWMc574xepPb2Wc7cPFUdPxpl7oU.jpg?r=13e",
        titulo: "Los Ilusionistas: Nada es lo que Parece",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "1 h 55 min",
        url: "https://www.youtube.com/embed/qBZMzO5M6qY?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=qBZMzO5M6qY",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZjJq4bR89-2rUS9S1eBAYz9hkcR-Cgi8S79PruY3N_NRGAAH3DTJME1KIjPjEL-Ar_qJV8Rxj0oWqNeJbsADidRAJSIZLfWqGhP.jpg?r=01d",
        titulo: "Crepúsculo: Amanecer (Parte 2)",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "1 h 55 min",
        url: "https://www.youtube.com/embed/GKJSf4ktrPE?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=GKJSf4ktrPE",
    },
    {
        imagen: "https://ntvb.tmsimg.com/assets/p34319_v_h8_av.jpg?w=1280&h=720",
        titulo: "Mean Girls",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "1 h 37 min",
        url: "https://www.youtube.com/embed/oDU84nmSDZY?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=oDU84nmSDZY",
    },
    {
        imagen: "https://occ-0-8407-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd8a42aJ3IszCeJGuQmI-ArelDkFJrgi8mCn50lYYtwGk29XOkVmokWNDxDgJ-iWiwdStrUszuuIV3ztZwJUdyh5601a4f2-0dX_ln0m7lFseIujZX_mHomRjD8Kl4qMg7DLtg.webp?r=a3d",
        titulo: "Sex Education",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/TJjMJmYLMWs?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=TJjMJmYLMWs",
    },
    {
        imagen: "https://occ-0-1001-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYBTCm2WmvGwcTKj3LJnlb8sTGC0gvkXhYUMSL7ttxDywiS17Gielk-V3nH-bxxd3RfMn15dC51WhJvXj9R9oH7FXwLFWpPFKXyYGm6VVaTsb1vi18jxdLI_zFNYpvrXCDVpdw.jpg?r=930",
        titulo: "El Stand de los Besos",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "1 h 45 min",
        url: "https://www.youtube.com/embed/L5nYYBxg52A?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=L5nYYBxg52A",
    },
    {
        imagen: "https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2021/01/miraculous-1024x576.jpg",
        titulo: "Miraculous Ladybug",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "5 temporadas",
        url: "https://www.youtube.com/embed/LkOLnaSGvZw?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=LkOLnaSGvZw",
    },
    {
        imagen: "https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVCeeNG3zlLs43tI7tLeQCJTa9If46uKut6AEZEmDf1U_ig3LltqQw_3tuX__gPA60nlAKA34EnEwGPee_I1aP4zkGqtTGJn7sGwq_Ql4fUCT-VF21mlpWtH3USLPxk2s9ysg.jpg?r=bdf",
        titulo: "Anne with an E",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "3 temporadas",
        url: "https://www.youtube.com/embed/S5qJXYNNINo?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=S5qJXYNNINo",
    },
    {
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSyIK75yTk2RtCT4lVaJ-NJ5J7RSYrZRuHuDyLo8TYJrRthU4GAcZl10oUgOiVfv__WqVHSC_7E8yz91J1Nsp20OQuEAdyO80oRW.jpg?r=98a",
        titulo: "Gossip Girl",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "6 temporadas",
        url: "https://www.youtube.com/embed/6eCoR6vmNzQ?si=QrBQPff8PpEAxWIy?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=6eCoR6vmNzQ",
    },
    {
        imagen: "https://www.heavenofhorror.com/wp-content/uploads/2021/09/squid-game-netflix-review.jpg",
        titulo: "Squid Game",
        edad: "13+",
        info: "Conmovedor · Emotivo · De adolescentes",
        detalle: "4 temporadas",
        url: "https://www.youtube.com/embed/lQBmZBJCYcY?controls=0&autoplay=1&mute=1&modestbranding=0&loop=1&color=white&rel=0&playsinline=1&enablejsapi=1&playlist=lQBmZBJCYcY",
    },
];
