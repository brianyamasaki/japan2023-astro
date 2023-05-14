export type PhotoDescription = {
  src: string;
  description: string;
};

export type DestInfo = {
  cityName: string;
  photoSrcDir: string;
  photos: PhotoDescription[];
  transportSrc: string;
  dateString: string;
}
