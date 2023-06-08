<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import PostHeader from './PostHeader.svelte';
  import type { DestInfo } from '../includes';
  import { idestStore, ipostStore } from './destState';

  import './markdown.scss';

  // incoming attributes
  export let destInfos:DestInfo[];

</script>

<div class="container">
  <PostHeader {destInfos} />
  <div class="markdown">
    
    {#if destInfos[$idestStore].collection.length > 0}
      <SvelteMarkdown source={destInfos[$idestStore].collection[$ipostStore].body} />
    {:else}
      <p>No posts found</p>
    {/if}
  </div>
  <PostHeader {destInfos} />
</div>

<style lang="scss">
  .container {
    margin-left: 1rem;
    text-align:center;
  }
  .markdown {
    max-width: 900px;
    margin: auto;
  }
</style>