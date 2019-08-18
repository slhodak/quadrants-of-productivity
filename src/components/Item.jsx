import React from 'react';
import styles from '../styles.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
  
    this.delete = this.delete.bind(this);
  }

  delete() {
    
  }

  render() {
    return (
      <div className={styles.item}>
        <p>{this.props.description}</p>
        <span onClick={this.delete}>x</span>
      </div>
    );
  }
}

export default Item;
