import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.infoSection}>
        <div className={styles.header}>
          <div className={styles.sectionTitle3}>
            <div className={styles.sectionTitle2}>
              <div className={styles.ellipse1} />
              <p className={styles.sectionTitle}>Career</p>
            </div>
            <div className={styles.line6} />
          </div>
          <p className={styles.aboutUsDescription3}>
            <span className={styles.aboutUsDescription}>Dedicated to&nbsp;</span>
            <span className={styles.aboutUsDescription2}>
              empowering clients through strategic financial guidance and reliable,
              results-focused advocacy.
            </span>
          </p>
        </div>
        <img src="../image/mequc11f-myo3o6f.png" className={styles.mainImage} />
      </div>
      <img src="../image/mequc11f-5a5qlof.png" className={styles.vector} />
    </div>
  );
}

export default Component;
