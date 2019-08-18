import React from 'react';
import styles from '../styles.css';

class Quadrant extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.attachKeyDownHandler = this.attachKeyDownHandler.bind(this);
    this.detachKeyDownHandler = this.detachKeyDownHandler.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event, this.props.quadrant);
  }

  attachKeyDownHandler(event) {
    window.onkeydown = (event) => {
      this.props.handleKeyDown(event, this.props.quadrant);
    };
  }
  detachKeyDownHandler(event) {
    window.onkeydown = null;
  }

  render() {
    return (
      <div className={styles[this.props.quadrant]}>
        <div className={styles.taskArea} onFocus={this.attachKeyDownHandler} onBlur={this.detachKeyDownHandler}>
          <input className={styles.taskInput} onChange={this.handleChange} placeholder={this.props.quadrant} />
          <div className={styles.taskPool}></div>
        </div>
      </div>
    );
  }
}

export default Quadrant;
