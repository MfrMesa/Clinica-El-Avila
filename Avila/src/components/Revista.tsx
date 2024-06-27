import revistaImg from '/src/assets/revista.png'; 


export default function Revista() {


    const edicion = [
        { id: 1, imagen: revistaImg }
    ];

    return (
        <section>
            <h1>Revista Sentirse Bien</h1>
            <p>Sentirse Bien no es una revista Científica. Es una publicación periódica de Clínica El Ávila, orientada al público en general, con la intención de tratar temas de salud y divulgar información corporativa de la Organización. Nació en el año 2001 y ha servido como edición de consulta sobre variados temas, que sirven para hacerle llegar a los lectores interesados en temas médicos o de salud, informaciones o noticias escritas con un lenguaje sencillo y fácil de comprender. Incluimos los últimos seis números publicados.</p>
            {edicion.map(revista => (
                <div key={revista.id}>
                    <img src={revista.imagen} alt="revista" />
                    <button type="button">Ver más</button>
                </div>
            ))}
        </section>
    );
}
