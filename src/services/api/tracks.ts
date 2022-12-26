import { API_KEY, API_URL, DEFAULT_IMG } from '../../const';
import { TTag } from '../../types/tag.type';
import { TTrack } from '../../types/track.type';
import { sendRequest } from '../../utils/utils';


/**
 * Возвращает список моделей популярных песен.
 * @returns {TTrack[]} - Список моделей песен.
 */
export const getTracks = async () => {
  const url = `${API_URL}?method=chart.gettoptracks&api_key=${API_KEY}&user=RJ&limit=15&format=json`;
  let responseJson = null;
  try {
    responseJson = await sendRequest(url);
  } catch (e) {
    console.error(e);
    return [];
  }
  
  if (!responseJson || responseJson.error)
    return [];
  
  const tracks: TTrack[] = [];
  for (const track of responseJson.tracks.track) {
    tracks.push({
      image: track.image[3]['#text'] || DEFAULT_IMG,
      name: track.name,
      authorName: track.artist.name,
    });
  }
  return tracks;
};

/**
 * Возвращает список моделей тегов песни.
 * @param {string} artistName - Название артиста.
 * @param {string} trackName - Название песни.
 * @returns {TTag[]} - Список моделей тегов.
 */
export const getTrackTags = async (artistName: string, trackName: string) => {
  const url = `${API_URL}?method=track.getinfo&api_key=${API_KEY}&artist=${artistName}&track=${trackName}&user=RJ&format=json`;
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
  for (const tag of responseJson.track.toptags.tag) {
    tags.push({
      name: tag.name,
    });
  }
  return tags;
};

/**
 * Возвращает список моделей песен по поисковой строке.
 * @param {string} searchString - Строка поиска.
 * @returns {TTrack[]} - Список моделей песен.
 */
export const searchTracks = async (searchString: string) => {
  const url = `${API_URL}?method=track.search&track=${searchString}&api_key=${API_KEY}&limit=8&format=json`;
  let responseJson = null;
  try {
    responseJson = await sendRequest(url);
  } catch (e) {
    console.error(e);
    return [];
  }
  
  if (!responseJson || responseJson.error)
    return [];
  
  const tracks: TTrack[] = [];
  for (const track of responseJson.results.trackmatches.track) {
    tracks.push({
      image: track.image[3]['#text'] || DEFAULT_IMG,
      name: track.name,
      authorName: track.artist,
    });
  }
  return tracks;
};
