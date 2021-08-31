import { TBookmark } from '../types/TBookmark';

const checkBookmark = (bookmarks:Array<TBookmark>, uidBookmark: string) => {
  const result = bookmarks?.find((book: TBookmark) => book.uid === uidBookmark);
  return (result) || false;
};

export default checkBookmark;
