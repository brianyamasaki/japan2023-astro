<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import DestinationDetails from './DestinationDetails.svelte';
  import type { DestInfo } from '../includes';
  import {getUrlParams, setUrlParams } from './pageUtils';
  import { destState } from './destState';
  import type { Unsubscriber } from 'svelte/store';

  // incoming attributes
  export let destInfos:DestInfo[];

  let idest: number;

  const onClickDestination = (idestT: number) => {
    if (idestT !== destState.getDest()) {
      destState.setDPP(idestT, 0, 0);
    }
    setUrlParams(idestT, 0, 0);
  }

  const unsubState = destState.subscribeDest(val => {idest = val});

  onMount(() => {
    const parms = getUrlParams();
    destState.setDPP(parms.idest, parms.ipost, parms.iphoto);
  });

  onDestroy(() => {
    unsubState();
  })
</script>

<div class="flexy">
  <div class="dest-list">
    <ul>
      {#each destInfos as destInfo, i}
        <li on:click={() => onClickDestination(i)} class="{i === idest ? 'selected' : ''}">
          {destInfo.cityName}
        </li>
      {/each}
    </ul>
  </div>

  <div class="content" >
    <DestinationDetails {destInfos} />
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
  
</style>