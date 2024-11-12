import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div id="redes">
                    <a href="https://www.facebook.com/Netflixmx">
                        <img src="/imagenes/facebook.png" alt="" width="25px" height="25px" />
                    </a>
                    <a href="https://www.instagram.com/NetflixLAT">
                        <img src="/imagenes/instagram.png" alt="" width="25px" height="25px" />
                    </a>
                    <a href="https://x.com/netflixLAT">
                        <img src="/imagenes/X.png" alt="" width="25px" height="25px" />
                    </a>
                    <a href="https://www.youtube.com/channel/UC5ZiUaIJ2b5dYBYGf5iEUrA">
                        <img src="/imagenes/youtube.png" alt="" width="35px" height="25px" />
                    </a>
                </div>
                <div className="footerTextStyle">
                    <div><p>Audio descriptivo</p></div>
                    <div><p>Centro de ayuda</p></div>
                    <div><p>Tarjetas de regalo</p></div>
                    <div><p>Prensa</p></div>
                    <div><p>Relaciones con inversionistas</p></div>
                    <div><p>Empleo</p></div>
                    <div><p>Términos de uso</p></div>
                    <div><p>Privacidad</p></div>
                    <div><p>Avisos legales</p></div>
                    <div><p>Preferencias de cookies</p></div>
                    <div><p>Información corporativa</p></div>
                    <div><p>Contáctanos</p></div>
                </div>
                <button id="footerButton">Código de Servicio</button>
                <p id="copyright">© 1997-2024 Netflix, Inc.</p>
            </div>
        </footer >
    );
};

export default Footer;
