import React from 'react';
import styles from '../styles.css';
import checkbox from '../svg/checkbox.js';

class ListItem extends React.Component {
  render() {
    const { item, quadrant } = this.props;
    return (
      <li>
        <div className={styles.listItem}>
          <span className={styles.item}>{item}</span>
          <span className={styles.complete}
            onClick={() => {
            this.props.delete(quadrant, item)
          }}>{checkbox}</span>
        </div>
      </li>
    );
  }
}

export default ListItem;
