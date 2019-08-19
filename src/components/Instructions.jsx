import React from 'react';
import styles from '../styles.css';

export default (props) => {
  return (
    <div className={styles.instructionsContainer}>
      <div className={styles.instructions}>
        <p>Things you are thinking of doing probably exist along two axes:</p>
        <ol>
          <li>How much you want to do them</li>
          <li>How much you have to do them.</li>
        </ol>
        <p>Add your tasks into the appropriately labeled text areas, and listen to the list.</p>
      </div>
      <button onClick={props.toggle}>{props.open ? 'Close' : 'Open'}</button>
    </div>
  );
};
