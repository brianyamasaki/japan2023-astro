<script lang="ts">
  import NextPost from "./NextPost.svelte";
  import { ipostStore } from './destState';
  import type { DestInfo } from '../includes';

  // incoming attributes
  export let destInfo:DestInfo;
</script>

<div>
  <NextPost 
    increment={-1}
    isDisabled={$ipostStore > 0 ? false : true}
  > 
    &lt; Previous Post 
  </NextPost>
  
  <NextPost 
    increment={1}
    isDisabled={$ipostStore < destInfo.collection.length-1 ? false : true}
  > 
    Next Post &gt;
  </NextPost>
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: space-around;
    margin: 1rem;
  }
</style>