<script>
import axios from "axios";
export default {
    name: "AppCards",
    data() {
        return {
            arrayCards: [],
        }
    },

    created() {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0`).then((res) => {
            this.arrayCards = res.data.data;
            console.log(this.arrayCards);
        })
    },
}
</script>


<template>
    <main>
        <div v-for="card in arrayCards" class="card">
            <img :src="card.card_images[0].image_url" alt="">
            <div><strong>{{ card.name }}</strong></div>
            <div>{{ card.type }}</div>
        </div>
    </main>
</template>


<style lang="scss" scoped>
main {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    margin: 40px;

    .card {
        width: calc(100% / 5 - 20px);

        img {
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>