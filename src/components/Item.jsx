import React from 'react';
import styles from '../styles.css';

class Item extends React.Component {
  render() {
    return (
      <div className={styles.poolItem}>
        <p>{this.props.description}</p>
        <span onClick={this.props.delete}>x</span>
      </div>
    );
  }
}

export default Item;
