<script lang="ts">

  import type { DestInfo } from './includes';

  // incoming attributes
  export let destInfo:DestInfo;

</script>

<div class="container">
  <h2>{destInfo.cityName}</h2>
</div>

<style lang="scss">
  .container {
    position:relative;
  }

  h2 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 4rem;
    padding: 0;
    margin: 0;
    transition: .75s;
    transform: rotate(-10deg);
    opacity: 0.5;
    &:hover {
      padding: 0 0 .5rem 5rem;
      font-weight: 700;
      transform: none;
      opacity: 1;
      cursor:pointer;
      text-decoration: underline;
    }
  }



</style>