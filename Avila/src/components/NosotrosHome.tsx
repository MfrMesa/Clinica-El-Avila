import classes from "/src/styles/NosotrosHome.module.css"
import mujer from "/src/assets/mujer.svg"
import nuclear from "/src/assets/nuclear.svg"
import sueño from "/src/assets/sueño.svg"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"


export default function NosotrosHome() {


    const { ref: unidad, inView: visible1} = useInView()
    const { ref: rx, inView: visible2} = useInView()
    const { ref: sleep, inView: visible3} = useInView()
    const { ref: hide, inView: hidden} = useInView()

    return (
        <section className={classes.contenedor}>
            <div className={classes.parrafoContenedor}>
                <h1 className={classes.titulo}>¿POR QUÉ EL ÁVILA?</h1>
                <p className={classes.parrafo}>Cubrimos todas las <strong>especialidades médicas</strong>, y nos destacamos, en el <strong>diagnóstico y tratamiento</strong> de <strong>patologías pedíatricas y cardiovasculares.</strong> 
                Cubrimos todas las <strong>especialidades médicas</strong>, y nos destacamos, en el <strong>diagnóstico y tratamiento</strong> de <strong>patologías pedíatricas y cardiovasculares.</strong> 
                </p>
            </div>
            <div ref={hide} className={`${classes.contenedorBottom} ${hidden ? classes.show : ""}`} >
                <div ref={unidad} className={`${classes.contenedorInnerBottom} ${visible1 ? classes.animation : ""}`}>
                    <img src={mujer} className={classes.svg} alt="iconos" />
                    <p className={classes.titulos}>UNIDAD DE LA MUJER</p>
                    <p className={classes.parrafo}>se realizan estudios de Mamografía con la última tecnología de <strong>Tomosíntesis, Ultrasonidos o Ecos Mamarios, y Densitometría Ósea.</strong></p>
                    <Link to="" >
                        <svg className={classes.up} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M18.6666 18.6173H21.3333V10.6173H13.3333V13.284H16.7813L9.67462 20.3906L11.56 22.276L18.6666 15.1693V18.6173Z" fill="currentColor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33331 16C1.33331 7.89998 7.89998 1.33331 16 1.33331C24.1 1.33331 30.6666 7.89998 30.6666 16C30.6666 24.1 24.1 30.6666 16 30.6666C7.89998 30.6666 1.33331 24.1 1.33331 16ZM3.99998 16C3.99998 14.4241 4.31037 12.8637 4.91343 11.4078C5.51648 9.95187 6.4004 8.629 7.5147 7.5147C8.629 6.4004 9.95187 5.51648 11.4078 4.91343C12.8637 4.31037 14.4241 3.99998 16 3.99998C17.5758 3.99998 19.1363 4.31037 20.5922 4.91343C22.0481 5.51648 23.371 6.4004 24.4853 7.5147C25.5996 8.629 26.4835 9.95187 27.0865 11.4078C27.6896 12.8637 28 14.4241 28 16C28 19.1826 26.7357 22.2348 24.4853 24.4853C22.2348 26.7357 19.1826 28 16 28C12.8174 28 9.76513 26.7357 7.5147 24.4853C5.26426 22.2348 3.99998 19.1826 3.99998 16Z" fill="currentColor"/>
                        </svg>
                    </Link>
                </div>
                <div ref={rx} className={`${classes.contenedorInnerBottom} ${visible2 ? classes.animation : ""}`}>
                    <img src={nuclear} className={classes.svg} alt="iconos" />
                    <p className={classes.titulos}>MEDICINA NUCLEAR</p>
                    <p className={classes.parrafo}>se realizan <strong>gammagrama óseo, renal, pulmonar, tiroideo, hepático, etc.</strong> se realizan estudios de Mamografía con la última tecnología de <strong>Tomosíntesis</strong></p>
                    <Link to="" >
                        <svg className={classes.up} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M18.6666 18.6173H21.3333V10.6173H13.3333V13.284H16.7813L9.67462 20.3906L11.56 22.276L18.6666 15.1693V18.6173Z" fill="currentColor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33331 16C1.33331 7.89998 7.89998 1.33331 16 1.33331C24.1 1.33331 30.6666 7.89998 30.6666 16C30.6666 24.1 24.1 30.6666 16 30.6666C7.89998 30.6666 1.33331 24.1 1.33331 16ZM3.99998 16C3.99998 14.4241 4.31037 12.8637 4.91343 11.4078C5.51648 9.95187 6.4004 8.629 7.5147 7.5147C8.629 6.4004 9.95187 5.51648 11.4078 4.91343C12.8637 4.31037 14.4241 3.99998 16 3.99998C17.5758 3.99998 19.1363 4.31037 20.5922 4.91343C22.0481 5.51648 23.371 6.4004 24.4853 7.5147C25.5996 8.629 26.4835 9.95187 27.0865 11.4078C27.6896 12.8637 28 14.4241 28 16C28 19.1826 26.7357 22.2348 24.4853 24.4853C22.2348 26.7357 19.1826 28 16 28C12.8174 28 9.76513 26.7357 7.5147 24.4853C5.26426 22.2348 3.99998 19.1826 3.99998 16Z" fill="currentColor"/>
                        </svg>
                    </Link>
                </div>
                <div ref={sleep} className={`${classes.contenedorInnerBottom} ${visible3 ? classes.animation : ""}`}>
                    <img src={sueño} className={classes.svg} alt="iconos" />
                    <p className={classes.titulos}>ESTUDIOS DEL SUEÑO</p>
                    <p className={classes.parrafo}>se hace a todas aquellas personas con trastornos del <strong>sueño intrínseco o extrínseco</strong>, mediante la evaluación del sueño, mediante la evaluación del sueño.</p>
                    <Link to="" >
                        <svg className={classes.up} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M18.6666 18.6173H21.3333V10.6173H13.3333V13.284H16.7813L9.67462 20.3906L11.56 22.276L18.6666 15.1693V18.6173Z" fill="currentColor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33331 16C1.33331 7.89998 7.89998 1.33331 16 1.33331C24.1 1.33331 30.6666 7.89998 30.6666 16C30.6666 24.1 24.1 30.6666 16 30.6666C7.89998 30.6666 1.33331 24.1 1.33331 16ZM3.99998 16C3.99998 14.4241 4.31037 12.8637 4.91343 11.4078C5.51648 9.95187 6.4004 8.629 7.5147 7.5147C8.629 6.4004 9.95187 5.51648 11.4078 4.91343C12.8637 4.31037 14.4241 3.99998 16 3.99998C17.5758 3.99998 19.1363 4.31037 20.5922 4.91343C22.0481 5.51648 23.371 6.4004 24.4853 7.5147C25.5996 8.629 26.4835 9.95187 27.0865 11.4078C27.6896 12.8637 28 14.4241 28 16C28 19.1826 26.7357 22.2348 24.4853 24.4853C22.2348 26.7357 19.1826 28 16 28C12.8174 28 9.76513 26.7357 7.5147 24.4853C5.26426 22.2348 3.99998 19.1826 3.99998 16Z" fill="currentColor"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
    }
