import classes from "/src/styles/Descripcion.module.css"
import doctor from "/src/assets/doctorHome.png"
import { useInView } from "react-intersection-observer";
import BotonClaro from "./BotonClaro";

interface DescripcionProps {
    titulo: string;
    descripcion: string;
}

export default function Descripcion({titulo, descripcion}: DescripcionProps) {

    const { ref: text, inView: visible} = useInView()

    return (
        <section ref={text} className={`${classes.contenedor} ${visible ? classes.animation : ""}`}>
            <div className={classes.contenedorDes}>
                <h1 className={classes.titulo}>{titulo}</h1>
                <p className={classes.descripcion}>{descripcion}</p>
                <BotonClaro nombre="ver servicios" to="/" marginTop="0"/>
            </div>
            <img src={doctor} className={classes.img} alt="doctor" />
        </section>
    )
}
