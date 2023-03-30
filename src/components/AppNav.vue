<script>
import { store } from '../store';
export default {
    name: `AppNav`,

    data() {
        return {
            store,
        }
    },

    emits: [`userSearch`],
}
</script>


<template>
    <nav>
        <div id="search">
            <input v-model="store.userSearch" type="text" placeholder="Inserisci nome carta"
                @keyup.enter="$emit(`userSearch`)">
            <button @click="$emit(`userSearch`)">Cerca</button>
            <div id="quantity-cards">{{ store.numberCards }}</div>
        </div>
    </nav>
    <hr>
</template>


<style lang="scss" scoped>
$color: #242424;

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;

    #search {

        input {
            padding: 10px;
            padding-left: 60px;
            padding-right: 40px;
            background-color: $color;
            border: none;
        }

        button {
            padding: 10px;
            padding-left: 20px;
            padding-right: 20px;
            margin-left: 20px;
            background-color: $color;
            border: none;
            color: gray;
            cursor: pointer;
        }

        #quantity-cards {
            text-align: center;
            padding-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
            color: $color;
        }
    }

}

hr {
    border: 2px solid $color;
}
</style>