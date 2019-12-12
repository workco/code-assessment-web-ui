import React, { useState, useEffect } from 'react';

import styles from './Splash.module.scss';
import { Link } from 'react-router-dom';
import BrowserDetection from 'react-browser-detection';

import { getImageUrl } from '../../utils/images';

function Splash() {
  const [width, setWidth] = useState(1400);

  useEffect(() => {
    const handleResize = () => {
      if (width >= 1100) {
        setWidth(window.innerWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  console.log(width);

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>
        <Link to="/">Daily deals</Link>
      </h1>

      <BrowserDetection key={width >= 1100}>
        {{
          default: browser => (
            <video
              controls
              className={styles.video}
              autoPlay
              muted
              width={width >= 1100 ? '80%' : '50%'}
              loop={browser === 'chrome'} /* Only loop on Chrome */
            >
              <source src={getImageUrl('/assets/video.mp4')} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          )
        }}
      </BrowserDetection>

      <Link className={styles.productLink} to="/products">
        Start shopping
      </Link>
    </main>
  );
}

export default Splash;
