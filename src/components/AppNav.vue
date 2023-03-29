<script>
export default {
    name: `AppNav`,

    data() {
        return {

        }
    }
}
</script>


<template>
    <nav>
        <div id="search">
            <input type="text" placeholder="Inserisci nome carta">
            <button>cerca</button>
        </div>
    </nav>
    <hr>
</template>


<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;

    #search {
        $search-color: #242424;

        input {
            padding: 10px;
            padding-left: 60px;
            padding-right: 40px;
            background-color: $search-color;
            border: none;
        }

        button {
            padding: 10px;
            padding-left: 20px;
            padding-right: 20px;
            margin-left: 20px;
            background-color: $search-color;
            border: none;
            color: gray;
            cursor: pointer;
        }
    }

}

hr {
    border: 2px solid #1C1C1C;
}
</style>