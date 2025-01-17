export default {
  global: {
    componenteFormativo:
      'Diagnosticar e interpretar resultados de contaminación atmosférica según normativa vigente',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz podrá favorecer procesos de comprensión, análisis y aplicación de diagnósticos de la problemática ambiental y de interpretación de mediciones de contaminación atmosférica, basándose en procedimientos técnicos y normativa ambiental vigente.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/banner.png'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
    // imagenesDecorativasBanner: [
    //   {
    //     clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //     imagen: require('@/assets/curso/images/header/1.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-2'],
    //     imagen: require('@/assets/curso/images/header/2.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-3'],
    //     imagen: require('@/assets/curso/images/header/3.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-4'],
    //     imagen: require('@/assets/curso/images/header/4.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-5'],
    //     imagen: require('@/assets/curso/images/header/5.svg'),
    //   },
    // ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Comprensión de la problemática atmosférica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Acuerdos y cumbres climáticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Bases conceptuales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Orígenes de contaminación y fuentes de emisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'La contaminación atmosférica',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Contaminantes atmosféricos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Afectación de los contaminantes',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'La Calidad del aire y su seguimiento',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Problemáticas ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Profundizando en las problemáticas',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Fenómenos climáticos por el calentamiento global',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Marco normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Contaminación y calidad ambiental',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Contaminación atmosférica',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Calidad del aire y su normativa',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Fuentes fijas ',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Fuentes móviles',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/222319_CF08_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'BBC News Mundo. (2014, 1 noviembre). ¿Por qué la Tierra se llama así? ',
      link:
        'https://www.bbc.com/mundo/noticias/2014/11/141031_respuestas_curiosos_1nov_finde_dv',
    },
    {
      referencia:
        'BBC News Mundo. (2018, 3 diciembre). Cambio climático: los 6 gráficos que muestran el estado actual del calentamiento global.',
      link: 'https://www.bbc.com/mundo/noticias-46426822',
    },
    {
      referencia:
        'BBC News Mundo. (2017, 1 junio). Donald Trump anuncia que Estados Unidos abandonará el Acuerdo de París sobre cambio climátic',
      link: ' https://www.bbc.com/mundo/noticias-internacional-40124921',
    },
    {
      referencia:
        'Capas de la Tierra. (2018, 24 agosto). Capas de la Tierra: Características, Estructura, Composición y Más',
      link: '',
    },
    {
      referencia:
        'Conservación Internacional. (2019, 27 febrero). 12 Datos que debes conocer sobre el cambio climático. ',
      link:
        'https://www.conservation.org/peru/novedades/2019/10/29/12-datos-que-debes-conocer-sobre-el-cambio-clim%C3%A1tico',
    },
    {
      referencia:
        'Foros Semana. (2020, 14 agosto). La promesa climática de los colombianos. Semana.com. ',
      link:
        'https://www.semana.com/nacion/articulo/la-promesa-climatica-de-los-colombianos/694633/',
    },
    {
      referencia: 'Foro Nuclear. (2020, 2 junio). ¿Qué sabes de la radiación?',
      link:
        'https://www.foronuclear.org/descubre-la-energia-nuclear/preguntas-y-respuestas/sobre-proteccion-radiologica-y-radiacion/que-sabes-de-la-radiacion/',
    },
    {
      referencia:
        'Guerrero, P. (2011, 11 octubre). Rosa de los vientos. La guía de Geografía. ',
      link: 'https://geografia.laguia2000.com/general/rosa-de-los-vientos',
    },
    {
      referencia: 'IDEAM. (2012). Índice de calidad del aire (ICA).',
      link:
        'http://www.ideam.gov.co/documents/11769/641368/2.01+HM+Indice+calidad+aire.pdf/5130ffb3-a1bf-4d23-a663-b4c51327cc05',
    },
    {
      referencia: 'IDEAM. (2014). Contaminación y calidad ambiental.',
      link: 'http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental',
    },
    {
      referencia: 'IDEAM. (2019). Glosario meteorológico. ',
      link:
        'http://www.ideam.gov.co/documents/11769/72085840/Anexo+10.+Glosario+meteorol%C3%B3gico.pdf/6a90e554-6607-43cf-8845-9eb34eb0af8e',
    },
    {
      referencia:
        'MeteoLobios. (2013). Lluvia. MeteoLobios. Estación meteorológica automática on line. ',
      link: 'http://www.meteolobios.es/lluvia.htm',
    },
    {
      referencia:
        'Minambiente. (2020). Protocolo de Kioto. Ministerio de Ambiente y Desarrollo Sostenible.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/INFORME_GESTION_MINAMBIENTE_2020.pdf',
    },
    {
      referencia:
        'Ministerio de Medio Ambiente. Gobierno de Chile. (2018). Guía de calidad del aire y educación ambiental.',
      link:
        'https://mma.gob.cl/wp-content/uploads/2018/08/Guia-para-Docentes-Sobre-Calidad-del-Aire-003.pdf',
    },
    {
      referencia:
        'Ministerio para la Transición Ecológica y el Reto Demográfico. (2016). De compuestos orgánicos volátiles.',
      link:
        'https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/atmosfera-y-calidad-del-aire/emisiones/act-emis/compuestos_organicos_volatiles.aspx',
    },
    {
      referencia:
        'Naciones Unidas. (2017). Cronología de negociaciones sobre el clima. Objetivos de desarrollo sostenible.',
      link:
        'https://www.un.org/sustainabledevelopment/es/cronologia-de-negociaciones-sobre-el-clima/',
    },
    {
      referencia:
        'NASA. (2021). Las causas del cambio climático. Climate Change: Vital Signs of the Planet.',
      link: 'https://climate.nasa.gov/causas/',
    },
    {
      referencia:
        'Portillo, G. (2021, 15 abril). Capas de la atmósfera. Meteorología en Red. ',
      link: 'https://www.meteorologiaenred.com/capas-atmosfera.html',
    },
  ],
  glosario: [
    {
      termino: 'Atmósfera',
      significado:
        'Envoltura gaseosa que rodea la tierra. Capa gaseosa que rodea nuestro planeta. Además de contener el aire, incluye partículas sólidas y líquidas en suspensión o aerosoles y nubes. (IDEAM, 2019)',
    },
    {
      termino: 'Dirección del viento',
      significado:
        'Cambio en el medio ambiente, ya sea adverso o beneficioso como resultado total o parcial de los aspectos ambientales de una organización. (NTC ISO 14001:2015)',
    },
    {
      termino: 'Evaporación potencial',
      significado:
        '“Cantidad de vapor de agua que puede ser emitida por una superficie de agua pura, por unidad de superficie y por unidad de tiempo, en las condiciones atmosféricas existentes”. (IDEAM, 2019)',
    },
    {
      termino: 'Fuente de emisión',
      significado:
        'Es toda actividad, proceso u operación, realizado por los seres humanos, o con su intervención, susceptible de emitir contaminantes al aire. (MADS, Res 909 de 2008, p. 34).',
    },
    {
      termino: 'Fuente fija',
      significado:
        'Es la fuente de emisión situada en un lugar determinado e inamovible, aún cuando la descarga de contaminantes se produzca en forma dispersa. (MADS, Res 909 de 2008, p. 34).',
    },
    {
      termino: 'Fuente fija dispersa o difusa',
      significado:
        'Es aquella en que los focos de emisión de una fuente fija se dispersan en un área, por razón del desplazamiento de la acción causante de la emisión, como en el caso de las quemas abiertas controladas en zonas rurales. (MADS, Res 909 de 2008,p. 34).',
    },
    {
      termino: 'Fuente fija puntual',
      significado:
        'Es la fuente fija que emite contaminantes al aire por ductos o chimeneas. (MADS, Res 909 de 2008, p. 34).',
    },
    {
      termino: 'Índice de calidad del aire (ICA)',
      significado:
        'Es un indicador que permite comparar los niveles de contaminación del aire de las estaciones de monitoreo que conforman un Sistema de Vigilancia de Calidad del Aire (Unidades espaciales de referencia), en un tiempo t, que corresponde al período de exposición previsto en la norma para cada uno de los contaminantes que se está midiendo. (IDEAM, 2012)',
    },
    {
      termino: 'Meteorología',
      significado:
        'El estudio de la atmósfera y sus fenómenos – especialmente las condiciones del tiempo y del clima – y las aplicaciones prácticas de este estudio. Además de la física, la química y la dinámica de la atmósfera, la meteorología abarca muchos de los efectos directos de la atmósfera en la superficie de la Tierra, los océanos y vida en general (IDEAM, 2019).',
    },
    {
      termino: 'Precipitación',
      significado:
        'La precipitación es la caída de partículas de agua líquida o sólida que se originan en una nube, atraviesan la atmósfera y llegan al suelo. La cantidad de precipitación es el volumen de agua lluvia que pasa a través de una superficie en un tiempo determinado. (IDEAM, 2019).',
    },
    {
      termino: 'Presión atmosférica',
      significado:
        'Presión (fuerza por unidad de área) ejercida por la atmósfera sobre cualquier superficie en virtud de su peso. Equivale al peso de una columna de aire de sección transversal unitaria que se extiende desde un nivel dado hasta el límite superior de la atmósfera (IDEAM, 2019).',
    },
    {
      termino: 'Radiación',
      significado:
        'Emisión o transferencia de energía en forma de ondas o partículas electromagnéticas. (IDEAM, 2019).',
    },
    {
      termino: 'Temperatura',
      significado:
        'Magnitud física que caracteriza el movimiento aleatorio medio de las moléculas en un cuerpo físico. (IDEAM, 2019).',
    },
    {
      termino: 'Velocidad del viento',
      significado:
        'Relación entre la distancia recorrida por el aire y el tiempo que tarda en recorrerla. La "velocidad instantánea" o, con mayor brevedad, la "velocidad", corresponde al caso de un intervalo de tiempo infinitamente pequeño. La "velocidad media" corresponde al caso en que el intervalo de tiempo es finito. (IDEAM, 2019).',
    },
  ],
  complementario: [
    // {
    //   tema: '1. Comprensión de la problemática atmosférica',
    //   referencia:
    //     'El Ciudadano TV. (2019, 25 agosto). Hace 40 años predijeron el calentamiento global [Video]. YouTube.',
    //   tipo: 'Video',
    //   link: 'https://www.youtube.com/watch?v=1nhyQiWmVio',
    // },

    {
      tema: '3. Bases conceptuales',
      referencia:
        'Corporación Educativa Indoamericana. (2020, 21 febrero). Meteorología Atmósfera [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aVG5qAFP4x8',
    },
    {
      tema: '3. Bases conceptuales',
      referencia:
        'Escola Port. (2016, 8 febrero). PER 5.1 METEOROLOGÍA (Escola Port Barcelona, 2012) [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qUtW0k6xo3E',
    },
    {
      tema: '4. Orígenes de contaminación y fuentes de emisiones',
      referencia:
        'AFP Español. (2016, 27 septiembre). La contaminación del aire [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aaOiL7CQd74',
    },
    {
      tema: '4. Orígenes de contaminación y fuentes de emisiones',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible - Colombia. (2017, 11 agosto). Todo lo que debes saber sobre la calidad del aire [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FtKg9zJ6oNQ',
    },
    {
      tema: '4. Orígenes de contaminación y fuentes de emisiones',
      referencia:
        'AmbienteBogota. (2015, 18 junio). Secretaría de Ambiente lanza sistema que alerta el estado de calidad del aire en Bogotá [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aW8Wuxxbv6E',
    },

    {
      tema: '5. Problemáticas ambientales',
      referencia:
        'Historia para melones. (2017, 29 noviembre). La contaminación atmosférica [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JsBSJE_TCOA',
    },

    {
      tema: '5. Problemáticas ambientales',
      referencia:
        'Facultad Online. (2018, 8 octubre). Efecto Invernadero | Explicación y cómo combatirlo!! [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eJrAvZRWKgY',
    },
    {
      tema: '6. Marco normativo',
      referencia:
        'Corantioquiaoficial. (2015, 13 julio). Programa de Gestión de Calidad del Aire [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yn3ubk_CABo',
    },
    {
      tema: '6. Marco normativo',
      referencia:
        'Corantioquiaoficial. (2016, 16 octubre). Control a Fuentes Móviles [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rvAYPKtN7mg',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarniz',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Gloria Esperanza Ortiz Russi',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de diseño y metrología',
        },
        {
          nombre: 'Martha Isabel Martínez Vargas',
          cargo: 'Productora audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Uriel Darío González Montoya',
          cargo: 'Corrección de estilo',
          centro: 'Centro agropecuario La Granja - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack Junior',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres ',
          cargo: 'Validación audiovisual ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey ',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres ',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta ',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
