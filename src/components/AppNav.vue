<script>
export default {
    name: `AppNav`,

    data() {
        return {
            userText: ``,
        }
    },

    methods: {
        searchCard() {
            console.log(`cliccato`)
        }
    }
}
</script>


<template>
    <nav>
        <div id="search">
            <input v-model="userText" type="text" placeholder="Inserisci nome carta">
            <button @click="searchCard()">Cerca</button>
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
    height: 80px;

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
    }

}

hr {
    border: 2px solid $color;
}
</style>