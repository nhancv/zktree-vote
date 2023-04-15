<template>
  <main role="main" class="container">
    <div style="padding-top: 7rem" class="d-none d-lg-block"></div>
    <div class="row justify-content-md-center">
      <div class="col-lg-4">
        <div class="text-center vstack gap-3">
          <h1>Simple voting system</h1>
          <a href="#/generateCommitment" class="btn btn-primary">Generate Commitment (off-chain)</a>
          <a href="#/registerCommitment" class="btn btn-primary">Register Commitment (write on-chain)</a>
          <a href="#/vote" class="btn btn-primary">Vote (write on-chain)</a>
          <a href="#/voteResults" class="btn btn-primary">Vote Results (read on-chain)</a>
          <a
            href="https://thebojda.medium.com/how-i-built-an-anonymous-voting-system-on-the-ethereum-blockchain-using-zero-knowledge-proof-d5ab286228fd"
            >Check my article</a
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class Home extends Vue {}
</script>
