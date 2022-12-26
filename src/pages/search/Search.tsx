import React, { useState } from 'react';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SearchAlbumList from '../../components/ui/searchAlbumList/SearchAlbumList';
import SearchArtistList from '../../components/ui/searchArtistList/SearchArtistList';
import SearchForm from '../../components/ui/searchForm/SearchForm';
import SearchTrackList from '../../components/ui/searchTrackList/SearchTrackList';
import { searchAlbums } from '../../services/api/albums';
import { searchArtists } from '../../services/api/artists';
import { searchTracks } from '../../services/api/tracks';
import { TAlbum } from '../../types/album.type';
import { TArtist } from '../../types/artist.type';
import { TTrack } from '../../types/track.type';
import './Search.css';

const Search = () => {
  const [artists, setArtists] = useState<TArtist[]>([]);
  const [albums, setAlbums] = useState<TAlbum[]>([]);
  const [tracks, setTracks] = useState<TTrack[]>([]);
  const [searchString, setSearchString] = useState<string>('');
  
  const handleSubmit = (text: string) => {
    searchAlbums(text).then((result) => {
      setAlbums(result);
    });
    searchArtists(text).then((result) => {
      setArtists(result);
    });
    searchTracks(text).then((result) => {
      setTracks(result);
    });
    setSearchString(text);
  };
  
  return (
    <>
      <Header />
      <main className='content'>
        <div className='search-top'>
          <div className='container'>
            {searchString ? <h1 className='search-top__title'>Search results for <span>{searchString}</span></h1> : ''}
            <nav className='search-top__nav'>
              <ul className='search-top__nav-list'>
                <li className='nav-list__item nav-list__item__active'><a className='nav-list__item-link link' href='#'>Top
                  Results</a></li>
                <li className='nav-list__item'><a className='nav-list__item-link link' href='#'>Artists</a></li>
                <li className='nav-list__item'><a className='nav-list__item-link link' href='#'>Albums</a></li>
                <li className='nav-list__item'><a className='nav-list__item-link link' href='#'>Tracks</a></li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className='container search-content'>
          <div className='search-content__left'>
            <SearchForm onSubmit={handleSubmit} />
            
            {artists.length || albums.length || tracks.length ?
              <>
                <section className='search-content__left-section'>
                  <SearchArtistList artists={artists} />
                </section>
                <section className='search-content__left-section'>
                  <SearchAlbumList albums={albums} />
                </section>
                <section className='search-content__left-section'>
                  <SearchTrackList tracks={tracks} />
                </section>
              </>
              : searchString ? <p>Not Found!</p> : ''
            }
          
          </div>
          <div className='search-content__right'>
            <p className='search-content__right-text'>Don't want to see ads?</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Search;
