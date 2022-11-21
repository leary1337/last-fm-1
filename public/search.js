import { API_KEY, API_URL } from './const.js';
import { sendRequest } from './utils.js';

/**
 * Ищет альбомы по поисковой строке.
 * @param {string} searchString - Строка поиска.
 * @returns {*} - Список объектов альбома.
 */
const searchAlbums = async (searchString) => {
    const url = `${API_URL}?method=album.search&album=${searchString}&api_key=${API_KEY}&limit=8&format=json`;
    try {
        return (await sendRequest(url)).results.albummatches.album;
    } catch (e) {
        console.error(e);
    }
};

/**
 * Ищет артистов по поисковой строке.
 * @param {string} searchString - Строка поиска.
 * @returns {*} - Список объектов артиста.
 */
const searchArtists = async (searchString) => {
    const url = `${API_URL}?method=artist.search&artist=${searchString}&api_key=${API_KEY}&limit=8&format=json`;
    try {
        return (await sendRequest(url)).results.artistmatches.artist;
    } catch (e) {
        console.error(e);
    }
};

/**
 * Ищет песни по поисковой строке.
 * @param {string} searchString - Строка поиска.
 * @returns {*} - Список объектов песни.
 */
const searchTracks = async (searchString) => {
    const url = `${API_URL}?method=track.search&track=${searchString}&api_key=${API_KEY}&limit=8&format=json`;
    try {
        return (await sendRequest(url)).results.trackmatches.track;
    } catch (e) {
        console.error(e);
    }
};

/**
 * Генерирует html представление элемента карточки.
 * @param {Object} item - Объект с данными для карточки.
 * @returns {HTMLDivElement} - Html элемент карточки.
 */
const createCardItem = (item) => {
    const element = document.createElement('div');
    element.classList.add('card-item');
    element.innerHTML = `
        <img src='${item.img}' alt='${item.title}' class='card-item__image'>
        <div class='card-item__details'>
            <p class='card-item__title'>${item.title}</p>
            <p class='card-item__subtitle'>${item.subtitle}</p>
        </div>
    `;
    return element;
};

/**
 * Генерирует верстку по найденным артистам.
 * @param artists - Список объектов артиста.
 */
const renderArtists = (artists) => {
    const elem = document.getElementById('artistListWrapper');
    elem.innerHTML = `
        <h2 class='search-content__left-subtitle'>Artists</h2>
        <div id='artistList' class='card-items'></div>
    `;
    if (!artists || !artists.length) {
        const notFoundElem = document.createElement('p');
        notFoundElem.textContent = 'Not Found!';
        elem.appendChild(notFoundElem);
        return null;
    }
    
    const parentElement = document.getElementById('artistList');
    for (const artist of artists) {
        parentElement.appendChild(createCardItem({
            'img': artist.image[3]['#text'],
            'title': artist.name,
            'subtitle': artist.listeners,
        }));
    }
};

/**
 * Генерирует верстку по найденным альбомам.
 * @param albums - Список объектов альбома.
 */
const renderAlbums = (albums) => {
    const elem = document.getElementById('albumListWrapper');
    elem.innerHTML = `
        <h2 class='search-content__left-subtitle'>Albums</h2>
        <div id='albumList' class='card-items'></div>
    `;
    if (!albums || !albums.length) {
        const notFoundElem = document.createElement('p');
        notFoundElem.textContent = 'Not Found!';
        elem.appendChild(notFoundElem);
        return null;
    }
    
    const parentElement = document.getElementById('albumList');
    for (const album of albums) {
        parentElement.appendChild(createCardItem({
            'img': album.image[3]['#text'],
            'title': album.name,
            'subtitle': album.artist,
        }));
    }
};

/**
 * Генерирует верстку по найденным песням.
 * @param tracks - Список объектов песни.
 */
const renderTracks = (tracks) => {
    const elem = document.getElementById('trackListWrapper');
    elem.innerHTML = `
        <h2 class='search-content__left-subtitle'>Tracks</h2>
        <div id='trackList' class='tracks'></div>
    `;
    if (!tracks || !tracks.length) {
        const notFoundElem = document.createElement('p');
        notFoundElem.textContent = 'Not Found!';
        elem.appendChild(notFoundElem);
        return null;
    }
    
    const parentElement = document.getElementById('trackList');
    for (const track of tracks) {
        const element = document.createElement('div');
        element.classList.add('tracks__item');
        element.innerHTML = `
            <a href='#' class='tracks__item-link tracks__item-play link'><img class='tracks__item-play__image' src='./img/play.svg' alt=''></a>
            <img src='${track.image[3]['#text']}' alt='' class='tracks__item-img'>
            <img src='./img/heart.svg' alt='like' class='tracks__item-favorite'>
            <a href='#' class='tracks__item-link tracks__item-name link'>${track.name}</a>
            <a href='#' class='tracks__item-link tracks__item-artist link'>${track.artist}</a>
            <p class='tracks__item-duration'>4:55</p>
        `;
        parentElement.appendChild(element);
    }
};

/**
 * Ищет среди всех доступных групп объектов данные.
 * @param {string} searchString - Строка поиска.
 */
const searchAll = async (searchString) => {
    const artists = await searchArtists(searchString);
    const albums = await searchAlbums(searchString);
    const tracks = await searchTracks(searchString);
    await renderArtists(artists);
    await renderAlbums(albums);
    await renderTracks(tracks);
};

/**
 * Очищает прошлые результаты поиска.
 */
const removeOld = () => {
    const ids = ['trackList', 'albumList', 'artistList'];
    for (const id of ids) {
        const element = document.getElementById(id);
        if (!element)
            continue;
        element.innerHTML = '';
    }
};

const searchElement = document.getElementById('searchForm');
searchElement.addEventListener('submit', (e) => {
    e.preventDefault();
    removeOld();
    const searchInput = document.getElementById('searchInput');
    const searchStringElement = document.getElementById('searchString');
    const searchStringWrapper = document.getElementById('searchStringWrapper');
    searchStringWrapper.classList.remove('hidden');
    const hiddenElements = document.getElementsByClassName('search-content__wrapper');
    for (const elem of hiddenElements) {
        elem.classList.remove('hidden');
    }
    searchStringElement.textContent = searchInput.value;
    searchAll(searchInput.value);
});
