<script lang="ts">
  import type { DestInfo } from './includes';

  // incoming attributes
  export let destInfo:DestInfo;

  const srcDir = destInfo.photoSrcDir;
</script>

<div>
  <h2>{destInfo.cityName}</h2>
  <p class="date">{destInfo.dateString}</p>
  <!-- <img class="transportImg" src={destInfo.transportSrc} alt="how we got there" /> -->
  {#each destInfo.photos as pd}
    <div>
      <p>{pd.description}</p>
      <img src={`${srcDir}/${pd.src}`} alt="{pd.description}" />
    </div>
  {/each}
</div>

<style lang="scss">
  h2 {
    text-align: center;
    margin: 0.5rem 0 0 0;
  }
  .date {
    margin-top: 0;
    font-size: .9rem;
    text-align: center;
  }

  .transportImg {
    width: 200px;
  }
</style>