import { createStore } from 'vuex'

export default createStore({
    state: {
        firstName: 'John',
        lastName: 'Doe',
        favorites: [],
      },
    mutations: {
        UPDATE_FAVORITES(state, payload){
            state.favorites =  payload
        }
    },
    actions: {
        addToFavorites(context, payload){
            const favorites = context.state.favorites
            favorites.push(payload)
            context.commit('UPDATE_FAVORITES', favorites)
        }
    
    },
    getters: {
        fullName: function (state) {
            return `${state.firstName} ${state.lastName}`
        }
    }
})
