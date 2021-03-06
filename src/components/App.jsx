import React from 'react';
import styles from '../styles.css';
import Quadrant from './Quadrant.jsx';
import List from './List.jsx';
import Instructions from './Instructions.jsx';
import arrowUp from '../svg/arrowUp.js';
import arrowRight from '../svg/arrowRight.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        notWantNotHave: { size: 0 },
        wantHave: { size: 0 },
        wantNotHave: { size: 0 },
        haveNotWant: { size: 0 }
      },
      instructionsOpen: false
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.insertListItem = this.insertListItem.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
    this.toggleInstructions = this.toggleInstructions.bind(this);
  }

  handleKeyDown(event, quadName) {
    if(event.keyCode === 13 && event.target.value) {
      this.insertListItem(quadName, event.target.value);
      event.target.value = '';
    }
  }

  insertListItem(quadName, value) {
    const quadrant = this.state.categories[quadName];
    quadrant[value] = value;
    quadrant.size += 1;
    this.setState({
      quadrant
    });
  }

  deleteListItem(quadName, value) {
    const quadrant = this.state.categories[quadName];
    console.log('quadrnt', quadrant);
    delete quadrant[value];
    quadrant.size -= 1;
    this.setState({
      quadrant
    });
  }

  toggleInstructions() {
    let { instructionsOpen } = this.state;
    instructionsOpen = !instructionsOpen;
    this.setState({
      instructionsOpen
    });
  }

  render() {
    const { categories, instructionsOpen } = this.state;
    console.log(categories);
    return (
      <div className={styles.all}>
        {/*<h1 className={styles.titleBar}>Quadrants of Productivity</h1>*/}
        {/*<Instructions toggle={this.toggleInstructions} open={instructionsOpen} />*/}
        <div className={styles.quadrants}>
          <h2 className={styles.topHeader}>Have To Do <span className={styles.arrow}>{arrowRight}</span></h2>
          <h2 className={styles.leftHeader}>Want To Do <span className={styles.arrow}>{arrowUp}</span></h2>
          <Quadrant quadrant="wantHave" items={categories.wantHave} handleKeyDown={this.handleKeyDown} deleteListItem={this.deleteListItem} />
          <Quadrant quadrant="wantNotHave" items={categories.wantNotHave} handleKeyDown={this.handleKeyDown} deleteListItem={this.deleteListItem} />
          <Quadrant quadrant="haveNotWant" items={categories.haveNotWant} handleKeyDown={this.handleKeyDown} deleteListItem={this.deleteListItem} />
          <Quadrant quadrant="notWantNotHave" items={categories.notWantNotHave} handleKeyDown={this.handleKeyDown} deleteListItem={this.deleteListItem} />
          <List categories={categories} deleteListItem={this.deleteListItem} />
        </div>
      </div>
    );
  }
}

export default App;
