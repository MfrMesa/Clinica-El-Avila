import classes from "/src/styles/DirectiveBoard.module.css"
import docH from "/src/assets/docH.png"
import docM from "/src/assets/docM.png"
import docM2 from "/src/assets/docM2.png"

export default function DirectiveBoard() {


    return (
        <div className={classes.contenedor}> 
            <h1 className={classes.topTitle}>JUNTA DIRECTIVA</h1>
            <p className={classes.descripcionJunta}>La Clínica El Ávila cuenta con la figura de una Junta Directiva a través de la cual se establecen las políticas en materia organizacional, administrativa y operativa de la misma. La Junta Directiva esta conformada por socios, los cuales son escogidos por voto secreto de todos los miembros socios de la Clínica, cada dos años.</p>
            <section className={classes.mapaContenedor}> 
                <div className={classes.mapTitle}>
                    <h1>JUNTA DIRECTIVA (2023-2025)</h1>
                </div>
                <div className={classes.contenedorTitle1}>
                    <img src={docH} alt="Doctor" className={classes.img} />
                    <h3 className={classes.title}>PRESIDENTE</h3>
                    <p className={classes.doctor}>Dr. Carlos Baptista Gorrín</p>
                </div>
                <div className={classes.contenedorTitle2}>
                    <img src={docH} alt="Doctor" className={classes.img}/>
                    <h3 className={classes.title}>PRIMER VICEPRESIDENTE</h3>
                    <p className={classes.doctor}>Dr. Luis Miguel Guerra</p>
                </div>
                <div className={classes.contenedorTitle3}>
                    <img src={docH} alt="Doctor" className={classes.img}/>
                    <h3 className={classes.title}>SEGUNDO VICEPRESIDENTE</h3>
                    <p className={classes.doctor}>Dr. José Agustín Gómez Valero</p>
                </div>
                <div className={classes.contenedorTitle4}>
                    <img src={docH} alt="Doctor" className={classes.img}/>
                    <h3 className={classes.title}>PRIMER VOCAL</h3>
                    <p className={classes.doctor}>Dr. Héctor Marcano</p>
                </div>
                <div className={classes.contenedorTitle5}>
                <img src={docH} alt="Doctor" className={classes.img}/>
                    <h3 className={classes.title}>SEGUNDO VOCAL</h3>
                    <p className={classes.doctor}>Dr. David Martín del Campo</p>
                </div>
                <div className={classes.contenedorTitle6}>
                    <img src={docH} alt="Doctor" className={classes.img}/>
                    <h3 className={classes.title}>TERCER VOCAL</h3>
                    <p className={classes.doctor}>Dr. Jaime Armas Perdomo</p>
                </div>
                <div className={classes.contenedorTitle7}>
                    <img src={docM} alt="Doctor" className={classes.img}/>
                    <h3 className={classes.title}>CUARTO VOCAL</h3>
                    <p className={classes.doctor}>Dra. Raquel López</p>
                </div>
                <div className={classes.contenedorTitle8}>
                    <img src={docM2} alt="Doctor" className={classes.img}/>
                    <h3 className={classes.title}>PRIMER SUPLENTE</h3>
                    <p className={classes.doctor}>Dra. Maritza Durán Castillo</p>
                </div>
                <div className={classes.contenedorTitle9}>
                    <img src={docH} alt="Doctor" className={classes.img}/>
                    <h3 className={classes.title}>SEGUNDO SUPLENTE</h3>
                    <p className={classes.doctor}>Dr. Jorge Domínguez Montejo</p>
                </div>
                <div className={classes.contenedorTitle10}>
                    <img src={docH} alt="Doctor" className={classes.img}/>
                    <h3 className={classes.title}>TERCER SUPLENTE</h3>
                    <p className={classes.doctor}>Dr. Jorge Pérez Bustamante</p>
                </div>
            </section>    
        </div>
    )
}
