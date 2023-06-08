<script lang="ts">
  import NextPost from "./NextPost.svelte";
  import { idestStore, ipostStore } from './destState';
  import type { DestInfo } from '../includes';
  import type { CollectionEntry } from "astro:content";

  // incoming attributes
  export let destInfos:DestInfo[];
  const maxLength = 25;

  const getPostTitle = (post: CollectionEntry<'destinations'>) => {
    const { nextTitle } = post.data;
    if (nextTitle.length <= maxLength) {
      return nextTitle;
    }
    return `${nextTitle.substring(0, maxLength - 3)}...`;
  }
</script>

<div>
  <NextPost 
    increment={-1}
    isDisabled={$ipostStore > 0 ? false : true}
  > 
    {$ipostStore > 0 ? `< ${getPostTitle(destInfos[$idestStore].collection[$ipostStore - 1])}` : ''}
  </NextPost>
  
  <NextPost 
    increment={1}
    isDisabled={$ipostStore < destInfos[$idestStore].collection.length-1 ? false : true}
  > 
    {$ipostStore < destInfos[$idestStore].collection.length-1 ? `${getPostTitle(destInfos[$idestStore].collection[$ipostStore + 1])} >` : ''}
  </NextPost>
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: space-around;
    margin: 1rem;
  }
</style>