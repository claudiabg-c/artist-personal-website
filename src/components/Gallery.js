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
                },
                {
                    imageUrl: 'bodegon.jpg',
                    altText: 'Bodegón',
                    text: 'Bodegón'
                },
                {
                    imageUrl: 'de_la_flor.jpg',
                    altText: 'De la flor',
                    text: 'De la flor'
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