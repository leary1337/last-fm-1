import { API_KEY, API_URL, DEFAULT_IMG } from '../../const';
import { TAlbum } from '../../types/album.type';
import { sendRequest } from '../../utils/utils';


/**
 * Возвращает список моделей альбомов по поисковой строке.
 * @param {string} searchString - Строка поиска.
 * @returns {TAlbum[]} - Список моделей альбомов.
 */
export const searchAlbums = async (searchString: string) => {
  const url = `${API_URL}?method=album.search&album=${searchString}&api_key=${API_KEY}&limit=8&format=json`;
  let responseJson = null;
  try {
    responseJson = await sendRequest(url);
  } catch (e) {
    console.error(e);
    return [];
  }
  
  if (!responseJson || responseJson.error)
    return [];
  
  const albums: TAlbum[] = [];
  for (const album of responseJson.results.albummatches.album) {
    albums.push({
      image: album.image[3]['#text'] || DEFAULT_IMG,
      name: album.name,
      subtitle: album.artist,
    });
  }
  return albums;
};
