<template>
  <div class="container">
    <md-card>
      <md-card-header data-background-color="green" style="position: relative;">
        <h3 class="title">Buscar Habitaciones</h3>
      </md-card-header>
      <br>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-40">
            <label>Fecha de Inicio</label>
            <b-form-input v-model="fechaInicio" @change="maximo" placeholder="Fecha Inicio" type="date" v-bind:min="today" v-bind:max="maxInicio"></b-form-input>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-40">
            <label>Fecha de Termino</label>
            <b-form-input  v-model="fechaTermino" @change="minimo" placeholder="Fecha Termino" type="date" v-bind:min="minTermino"></b-form-input>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-20">
            <label>Tipo de Habitación</label>
              <vs-select v-model="tipo" placeholder="Seleccione un tipo de habitación">
                <vs-select-item value="Simple" text="Simple"/>
                <vs-select-item value="Doble" text="Doble"/>
                <vs-select-item value="Triple" text="Triple"/>
                <vs-select-item value="Cuadruple" text="Cuadruple"/>
                <vs-select-item value="Matrimonial" text="Matrimonial"/>
              </vs-select>
          </div>
          <br><br>
          <div class="md-layout-item md-small-size-100 md-size-100 text-center" style="margin-top: 2%">
            <md-button v-if="(fechaInicio != fechaTermino) && (fechaInicio != '') && (fechaTermino != '')" class="md-raised md-success" style="width: 20%; font-size:20px" @click="enviar">Buscar</md-button>
            <div v-if="(fechaInicio == fechaTermino) && (fechaInicio != '') && (fechaTermino != '')" v-show="mensaje()"> </div>
            <div v-if="(fechaInicio > fechaTermino) && (fechaInicio != '') && (fechaTermino != '')" v-show="mensaje2()"> </div>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
    export default {
      components: {
      },
      data(){
        return{
          fechaTermino: '',
          fechaInicio: '',
          tipo: 'Simple',
          today: new Date().toISOString().slice(0, 10),
          minTermino: new Date().toISOString().slice(0,10),
          maxInicio: '',
        }
      },
      methods:{
        mensaje(){
          this.$vs.notify({title:'Las fechas son iguales. <br> Ingresarlas nuevamente.',color:'danger',position:'bottom-center'});
        },
        mensaje2(){
          this.$vs.notify({title:'Fecha inicio no tiene sentido con la fecha término. Ingresarlas nuevamente.',color:'danger',position:'bottom-center'});
        },
        enviar(){
          if(this.fechaTermino != '' && this.fechaInicio != ''){
            location.href = "#/seleccionarHabitacion/"+this.fechaInicio+'/'+this.fechaTermino+'/'+this.tipo;
          }
          else{
            alert("No se han ingresado datos a todos los campos");
          }
        },
        maximo(){
          this.minTermino= this.fechaInicio;
        },
        minimo(){
          this.maxInicio = this.fechaTermino;
        }
      },
    }

</script>

<style scoped>

</style>
