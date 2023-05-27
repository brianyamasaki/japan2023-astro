<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import PostHeader from './PostHeader.svelte';
  import type { DestInfo } from '../includes';
  import { ipostStore } from './destState';

  import './markdown.scss';

  // incoming attributes
  export let destInfo:DestInfo;

</script>

<div class="container markdown">
  <PostHeader {destInfo} />
  
  {#if destInfo.collection[$ipostStore].body}
    <SvelteMarkdown source={destInfo.collection[$ipostStore].body} />
  {:else}
    <p>Post not found.</p>
  {/if}
  <PostHeader {destInfo} />
</div>

<style lang="scss">
  .container {
    margin-left: 1rem;
    text-align:center;
    user-select: none;
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