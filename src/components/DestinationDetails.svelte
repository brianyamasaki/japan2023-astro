<script lang="ts">
  import { onDestroy } from 'svelte';
  import SvelteMarkdown from 'svelte-markdown';
  import { setUrlParams } from './pageUtils';
  import type { DestInfo } from '../includes';
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
    const iphotoNext = destState.getPhoto() + increment;
    destState.setPhoto(iphotoNext);
    setUrlParams(idest, ipost, iphotoNext);
  }

  const changeSelectedPost = (increment: number) => {
    const ipostNext = destState.getPost() + increment;
    destState.setDPP(idest, ipostNext, 0);
    setUrlParams(idest, ipostNext, 0);
  }

  const canSelectPost = (ip: number): boolean => {
    if (ip < 0) return false;
    if (ip >= destInfo.collection.length) return false;

    return true;
  }

  const maxTitleLength = 20;
  const incPostTitle = (ip:number): string => {
    if (canSelectPost(ip)) {
      const title = destInfo.collection[ip].data.title;
      if (title.length > maxTitleLength) {
        return title.substring(0, maxTitleLength).concat('...');
      }
      return title;
    }
    return "";
  }

  const canSelectPhoto = (ip: number): boolean => {
    if (ip < 0) return false;
    if (ip >= destInfo.collection[ipost].data.imgs.length) return false;

    return true;
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
        disabled={!canSelectPhoto(destState.getPhoto() - 1)}
      >
        Previous Photo
      </button>
      <button 
        on:click={() => changeSelectedImg(1)}
        disabled={!canSelectPhoto(destState.getPhoto() + 1)}
      >
        Next Photo
      </button>
      <button class="anchor-style"
        disabled={!canSelectPost(destState.getPost() + 1)}
        on:click={() => changeSelectedPost(1) }
      >
        {incPostTitle(1)}
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

  .anchor-style {
    background: none;
    border: none;
    font-weight: 700;
    color: blue;
    text-decoration: underline;
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