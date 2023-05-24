const destParam = "dest";
const postParam = "post";
const photoParam = "photo";

  // set URL with parameters
export const setUrlParams = (idest: number, ipost: number, iphoto: number) => {
  const destParamStr = `${destParam}=${!idest ? '0' : idest.toString()}`;
  const postParamStr = `${postParam}=${!ipost ? '0' : ipost.toString()}`;
  const photoParamStr = `${photoParam}=${!iphoto ? '0' : iphoto.toString()}`;
  const loc = document.location;
  const newUrl = `${loc.protocol}//${loc.host}/?${destParamStr}&${postParamStr}&${photoParamStr}`
  const state = {path: newUrl};
  history.pushState(state, '', newUrl);
}

  // get parameters from URL
export const getUrlParams = () => {
  const SearchParams = new URLSearchParams(window.location.search);
  const destStr = SearchParams.get(destParam);
  const postStr = SearchParams.get(postParam);
  const photoStr = SearchParams.get(photoParam);
  return {
    idest: !destStr ? 0 : parseInt(destStr, 10),
    ipost: !postStr ? 0 : parseInt(postStr, 10),
    iphoto: !photoStr ? 0 : parseInt(photoStr, 10)
  }
}
