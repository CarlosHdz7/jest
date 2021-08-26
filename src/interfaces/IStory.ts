export interface IStory {
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
  results?: (ResultsEntityStory)[] | null;
}
export interface ResultsEntityStory {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: string;
  thumbnail?: null;
  creators: CreatorsOrCharactersOrEvents;
  characters: CreatorsOrCharactersOrEvents;
  series: SeriesOrComics;
  comics: SeriesOrComics;
  events: CreatorsOrCharactersOrEvents;
  originalIssue: ItemsEntitySeriesOrComics;
}
export interface CreatorsOrCharactersOrEvents {
  available: number;
  collectionURI: string;
  items?: (ItemsEntityCharacters)[] | null;
  returned: number;
}
export interface ItemsEntityCharacters {
  resourceURI: string;
  name: string;
}

export interface SeriesOrComics {
  available: number;
  collectionURI: string;
  items?: (ItemsEntitySeriesOrComics)[] | null;
  returned: number;
}
export interface ItemsEntitySeriesOrComics {
  resourceURI: string;
  name: string;
}
