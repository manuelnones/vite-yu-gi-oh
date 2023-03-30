import { reactive } from "vue";
export const store = reactive({
    arrayCards: [],
    numberCards: ``,
    userSearch: ``,
    standardAPI: `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0`,
})