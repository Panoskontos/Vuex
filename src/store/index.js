import { createStore } from 'vuex'

export default createStore({
    state: {
    // all components have access to this data
    counter:0
},
    mutations: {
    // change data in the state
    // can't trigger asynccode
    increase(state){
        state.counter++;
    },
    decrease(state){
        state.counter--;
    }
},
    actions: {
    // We can have async code (API)
    increase(){
        console.log("increase (action)");
    }
    

    },
    getters:{
        // get data from our state
        
    },
    modules:{
        // is for breaking the vuex in modules
    }
    
})
