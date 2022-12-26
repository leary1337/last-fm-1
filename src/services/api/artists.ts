import { API_KEY, API_URL, DEFAULT_IMG } from '../../const';
import { TArtist } from '../../types/artist.type';
import { TTag } from '../../types/tag.type';
import { sendRequest } from '../../utils/utils';


/**
 * Возвращает список моделей популярных артистов.
 * @returns {TArtist[]} - Список моделей артистов.
 */
export const getArtistList = async (): Promise<TArtist[] | []> => {
  const url = `${API_URL}?method=chart.gettopartists&api_key=${API_KEY}&user=RJ&limit=12&format=json`;
  let responseJson = null;
  try {
    responseJson = await sendRequest(url);
  } catch (e) {
    console.error(e);
    return [];
  }
  
  if (!responseJson || responseJson.error)
    return [];
  return getArtistsFromRawData(responseJson.artists.artist);
};

/**
 * Возвращает список моделей тегов артиста.
 * @param {string} artistName - Название артиста.
 * @returns {TTag[]} - Список моделей тегов.
 */
export const getArtistTags = async (artistName: string) => {
  const url = `${API_URL}?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`;
  let responseJson = null;
  try {
    responseJson = await sendRequest(url);
  } catch (e) {
    console.error(e);
    return [];
  }
  
  if (!responseJson || responseJson.error)
    return [];
  
  const tags: TTag[] = [];
  for (const tag of responseJson.artist.tags.tag) {
    tags.push({
      name: tag.name,
    });
  }
  return tags;
};

/**
 * Возвращает список моделей артистов по поисковой строке.
 * @param {string} searchString - Строка поиска.
 * @returns {TArtist[]} - Список моделей артистов.
 */
export const searchArtists = async (searchString: string) => {
  const url = `${API_URL}?method=artist.search&artist=${searchString}&api_key=${API_KEY}&limit=8&format=json`;
  let responseJson = null;
  try {
    responseJson = await sendRequest(url);
  } catch (e) {
    console.error(e);
    return [];
  }
  
  if (!responseJson || responseJson.error)
    return [];
  return getArtistsFromRawData(responseJson.results.artistmatches.artist);
};

/**
 * Возвращает список моделей артистов по "сырым" данным.
 * @param {*} rawData - "Сырые" данные.
 * @returns {TArtist[]} - Список моделей артистов.
 */
const getArtistsFromRawData = (rawData: any) => {
  if (!rawData)
    return [];
  
  const artists: TArtist[] = [];
  for (const artist of rawData) {
    artists.push({
      image: artist.image[3]['#text'] || DEFAULT_IMG,
      name: artist.name,
      subtitle: artist.listeners,
    });
  }
  return artists;
};
