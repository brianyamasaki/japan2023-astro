<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import PostHeader from './PostHeader.svelte';
  import type { DestInfo } from '../includes';
  import { ipostStore } from './destState';

  import './markdown.scss';

  // incoming attributes
  export let destInfo:DestInfo;

</script>

<div class="container">
  <PostHeader {destInfo} />
  <div class="markdown">
    
    {#if destInfo.collection.length > 0}
      <SvelteMarkdown source={destInfo.collection[$ipostStore].body} />
    {:else}
      <p>No posts found</p>
    {/if}
  </div>
  <PostHeader {destInfo} />
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

  button {
    padding: .5rem;
    background: pink;
    border: none;
    border-radius: 6px;
    font-size: 1.5rem;
  }

  button:disabled {
    color: lightgray;
    background: white;
  }
</style>