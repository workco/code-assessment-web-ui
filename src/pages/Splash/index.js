import React from 'react';

import styles from './Splash.module.scss';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils/images';

function Splash() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>
        <Link to="/products">Daily deals</Link>
      </h1>

      <video controls className={styles.video} autoPlay loop>
        <source src={getImageUrl('/assets/video.mp4')} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </main>
  );
}

export default Splash;
