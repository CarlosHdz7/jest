export interface ICharacter {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}
export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results?: (ResultsEntityCharacter)[] | null;
}
export interface ResultsEntityCharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: ComicsOrSeriesOrEvents;
  series: ComicsOrSeriesOrEvents;
  stories: Stories;
  events: Events;
  urls?: (UrlsEntity)[] | null;
}
export interface Thumbnail {
  path: string;
  extension: string;
}
export interface ComicsOrSeriesOrEvents {
  available: number;
  collectionURI: string;
  items?: (ItemsEntityComics)[] | null;
  returned: number;
}
export interface ItemsEntityComics {
  resourceURI: string;
  name: string;
}
export interface Stories {
  available: number;
  collectionURI: string;
  items?: (ItemsEntityStories)[] | null;
  returned: number;
}
export interface ItemsEntityStories {
  resourceURI: string;
  name: string;
  type: string;
}
export interface Events {
  available: number;
  collectionURI: string;
  items?: (ItemsEntity2 | null)[] | null;
  returned: number;
}
export interface ItemsEntity2 {
  resourceURI: string;
  name: string;
}
export interface UrlsEntity {
  type: string;
  url: string;
}
