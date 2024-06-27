import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps } from "react-slick";
import classes from "/src/styles/Timeline.module.css"
import edificio from "/src/assets/edificio.png"
import empleadas from "/src/assets/empleadas.png"
import asociacion from "/src/assets/asociacion.png"
import maqueta from "/src/assets/maqueta.png"
import bendicion from "/src/assets/bendicion.png"
import junta from "/src/assets/junta.png"
import Divisor from "./Divisor";



export default function Timeline() {

    

    function Anterior({ onClick }: CustomArrowProps) {
        return (
                <svg className={classes.flechaI} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 22 30" fill="none">
                    <path d="M22 3.75L8.32433 15L22 26.5L17.8378 30L0 15L17.8378 0L22 3.75Z" fill="currentColor"/>
                </svg>
            );
        }
        
        function Siguiente({ onClick }: CustomArrowProps) {
            return (
                <svg className={classes.flechaD} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 22 30" fill="none">
                    <path d="M0 26.25L13.6757 15L0 3.5L4.16216 0L22 15L4.16216 30L0 26.25Z" fill="currentColor"/>
                </svg>
            );
        }

    const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <Siguiente />,
    prevArrow: <Anterior />
};


    return (
        <>
        <Divisor/>
        <section className={classes.contenedor}>
                <Slider {...settings}>
                    <div className={classes.imagenContenedor}>
                        <img src={maqueta} alt="Foto noticia"  className={classes.imagen}/>
                    </div>
                    <div className={classes.informacion}>
                        <p className={classes.fecha}>1948</p>
                        <h3 className={classes.titulo}>MAQUETA</h3>
                        <p className={classes.texto}>Maqueta del Proyecto original de Clínica El Ávila.</p>
                    </div>
                    <div className={classes.imagenContenedor}>
                        <img src={asociacion} alt="Foto noticia"  className={classes.imagen}/> 
                    </div>
                    <div className={classes.informacion}>
                        <p className={classes.fecha}>1958</p>
                        <h3 className={classes.titulo}>SE INICIA LA CONSTRUCCIÓN</h3>
                        <p className={classes.texto}>con un capital modesto, un grupo de 12 médicos iniciaron la construcción de un pequeño edificio de dos pisos, en pleno crecimiento urbanístico de Altamira.</p>
                    </div>
                    <div className={classes.imagenContenedor}>
                        <img src={empleadas} alt="Foto noticia"  className={classes.imagen}/>
                    </div>
                    <div className={classes.informacion}>
                        <p className={classes.fecha}>1975</p>
                        <h3 className={classes.titulo}>PERSONAL</h3>
                        <p className={classes.texto}>Desde los inicios en la Clínica El Ávila luchamos por la igualdad de género.</p>                        
                    </div>
                    <div>
                        <img src={bendicion} alt="Foto noticia"  className={classes.imagen}/>
                    </div>
                    <div className={classes.informacion}>
                        <p className={classes.fecha}>1983</p>
                        <h3 className={classes.titulo}>INAUGURACIÓN DE EMERGENCIA DE ADULTOS</h3>
                        <p className={classes.texto}>Se bendice e inaugura la emergencia de adultos.</p>                        
                    </div>
                    <div>
                        <img src={edificio} alt="Foto noticia"  className={classes.imagen}/>
                    </div>
                    <div className={classes.informacion}>
                        <p className={classes.fecha}>1984</p>
                        <h3 className={classes.titulo}>CRECEN LOS PROFESIONALES</h3>
                        <p className={classes.texto}>Ya con 240 profesionales médicos, se realiza la primera ampliación y la capacidad aumenta a 100 camas.</p>                                                
                    </div>
                    <div>
                        <img src={junta} alt="Foto noticia"  className={classes.imagen}/>
                    </div>
                    <div className={classes.informacion}>
                        <p className={classes.fecha}>2024</p>
                        <h3 className={classes.titulo}>YA SON 71 AÑOS!</h3>
                        <p className={classes.texto}>Con 70 años de existencia, Clínica El Ávila cuenta con 250 médicos accionistas y otros profesionales de la salud de altísima calificación, todos en pro de la salud.</p>                                                
                    </div>
                </Slider>
            </section>
            <Divisor/>
            </>
    )
    }




