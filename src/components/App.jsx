import React from 'react';
import styles from '../styles.css';
import Quadrant from './Quadrant.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        notWantNotHave: { size: 0 },
        wantHave: { size: 0 },
        wantNotHave: { size: 0 },
        haveNotWant: { size: 0 }
      }
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.insertListItem = this.insertListItem.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
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
      [quadName]: quadrant
    });
  }

  deleteListItem(event, quadrant, name) {
    
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div className={styles.all}>
        <h1 className={styles.titleBar}>Quadrants of Productivity</h1>
          <div className={styles.container}>
          <div className={styles.quadrants}>
            <h2 className={styles.topHeader}>Have To Do -></h2>
            <h2 className={styles.leftHeader}>Want To Do /\</h2>
            <Quadrant quadrant="wantHave" items={categories.wantHave} handleKeyDown={this.handleKeyDown} />
            <Quadrant quadrant="wantNotHave" items={categories.wantNotHave} handleKeyDown={this.handleKeyDown} />
            <Quadrant quadrant="haveNotWant" items={categories.haveNotWant} handleKeyDown={this.handleKeyDown} />
            <Quadrant quadrant="notWantNotHave" items={categories.notWantNotHave} handleKeyDown={this.handleKeyDown} />
          </div>
          <List categories={categories} />
        </div>
      </div>
    );
  }
}

export default App;
