import type { CollectionEntry } from "astro:content";

export type DestInfo = {
  cityName: string;
  collection: CollectionEntry<'destinations'>[];
  transportSrc: string;
  dateString: string;
}