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
    console.log('items: ', this.props.items);
    return (
      <div className={styles[this.props.quadrant]}>
        <div className={styles.taskArea} onFocus={this.attachKeyDownHandler} onBlur={this.detachKeyDownHandler}>
          <input className={styles.taskInput} placeholder={this.props.quadrant} />
          <div className={styles.taskPool}>
            {this.props.items.size ? Array.from(this.props.items).map(item => {
              if (item !== 'size') {
                console.log('inserting item to pool');
                return <Item text={item}/>
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
