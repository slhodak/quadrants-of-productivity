import React from 'react';
import styles from '../styles.css';
import Quadrant from './Quadrant';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notWantNotHave: [],
      wantHave: [],
      wantNotHave: [],
      haveNotWant: []
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event, quadrant) {
    if(event.keyCode === 13 && event.target.value) {
      this.state[quadrant].push(event.target.value);
      this.setState({
        [quadrant]: this.state[quadrant]
      }, () => {
        event.target.value = '';
      });
    }
  }

  render() {
    return (
      <div className={styles.all}>
        <h1 className={styles.titleBar}>Quadrants of Productivity</h1>
          <div className={styles.container}>
          <div className={styles.quadrants}>
            <h2 className={styles.topHeader}>Have To Do -></h2>
            <h2 className={styles.leftHeader}>Want To Do /\</h2>
            <Quadrant quadrant="wantHave" handleKeyDown={this.handleKeyDown} />
            <Quadrant quadrant="wantNotHave" handleKeyDown={this.handleKeyDown} />
            <Quadrant quadrant="haveNotWant" handleKeyDown={this.handleKeyDown} />
            <Quadrant quadrant="notWantNotHave" handleKeyDown={this.handleKeyDown} />
          </div>
          <List notWantNotHave={this.state.notWantNotHave} 
            wantHave={this.state.wantHave} 
            haveNotWant={this.state.haveNotWant}
            wantNotHave={this.state.wantNotHave} 
            />
        </div>
      </div>
    );
  }
};
