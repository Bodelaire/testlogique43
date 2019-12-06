<template>
  <div id="app">
    <section class="box">
   <b-columns v-for="col in 10" :key="col" is-mobile>
  <b-column v-for="raw in 10" :key="raw" >
      <HelloWorld :indice="raw+'.'+col" />
  </b-column>
</b-columns>
</section>
  
    <button @click="sensFleche(-90)" >gauche</button>
    <button @click="sensFleche(90)"  >droite</button>
    <button @click="avance()" >Avancer</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {  mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters([
      'getPosArrow'
    ]) 
  },
  methods: {
    ...mapActions([
      'updatePosArrow',
    ]),
    sensFleche (deg) {
      this.$posarrow = this.getPosArrow
      this.$posarrow.degre+=deg
      if ( this.$posarrow.degre == -180)
       {
           this.$posarrow.degre = 180;
       }
       else if (this.$posarrow.degre == 270) {
          this.$posarrow.degre = -90;
       }
       this.updatePosArrow(this.$posarrow) 
    },
    avance () {
     
      this.$posarrow = this.getPosArrow
      if(this.$posarrow.degre == 0)
      {
        this.$posarrow.axeY++
      }
      else if (this.$posarrow.degre == 90)
      {
          this.$posarrow.axeX++
      }
      else if (this.$posarrow.degre == 180)
      {
          this.$posarrow.axeY--
      }
      else if (this.$posarrow.degre == -90)
      {
          this.$posarrow.axeX--
      }
     this.updatePosArrow(this.$posarrow)
     
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  background-color: darkcyan;
  width: 100%;
  height: 600px;
  position: relative;
  padding: 10%;

 
}
 @media only screen and (max-width: 768px) {
    #app {
       position: relative;
       display: flex;
    }
    .ground {
   background-color: #42b983;
   border-radius: 5px;
   width: 20px;
   height: 20px;
}
.box {
  background-color: white;
  min-height: 0%;
   width: 220px;
   height: 210px;

}
.columns {
    min-width: 0px;
  
}
img {
  width: 18px;
  height: 18px;
}
button {
display: inline;
position: absolute;
}
  }
</style>
