<template>
    <div>
        <div>
            States
            <p>
                        {{$store.state.firstName}} -  {{$store.state.lastName}} - {{$store.state.favorites}}
            </p>
        </div>
        <br>
        <br>
        <div>
            Getter Function
            <p>
                {{$store.getters.fullName}}
            </p>
        </div>


        <Button @click="$store.dispatch('addToFavorites', 'element')">Add to favorites</Button>

    </div>
</template>