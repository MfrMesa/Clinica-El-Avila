import classes from "/src/styles/Telefonos.module.css"
import ambulance from "/src/assets/ambulance.svg"
import laboratorio from "/src/assets/laboratorio.svg"
import rx from "/src/assets/rx.svg"
import info from "/src/assets/info.svg"
import doctor from "/src/assets/doctor.svg"

export default function Telefonos() {



    return (
        <section className={classes.contenedor}>
            <div className={classes.card}>
                <img src={ambulance} alt="icon" />
                <p>Emergencias Adultos y Pediátrica</p>
                <strong>+58 212 2761111</strong>
            </div>
            <div className={classes.card}>
                <img src={doctor} alt="icon" />
                <p>Cita Especialista Médico</p>
                <strong>+58 212 2761111</strong>
            </div>
            <div className={classes.card}>
                <img src={laboratorio} alt="icon" />
                <p>Cita Éxamenes de Laboratorio</p>
                <strong>+58 212 2761111</strong>
            </div>
            <div className={classes.card}>
                <img src={rx} alt="icon" />
                <p>Cita Radiología e Imagénes</p>
                <strong>+58 212 2761111</strong>
            </div>
            <div className={classes.card}>
                <img src={info} alt="icon" />
                <p>Información General</p>
                <strong>+58 212 2761111</strong>
            </div>
        </section>
    )
}
