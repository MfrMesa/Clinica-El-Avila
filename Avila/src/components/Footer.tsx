import { Link } from 'react-router-dom'
import facebook from "/src/assets/facebook.svg"
import instagram from "/src/assets/instagram.svg"
import x from "/src/assets/x.svg"
import classes from "/src/styles/Footer.module.css"


export default function Footer() {


    return (
        <>
        <footer>
            <section className={classes.footerContenedores}>
                <h3 className={classes.footertitulos}>CONTÁCTENOS</h3>
                <div className={classes.contactos}>
                    <p className={classes.footerLinks}>Teléfonos útiles</p>
                    <p  className={classes.footerLinks}>Av. San Juan Bosco, con 6ta. Transversal Edificio Clínica El Ávila, PB, Urb. Altamira</p>
                    <div className={classes.socials}>
                        <img src={facebook} alt="facebook"/>
                        <img src={x} alt="x"/>
                        <img src={instagram} alt="instagram"/>
                    </div>
                </div>
            </section>
            <span className={classes.divisor}></span>
            <section className={classes.footerContenedores}>  
                <h3 className={classes.footertitulos}>SOBRE EL ÁVILA</h3>
                <Link to="" className={classes.footerLinks}>La Clínica</Link>
                <Link to="" className={classes.footerLinks}>Equipo Médico</Link>
                <Link to="" className={classes.footerLinks}>Asociación Médica</Link>
                <Link to="" className={classes.footerLinks}>Trabajar en El Ávila </Link>
                <Link to="" className={classes.footerLinks}>Eventos</Link>
                <Link to="" className={classes.footerLinks}>Preguntas Frecuentes</Link>
            </section>
            <span className={classes.divisor}></span>
            <section className={classes.footerContenedores}>
                <h3 className={classes.footertitulos}>SERVICIOS</h3>
                <Link to="" className={classes.footerLinks}>Farmacia</Link>
                <Link to="" className={classes.footerLinks}>Restaurante</Link>
                <Link to="" className={classes.footerLinks}>Peluquería Unisex</Link>
                <Link to="" className={classes.footerLinks}>Óptica</Link>
                <Link to="" className={classes.footerLinks}>Tienda de souvenirs</Link>
                <Link to="" className={classes.footerLinks}>Registro civil</Link>
            </section>
        </footer>
        <div className={classes.politicasContenedor}>
            <div className={classes.politicas}>
                <Link to="" className={classes.footerPoliticas}>Política de Cookies</Link>
                <Link to="" className={classes.footerPoliticas}>Aviso Legal</Link>
                <Link to="" className={classes.footerPoliticas}>Protección de Datos</Link>
                <Link to="" className={classes.footerPoliticas}>Política de Privacidad</Link>
            </div>
            <p className={classes.footerPoliticas}>Clínica El Ávila © 2017 - Todos los derechos reservados - RIF: J-00243437-6.</p>
        </div>
        </>
    )
}
