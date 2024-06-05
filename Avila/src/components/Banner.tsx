import Slider from "react-slick";
import endometriosis from "/src/assets/endo.jpg"
import tiroides from "/src/assets/tiro.jpg"
import noticias from "/src/assets/noticias.jpg"
import classes from "/src/styles/Banner.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Boton from "./Boton";

export default function Banner() {
    
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 7000,
        };

    return (
        <section className={classes.contenedor}>
            <Slider {...settings}>
                <div>
                    <img src={endometriosis} alt="Foto noticia"  className={classes.imagen}/>
                    <div className={classes.informacion}>
                        <span className={classes.titulo}>¿QUÉ ES LA ENDOMETRIOSIS?</span>
                        <Boton nombre="saber más" to="" marginTop="2rem"/>
                    </div>
                </div>
                <div>
                    <img src={tiroides} alt="Foto noticia"  className={classes.imagen}/> 
                    <div className={classes.informacion}>
                        <span className={classes.titulo}>¿CONOCES SOBRE LAS TIROIDES?</span>
                        <Boton nombre="saber más" to="" marginTop="2rem"/>
                    </div>
                </div>
                <div>
                    <img src={noticias} alt="Foto noticia"  className={classes.imagen}/>
                    <div className={classes.informacion}>
                        <span className={classes.titulo}>NUEVA UNIDAD DE ODONTOLOGÍA</span>
                        <Boton nombre="saber más" to="" marginTop="2rem"/>
                    </div>
                </div>
            </Slider>
        </section>
    )
}
