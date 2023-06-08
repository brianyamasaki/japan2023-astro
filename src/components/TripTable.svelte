<script lang="ts">
  import { onMount } from 'svelte';
  // import DestinationDetails from './DestinationDetails.svelte';
  import Destination from './Destination.svelte';
  import type { DestInfo } from '../includes';
  import {getUrlParams, setUrlParams } from './pageUtils';
  import { idestStore, ipostStore, iphotoStore } from './destState';

  // incoming attributes
  export let destInfos:DestInfo[];

  onMount(() => {
    getUrlParams();
    window.addEventListener('popstate', (event) => {
      getUrlParams();
    })
  })

</script>

<div class="flexy">
  <div class="dest-list">
    <ul>
      {#each destInfos as destInfo, i}
        <li 
          on:click={() => {
            idestStore.set(i);
            ipostStore.set(0);
            iphotoStore.set(0);
            setUrlParams(i, 0, 0);

          }} 
          class={i === $idestStore ? 'selected' : ''}
        >
          {destInfo.cityName}
        </li>
      {/each}
    </ul>
  </div>

  <div class="content" >
    <Destination destInfos={destInfos} />
  </div>
</div>

<style lang="scss">
  .flexy {
    display: flex;
  }

  .dest-list { 
    height: 100%;
  }
  
  .content {
    margin-top: 1rem;
    height: 100%;
    width: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 2.5rem;
    padding: 0.5rem;
    margin: 0;
    transition: .75s;
    transform: rotate(-10deg);
    opacity: 0.5;
    &:hover, 
    &.selected {
      padding: 0 0 .5rem 4rem;
      font-weight: 700;
      transform: none;
      opacity: 1;
      cursor:pointer;
      text-decoration: underline;
    }

  }

  @media (max-width: 900px) {
    li {
      font-size: 1.5rem;
      padding: 0.5rem 0;
      &:hover,
      &.selected {
        padding: 0 0 .5rem 2rem;
      }
    }
  }
  
</style>