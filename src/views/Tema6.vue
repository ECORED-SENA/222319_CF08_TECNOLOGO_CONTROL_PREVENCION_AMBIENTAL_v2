<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Marco normativo
    img(src='@/assets/curso/images/tema6/1.png', alt='')
    p.mb-5(data-aos='fade-right') El marco normativo que regula la contaminación del aire en nuestro país es muy importante para establecer las acciones de prevención y control de los contaminantes que nos afectan en la actualidad. En esta sección, se presentan las leyes, decretos, resoluciones, protocolos y demás documentación vigente. 
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.1 Contaminación y calidad ambiental 
    p.mb-2(data-aos='fade-right') Es importante definir cómo la regulación ambiental marca el camino de la conciencia ambiental en nuestro país, según el Instituto De Hidrología Meteorología Y Estudios Ambientales - IDEAM… “el control de la contaminación en Colombia comienza con la generación de datos e información.  La caracterización de la calidad ambiental que es su equivalente, constituye uno de los más importantes procesos de desarrollo de información orientados a un amplio margen de tomadores de decisiones que van desde el ciudadano del común que busca optimizar sus medios de vida, hasta los altos funcionarios del Estado que deben tomar decisiones de política pública relacionada con grandes grupos poblacionales, especialmente los que habitan las zonas urbanas”. 
    figcaption.d-inline-flex.mb-5 (IDEAM, 2014) 
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta(style="background-color: #f3f9ff").mb-5.p-4
          h4 Normas Asociadas. 
          LineaTiempoB.color-acento-contenido.mb-5(:datos="datosLineaTiempo1")
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.2 Contaminación atmosférica  
    p.mb-5(data-aos='fade-right') “La contaminación atmosférica es la presencia que existe en el aire de pequeñas partículas o productos secundarios gaseosos que pueden implicar riesgo, daño o molestia para las personas, plantas y animales que se encuentran expuestas a dicho ambiente.”  
    .row.justify-content-center.mb-5
      .col-lg-6
        img(src='@/assets/curso/images/tema6/2.svg', alt='').mb-4
        figcaption.text-center.tarjeta Nota. Tomada de Cárdenas (2020). Sectores Normativos.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta(style="background-color: #f3f9ff").mb-5.p-4
          h4 Normas Asociadas.  
          LineaTiempoB.color-acento-contenido.mb-5(:datos="datosLineaTiempo2")
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.3 Calidad del aire y su normativa
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/images/tema6/3.svg', alt='')
      .col-lg-10 
        p Las normas de calidad del aire en Colombia se convierten en la base para el seguimiento. Así lo afirma el Instituto De Hidrología Meteorología Y Estudios Ambientales – IDEAM: “el monitoreo y control de la contaminación atmosférica ha tomado día a día mayor relevancia, debido a que, según cifras de la Organización Mundial de la Salud, una de cada ocho muertes ocurridas a nivel mundial, es ocasionada por la contaminación del aire.  
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-10 
        p A nivel nacional, el Departamento Nacional de Planeación estimó que, durante el año 2015, los efectos de este fenómeno estuvieron asociados a 10.527 muertes y 67.8 millones de síntomas y enfermedades. Adicionalmente, los costos ambientales asociados a la contaminación atmosférica en Colombia, durante los últimos años, se incrementaron pasando de 1.1% del PIB de 2009 ($5.7 billones de pesos) a 1.59% del PIB de 2014 ($12 billones de pesos) y del 1.93% del PIB en 2015 ($15.4 billones de pesos), lo cual pone en evidencia la necesidad de seguir implementando estrategias para controlar, evaluar y monitorear estas sustancias.” 
      .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/images/tema6/4.svg', alt='')
    figcaption.d-inline-flex.mb-5 (IDEAM, 2014) 
    .row.justify-content-center.mb-3
      .col-lg-10
        .tarjeta(style="background-color: #f3f9ff").mb-5.p-4
          h4 Normas Asociadas.  
          LineaTiempoB.color-acento-contenido.mb-5(:datos="datosLineaTiempo3")
    .row.justify-content-center.mb-5
      .col-lg-8 
        .d-inline-flex.tarjeta.rounded-0.p-3.justify-content-center.align-items-center(style="background-color: #fff7db").mb-4.w-100
              img(src='@/assets/curso/images/tema6/a2.svg', alt='' style="width: 109px").mx-4
              div
                h4 Protocolo asociado 
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Protocolo para el monitoreo y seguimiento de la calidad del aire. 

                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Manual de diseño de sistemas de vigilancia de calidad del aire. 
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.4 Fuentes fijas
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/images/tema6/5.svg', alt='')
      .col-lg-10 
        p #[b Las fuentes fijas puntuales, mejor conocidas como “chimeneas”] o ductos por donde se expulsan gases contaminantes (MP, SOx, NOx, CO, COV, entre otros) de las industrias que hacen parte del sector productivo que mueve la economía de nuestro país, aportan de manera importante al continuo deterioro de la calidad del aire que respiramos, especialmente en la principales ciudades del país; por esta razón, la normatividad asociada a las fuentes fijas es fundamental para el seguimiento y control de la emisiones en Colombia. 
    .row.justify-content-center.mb-5
      .col-lg-10 
        .tarjeta(style="background-color: #f3f9ff ").p-4
          h4 Normas Asociadas. 
          .d-inline-flex.tarjeta.rounded-0.p-3.justify-content-center.align-items-center.mb-4
            img(src='@/assets/curso/images/tema6/a3.svg', alt='' style="width: 109px").mx-4
            div
              h4 Resolución 909 de 2008 
              p  Por la cual se establecen las normas y estándares de emisión admisibles de contaminantes a la atmósfera por fuentes fijas y se dictan otras disposiciones.
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.p-4(style="background-color: #fff7db")
          h4 Métodos de medición y protocolos asociados 
          p #[b Resolución 0935 de 2011] por la cual se establecen los métodos para la evaluación de emisiones contaminantes por fuentes fijas y se determina el número de pruebas o corridas para la medición de contaminantes en fuentes fijas. 
            br
            br
            |#[b Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas.] 
            br
            br
            |#[b Método 1] - Determinación del punto y velocidad de muestreo para fuentes estacionarias. 
            br
            |#[b Método 1A] - Determinación del punto y velocidad de muestreo para fuentes estacionarias con ductos o chimeneas pequeñas. 
            br
            |#[b Método 2] - Determinación de la velocidad y tasa de flujo volumétrica de gases en chimenea (Tubo Pitot tipo S). 
            br
            |#[b Método 3] - Análisis de gases para la determinación del peso molecular base seca. 
            br
            |#[b Método 3B] - Análisis de gases para la determinación del factor de corrección de tasa de emisión o exceso de aire. 
            br
            |#[b Método 4] - Determinación del contenido de humedad en gases de chimenea. 
            br
            |#[b Método 5] - Determinación de las emisiones de material particulado en fuentes estacionarias. 
            br
            |#[b Método 6] - Determinación de las emisiones de dióxido de azufre en fuentes estacionarias. 
            br
            |#[b Método 7] - Determinación de las emisiones de óxidos de nitrógeno en fuentes estacionarias. 
            br
            |#[b Método 12] - Determinación de las emisiones de plomo inorgánico en fuentes estacionarias. 
            br
            |Número de pruebas o corridas para la medición de contaminantes. 
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.5 Fuentes móviles 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/images/tema6/6.svg', alt='')
      .col-lg-10 
        p #[b “Las emisiones por fuentes móviles se produce por la quema de combustibles fósiles utilizados por el parque automotor], ya que los vehículos automotores son los principales emisores de contaminantes como óxidos de nitrógeno, monóxido de carbono, hidrocarburos no quemados, dióxidos de azufre y compuestos orgánicos volátiles”. 
    figcaption.d-inline-flex.mb-5 (IDEAM, 2014) 
    .row.justify-content-center.mb-3
      .col-lg-10
        .tarjeta(style="background-color: #f3f9ff").mb-5.p-4
          h4 Normas Asociadas.  
          LineaTiempoB.color-acento-contenido.mb-5(:datos="datosLineaTiempo4")



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempo1: [
      {
        titulo: '​Decreto 1600 de 1994',
        texto:
          ' Por el cual se reglamenta parcialmente el Sistema Nacional Ambiental (SINA) en relación con los Sistemas Nacionales de Investigación Ambiental y de Información Ambiental.',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
      {
        titulo: 'Decreto 1200 de 2004',
        texto:
          ' Por el cual se determinan los Instrumentos de Planificación Ambiental y se adoptan otras disposiciones. ',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
      {
        titulo: 'Resolución 0941 de 2009',
        texto:
          'Por la cual se crea el subsistema de información sobre uso de los recursos naturales renovables – SIUR y se adopta el Registro Único Ambiental RUA.  ',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
      {
        titulo: 'Decreto 2041 de 2014',
        texto:
          'Por el cual se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales.  ',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
      {
        titulo: 'Decreto 1076 de 2015',
        texto:
          'Por medio del cual se expide el decreto único reglamentario del sector ambiental y desarrollo sostenible.  ',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
    ],

    datosLineaTiempo2: [
      {
        titulo: 'Decreto 948 de 1995',
        texto:
          'Por el cual se reglamentan, parcialmente, la Ley 23 de 1973, los artículos 33, 73, 74, 75 y 76 del Decreto - Ley 2811 de 1974; los artículos 41, 42, 43, 44, 45, 48 y 49 de la Ley 9 de 1979; y la Ley 99 de 1993, en relación con la prevención y control de la contaminación atmosférica y la protección de la calidad del aire. ',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
      {
        titulo: 'Decreto 979 de 2006',
        texto:
          'Por el cual se modifican los artículos 7,10, 93, 94 y 108 del Decreto 948 de 1995. ',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
      {
        titulo: '',
        texto:
          ' Política para la prevención y control de la contaminación del aire.',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
    ],
    datosLineaTiempo3: [
      {
        titulo: 'Resolución 2254 de 2017',
        texto:
          ' Por la cual se adopta la norma de calidad del aire ambiente y se dictan otras disposiciones ',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
      {
        titulo: 'Resolución 650 de 2010',
        texto:
          'Por la cual se adopta el Protocolo para el monitoreo y seguimiento de la calidad del aire”  ',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
      {
        titulo: 'Resolución 2154 de 2010',
        texto:
          'Por la cual se ajusta el protocolo para el monitoreo y seguimiento de la calidad del aire adoptado a través de la Resolución 650 de 2010 y se adoptan otras disposiciones. ',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
    ],
    datosLineaTiempo4: [
      {
        titulo: 'Resolución 910 de 2008',
        texto:
          'Por la cual se reglamentan los niveles permisibles de emisión de contaminantes que deberán cumplir las fuentes móviles terrestres, se reglamenta el Artículo 91 del Decreto 948 de 1995 y se adoptan otras disposiciones. ',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
      {
        titulo: 'Resolución 1111 de 2013',
        texto: ' Por la cual se modifica la resolución 910 de 2008. ',
        icono: require('@/assets/curso/images/tema6/a1.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
