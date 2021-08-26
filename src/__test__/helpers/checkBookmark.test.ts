import checkBookmark from '../../helpers/checkBookmark';

describe('testing bookmark', () => {
  test('undefined bookmark', () => {
    const response = checkBookmark([], 'comic123');
    expect(response).toBe(false);
  });

  test('get bookmark', () => {
    const bookmarks = [
      {
        uid: 'comic123',
      },
    ];
    const response = checkBookmark(bookmarks, 'comic123');
    expect(response).toEqual({
      uid: 'comic123',
    });
  });
});
