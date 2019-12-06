import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     posArrow: {
        axeX: 1,
        axeY: 1,
        degre: 90
      }, 

},
  mutations: {
    SET_POSARROW: (state, data) => {
      state.posArrow = data
    }
  },
  getters: {
    getPosArrow: state => {
      return state.posArrow
    }
  },
  actions: {
    updatePosArrow: (context, data) => {
        context.commit('SET_POSARROW', data)
       /* setDegre (deg) {
            this.state.degre += deg
            if( this.state.degre == 360 )
            {
                this.state.degre = 0
            }
            else if (this.state.degre == 270)
            {
                this.state.degre = -90;
            }
            else if (this.state.degre == -270)
            {
                this.state.degre = 90;
            }
        }
        moveOn () {
            this.state.axeX +=1
        }*/
    }
  }
})
