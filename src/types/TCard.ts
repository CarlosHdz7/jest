import { TBookmark } from './TBookmark';

export type TCard = {
  path: string,
  extension: string,
  title: string,
  redirect: string,
  mark: boolean | TBookmark,
  customClass: string
};
