import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__top'>
        <div className='container footer__top__wrapper'>
          <div className='footer__topCol'>
            <h2 className='footer__topColTitle'>Company</h2>
            <ul className='footer__topColItems'>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>About Last.fm</a>
              </li>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Contact Us</a>
              </li>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Jobs</a></li>
            </ul>
          </div>
          
          <div className='footer__topCol'>
            <h2 className='footer__topColTitle'>Help</h2>
            <ul className='footer__topColItems'>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Track My Music</a>
              </li>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Community
                Support</a></li>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Community
                Guidelines</a></li>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Help</a></li>
            </ul>
          </div>
          
          <div className='footer__topCol'>
            <h2 className='footer__topColTitle'>Goodies</h2>
            <ul className='footer__topColItems'>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Download
                Scrobbler</a></li>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Developer API</a>
              </li>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Free Music
                Downloads</a></li>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Merchandise</a>
              </li>
            </ul>
          </div>
          
          <div className='footer__topCol'>
            <h2 className='footer__topColTitle'>Account</h2>
            <ul className='footer__topColItems'>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Sign Up</a></li>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Log In</a></li>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Subscribe</a></li>
            </ul>
          </div>
          
          <div className='footer__topCol'>
            <h2 className='footer__topColTitle'>Follow Us</h2>
            <ul className='footer__topColItems'>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Facebook</a></li>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Twitter</a></li>
              <li className='footer__topColItem'><a className='footer__topColItem-link link' href='#'>Instagram</a></li>
              <li className='footer__topColItem'><a className=' link' href='#'>YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer__bottom'>
        <div className='container footer__bottomWrapper'>
          <div className='footer__bottomLeft'>
            <ul className='footer__bottomLeftLanguages'>
              <li className='footer__bottomLeftLanguageItem activeElement'><a
                className='footer__bottomLeftLanguageItem-link link'
                href='#'>English</a></li>
              <li className='footer__bottomLeftLanguageItem'><a className='footer__bottomLeftLanguageItem-link link'
                                                                href='#'>Deutsch</a>
              </li>
              <li className='footer__bottomLeftLanguageItem'><a className='footer__bottomLeftLanguageItem-link link'
                                                                href='#'>Español</a>
              </li>
              <li className='footer__bottomLeftLanguageItem'><a className='footer__bottomLeftLanguageItem-link link'
                                                                href='#'>Français</a></li>
              <li className='footer__bottomLeftLanguageItem'><a className='footer__bottomLeftLanguageItem-link link'
                                                                href='#'>Italiano</a></li>
              <li className='footer__bottomLeftLanguageItem'><a className='footer__bottomLeftLanguageItem-link link'
                                                                href='#'>日本語</a>
              </li>
              <li className='footer__bottomLeftLanguageItem'><a className='footer__bottomLeftLanguageItem-link link'
                                                                href='#'>Polski</a>
              </li>
              <li className='footer__bottomLeftLanguageItem'><a className='footer__bottomLeftLanguageItem-link link'
                                                                href='#'>Português</a></li>
              <li className='footer__bottomLeftLanguageItem'><a className='footer__bottomLeftLanguageItem-link link'
                                                                href='#'>Русский</a>
              </li>
              <li className='footer__bottomLeftLanguageItem'><a className='footer__bottomLeftLanguageItem-link link'
                                                                href='#'>Svenska</a>
              </li>
              <li className='footer__bottomLeftLanguageItem'><a className='footer__bottomLeftLanguageItem-link link'
                                                                href='#'>Türkçe</a>
              </li>
              <li className='footer__bottomLeftLanguageItem'><a className='footer__bottomLeftLanguageItem-link link'
                                                                href='#'>简体中文</a></li>
            </ul>
            
            <p className='footer__bottomLeftTimezone'>Time Zone: <span className='activeElement'>Europe/Moscow</span>
            </p>
            
            <ul className='footer__bottomLeftTags tags'>
              <li className='tag footer__bottomLeftTag'>CBS Interactive © 2022 Last.fm Ltd. All rights reserved</li>
              <li className='tag footer__bottomLeftTag'>Terms of Use</li>
              <li className='tag footer__bottomLeftTag'>Privacy Policy</li>
              <li className='tag footer__bottomLeftTag'>Legal Policies</li>
              <li className='tag footer__bottomLeftTag'>Cookies Policy</li>
              <li className='tag footer__bottomLeftTag'>Do Not Sell My Personal Information</li>
              <li className='tag footer__bottomLeftTag'>Jobs at ViacomCBS</li>
              <li className='tag footer__bottomLeftTag'>Last.fm Music</li>
            </ul>
          </div>
          
          <div className='footer__bottomRight'>
            <p>Audioscrobbler</p>
            <img src='https://www.last.fm/static/images/footer_logo@2x.49ca51948b0a.png' width='37' height='20'
                 alt='footerLogo' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
