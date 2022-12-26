import React from 'react';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import TopArtistList from '../../components/ui/topArtistList/TopArtistList';
import TopTrackList from '../../components/ui/topTrackList/TopTrackList';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <main className='content'>
        <div className='container'>
          <section className='content__section'>
            <h1 className='content__title'>Music</h1>
            <h2 className='content__subtitle'>Hot right now</h2>
            <hr className='content__subtitleLine' />
            <TopArtistList />
          </section>
          
          <section className='content__section'>
            <h2 className='content__subtitle'>Popular Tracks</h2>
            <hr className='content__subtitleLine' />
            <TopTrackList />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
