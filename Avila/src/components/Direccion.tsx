import classes from "/src/styles/Direccion.module.css"

export default function Direccion() {
    return (
            <div className={classes.contenedor}>
                <div className={classes.contenedorTexto}>
                    <h1 className={classes.titulo}>DIRECCIÓN</h1>
                    <p className={classes.texto}>Av. San Juan Bosco, con 6ta. Transversal Edificio Clínica El Ávila, PB, Urb. Altamira, Caracas - Venezuela</p>
                    <p className={classes.guardia}>Emergencias las 24hs</p> 
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.9532324416095!2d-66.85256072548603!3d10.504349864154385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59a609625f91%3A0xb96b0691d9bbeefc!2sCl%C3%ADnica%20El%20Avila!5e0!3m2!1ses!2ses!4v1717104628860!5m2!1ses!2ses" width="1200" height="350" style={{border:0, borderRadius: 20}}  loading="lazy" ></iframe>
            </div>
    );
}
