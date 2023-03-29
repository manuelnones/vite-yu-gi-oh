<script>
import { store } from "../store.js";
import AppCards from "./AppCards.vue";
export default {
    name: "AppMain",
    data() {
        return {
            store,
        }
    },

    components: {
        AppCards,
    },
}
</script>


<template>
    <AppCards></AppCards>
</template>


<style lang="scss" scoped></style>