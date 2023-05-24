import { writable } from 'svelte/store';

const createState = () => {
  const idest = writable(0);
  const ipost = writable(0);
  const iphoto = writable(0);
  let idestLocal = 0;

  const setDPP = (idestT: number, ipostT:number, iphotoT: number) => {
    idestLocal = idestT;
    idest.set(idestT);
    ipost.set(ipostT);
    iphoto.set(iphotoT);
  }

  return {
    subscribeDest: idest.subscribe,
    subscribePost: ipost.subscribe,
    subscribePhoto: iphoto.subscribe,
    setDPP,
    setDest: (idestT:number) => {idest.set(idestT); idestLocal = idestT;},
    setPost: (ipostT:number) => ipost.set(ipostT),
    setPhoto: (iphotoT: number) => iphoto.set(iphotoT),
    getDest: () => (idestLocal)
  }
}

export const destState = createState();