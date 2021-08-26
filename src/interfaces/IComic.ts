export interface IComic {
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
  results?: (ResultsEntityComic)[] | null;
}
export interface ResultsEntityComic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects?: (TextObjectsEntity)[] | null;
  resourceURI: string;
  urls?: (UrlsEntity)[] | null;
  series: ItemsEntityOrSeries;
  variants?: (null)[] | null;
  collections?: (null)[] | null;
  collectedIssues?: (null)[] | null;
  dates?: (DatesEntity)[] | null;
  prices?: (PricesEntity)[] | null;
  thumbnail: ImagesEntityOrThumbnail;
  images?: (ImagesEntityOrThumbnail)[] | null;
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}
export interface TextObjectsEntity {
  type: string;
  language: string;
  text: string;
}
export interface UrlsEntity {
  type: string;
  url: string;
}
export interface ItemsEntityOrSeries {
  resourceURI: string;
  name: string;
}
export interface DatesEntity {
  type: string;
  date: string;
}
export interface PricesEntity {
  type: string;
  price: number;
}
export interface ImagesEntityOrThumbnail {
  path: string;
  extension: string;
}
export interface Creators {
  available: number;
  collectionURI: string;
  items?: (ItemsEntity)[] | null;
  returned: number;
}
export interface ItemsEntity {
  resourceURI: string;
  name: string;
  role: string;
}
export interface Characters {
  available: number;
  collectionURI: string;
  items?: (ItemsEntityOrSeries)[] | null;
  returned: number;
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
  items?: (null)[] | null;
  returned: number;
}
