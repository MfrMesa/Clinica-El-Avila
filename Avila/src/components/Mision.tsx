import classes from "/src/styles/Mision.module.css"
import paciente from "/src/assets/paciente.png"
import cirugia from "/src/assets/cirugia.png"
import innovacion from "/src/assets/innovacion.png"
import excelencia from "/src/assets/excelencia.png"
import liderazgo from "/src/assets/liderazgo.png"
import Timeline from "./Timeline"


export default function Mision() {



    const descripciones = [
        { id: 1, titulo: "Satisfacción del cliente", texto: "En nuestra clínica, la satisfacción del cliente es nuestra prioridad. Nos dedicamos a proporcionar una atención personalizada y de alta calidad, asegurándonos de que cada paciente se sienta valorado y cuidado en todo momento. Escuchamos sus necesidades y trabajamos incansablemente para superar sus expectativas." },
        { id: 2, titulo: "Visión compartida", texto: "Creemos en la importancia de una visión compartida. Nuestro equipo trabaja de manera cohesiva y colaborativa para alcanzar objetivos comunes, garantizando que todos los miembros estén alineados con la misión y los valores de la clínica. Juntos, construimos un entorno donde la excelencia en el cuidado de la salud es una realidad cotidiana." },
        { id: 3, titulo: "Liderazgo con innovación", texto: "Nos destacamos por nuestro liderazgo con innovación. Nos mantenemos a la vanguardia de los avances médicos y tecnológicos para ofrecer tratamientos y servicios de última generación. Fomentamos una cultura de creatividad y mejora continua, asegurando que nuestros pacientes reciban el mejor cuidado posible." },
        { id: 4, titulo: "Identificación", texto: "La identificación con nuestros pacientes y sus necesidades es fundamental. Nos esforzamos por comprender profundamente las preocupaciones y deseos de cada individuo que confía en nosotros. Este enfoque empático nos permite ofrecer un cuidado más humano y efectivo, creando relaciones duraderas basadas en la confianza y el respeto mutuo." },
        { id: 5, titulo: "Excelencia", texto: "La excelencia es el sello distintivo de nuestra clínica. Nos comprometemos a mantener los más altos estándares en todos los aspectos de nuestros servicios, desde la atención médica hasta la administración y el servicio al cliente. Nuestra meta es alcanzar y superar las expectativas de nuestros pacientes, asegurando resultados óptimos y una experiencia excepcional." }
    ];

    function getImageByTitulo(titulo: any) {
        switch (titulo) {
            case "Satisfacción del cliente":
                return paciente;
            case "Visión compartida":
                return cirugia;
            case "Liderazgo con innovación":
                return excelencia;
            case "Identificación":
                return innovacion;
            case "Excelencia":
                return liderazgo;
            default:
                return; 
        }
    }


    return (
        <>
            <section className={classes.contenedorMision}>
                <div className={classes.innerContainer}>
                    <h1 className={classes.titulos}>PARA SENTIRSE BIEN</h1>
                    <p className={classes.mision}>Ha sido nuestro eslogan desde hace 71 años. Nos lleva a ofrecer la prestación de servicios privados de salud, orientados a la satisfacción de las necesidades de nuestros clientes, dentro de una estructura administrativa dinámica, a través de la excelencia en la atención integral. Sustentada en un equipo humano altamente capacitado e identificado, con equipos de última tecnología, para garantizar la atención y prevención de la enfermedades, ofreciendo soporte a otras organizaciones de salud, todo esto basado en un cambio de cultura organizacional y de servicio. Ser la más prestigiosa corporación privada de salud integral, basada en estándares internacionales, con un equipo humano altamente capacitado e identificado, que ofrezca servicios generales y especializados con alta tecnología, accesibles al mayor número de usuarios, con lineamientos éticos y humanísticos orientados hacia éstos.</p>
                </div>
            </section>
            <Timeline/> 
            <section className={classes.contenedorValores}>
                <h1 className={classes.titulos}>VALORES</h1>
                {descripciones.map((descripcion, index) => (
                    <div key={descripcion.id} className={`${index % 2 === 0 ? classes.valoresI : classes.valoresD}`}>
                        {index % 2 === 0 ? (
                            <>
                                <div className={classes.descripcion}>
                                    <h2 className={classes.tituloSecundario}>{descripcion.titulo}</h2>
                                    <p>{descripcion.texto}</p>
                                </div>
                                <img src={getImageByTitulo(descripcion.titulo)} alt={descripcion.titulo} className={classes.imgI} />
                            </>
                        ) : (
                            <>
                                <img src={getImageByTitulo(descripcion.titulo)} alt={descripcion.titulo} className={classes.imgD}/>
                                <div className={classes.descripcion}>
                                    <h2 className={classes.tituloSecundario}>{descripcion.titulo}</h2>
                                    <p>{descripcion.texto}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </section>
        </>
    );
}
