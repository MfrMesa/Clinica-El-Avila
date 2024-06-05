import Boton, {BotonProps} from "./Boton";
import BotonClaro from "./BotonClaro";
import classes from "/src/styles/CardHome.module.css"


interface CardHomeProps {
    titulo: string;
    texto: string;
    color: string;
    background: string;
    textAlign: boolean;
    src: string;
    botonProps: BotonProps;
    halfWidth: boolean; // Propiedad que indica si el ancho es del 50%
}

export default function CardHome({ titulo, texto, botonProps, halfWidth, color, background, src }: CardHomeProps) {
    // Determina el flex-direction en función del ancho
    const flexDirection = halfWidth ? 'column' : 'row';
    const boton = halfWidth ? <BotonClaro {...botonProps}/> : <Boton {...botonProps} />; 
    

    return (
        <section className={classes.card} style={{ flexDirection, background, }}>
            <div className={classes.cardText}>
                <div className={classes.cardTitulo}>
                <h1 style={{color }} >{titulo}</h1>
                <img src={src} className={classes.svg}/>
                </div>
                <p className={classes.cardP} style={{color }}>{texto}</p>
            </div>
            {boton}
        </section>
    );
}

