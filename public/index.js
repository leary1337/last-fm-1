import { API_KEY, API_URL } from './const.js';
import { sendRequest } from './utils.js';

/**
 * Возвращает список объектов популярных артистов.
 * @returns {*} - Список объектов артиста.
 */
const getArtists = async () => {
    const url = `${API_URL}?method=chart.gettopartists&api_key=${API_KEY}&user=RJ&limit=12&format=json`;
    try {
        return (await sendRequest(url)).artists.artist;
    } catch (e) {
        console.error(e);
    }
};

/**
 * Возвращает тэги артиста.
 * @param {string} artistName - Название артиста.
 * @returns {*} - Список объектов тега.
 */
const getArtistTags = async (artistName) => {
    const url = `${API_URL}?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`;
    try {
        return (await sendRequest(url)).artist.tags.tag;
    } catch (e) {
        console.error(e);
    }
};

/**
 * Возвращает список объектов популярных песен.
 * @returns {*} - Список объектов песни.
 */
const getTracks = async () => {
    const url = `${API_URL}?method=chart.gettoptracks&api_key=${API_KEY}&user=RJ&limit=15&format=json`;
    try {
        return (await sendRequest(url)).tracks.track;
    } catch (e) {
        console.error(e);
    }
};

/**
 * Возвращает тэги песни.
 * @param {string} artistName - Название артиста.
 * @param {string} trackName - Название песни.
 * @returns {*} - Список объектов тега.
 */
const getTrackTags = async (artistName, trackName) => {
    const url = `${API_URL}?method=track.getinfo&api_key=${API_KEY}&artist=${artistName}&track=${trackName}&user=RJ&format=json`;
    try {
        return (await sendRequest(url)).track.toptags.tag;
    } catch (e) {
        console.error(e);
    }
};

/**
 * Возвращает html элемент списка тегов.
 * @param tags - Список объектов тега.
 * @returns {HTMLUListElement} - Html элемент списка тегов.
 */
const createTags = (tags) => {
    const tagsList = document.createElement('ul');
    tagsList.classList.add('tags');
    for (const tag of tags) {
        const tagElement = document.createElement('li');
        tagElement.classList.add('tag');
        tagElement.textContent = `${tag.name}`;
        tagsList.appendChild(tagElement);
    }
    return tagsList;
};

/**
 * Генерирует html представление популярных артистов.
 */
const renderArtists = async () => {
    const artists = await getArtists();
    if (!artists)
        return null;
    
    const parentElement = document.getElementById('artistList');
    for (const artist of artists) {
        const element = document.createElement('div');
        element.classList.add('content__artistItem');
        element.innerHTML = `
            <img class='content__artistItemLogo' src='${artist.image[0]['#text']}' alt='artistLogo'>
            <div class='content__artistItemTitle item-title'>${artist.name}</div>
        `;
        const tags = await getArtistTags(artist.name);
        if (!tags)
            continue;
        
        element.appendChild(createTags(tags));
        parentElement.appendChild(element);
    }
};

/**
 * Генерирует html представление популярных песен.
 */
const renderTracks = async () => {
    const tracks = await getTracks();
    if (!tracks)
        return null;
    
    const parentElement = document.getElementById('trackList');
    for (const track of tracks) {
        const element = document.createElement('div');
        element.classList.add('content__trackItem');
        element.innerHTML = `
            <div class='content__trackItemLeft'>
                <img class='content__trackItemLogo' src='${track.image[0]['#text']}' alt='trackLogo'>
            </div>
        `;
        
        const rightElement = document.createElement('div');
        rightElement.classList.add('content__trackItemRight');
        rightElement.innerHTML = `
            <div class='content__trackItemTitle item-title'>${track.name}</div>
            <p class='content__trackItemAuthor'>${track.artist.name}</p>
        `;
        const tags = await getTrackTags(track.artist.name, track.name);
        if (!tags)
            continue;
        
        rightElement.appendChild(createTags(tags));
        element.appendChild(rightElement);
        parentElement.appendChild(element);
    }
};

/**
 * Генерирует страницу.
 */
const renderPage = async () => {
    await renderArtists();
    await renderTracks();
};

renderPage();
