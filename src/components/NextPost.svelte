<script lang="ts">
  import { idestStore, ipostStore, iphotoStore } from './destState';
  import { setUrlParams } from './pageUtils';

  // incoming attributes
  export let isDisabled: boolean;
  export let increment: number;
</script>

<button
  on:click={() => {
    if (!isDisabled) {
      const nextPost = $ipostStore + increment;
      setUrlParams($idestStore, nextPost, $iphotoStore)
      ipostStore.set(nextPost);
      window.scrollTo(0,0);
    }
  }}
  class={isDisabled ? "disabled" : ""}
>
  <slot></slot>

</button>

<style lang="scss">
  button {
    font-weight: 700;
    font-size: 1.4rem;
    background: none;
    border: none;
  }

  .disabled {
    color: gray;
    text-decoration: none;
    font-weight: 100;
    cursor: not-allowed;
  }
</style>