<template>
    <section :id="indice"  class="ground">
         <img class="image is-64x64" :class="'turn'+getPosArrow.degre" v-if="indice==getPosArrow.axeX +'.'+getPosArrow.axeY" src="..\assets\image\1.png" alt="">
    </section>

    
    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    indice: String
  },
  computed: {
    ...mapGetters([
      'getPosArrow'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.column {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.5px;
 
}
.columns {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  
}
a {
  color: #42b983;
}
.ground {
   background-color: #42b983;
   border-radius: 5px;
   width: 40px;
   height: 40px;
}
.box {
  width: 420px;
  background-color: white;
  margin: 10px;
  padding: 10px;
  min-height: 0%;
  display: flex;
  flex-wrap: wrap;
 

}
img {
  width: 38px;
  height: 38px;
}
.turn90 {
  transform: rotate(90deg);
}
.turn-90 {
  transform: rotate(-90deg);
}
.turn180 {
  transform: rotate(180deg);
}


</style>
