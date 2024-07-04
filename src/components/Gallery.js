import React from 'react';

function Gallery() {
    const sectionsData = [
        {
            title: 'Óleos',
            type: 'oil',
            images: [
                {
                    imageUrl: 'deportista.jpg',
                    altText: 'Deportista',
                    text: 'Deportista'
                },
                {
                    imageUrl: 'torero.jpg',
                    altText: 'Torero',
                    text: 'Torero'
                },
                {
                    imageUrl: 'albañil.jpg',
                    altText: 'Albañil',
                    text: 'Albañil'
                },
                {
                    imageUrl: 'accidente_mortal.jpg',
                    altText: 'Accidente mortal',
                    text: 'Accidente mortal'
                },
                {
                    imageUrl: 'payaso.jpg',
                    altText: 'Payaso',
                    text: 'Payaso'
                },
                {
                    imageUrl: 'gitano.jpg',
                    altText: 'Gitano',
                    text: 'Gitano'
                },
                {
                    imageUrl: 'autorretrato_1.jpg',
                    altText: 'Autorretrato',
                    text: 'Autorretrato'
                },
                {
                    imageUrl: 'autorretrato_2.jpg',
                    altText: 'Autorretrato (2)',
                    text: 'Autorretrato (2)'
                },
                {
                    imageUrl: 'autorretrato_3.jpg',
                    altText: 'Autorretrato (3)',
                    text: 'Autorretrato (3)'
                },
                {
                    imageUrl: 'autorretrato_4.jpg',
                    altText: 'Autorretrato (4)',
                    text: 'Autorretrato (4)'
                },
                {
                    imageUrl: 'retrato_de_je.jpg',
                    altText: 'Retrato de Je',
                    text: 'Retrato de Je'
                },
                {
                    imageUrl: 'retrato_de_mercedes.jpg',
                    altText: 'Retrato de Mercedes',
                    text: 'Retrato de Mercedes'
                },
                {
                    imageUrl: 'bodegon.jpg',
                    altText: 'Bodegón',
                    text: 'Bodegón'
                },
                {
                    imageUrl: 'bodegon_2.jpg',
                    altText: 'Bodegón (2)',
                    text: 'Bodegón (2)'
                },
                {
                    imageUrl: 'bodegon_3.jpg',
                    altText: 'Bodegón (3)',
                    text: 'Bodegón (3)'
                },
                {
                    imageUrl: 'mujer_loca.jpg',
                    altText: 'Mujer loca',
                    text: 'Mujer loca'
                },
                {
                    imageUrl: 'nina.jpg',
                    altText: 'Niña',
                    text: 'Niña'
                },
                {
                    imageUrl: 'arboles_en_azul.jpg',
                    altText: 'Árboles en azul',
                    text: 'Árboles en azul'
                }
            ]
        },
        {
            title: 'Acrílicos',
            type: 'acrylic',
            images: [
                {
                    imageUrl: 'espana.jpg',
                    altText: 'España',
                    text: 'España'
                },
                {
                    imageUrl: 'espana_2.jpg',
                    altText: 'España (2)',
                    text: 'España (2)'
                },
                {
                    imageUrl: 'toro.jpg',
                    altText: 'Toro',
                    text: 'Toro'
                },
                {
                    imageUrl: 'asturias.jpg',
                    altText: 'Asturias',
                    text: 'Asturias'
                },
                {
                    imageUrl: 'del_mar.jpg',
                    altText: 'Del mar',
                    text: 'Del mar'
                },
                {
                    imageUrl: 'pajares.jpg',
                    altText: 'Pajares',
                    text: 'Pajares'
                },
                {
                    imageUrl: 'en_medio_de_tanta_soledad.jpg',
                    altText: 'En medio de tanta soledad',
                    text: 'En medio de tanta soledad'
                },
                {
                    imageUrl: 'exotica.jpg',
                    altText: 'Exótica',
                    text: 'Exótica'
                },
                {
                    imageUrl: 'hay_un_pueblo.jpg',
                    altText: 'Hay un pueblo',
                    text: 'Hay un pueblo'
                },
                {
                    imageUrl: 'si_que_hay_alguien.jpg',
                    altText: 'Sí que hay alguien',
                    text: 'Sí que hay alguien'
                },
                {
                    imageUrl: 'del_parque.jpg',
                    altText: 'Del parque',
                    text: 'Del parque'
                }
            ],
        },
        {
            title: 'Grabados',
            type: 'engraving',
            images: [
                {
                    imageUrl: 'la_noche.jpg',
                    altText: 'La noche',
                    text: 'La noche'
                },
                {
                    imageUrl: 'cabeza_y_pajaros.jpg',
                    altText: 'Cabeza y pájaros',
                    text: 'Cabeza y pájaros'
                },
                {
                    imageUrl: 'de_pajaros.jpg',
                    altText: 'De pájaros',
                    text: 'De pájaros'
                },
                {
                    imageUrl: 'cardos.jpg',
                    altText: 'Cardos',
                    text: 'Cardos'
                },
                {
                    imageUrl: 'cardos_2.jpg',
                    altText: 'Cardos (2)',
                    text: 'Cardos (2)'
                },
                {
                    imageUrl: 'del_arbol_caido.jpg',
                    altText: 'Del árbol caído',
                    text: 'Del árbol caído'
                },
                {
                    imageUrl: 'del_arte_japones.jpg',
                    altText: 'Del arte japonés',
                    text: 'Del arte japonés'
                },
                {
                    imageUrl: 'del_arte_japones_2.jpg',
                    altText: 'Del arte japonés (2)',
                    text: 'Del arte japonés (2)'
                },
                {
                    imageUrl: 'del_campo.jpg',
                    altText: 'Del campo',
                    text: 'Del campo'
                },
                {
                    imageUrl: 'los_pajaros.jpg',
                    altText: 'Los pájaros',
                    text: 'Los pájaros'
                },
                {
                    imageUrl: 'de_la_tierra.jpg',
                    altText: 'De la tierra',
                    text: 'De la tierra'
                },
                {
                    imageUrl: 'del_arbusto.jpg',
                    altText: 'Del arbusto',
                    text: 'Del arbusto'
                },
                {
                    imageUrl: 'hojas_encontradas.jpg',
                    altText: 'Hojas encontradas',
                    text: 'Hojas encontradas'
                },
                {
                    imageUrl: 'puesta_de_sol.jpg',
                    altText: 'Puesta de sol',
                    text: 'Puesta de sol'
                },
                {
                    imageUrl: 'mare_nostrum.jpg',
                    altText: 'Mare nostrum',
                    text: 'Mare nostrum'
                },
                {
                    imageUrl: 'del_jardin.jpg',
                    altText: 'Del jardín',
                    text: 'Del jardín'
                },
                {
                    imageUrl: 'humedal.jpg',
                    altText: 'Humedal',
                    text: 'Humedal'
                },
                {
                    imageUrl: 'paisaje.jpg',
                    altText: 'Paisaje',
                    text: 'Paisaje'
                },
                {
                    imageUrl: 'soledad.jpg',
                    altText: 'Soledad',
                    text: 'Soledad'
                },
                {
                    imageUrl: 'soledad_2.jpg',
                    altText: 'Soledad (2)',
                    text: 'Soledad (2)'
                },
                {
                    imageUrl: 'de_la_flor.jpg',
                    altText: 'De la flor',
                    text: 'De la flor'
                },
                {
                    imageUrl: 'el_espino.jpg',
                    altText: 'El espino',
                    text: 'El espino'
                },
                {
                    imageUrl: 'del_toro_y_la_luna.jpg',
                    altText: 'Del toro y la luna',
                    text: 'Del toro y la luna'
                },
                {
                    imageUrl: 'bodegon.jpg',
                    altText: 'Bodegón',
                    text: 'Bodegón'
                },
                {
                    imageUrl: 'angeles.jpg',
                    altText: 'Ángeles',
                    text: 'Ángeles'
                },
                {
                    imageUrl: 'de_cuento_1.jpg',
                    altText: 'De cuento 1',
                    text: 'De cuento 1'
                },
                {
                    imageUrl: 'de_cuento_2.jpg',
                    altText: 'De cuento 2',
                    text: 'De cuento 2'
                }
            ],
        },
        {
            title: 'Otros trabajos',
            type: 'other',
            images: [
                {
                    imageUrl: 'carpetas.jpg',
                    altText: 'Carpetas',
                    text: 'Carpetas'
                },
                {
                    imageUrl: 'cuadernos.jpg',
                    altText: 'Cuadernos',
                    text: 'Cuadernos'
                }
            ],
        },
    ];

    return (
        <section className="gallery">
            <h1>Galería</h1>
            {sectionsData.map((section, index) => (
                <section key={index} className={section.type}>
                    <h2>{section.title}</h2>
                    <div className="section-container">
                        {section.images.map((image, imageIndex) => (
                            <div key={imageIndex} className="each-painting">
                                <img src={`images/${section.type}/${image.imageUrl}`} alt={image.altText} className="painting-image" />
                                <p className="painting-title">{image.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </section>
    );
}

export default Gallery;