<script lang="ts">
  import { onDestroy } from 'svelte';
  import SvelteMarkdown from 'svelte-markdown';
  import { setUrlParams } from './pageUtils';
  import type { DestInfo } from '../includes';
  import { destState } from './destState';
  import type { Unsubscriber } from 'svelte/store';

  // incoming attributes
  export let destInfos:DestInfo[];

  let idest = 0;
  let ipost = 0;
  let iphoto = 0;
  $: destInfo = destInfos[idest];

  const unsubDest = destState.subscribeDest(val => {idest = val});
  const unsubPost = destState.subscribePost(val => {ipost = val});
  const unsubPhoto = destState.subscribePhoto(val => { iphoto = val});

  onDestroy(() =>{
    unsubDest();
    unsubPost();
    unsubPhoto();
  })

  const changeSelectedImg = (increment: number) => {
    const iphotoNext = iphoto + increment;
    destState.setPhoto(iphotoNext);
    setUrlParams(idest, ipost, iphotoNext);
  }

  const changeSelectedPost = (increment: number) => {
    const ipostNext = ipost + increment;
    destState.setPost(ipostNext);
    setUrlParams(idest, ipostNext, 0);
  }
</script>

<div>
  <h2>{destInfo.cityName}</h2>
  <p class="date">{destInfo.dateString}</p>
  <!-- <img class="transportImg" src={destInfo.transportSrc} alt="how we got there" /> -->
  {#each destInfo.collection as post, ipostT}
    <div class={ipost !== ipostT ? 'hide post' : 'post'}>
      <div class="markdown">
        <SvelteMarkdown source={post.body} />
      </div>
      <button 
        on:click={() => changeSelectedImg(-1)}
        disabled={iphoto === 0 ? true : false}
      >
        Previous Photo
      </button>
      <button 
        on:click={() => changeSelectedImg(1)}
        disabled={iphoto === post.data.imgs.length - 1 ? true : false}
      >
        Next Photo
      </button>
      <button 
        disabled={ipost < destInfo.collection.length - 1 ? false : true}
        on:click={() => changeSelectedPost(1) }
      >
        Next Post
      </button>
      {#each post.data.imgs as image, iimg}
        <div class={iphoto !== iimg ? 'markdown hide' : 'markdown'}>
          <SvelteMarkdown source={image.comment} />
          <img src={image.src} class:hide={iphoto !== iimg} alt="" />
        </div>
      {/each}
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
  .post {
    text-align: center;
    display:block;
  }
  .post.hide {
    display: none;
  }

  .post button {
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  .hide { 
    display: none;
  }

  .markdown {
    font-size: 1.3rem;
    max-width: 900px;
    width: 100%;
    margin:0 auto;
    & img {
      width: 100%;
    }
  }


  .transportImg {
    width: 200px;
  }

</style>