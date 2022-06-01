import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
    // all components have access to this data
    counter:0
},
    mutations: {
    // change data in the state
    // can't trigger asynccode
    increase(state,payload){
        state.counter+=payload;
    },
    decrease(state){
        state.counter--;
    }
},
    actions: {
    // We can have async code (API)
// random number api
// https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new

    increase( {commit} ){
        console.log("increase (action)");
        axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(res=>{
            console.log(res.data)
            // send to mutation as payload
            commit('increase',res.data)
        })
    }
    

    },
    getters:{
        // get data from our state
        // filter or modify them
        // whithout commit 
        squared(state){
            return state.counter * state.counter;
        }
        
    },
    modules:{
        // is for breaking the vuex in modules
    }
    
})
