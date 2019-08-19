import React from 'react';
import styles from '../styles.css';

class PoolItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className={styles.poolItem}>
        <span className={styles.item}>{item}</span>
        <span className={styles.delete} 
              onClick={() => {
                this.props.delete(this.props.quadrant, item)
              }}>
          x
        </span>
      </div>
    );
  }
}

export default PoolItem;
