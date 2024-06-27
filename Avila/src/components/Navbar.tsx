import classes from "/src/styles/Navbar.module.css"
import { HashLink as Anchor } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import avila from "/src/assets/AVILA.jpg"
import Headroom from 'react-headroom'



export default function Navbar() {


    return (
        <Headroom>
            <nav className={classes.navbar}>
                <div className={classes.topBar}>
                    <div className={classes.logo}>
                        <img src={avila} alt="logo" className={classes.logoIcon}/>
                        <div className={classes.nombre}>
                            <span className={classes.clinica}>Clínica</span>
                            <span className={classes.avila}>El Ávila</span>
                        </div>
                        <input className={classes.search} name="buscar" type='text' placeholder='¿En qué podemos ayudarte?'></input>
                    </div>
                    <button className={classes.cita}>
                        Pedir cita
                        <svg xmlns="http://www.w3.org/2000/svg" width="425" height="486" viewBox="0 0 425 486" fill="currebtColor">
                            <path d="M2.21995 136.526V102.41C2.24795 96.34 9.23895 85.499 9.53495 85.233C63.0509 30.8 136.256 0 212.663 0C289.247 0 362.694 30.947 416.239 85.708C416.295 85.708 422.992 96.368 422.992 102.409V136.525C422.992 149.024 413.807 163.893 402.616 169.456L397.818 171.827C386.682 177.453 368.616 176.921 357.779 170.761L317.679 147.841C306.782 141.62 297.718 126.281 297.718 113.783V91.005C245.12 60.739 180.117 60.772 127.491 90.977V113.783C127.491 126.282 118.428 141.561 107.588 147.841L67.4299 170.702C56.6229 176.921 38.5849 177.453 27.3629 171.829L22.5929 169.46C11.4019 163.833 2.21995 149.024 2.21995 136.526ZM424.887 333.584V454.886C424.887 471.557 411.259 485.212 394.56 485.212H30.6489C14.0039 485.212 0.324951 471.557 0.324951 454.886V333.584C0.324951 316.913 9.97895 293.605 21.7649 281.816L100.186 203.397C111.973 191.608 135.308 181.954 151.953 181.954V151.627C166.286 132.558 188.734 121.303 212.604 121.303C236.476 121.303 258.981 132.558 273.252 151.627V181.954C289.956 181.954 313.235 191.608 325.02 203.397L403.441 281.816C415.231 293.606 424.887 316.914 424.887 333.584ZM151.954 409.396C151.954 401.014 145.201 394.237 136.793 394.237H106.464C98.112 394.237 91.3029 401.014 91.3029 409.396C91.3029 417.778 98.112 424.559 106.464 424.559H136.793C145.201 424.559 151.954 417.778 151.954 409.396ZM151.954 348.748C151.954 340.37 145.201 333.585 136.793 333.585H106.464C98.112 333.585 91.3029 340.37 91.3029 348.748C91.3029 357.13 98.112 363.906 106.464 363.906H136.793C145.201 363.906 151.954 357.129 151.954 348.748ZM151.954 288.094C151.954 279.711 145.201 272.93 136.793 272.93H106.464C98.112 272.93 91.3029 279.711 91.3029 288.094C91.3029 296.476 98.112 303.257 106.464 303.257H136.793C145.201 303.257 151.954 296.476 151.954 288.094ZM242.931 409.396C242.931 401.014 236.178 394.237 227.768 394.237H197.441C189.089 394.237 182.28 401.014 182.28 409.396C182.28 417.778 189.089 424.559 197.441 424.559H227.768C236.178 424.559 242.931 417.778 242.931 409.396ZM242.931 348.748C242.931 340.37 236.178 333.585 227.768 333.585H197.441C189.089 333.585 182.28 340.37 182.28 348.748C182.28 357.13 189.089 363.906 197.441 363.906H227.768C236.178 363.906 242.931 357.129 242.931 348.748ZM242.931 288.094C242.931 279.711 236.178 272.93 227.768 272.93H197.441C189.089 272.93 182.28 279.711 182.28 288.094C182.28 296.476 189.089 303.257 197.441 303.257H227.768C236.178 303.257 242.931 296.476 242.931 288.094ZM333.907 409.396C333.907 401.014 327.154 394.237 318.744 394.237H288.422C280.072 394.237 273.254 401.014 273.254 409.396C273.254 417.778 280.072 424.559 288.422 424.559H318.744C327.154 424.559 333.907 417.778 333.907 409.396ZM333.907 348.748C333.907 340.37 327.154 333.585 318.744 333.585H288.422C280.072 333.585 273.254 340.37 273.254 348.748C273.254 357.13 280.072 363.906 288.422 363.906H318.744C327.154 363.906 333.907 357.129 333.907 348.748ZM333.907 288.094C333.907 279.711 327.154 272.93 318.744 272.93H288.422C280.072 272.93 273.254 279.711 273.254 288.094C273.254 296.476 280.072 303.257 288.422 303.257H318.744C327.154 303.257 333.907 296.476 333.907 288.094Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
                    <div className={classes.bottomBar}>
                        <ul className={classes.linksContenedor}>
                            <li><Link to="/laclinica" className={classes.links}>LA CLÍNICA</Link>
                                <div className={classes.innerLinksContenedor}>
                                    <ul>
                                        <li className={classes.innerLinks}>¿Quienes somos?</li>
                                        <li className={classes.innerLinks}>Junta Directiva</li>
                                        <Link to=":revista" className={classes.innerLinks}>Revista "Sentirse Bien"</Link>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="" className={classes.links}>ESPECIALIDADES</Link></li>
                            <li><Link to="" className={classes.links}>SERVICIOS DE SALUD</Link>
                                <div className={classes.innerLinksContenedor}>
                                    <ul>
                                        <li className={classes.innerLinks}>Banco de sangre</li>
                                        <li className={classes.innerLinks}>Emergencia Adultos</li>
                                        <li className={classes.innerLinks}>Emergecia Pediatríca</li>
                                        <li className={classes.innerLinks}>Terapia Intensiva</li>
                                        <li className={classes.innerLinks}>Rehabilitación</li>
                                        <li className={classes.innerLinks}>Ecocardiografía</li>
                                        <li className={classes.innerLinks}>Telemetría</li>
                                        <li className={classes.innerLinks}>Unidad de la mujer</li>
                                        <li className={classes.innerLinks}>Radiología e Imagenes</li>
                                        <li className={classes.innerLinks}>Medicina Nuclear</li>
                                        <li className={classes.innerLinks}>Quimioterapia</li>
                                        <li className={classes.innerLinks}>Radioterapia</li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="" className={classes.links}>ADMISIÓN</Link>
                                <div className={classes.innerLinksContenedor}>
                                    <ul>
                                        <li className={classes.innerLinks}>¿Cómo ingresar a la clínica?</li>
                                        <li className={classes.innerLinks}>Normas de seguridad</li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="" className={classes.links}>INFORMACIÓN</Link>
                                <div className={classes.innerLinksContenedor}>
                                    <ul>
                                        <li className={classes.innerLinks}>Información Práctica</li>
                                        <li className={classes.innerLinks}>Preguntas Frecuentes</li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="" className={classes.links}>SERVICIOS COMERCIALES</Link>
                                <div className={classes.innerLinksContenedor}>
                                    <ul>
                                        <li className={classes.innerLinks}>Centro Óptico</li>
                                        <li className={classes.innerLinks}>Farmacia</li>
                                        <li className={classes.innerLinks}>Cafetería y Restaurante</li>
                                        <li className={classes.innerLinks}>Banco y cajeros</li>
                                        <li className={classes.innerLinks}>Tienda de souvenirs</li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="" className={classes.links}>REGISTRO CIVIL</Link></li>
                            <li><Anchor to="" className={classes.links}>CONTACTO</Anchor>
                                <div className={classes.innerLinksContenedor}>
                                    <ul>
                                        <li className={classes.innerLinks}>¿Cómo llegar?</li>
                                        <li className={classes.innerLinks}>Trabaja con nosotros</li>
                                        <li className={classes.innerLinks}>Canal de denuncias</li>
                                        <li className={classes.innerLinks}>Trabaja con nosotros</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
            </nav>
        </Headroom>
    )
}
