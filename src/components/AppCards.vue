<script>
import { store } from '../store';
export default {
    name: "AppCards",
    data() {
        return {
            store,
        }
    },
}
</script>


<template>
    <main>
        <div v-for="card in store.arrayCards" class="card">
            <img :src="card.card_images[0].image_url" alt="">
            <div><strong> NAME: </strong> {{ card.name }}</div>
            <div> <strong>TYPE CARD:</strong> {{ card.type }}</div>
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

        div {
            margin-bottom: 10px;
        }
    }
}
</style>