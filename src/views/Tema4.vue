<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Orígenes de contaminación y fuentes de emisiones
    p.mb-5(data-aos='fade-right') La contaminación atmosférica es una problemática que impacta directamente en la atmósfera y que consecuentemente afecta la calidad del aire que respiramos, generando en el ser humano consecuencias relacionadas con enfermedades, especialmente respiratorias, que impactan en gran medida al hombre y su bienestar.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema4/1.png' alt='AvatarTop' style="width: 300px")
          .tarjeta.w-100(style="background-color: #ebf5f2" ).rounded-0
            .p-5.mt-2
              h3.text-center Los contaminantes 
              p Los contaminantes criterio como el CO2, los dióxidos de azufre, óxidos de nitrógeno, el material particulado, entre otros, se condensan en la parte superior de la tropósfera produciendo lo que conocemos como #[em smog] fotoquímico. Estos compuestos, al reaccionar con la radiación solar, exacerban las concentraciones y la temperatura media del planeta, aumentando las consecuencias, tanto en los receptores humanos como en los ecosistemas, debido a las actividades antrópicas que impactan directamente en la sociedad por la relación del consumo y la economía para el desarrollo de la humanidad. 
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema4/2.png' alt='AvatarTop' style="width: 300px")
          .tarjeta.w-100(style="background-color: #fdf8e4" ).rounded-0
            .p-5.mt-2
              h3.text-center Fuentes contaminantes
              p La mayoría de los contaminantes que se vierten en la atmósfera provienen de diversas fuentes, las cuales se pueden clasificar en naturales y antrópicas. En ese mismo sentido, las fuentes también pueden variar entre puntuales, dispersas, difusas, de área, entre otras. A continuación, se presentan los conceptos para comprender cómo estas fuentes influyen directamente en la contaminación que se genera en el ambiente. 
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 La contaminación atmosférica
    p.mb-5(data-aos='fade-right') Para hablar de la contaminación atmosférica, se deben tener en cuenta ciertos elementos que nos favorecen su asimilación y comprensión:
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        AcordionA.acordion_botones.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Fuentes biogénicas")
            p Corresponden a los eventos de contaminación producidos por fenómenos propios de la naturaleza.
              br
              br
              |Entre éstos, se encuentran las erosiones, los incendios forestales, las erupciones volcánicas, la descomposición de la vegetación y tormentas de polvo. (Decreto 948 de 1995) 
          div(titulo="Fuentes antropogénicas ")
            p Corresponden a actividades o intervenciones que realizan las personas, siendo la principal causa la combustión de materiales, sea ésta originada por las industrias, los vehículos o en el hogar. Esta clasificación tiene a su vez una subdivisión en tres grupos: las fuentes fijas, las fuentes móviles y las fuentes fugitivas. (Decreto 948 de 1995) 
          div(titulo="Las fuentes fijas ")
            p Corresponden a aquéllas situadas en un lugar físico particular, definido e inamovible. Considera las emisiones generadas por la quema de combustibles producto de actividades industriales y residenciales. (Decreto 948 de 1995) 
          div(titulo="Las fuentes móviles ")
            p Corresponden a aquellas fuentes que sí pueden desplazarse. A estas se asocian las emisiones de gases en tubos de escape, desgaste de frenos y neumáticos de distintos tipos de transporte motorizado, como automóviles, camiones, buses y motocicletas. (Decreto 948 de 1995)
          div(titulo="Las fuentes fugitivas ")
            p Comprenden emisiones que no son canalizadas por ductos, chimeneas u otros sistemas hacia el exterior, tales como aquellas provenientes del tránsito de vehículos por calles sin pavimentar, de la construcción y las demoliciones, entre otras. (Decreto 948 de 1995) 
      .col-lg-6(data-aos="fade-left"): img(src='@/assets/curso/images/tema4/3.png', alt='')
    .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #e2eacb ")
      p.mb-0 Sin embargo, y ampliando la conceptualización sobre las fuentes contaminantes de la atmósfera, la Resolución 909 de 2008, que corresponde a la norma de fuentes fijas en Colombia, define los siguientes conceptos asociados a los tipos de fuentes:
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/images/tema4/4.png', alt='').mb-4
          figcaption.w-60 (Ministerio del Medio Ambiente. Gobierno de Chile, 2018) 

      .col-lg-6(data-aos="fade-right")
        AcordionA.acordion_botones.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Fuente de emisión ")
            p Es toda actividad, proceso u operación realizado por los seres humanos, o con su intervención, susceptible de emitir contaminantes al aire. (MADS, Res 909 de 2008)
          div(titulo="Fuente fija ")
            p Es la fuente de emisión situada en un lugar determinado e inamovible, aun cuando la descarga de contaminantes se produzca en forma dispersa. (MADS, Res 909 de 2008)
          div(titulo="Fuente fija dispersa o difusa")
            p Es aquella en que los focos de emisión de una fuente fija se dispersan en un área, por razón del desplazamiento de la acción causante de la emisión, como en el caso de las quemas abiertas controladas en zonas rurales. (MADS, Res 909 de 2008) 
          div(titulo="Fuente fija puntual ")
            p Es la fuente fija que emite contaminantes al aire por ductos o chimeneas. (MADS, Res 909 de 2008)
          div(titulo="La calidad del aire  ")
            p La calidad del aire es dinámica y responde a las distintas fuentes de contaminación existentes en un momento (actividades económicas, procesos y tecnologías de combustión, composición de los combustibles utilizados, entre otros). (MADS, Res 909 de 2008)
    .row.justify-content-center.mb-5
      .col-lg-10
        div(style="background-color: #faedc0 ")
          .row.justify-content-center.mb-5
            .col-lg-2: img(src="@/assets/curso/images/tema1/6.svg")
            .col-lg-10
              .p-4
                h4 ¡Atención! 
                p Dentro de las múltiples fuentes antropogénicas que contribuyen a la contaminación atmosférica se encuentran: 
    div.mb-4(style="background-color: #f3f9ff ")
      .row.justify-content-center.mb-5
        .col-lg-7
          .p-5
            ul.lista-ul--color
              li
                i.fas.fa-check(style="color: #3BC192")
                | Uso de combustibles fósiles, como el carbón, el gas, el petróleo y sus derivados.
              li
                i.fas.fa-check(style="color: #3BC192")
                | Quemar leña como medio de calefacción y cocina en los hogares. 

              li
                i.fas.fa-check(style="color: #3BC192")
                | Emplear productos químicos de manera directa o indirecta, tales como los clorofluorocarbonos (CFC). Estos se encuentran en aerosoles de espray, en refrigeradores antiguos, en fertilizantes químicos para cuidar tus plantas o cosechas agrícolas.  

              li
                i.fas.fa-check(style="color: #3BC192")
                | Deforestar bosques. 
              li
                i.fas.fa-check(style="color: #3BC192")
                | Quemar rastrojos agrícolas. 
              li
                i.fas.fa-check(style="color: #3BC192")
                | Efectuar tronaduras en la industria minera.
              li
                i.fas.fa-check(style="color: #3BC192")
                | Construir grandes obras como edificios, puentes, caminos. 
        .col-lg-5
          img(src='@/assets/curso/images/tema4/5.png', alt='')
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Contaminantes atmosféricos 
    p.mb-5(data-aos='fade-right') Los contaminantes que afectan al ser humano, en su gran mayoría, son los adquiridos por vía aérea. Estos están constituidos por gases y partículas. A ellos se les denomina Criterio, en otras palabras, aquellos que generan una afectación directa en la salud. 
    div(style="background-color: #f3f9ff; margin-bottom: -6rem " ).p-5
      h4.text-center ¿En qué consisten? 
      p.text-center Según la Guía de calidad del aire y educación ambiental.
      .row.justify-content-center.mb-5
        .col-lg-8
          .bloque-texto-e.color-primario.p-4.bg-white
            .bloque-texto-e__texto
              i.fas.fa-quote-left(style='color: #34bc85')
              p.text-regular Los contaminantes de la atmósfera consisten en una gran variedad de gases, vapores y partículas, cuya presencia y cantidad afectan a las personas, las plantas, los animales y los materiales. Según sea el origen de los contaminantes, estos pueden clasificarse en dos grandes grupos -los primarios y los secundarios-, para así estudiar mejor su origen, distribución y tratamiento o prevención
              i.fas.fa-quote-right(style='color: #34bc85')
            p.text-end (Ministerio del Medio Ambiente. Gobierno de Chile, 2018)
      div(style="height: 150px")
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-5
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor(style="height: 436px")
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema4/6.png')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    h4 Contaminantes primarios 
                    p “Son aquellos que proceden directamente de las fuentes de emisión, tales como artefactos de calefacción domiciliarios, chimeneas industriales y tubos de escape de automóviles”. 
      .col-lg-5
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor(style="height: 436px")
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema4/7.png')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    h4 Contaminantes primarios 
                    p “Son aquellos que proceden directamente de las fuentes de emisión, tales como artefactos de calefacción domiciliarios, chimeneas industriales y tubos de escape de automóviles”. 
    .row.mb-5
      .col-lg-5
        figcaption (Ministerio del Medio Ambiente. Gobierno de Chile, 2018) 
    p.mb-5(data-aos='fade-right') A continuación, se presenta información muy importante sobre los principales contaminantes de la atmósfera. Se recomienda prestar mucha atención y tomar nota atenta de los elementos que se visualizará. 
    div(style="background-color: #f3f9ff").p-4.mb-4
      h4.text-center Principales contaminantes de la atmósfera
      p.text-center Habiendo ya estudiado los tipos de fuentes generadoras de emisiones, es importante conocer cuáles son los contaminantes que se generan y cómo son sus afectaciones en el ser humano. En la siguiente gráfica podrá visualizarlos y profundizar en ello. 
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.rounded-0.bg-white.p-4
            BotonesModal
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/images/tema4/8.svg', alt='Texto que describa la imagen')
              .tarjeta.color-acento-contenido.p-3(x="7%" y="98%" numero="" style='background-color: #d3ede5')
                h4 Material Particulado
                p El Material Particulado (MP) se clasifica según su diámetro, característica de la cual depende la intensidad de sus impactos. Las partículas de diámetros menores a 10 micrones, conocidas como MP10, y de diámetros menores a 2.5 micrones, conocidas como MP2.5. Este último es el contaminante más dañino para la salud y que genera mayores niveles de mortalidad prematura en la población.
              .tarjeta.color-acento-contenido.p-3(x="25%" y="98%" numero="" style='background-color: #d3ede5')
                h4 Monóxico de Carbono (CO)
                p Este gas es producto de la combustión incompleta de los combustibles, al existir una cantidad insuficiente de oxígeno, dando como resultado CO en vez de CO2. Los vehículos a motor y los procesos industriales son responsables de aproximadamente el 80 % de estas emisiones a la atmósfera. Sin embargo, también se produce al interior del hogar por la combustión residencial de leña para calefacción, cocinas, humo de cigarrillo y calefones.
                  br
                  br
                  |Este compuesto es uno de los gases más letales por su capacidad inhibidora de oxígeno - molécula en la sangre, lo que produce en el organismo una ausencia porcentual del mismo, siendo de esta manera muy letal.

              .tarjeta.color-acento-contenido.p-3(x="45.5%" y="98%" numero="" style='background-color: #d3ede5')
                h4 Óxidos de nitrógeno (NOx)
                p Estos gases se producen durante el quemado de maderas y combustibles fósiles, como gasolina, carbón y gas natural.
                  br
                  br
                  | " El sector transporte constituye la fuente principal de emisión de NOx. El mayor desplazamiento en vehículos particulares por parte de la población en las grandes ciudades y el crecimiento sostenido del parque automotriz son una de las causas más importantes del aumento de las emisiones de este contaminante. Cabe tener presente que los vehículos con motor a diésel emiten una mayor cantidad de contaminantes que aquéllos a gasolina, por lo que también es relevante considerar la composición del parque automotriz". (Ministerio del Medio Ambiente. Gobierno de Chile, 2018)

              .tarjeta.color-acento-contenido.p-3(x="68%" y="98%" numero="" style='background-color: #d3ede5')
                h4 Familia de compuestos nitrogenados
                p Cuando hablamos de los NOx, se incluye una familia de compuestos nitrogenados en la que se encuentran:
                ul.lista-ul--color
                  li
                    i.fas.fa-angle-right
                    |Óxido nítrico (NO).
                  li
                    i.fas.fa-angle-right
                    | Dióxido de nitrógeno (NO2).
                  li
                    i.fas.fa-angle-right
                    | Trióxido de nitrógeno (NO3).
                  li
                    i.fas.fa-angle-right
                    | Óxido nitroso (N2O).
                  li
                    i.fas.fa-angle-right
                    | Pentóxido de nitrógeno (N2O5).
              .tarjeta.color-acento-contenido.p-3(x="91%" y="98%" numero="" style='background-color: #d3ede5')
                h4 Óxidos de azufre 
                p El dióxido de azufre (SO2) y trióxido de azufre (SO3) son los óxidos dominantes del azufre presentes en la atmósfera. Son producto de la combustión de combustibles fósiles, principalmente derivados del petróleo y carbón. Los óxidos de azufre pueden acelerar la corrosión de los materiales al formar primero ácido sulfúrico en la atmósfera o sobre la superficie de los metales.

      .row.justify-content-center.mb-5
        .col-lg-10
          div(style="background-color: #faedc0 ")
            .row.justify-content-center.mb-5
              .col-lg-2: img(src="@/assets/curso/images/tema1/6.svg")
              .col-lg-10
                .p-4
                  p Es importante saber que el material particulado proviene de la mayoría de fuentes, sean naturales o antropogénicas, que no necesariamente son partículas sólidas, también pueden ser líquidas, llegando a ser aún más nocivas.
      .row.justify-content-center.mb-5
        .col-lg-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/aaOiL7CQd74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') Para finalizar con el estudio de los principales contaminantes atmosféricos, se recomienda observar atentamente los que se muestran a continuación. 
    .tarjeta.bg-slyde.p-5.mb-5
      SlyderA
        .row.mb-5.pb-5
          .col-md-6.mb-4.mb-md-0
            h5 Compuestos Orgánicos Volátiles (COV)
            p “Las emisiones de estos compuestos proceden de distintas fuentes, como el transporte, industrias de disolventes, minería, vertederos, entre otros, además de fuentes biogénicas, como la vegetación. Muchos de estos compuestos interactúan con otros componentes para producir niebla y contaminación por aerosoles en presencia de radiación solar.”  
            p.text-end.mt-3 (Ministerio del Medio Ambiente. Gobierno de Chile, 2018)
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema4/9.png', alt='Texto que describa la imagen')
        .row.mb-5.pb-5
          .col-md-6.mb-4.mb-md-0
            h5 Especificación sobre los COV 
            p Según el Ministerio para la Transición Ecológica y el Reto Demográfico (2016),  “Los compuestos orgánicos volátiles (COV) son todos aquellos hidrocarburos que se presentan en estado gaseoso a la temperatura ambiente normal o que son muy volátiles a dicha temperatura. Se puede considerar como COV aquel compuesto orgánico que a 20ºC tenga una presión de vapor de 0.01 kPa o más, o una volatilidad equivalente en las condiciones particulares de uso”. 
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema4/11.png', alt='Texto que describa la imagen')
        .row.mb-5.pb-5
          .col-md-6.mb-4.mb-md-0
            h5 Peligrosidad de los COV 
            p Con respecto a su peligrosidad, los COV pueden clasificarse en 3 grupos:
              br
              br
              | #[b Compuestos extremadamente peligrosos para la salud:]  
              br
              br
              |Benceno, cloruro de vinilo y 1,2 dicloroetano. 
              br
              |#[b Compuestos clase A:] 
              br
              br
              |los que pueden causar daños significativos al medio ambiente, como acetaldehído, anilina, tricloroetileno, etc. 
              br
              br
              |#[b Compuestos clase B:] tienen menor impacto en el medio ambiente. Pertenecen a este grupo, entre otros, acetona y etanol.
            p.text-end.mt-3 (Ministerio para la Transición Ecológica y el Reto Demográfico, 2016) 


          .col-md-6
            figure
              img(src='@/assets/curso/images/tema4/10.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-3
        .col-lg-10
          div(style="background-color: #faedc0 ")
            .row.justify-content-center.mb-3
              .col-lg-2: img(src="@/assets/curso/images/tema1/6.svg")
              .col-lg-10
                .p-4
                  h5 Para tener en cuenta 
                  p Los COV afectan tanto de manera medioambiental como directamente sobre la salud del ser humano. Estos compuestos están presentes por actividades en las que se emplean disolventes orgánicos. Algunas de las actividades donde es posible que se den emisiones de COV son: 
                  ul.lista-ul--color.fw-bold 
                    li.mb-0
                      i.fas.fa-check(style='color: #feb12e')
                      | Pinturas y barnices (e industrias donde se usen éstos)
                    li.mb-0
                      i.fas.fa-check(style='color: #feb12e')
                      | Industria siderúrgica 
                    li.mb-0
                      i.fas.fa-check(style='color: #feb12e')
                      | Industria de la madera 
                    li.mb-0
                      i.fas.fa-check(style='color: #feb12e')
                      | Industria cosmética  
                    li.mb-0
                      i.fas.fa-check(style='color: #feb12e')
                      | Industria farmacéutica 
          .row.mb-5
            .col-lg-8
              figcaption (Ministerio para la Transición Ecológica y el Reto Demográfico, 2016)
    .tarjeta.bg-slyde.p-5.mb-5
      SlyderA
        .row.mb-5.pb-5
          .col-md-6.mb-4.mb-md-0
            h5 Plomo (Pb) 
            p “Este contaminante proviene de la combustión de gasolinas con plomo, de la minería y fundiciones, y de la incineración de residuos. El plomo puede depositarse en el agua y alimentos que consumimos, por lo que puede ser absorbido por nuestro cuerpo”.   
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema4/12.png', alt='Texto que describa la imagen')
        .row.mb-5.pb-5
          .col-md-6.mb-4.mb-md-0
            h5 Ozono troposférico (O3) 
            p “Se trata del principal componente del #[em smog] fotoquímico y uno de los más fuertes agentes oxidantes. El ozono se forma en la tropósfera y de la acción de esta en las moléculas de ozono en la estratósfera, como producto de la reacción entre los NOX, los COV y los hidrocarburos (HC) en presencia de radiación solar. Las fuentes de hidrocarburos y NOx en las zonas urbanas son primordialmente los vehículos”. 
              br
              br
              |(Ministerio de Medio Ambiente. Gobierno de Chile, 2018) 
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema4/13.png', alt='Texto que describa la imagen')
    h3 Estándares de emisiones en Colombia 
    p.mb-5(data-aos='fade-right') En Colombia, la Resolución 909 de 2008, por la cual se establecen los estándares de emisiones industriales a nivel nacional, establece la principal actividad antrópica generadora de estos contaminantes tipo criterio. Es importante reconocer qué tipo de procesos son generadores de estos compuestos. A continuación, se presenta un fragmento de la tabla 3 de las actividades industriales y contaminantes a monitorear por actividad industrial. 
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3 Afectación de los contaminantes  
    p.mb-5(data-aos='fade-right') Teniendo en cuenta que los principales contaminantes atmosféricos son los denominados “criterio”, que son los que afectan la salud humana, se analizarán cuáles son las principales afecciones y sus características. 
      br
      br
      | Principales afectaciones en la salud y el ambiente por contaminantes:  
    .row.justify-content-between.mb-5
      .col-lg-7.mb-lg-0.mb-3
        AcordionA.acordion_botones.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            div(titulo="Material Particulado (MP)")
              p Por su tamaño, estas partículas son capaces de ingresar al sistema respiratorio, provocando potenciales daños a sus órganos principales. Mientras menor sea su diámetro, mayor será el potencial de daño a la salud humana. Las partículas de MP2,5 penetran hasta los alvéolos pulmonares e ingresan directamente al torrente sanguíneo, aumentando los riesgos de mortalidad prematura. En general, el MP puede también dañar las plantas, inhibir el crecimiento de la vegetación y corroer materiales. 
            div(titulo="Impacto del monóxido de carbono (CO) ")
              p Tiene efectos perjudiciales, ya que en altas concentraciones puede causar cambios fisiológicos y patológicos y, finalmente, la muerte. Principalmente, el daño que produce es que el CO sustituye al oxígeno en la sangre, formando la carboxihemoglobina (COHb), lo que produce un menor transporte de oxígeno en la sangre, una disminución de las funciones neuroconductuales, menor peso en niños recién nacidos y retardo en el desarrollo postnatal. Al parecer, el monóxido de carbono no tiene efectos perjudiciales sobre la superficie de los materiales. Se han hecho experimentos que han demostrado que el CO no produce efectos dañinos en plantas a concentraciones por debajo de 100 ppm, teniendo en cuenta que rara vez las concentraciones ambientales de este contaminante pueden alcanzar este nivel, ni siquiera en cortos períodos. 
            div(titulo="Óxidos de nitrógeno (NOx)")
              p Los NOx son responsables de importantes efectos sobre la salud y el medio ambiente, como problemas respiratorios o daño pulmonar, enfermedades en pulmones y bronquios, mayor susceptibilidad a las infecciones, daño celular, irritación ocular y pérdida de las mucosas. El NO2 puede reaccionar con la humedad presente en la atmósfera para formar ácido nítrico, que puede ser causa de corrosión de las superficies metálicas y detener el crecimiento de plantas. 
            div(titulo="Óxidos de azufre (SOx)")
              p Estos gases pueden alterar el funcionamiento de los bronquios, producir daño pulmonar y a las vías respiratorias, irritación ocular y paros cardíacos en personas. Concentraciones altas de SO2 pueden conducir a lesiones crónicas en plantas, mientras que producen daño al medio ambiente al inhibir el crecimiento de vegetación. 
      .col-lg-5.col-8: img(src='@/assets/curso/images/tema4/14.png', alt='Texto que describa la imagen')
    .row.justify-content-between.mb-5
      .col-lg-5.col-8: img(src='@/assets/curso/images/tema4/15.png', alt='Texto que describa la imagen')
      .col-lg-7.mb-lg-0.mb-3
        AcordionA.acordion_botones.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Compuestos Orgánicos Volátiles (COV)")
            p Estos compuestos pueden producir irritación de ojos, garganta y pulmones, así como inhibición del crecimiento de las plantas. También se asocia a una mayor probabilidad de desarrollar leucemia y otros tipos de cáncer. 
          div(titulo="Plomo (Pb)")
            p Este contaminante proviene de la combustión de gasolina con plomo, de la minería y fundiciones, y de la incineración de residuos. El plomo puede depositarse en el agua y alimentos que consumimos, por lo que puede ser absorbido por nuestro cuerpo. 
          div(titulo="Ozono troposférico (O3)")
            p Su toxicidad ocurre en continuo, a mayores concentraciones se generan efectos más nocivos. Provocan tos y dolores de cabeza, irritación de ojos, nariz y garganta, incremento de la mucosidad, estertores, cierre de las vías respiratorias, dolores de tórax, languidez, malestar y náuseas, con aumento en la incidencia de ataques asmáticos. También puede agravar enfermedades crónicas del corazón. 
              br
              br
              |(Ministerio de Medio Ambiente. Gobierno de Chile, 2018) 
          div(titulo="Monitoreo en Colombia ")
            p En Colombia, se monitorean los principales contaminantes atmosféricos tipo criterio (MP, SOx, NOx, CO, entre otros) y mediante una herramienta estadística que se denomina ICA, o Índice de Calidad del Aire, en la que se establece un código de colores que indican cómo se encuentra la calidad del aire que respiramos, los cuales varían dependiendo de la concentración del contaminante que esté presente en el aire. 
    p.mb-5(data-aos='fade-right') Para contextualizar el contenido, es posible visualizar el siguiente video
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FtKg9zJ6oNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador 
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.4 La Calidad del aire y su seguimiento 
    .card-tema2.p-4.mb-5
      img.d-lg-block.d-none(src='@/assets/curso/images/tema4/16.png', alt='')
      .row.justify-content-center.align-items-center
        .col-lg-4
        .col-lg-8
          p.mb-0 Para saber cómo es la calidad del aire que respiramos, es importante conocer su estado, y más cuando es lo que nos afecta directamente, ya que el aire es un componente vital para el ser humano. 
            br
            br
            |Según el marco normativo establecido en Colombia: la Resolución 601 de 2006 del MAVDT; Resolución 610 de 2010 del MAVDT; Informe del estado de la calidad del aire en Colombia 2007-2010; Informe del estado del medio ambiente y de los recursos naturales renovables; Comunidad Andina –CAN; se establece la incorporación de la herramienta Índice de Calidad del Aire, mejor conocida por sus siglas como ICA.   
    .pt-lg-4
      .row.justify-content-center.mb-5
        .col-lg-8
          h3 ICA 
          p Según el Instituto de Hidrología, Meteorología y Estudios Ambientales – IDEAM,  en su hoja metodología de la calidad del aire, establece que:
          .bloque-texto-e.color-primario.p-4(style="background-color: #f3f9ff ")
            .bloque-texto-e__texto
              i.fas.fa-quote-left(style='color: #34bc85')
              p.text-regular El Índice de calidad del aire (ICA) permite comparar los niveles de contaminación del aire de las estaciones de monitoreo que conforman un Sistema de Vigilancia de Calidad del Aire (Unidades espaciales de referencia), en un tiempo t, que corresponde al período de exposición previsto en la norma para cada uno de los contaminantes que se está midiendo
              i.fas.fa-quote-right(style='color: #34bc85')
          figcaption (IDEAM, 2012) 
    .tarjeta.rounded-pill.color-primario.p-3.d-inline-flex.mb-4
      h4.text-white.d-flex.mb-0 Contexto nacional 
    p.mb-5(data-aos='fade-right') Teniendo en cuenta los contaminantes que son monitoreados en el país, las características de los combustibles que se distribuyen y los equipos que actualmente se encuentran en las SVCA, el índice se calcula de manera independiente para cada uno de los seis principales contaminantes, los cuales son PM10, PM2,5, SO2, NO2, O3 y CO.  
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .bloque-texto-e.color-primario.p-4(style="background-color: #d4ebe4 ").h-100
          .bloque-texto-e__texto
            i.fas.fa-quote-left(style='color: #34bc85')
            p.text-regular  “Los valores del ICA se ubican en una escala adimensional de 0 a 500, agrupados en 6 rangos que guardan estrecha relación con la amenaza que, a la salud humana, representan dichos niveles de contaminación del aire. Para facilitar su interpretación cada uno de estos rangos ha sido asociado a un color que sirve de alerta”.  

            i.fas.fa-quote-right(style='color: #34bc85')
      .col-lg-6.col-8: img(src='@/assets/curso/images/tema4/17.png', alt='')
    .tarjeta.rounded-pill.color-primario.p-3.d-inline-flex.mb-4
      h4.text-white.d-flex.mb-0 Acciones preventivas 
    p.mb-5(data-aos='fade-right') Es muy importante conocer qué acciones preventivas debemos ejecutar cuando se conocen los diferentes estados de la concentración de los contaminantes presentes en el aire que respiramos.  
    .row.justify-content-center.mb-5
      .col-lg-6.col-8: img(src='@/assets/curso/images/tema4/18.png', alt='')
      .col-lg-6.mb-lg-0.mb-3
        .bloque-texto-e.color-primario.p-4(style="background-color: #d4ebe4 ").h-100
          .bloque-texto-e__texto
            i.fas.fa-quote-left(style='color: #34bc85')
            br
        
            p.text-regular La hoja metodológica versión 1 (IDEAM, 2012)  establece las diferentes acciones a ejecutar, la cuales están contenidas en los niveles de contaminación del aire reflejados por cada uno de los rangos del ICA para los cuales determinan un conjunto de acciones preventivas que se recomienda sean tenidas en cuenta por la población.  
            i.fas.fa-quote-right(style='color: #34bc85')
    .row.justify-content-center.mb-3
        .col-lg-10
          div(style="background-color: #faedc0 ")
            .row.mb-3.align-items-center
              .col-lg-2: img(src="@/assets/curso/images/tema1/6.svg")
              .col-lg-7
                .p-4
                  h5 Para contextualizar este contenido, se puede visualizar el video del siguiente enlace:
                  p https://www.youtube.com/watch?v=aW8Wuxxbv6E
              .col-auto 
                .p-2
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=aW8Wuxxbv6E" target="_blank" type="application/pdf")
                    span Ver video 
                    i.fas.fa-video
    p.mb-5(data-aos='fade-right') Para profundizar en lo estudiado hasta este punto, se invita a visitar el sitio sugerido en el siguiente recurso. Esta acción es de suma importancia. Se deben tener presentes todos los elementos de aplicación que se encuentre y tomar nota atenta de todo ello. 
    div(style="background-color:#f3f9ff ").p-5
      h4.text-center.mb-4 Calidad del aire y su seguimiento
      p A continuación, se invita a ingresar al siguiente link interactivo que le permitirá visualizar el estado de la calidad del aire y establecer las medidas de prevención mediante el índice de la calidad del aire.
      .row.justify-content-center.mb-5
        .col-lg-2 
          a.boton.color-acento-botones(href="http://iboca.ambientebogota.gov.co/mapa/" target="_blank" type="application/pdf")
            span Ir al aplicativo 
            i.fas.fa-angle-right



 












</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
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
