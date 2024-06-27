import Divisor from "../components/Divisor"
import DirectiveBoard from "../components/DirectiveBoard.tsx"
import Mision from "../components/Mision"
import fachada from "/src/assets/fachada.png"
import classes from "/src/styles/LaClinica.module.css"


export default function LaClinica() {

    
    return (
        <>
        <section className={classes.contenedor} >
            <img src={fachada} alt="Fachada La Clinica" />
            <h1>¿QUIÉNES SOMOS?</h1>
        </section>
        <Mision/>
        <Divisor/>
        <DirectiveBoard/>
        </>
    )
}
