<template>
  <component :is="getMainComponent()"></component>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

import Home from "./Home.vue";
import GenerateCommitment from "./1_GenerateCommitment.vue";
import RegisterCommitment from "./2_RegisterCommitment.vue";
import Vote from "./3_Vote.vue";
import VoteResults from "./4_VoteResults.vue";

@Component
export default class App extends Vue {
  public locationHash = "";

  created() {
    this.locationHash = window.location.hash;
  }

  mounted() {
    window.addEventListener("hashchange", () => {
      this.locationHash = window.location.hash;
    });
  }

  getMainComponent() {
    const currentPath = this.locationHash.slice(1) || "/";
    if (currentPath == "/") return Home;
    if (currentPath == "/generateCommitment") return GenerateCommitment;
    if (currentPath == "/registerCommitment") return RegisterCommitment;
    if (currentPath == "/vote") return Vote;
    if (currentPath == "/voteResults") return VoteResults;
  }
}
</script>
