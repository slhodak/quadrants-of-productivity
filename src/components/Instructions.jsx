import React from 'react';
import styles from '../styles.css';

export default (props) => {
  return (
    <div className={styles.instructionsContainer}>
      <button className={styles.toggle} onClick={props.toggle}>{props.open ? 'Close' : 'Open'}</button>
      {props.open
        ? <div className={styles.instructions}>
            <p>Instructions</p>
            <p>Things you are thinking of doing probably exist along two axes:</p>
            <ol>
              <li>How much you want to do them</li>
              <li>How much you have to do them.</li>
            </ol>
            <p>Add your tasks into the appropriate text areas, and listen to the list.</p>
          </div>
        : <div className={styles.instructionsEmpty}>Instructions </div>}
    </div>
  );
};
