import React from 'react';
import styles from '../styles.css';
import Item from './Item.jsx';

class Quadrant extends React.Component {
  constructor(props) {
    super(props)
    this.attachKeyDownHandler = this.attachKeyDownHandler.bind(this);
    this.detachKeyDownHandler = this.detachKeyDownHandler.bind(this);
  }

  attachKeyDownHandler() {
    window.onkeydown = (event) => {
      this.props.handleKeyDown(event, this.props.quadrant);
    };
  }

  detachKeyDownHandler() {
    window.onkeydown = null;
  }

  render() {
    const { items, quadrant } = this.props;
    const itemList = [];
    for (let item in items) {
      if (item !== 'size') {
        itemList.push(item);
      }
    }
    return (
      <div className={styles[quadrant]}>
        <div className={styles.taskArea} onFocus={this.attachKeyDownHandler} onBlur={this.detachKeyDownHandler}>
          <input className={styles.taskInput} placeholder={quadrant} />
          <div className={styles.taskPool}>
            {items.size ? itemList.map(item => {
              if (item !== 'size') {
                console.log('inserting item to pool');
                return <Item item={item} quadrant={quadrant} delete={this.props.deleteListItem} />
              } else {
                return null;
              }
            }) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Quadrant;
