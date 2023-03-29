<script>
import { store } from "./store";
import axios from "axios";
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppNav from "./components/AppNav.vue";

export default {
  data() {
    return {
      store,
    }
  },

  created() {
    axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0`).then((res) => {
      store.arrayCards = res.data.data;
    })
  },

  components: {
    AppHeader,
    AppNav,
    AppMain,
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppNav></AppNav>
  <AppMain></AppMain>
</template>

<style lang="scss"></style>
