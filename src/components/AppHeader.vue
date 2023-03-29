<script>
export default {
    name: "AppHeader",
    data() {
        return {
            logoImg: `/img/logo-yu-gi-oh.png`
        }
    }
}
</script>

<template>
    <header>
        <div id="logo">
            <img :src="logoImg" alt="">
        </div>
        <h1 id="title">Carte Yu-Gi-Oh</h1>
    </header>
    <hr>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;

    #logo {
        width: 150px;

        img {
            width: 100%;
        }
    }

    #title {
        color: #E60012;
    }

}

hr {
    border: 2px solid #1C1C1C;
}
</style>