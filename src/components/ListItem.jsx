import React from 'react';
import styles from '../styles.css';
import checkbox from '../svg/checkbox.js';

class ListItem extends React.Component {
  render() {
    const { item, quadrant } = this.props;
    return (
      <li>
        <div className={styles.ListItem}>
          <span>{item}</span>
          <span onClick={() => {
            this.props.delete(quadrant, item)
          }}>{checkbox}</span>
        </div>
      </li>
    );
  }
}

export default ListItem;
