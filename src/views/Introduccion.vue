<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .tarjeta.p-4.mb-5(style="background-color: #faffeb")
      p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde abordaremos la temática relacionada con el diagnosticar e interpretar resultados de contaminación atmosférica según normativa vigente. En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    figure
      .video 
        iframe(width="560" height="315" src="https://www.youtube.com/embed/l_7odBSHBKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Diagnosticar e interpretar resultados de contaminación atmosférica según normativa vigente
    
    


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
