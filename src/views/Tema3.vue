<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Bases conceptuales
    p.mb-5(data-aos='fade-right') Para continuar adentrándose en el estudio de este componente, es fundamental afianzar y reforzar algunos conceptos, términos, elementos teóricos y técnicos que tienen relación directa con el tema y que potenciarán su comprensión, asimilación y apropiación de los temas.
    .card-tema3.p-5.mb-5
      img.img1.d-xl-block.d-none(src='@/assets/curso/images/tema3/1.svg', alt='')
      
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6
          img.d-xl-none.d-block.position-relative(src='@/assets/curso/images/tema3/1.svg', alt='')
        .col-lg-9
          h4 Meteorología

          p.mb-0 Según el Instituto de Hidrología, Meteorología y Estudios Ambientales IDEAM, la meteorología es “el estudio de la atmósfera y sus fenómenos – especialmente las condiciones del tiempo y del clima – y las aplicaciones prácticas de este estudio. Además de la física, la química y la dinámica de la atmósfera, la meteorología abarca muchos de los efectos directos de la atmósfera en la superficie de la tierra, los océanos y vida en general” (IDEAM, 2019).
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        h4 Para poder entender la meteorología 
        .cajon-b.color-acento-contenido.p-3.mb-5
          .p-4
            p.mb-0 Para poder entender la meteorología, es necesario comprender sus conceptos claves, como atmósfera: #[b “envoltura gaseosa que rodea la tierra. Capa gaseosa que rodea nuestro planeta. Además de contener el aire, incluye partículas sólidas y líquidas en suspensión o aerosoles y nubes”.] (IDEAM, 2019)
      .col-lg-4: img(src='@/assets/curso/images/tema3/2.png', alt='')
    h4 Formación de la atmósfera terrestre
    .tarjeta.bg-slyde.p-lg-5.p-3.mb-lg-0.mb-3
      h5.text-center.mb-4 Según el portal de Margarita Lezama:
      .row.justify-content-center.mb-3
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta.bg-white.p-lg-5.p-4.h-100
            .titulo-sexto.color-secundario(data-aos='fade-right')
              p.mb-0 &#34;Se cree que la tierra se formó hace unos 5 mil millones de años y que muchos de los gases de nuestra atmósfera fueron expulsados al aire por los primeros volcanes; durante los primeros 500 millones de años, hubo poco o nada de oxígeno libre alrededor de la tierra. El oxígeno libre consiste en moléculas de oxígeno no unidas a otro elemento, por ejemplo, el carbono (para formar dióxido de carbono) o el hidrógeno (para formar agua)&#34;
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta.bg-white.p-lg-5.p-4.h-100
            .titulo-sexto.color-secundario(data-aos='fade-right')
              p.mb-0 &#34;Hace mil millones de años, los primeros organismos acuáticos, llamados algas verdeazuladas, comenzaron a usar la energía del sol para dividir las moléculas de agua (H2O) y el dióxido de carbono (CO2), recombinándolas en compuestos orgánicos y oxígeno molecular (O2). Este proceso de conversión de energía solar se conoce como fotosíntesis.&#34;
      .row.justify-content-center.mb-3
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta.bg-white.p-lg-5.p-4.h-100
            .titulo-sexto.color-secundario(data-aos='fade-right')
              p.mb-0 &#34;En lo alto de la atmósfera, algunas moléculas de oxígeno (O2) absorbieron energía de los rayos ultravioleta (UV) del sol y se dividieron para formar átomos individuales de oxígeno. Estos átomos se combinaron con el oxígeno restante y formaron moléculas de ozono (O3), un gas capaz de absorber los rayos UV. La capa de ozono que rodea la tierra actúa como escudo protector contra la radiación UV.&#34;
        .col-lg-6
          .tarjeta.bg-white.p-lg-5.p-4.h-100
            .titulo-sexto.color-secundario(data-aos='fade-right')
              p.mb-0 &#34;El aire que respiramos está compuesto en un 78% de nitrógeno (N2), un 21% de oxígeno (O2), 0.9% de argón (Ar) y 0.04% de dióxido de carbono (CO2). El resto está compuesto por elementos llamados oligoelementos, que incluyen vapor de agua, ozono y otras partículas / moléculas que flotan alrededor&#34;
            p.text-end.mt-5 (Lezama, 2023)
    ImagenInfograficaB.color-acento-botones.modal-custom.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/images/tema3/3.png', alt='')
      div(x="50%" y="35%" numero="")
        h5 Exósfera 
        p “La última de las capas de la atmósfera es la exósfera. Esta es la capa más alejada de la superficie terrestre y, debido a su altura, es la más indefinida y por eso no es en sí considerada una capa de la atmósfera. Más o menos se extiende entre los 600-800 km de altura hasta los 9.000-10.000 km. Esta capa de la atmósfera es la que separa el planeta tierra del espacio exterior y en ella los átomos se escapan. Está compuesta en su mayoría de hidrógeno”. (Portillo, 2021) 
      div(x="50%" y="43%" numero="")
        h5 Termósfera 
        p “Es la capa de la atmósfera más amplia. Se extiende desde los 80-90 km hasta los 640 km. A estas alturas ya apenas queda aire y las partículas que existen en esta capa se ionizan por la radiación ultravioleta. A esta capa también se le llama ionósfera debido a las colisiones de los iones que tienen lugar en ella. La ionósfera tiene gran influencia en la propagación de las ondas de radio. Una parte de la energía radiada por un transmisor hacia la ionósfera es absorbida por el aire ionizado y otra es refractada, o desviada, de nuevo hacia la superficie de la tierra”. 
          br
          br
          |La temperatura en la termósfera es muy alta, llegando a ser de hasta miles de grados Celsius. Todas las partículas que se encuentran en la termósfera están altamente cargadas de energía proveniente de los rayos del sol. (Portillo, 2021) 
      div(x="50%" y="52%" numero="")
        h5 Mesósfera
        p “Al final de la estratósfera, se encuentra la estratopausa. Se trata de una zona de la atmósfera donde terminan las altas concentraciones de ozono y la temperatura se vuelve muy estable (sobre los 0 grados centígrados). La estratopausa es la que da paso a la mesósfera”. 
          br
          br
          |La mesósfera es la capa más delgada de la atmósfera, ya que sólo contiene el 0,1% de la masa de aire total, y en ella se pueden alcanzar temperaturas de hasta -80 grados centígrados. En esta capa tienen lugar las reacciones de quimioluminiscencia y aeroluminiscencia. (Portillo, 2021) 
      div(x="50%" y="60.5%" numero="")
        h5 Estratósfera 
        p “Se encuentra a partir de la tropopausa y se extiende desde los 10-15 km de altura hasta los 45-50 km. La temperatura en la estratósfera es mayor en la parte superior que en la inferior ya que conforme aumenta en altura, va absorbiendo mayor cantidad de rayos solares y va aumentando su temperatura. Es decir, el comportamiento de la temperatura en altura es al contrario que en la tropósfera. Comienza siendo estable, pero baja, y conforme aumenta la altitud, aumenta la temperatura”. 
          br
          br
          |Al final de la estratósfera se encuentra la estratopausa. Se trata de una zona de la atmósfera donde terminan las altas concentraciones de ozono y la temperatura se vuelve muy estable (sobre los 0 grados centígrados). La estratopausa es la que da paso a la mesósfera. (Portillo, 2021) 
      div(x="50%" y="68.5%" numero="")
        h5 Tropósfera 
        p “La primera de las capas de la atmósfera es la tropósfera y es la más cercana a la superficie terrestre y, por lo tanto, es en aquella capa en la que vivimos nosotros. Se extiende desde el nivel del mar hasta más o menos unos 10-15 km de altura. Es en la tropósfera donde se desarrolla la vida en el planeta. Más allá de la tropósfera las condiciones no permiten el desarrollo de la vida. La temperatura y la presión atmosférica van disminuyendo en la tropósfera conforme vamos incrementando la altura en la que nos encontramos”. (Portillo, 2021) 
    .row.justify-content-center.mb-5
      .col-lg-10
        div(style="background-color: #faedc0 ")
          .row.justify-content-center.mb-5
            .col-lg-2.col-4: img.m-lg-0.mt-5(src="@/assets/curso/images/tema1/6.svg")
            .col-lg-10
              .p-5
                p Para continuar conociendo los aspectos conceptuales básicos que favorecerán el estudio de este componente y que ayudarán a apropiar, más y mejor, la problemática atmosférica, se invita a revisar el siguiente contenido.
    h4 Bases conceptuales: presión atmosférica
    .cajon-b.color-acento-contenido.p-3.mb-5
          .p-4
            p.mb-0 #[b Se presentan otros elementos conceptuales que tienen que ver, directamente, con la presión atmosférica.] Ello favorecerá la asimilación de los contenidos de este componente y ampliará las posibilidades de aplicación de estrategias técnicas y mecanismos sistemáticos para enfrentar la problemática atmosférica actual. Se debe estudiar la gráfica de manera ordenada, siguiendo la numeración de sus partes.
    ImagenInfograficaB.color-secundario.modal-custom.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/images/tema3/4.svg', alt='')
      div(x="23.5%" y="61%" tooltip="Ver mas" numero="+")
        h5.mb-2 Presión atmosférica
        p Presión (fuerza por unidad de área) ejercida por la atmósfera sobre cualquier superficie en virtud de su peso. Equivale al peso de una columna de aire de sección transversal unitaria que se extiende desde un nivel dado hasta el límite superior de la atmósfera (IDEAM, 2019).  
          br
          |Las unidades de medida de la presión atmosférica se establecen en diferentes unidades dependiendo del sistema empleado, algunas de las equivalencias más utilizadas se las presentamos en los botones siguientes de esta gráfica.

      div(x="29.8%" y="80%" tooltip="Ver mas" numero="+")
        h5.mb-2 Temperatura           
        p Magnitud física que caracteriza el movimiento aleatorio medio de las moléculas en un cuerpo físico (IDEAM, 2019). Entonces se podría decir que entre más movimiento de las moléculas, mayor es la temperatura que se genera en el elemento, sustancia o cuerpo.
          br
          br
          |La unidad con la que se determina la temperatura se establece en diferentes unidades, dependiendo del sistema de unidades empleado. Diríjase al punto tres de esta gráfica.

      div(x="42.4%" y="42%" tooltip="Ver mas" numero="+")
        h5.mb-2 Velocidad del viento 
        p Es la relación entre la distancia recorrida por el aire y el tiempo que tarda en recorrerla. La "velocidad instantánea" o, con mayor brevedad, la "velocidad", corresponde al caso de un intervalo de tiempo infinitamente pequeño. La "velocidad media" corresponde al caso en que el intervalo de tiempo es finito. (IDEAM, 2019).
          br
          |La velocidad del viento mide la componente horizontal del desplazamiento del aire en un punto y en un instante determinados. La unidad de medida es habitualmente metros por segundo (m/s).

      div(x="48.5%" y="61%" tooltip="Ver mas" numero="+")
        h5.mb-2 Precipitación 
        p La precipitación es la caída de partículas de agua líquida o sólida que se originan en una nube, atraviesan la atmósfera y llegan al suelo. La cantidad de precipitación es el volumen de agua lluvia que pasa a través de una superficie en un tiempo determinado. (IDEAM, 2019)
          br
          br
          |Teniendo en cuenta qué es la lluvia, a la cual se denomina técnicamente precipitación, es importante definir las unidades en las que se cuantifica. 
      div(x="61.1%" y="61%" tooltip="Ver mas" numero="+")
        h5.mb-2 Dirección del viento
        p Dirección desde la que sopla el viento. (IDEAM, 2019).
          br
          br
          |Según Guerrero (2011) “La rosa de los vientos, también llamada rosa náutica, es un instrumento marino usado en las cartas de navegación que se utiliza para representar la circunferencia del horizonte mediante el uso de 32 rombos unidos por sus extremos. Frecuentemente, también se puede ver en el mismo instrumento una flor de lis, que se utiliza para representar el norte”.

      div(x="80%" y="42%" tooltip="Ver mas" numero="+")
        h5.mb-2 ¿Rosa de los vientos?

        p La rosa de los vientos es el instrumento que permite visualizar los puntos cardinales, donde toma como referencia el norte por los campos magnéticos que se producen en la tierra, por ende...
          br
          br
          |“Las cuatro principales y fundamentales (divisiones) indican los cuatro puntos cardinales: norte, sur, este y oeste, mediante los cuales se divide el horizonte en cuatro sectores de 90º cada uno. La recta que conecta los puntos norte y sur es llamada meridiana o línea norte-sur, la recta que une este y oeste es llamada línea este-oeste. Como resultado de las bisectrices de los ángulos rectos representados en la rosa de los vientos se observan ocho nuevas divisiones llamadas laterales, que son: noreste, sureste, suroeste y noroeste. Si se dividen nuevamente estos rumbos laterales y los cuatro principales se obtendrán ocho nuevos sectores que se llamarán: nor-noreste, este-noreste, este-sureste, sur-sureste, sur-suroeste, oeste-suroeste, oeste-noroeste y norte-noroeste.” (Guerrero, 2011)

      div(x="80%" y="82%" tooltip="Ver mas" numero="+")
        h5.mb-2 ¿Cómo medir la precipitación?
        p …” La precipitación se mide en milímetros de agua, o litros caídos por unidad de superficie (m²), es decir, la altura de la lámina de agua recogida en una superficie plana es medida en mm o L/m².
          br
          br
          |Por ende, la cantidad de lluvia que cae en un lugar se mide por los pluviómetros. La medición se expresa en milímetros de agua y equivale al agua que se acumularía en una superficie horizontal e impermeable durante el tiempo que dure la precipitación o sólo en una parte del periodo de la misma”.(MeteoLobios, 2013)
          br
          br
          |Para medir la precipitación se cuenta con diversos instrumentos, los más empleados se conocen como pluviómetros (manual, totalizadores, sifón, basculantes, etc.), siendo el pluviómetro manual uno de los más empleados por su practicidad.
          br
          br
          |Pluviómetro manual: “Es un indicador simple de la lluvia caída, consiste en un recipiente especial cilíndrico, por lo general de plástico, con una escala graduada donde todas las marcas están a igual distancia entre sí. La altura del agua que llena la jarra es equivalente a la precipitación y se mide en mm”.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema3/5.svg' alt='AvatarTop' style='width: 101px')
          .tarjeta.w-100.rounded-0(style="background-color: #faedc0 ").p-5
            
            h4.text-center IMPORTANTE
            p Finalmente, le presentamos el elemento de la Radiación: es la emisión o transferencia de energía en forma de ondas o partículas electromagnéticas. (IDEAM, 2019)
              br
              br
              |Cuando se habla de radiación se puede ver desde diferentes perspectivas conceptuales, no solo es lo que conocemos como lo que produce la luz del sol. La radiación electromagnética se puede clasificar en diferentes tipos. El portal #[a.fw-bold(href='https://foronuclear.org' target="_blank") foronuclear.org] define los siguientes conceptos.
            .bg-white.p-4.rounded-3.mb-3
              SlyderA.slyder-card
                div
                  p Radiación no ionizante: “No tiene la suficiente energía como para romper los enlaces que unen los átomos del medio que irradian (ondas de radio y TV, microondas, luz visible, etc.)”.
                div
                  p Radiación ionizante: “Tiene suficiente energía como para producir ionizaciones de los átomos del medio o materia que es irradiado. Van desde los rayos X hasta la radiación cósmica”.
                div
                  p Radiación ionizante: “Tiene suficiente energía como para producir ionizaciones de los átomos del medio o materia que es irradiado. Van desde los rayos X hasta la radiación cósmica”.
            p.mb-3(data-aos='fade-right') Dependiendo de la relación que estas tengan con diversas materias o elementos, también se clasifican con el alfabeto griego para diferenciarlas técnicamente en:
            .bg-white.p-4.rounded-3.mb-3
              SlyderA.slyder-card
                div
                  p Alfa: con capacidad limitada de penetración en la materia, pero mucha intensidad energética.
                div
                  p Beta: algo más penetrantes, pero menos intensas que las radiaciones alfa.
                div
                  p Gamma: es la radiación más penetrante de todas.
            p.mb-5(data-aos='fade-right') (Foro Nuclear, 2020)

      .col-lg-6
        .tarjeta-avatar.h-auto
          img(src='@/assets/curso/images/tema3/6.svg' alt='AvatarTop' style='width: 101px')
          .tarjeta.w-100.rounded-0(style="background-color: #d3ede5 ")
            .text-white.p-4.pt-0
              h4.text-center IMPORTANTE
              p Según el IDEAM, la evaporación del agua se relaciona en 2 conceptos
              ul.lista-ul--color
                li.ms-3
                  i.fas.fa-angle-right
                  | Emisión de vapor de agua por una superficie líquida de agua libre a temperatura inferior a su punto de ebullición.
                li.ms-3
                  i.fas.fa-angle-right
                  | Cantidad de agua evaporada. (IDEAM,2019)
                
              p Por ende, la evaporación relaciona indirectamente la cantidad de evaporatividad que influye en los diversos cambios en el comportamiento de la atmósfera. A esa relación se le conoce como:
              h4 Evaporación potencial: 
              p “Cantidad de vapor de agua que puede ser emitida por una superficie de agua pura, por unidad de superficie y por unidad de tiempo, en las condiciones atmosféricas existentes”. (IDEAM, 2019).
                br
                br
                |Los instrumentos que miden la evaporación se conocen como evaporímetros, los cuales miden la cantidad de agua que se evapora en la atmósfera.

      



























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
<style lang="sass">
.card-tema3
  position: relative
  display: flex
  background-color: #d3ede5
  img.img1
    position: absolute
    width: 185px
    top: 0
    left: 0
    transform: translate(40%, -10%)
.cajon-b
  &:before
    height: 100%
    width: 15%
    opacity: .3
.min-width-info
  min-width: 500px
  transform: translateX(5%)
.modal-custom
  .img-infografica-b__modal
    background-color: rgba(#dee4f0, .95) !important
    h1,h2,h3,h4,h5,h6,p,b,i
      color: $color-sistema-texto !important
.slyder-card
  .slyder-a__btn--atrs
    transform: scale(.6) translateY(-50%) rotate(90deg)
    background-color: $color-acento-botones
  .slyder-a__btn--sigt
    transform: scale(.6) translateY(-50%) rotate(-90deg)
    background-color: $color-acento-botones
  .slyder-a__bullets
    display: none
</style>
