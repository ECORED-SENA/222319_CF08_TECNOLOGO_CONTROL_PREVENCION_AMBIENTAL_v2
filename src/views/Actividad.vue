<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/arrastrar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Arrastrar y soltar
        p.mb-4 Esta actividad le permitirá determinar el grado de apropiación de los contenidos del componente formativo: Diagnosticar e interpretar resultados de contaminación atmosférica según normativa vigente. 
          br
          br
          |Antes de su realización, se recomienda la lectura del componente formativo mencionado. Es opcional (no es calificable), y puede realizarse todas las veces que se desee. 
          br
          br
          |De acuerdo al enunciado planteado en la columna izquierda, arrastre cada término al lugar que considere correcto de la columna derecha.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.mb-0 Identificar la cronología de diversas negociaciones sobre cambio climático.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    


    

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
