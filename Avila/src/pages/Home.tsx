import Banner from '../components/Banner'
import CardHome from '../components/CardHome'
import Descripcion from '../components/Descripcion'
import Direccion from '../components/Direccion'
import NosotrosHome from '../components/NosotrosHome'
import classes from "/src/styles/Home.module.css"
import lab from "/src/assets/lab.svg"
import cruz from "/src/assets/cruz.svg"
import pulmones from "/src/assets/pulmones.svg"
import { useInView } from 'react-intersection-observer'
import Telefonos from '../components/Telefonos'

export default function Home() {

    const { ref: down, inView: visible1} = useInView()
    const { ref: der, inView: visible2} = useInView()
    const { ref: izq, inView: visible3} = useInView()

    return (
        <>
            <Banner/>
            <Telefonos/>
            <Descripcion titulo="SERVICIOS MÉDICOS" descripcion="El rápido crecimiento de las ciencias médicas hace imposible que un solo individuo domine todo el campo de la medicina. Las constantes innovaciones y descubrimientos han generado una gran variedad de subespecialidades, cada una con sus 
            La Clínica El Ávila se adapta a esta complejidad ofreciendo servicios médicos que abarcan todas estas subespecialidades. Con un equipo de profesionales altamente capacitados y tecnología avanzada, la clínica asegura que los pacientes reciban atención especializada en áreas como cardiología, neurología, oncología y muchas más."/>
            <NosotrosHome/>
            <div ref={down} className={visible1 ? classes.animationDown : ''}>
                <CardHome  src={pulmones}  titulo="ESPECIALIDADES MÉDICAS" texto="Contamos con la más amplia variedad de especialidades. Contamos con la más amplia variedad de especialidades" halfWidth={false} color="#173A70" background="#ffffff" textAlign={false}
                botonProps={{
                    to:"/",
                    nombre: "ver cartilla",
                    marginTop: "0"
                }} />
            </div>
            <section className={classes.contenedor}>
                <div ref={der} className={`${classes.innerContenedor} ${visible2 ? classes.animationRigth : ""}`}>
                    <CardHome src={lab} titulo="LABORATORIO EL ÁVILA" texto="Contamos con la más amplia variedad de estudios. Contamos con la más amplia variedad de especialidades" halfWidth={true} color="#ffffff" background="#173A70" textAlign={true}
                        botonProps={{
                            to:"/",
                            nombre: "pedir turno",
                            marginTop: "4rem"
                        }} />
                </div>
                <div ref={izq} className={`${classes.innerContenedor} ${visible3 ? classes.animationLeft : ""}`}>
                    <CardHome src={cruz} titulo="FARMACIA EL ÁVILA" texto="Contamos con la más amplia variedad de medicinas. Contamos con la más amplia variedad de especialidades" halfWidth={true} color="#ffffff" background="#A7BEDD" textAlign={true}
                        botonProps={{
                            to:"/",
                            nombre: "ver ofertas",
                            marginTop: "4rem"
                        }} />
                </div>
            </section>
            <Direccion/> 
        </>
    )
}


