import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            <img src="../image/meh6wtqm-wpg5ui3.svg" className={styles.icon} />
          </div>
          <p className={styles.title}>Lorem ipsum</p>
        </div>
        <img src="../image/meh6wtqm-mf15hf8.png" className={styles.vector} />
      </div>
      <div className={styles.container2}>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Aenean habitant neque tincidunt
          viverra.
        </p>
      </div>
    </div>
  );
}

export default Component;
