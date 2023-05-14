<script lang="ts">
  import DestinationDetails from './DestinationDetails.svelte';
  import type { DestInfo } from './includes';

  // incoming attributes
  export let destInfos:DestInfo[];

  let selectedIndex: number = -1;
</script>

<div class="flexy">
  <div class="dest-list">
    <ul>
      {#each destInfos as destInfo, i}
        <li on:click={() => {selectedIndex = i;}} class="{i === selectedIndex ? 'selected' : ''}">
          {destInfo.cityName}
        </li>
      {/each}
    </ul>
  </div>

  <div class="content" >
    {#if selectedIndex  >= 0} 
      <DestinationDetails destInfo={destInfos[selectedIndex]} />
    {/if}
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

  h2 {
      text-align: center;
  }
  
</style>