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
    axios.get(this.store.standardAPI).then((res) => {
      this.store.arrayCards = res.data.data;
    })
  },

  methods: {
    searchCards() {
      if (this.store.userSearch != "") {
        let newAPI = `&fname=` + this.store.userSearch;

        axios.get(this.store.standardAPI + newAPI).then((res) => {
          this.store.arrayCards = res.data.data
        })

      } else {
        axios.get(this.store.standardAPI).then((res) => {
          this.store.arrayCards = res.data.data
        });
      }


    }
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
  <AppNav @userSearch="searchCards()"></AppNav>
  <AppMain></AppMain>
</template>

<style lang="scss"></style>
