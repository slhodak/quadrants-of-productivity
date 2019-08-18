import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

class Graph extends React.Component {
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
};

class List extends React.Component {
  render() {
    return(
      <div className={styles.list}>
        <h2>The List:</h2>
        <ol>
          {this.props.haveNotWant.length ? this.props.haveNotWant.map(function(item) {
              return <li>{item}</li>;
          }) : null}
          {this.props.wantHave.length ? this.props.wantHave.map(function(item) {
              return <li>{item}</li>;
          }) : null}
          {this.props.wantNotHave.length ? this.props.wantNotHave.map(function(item) {
              return <li>{item}</li>;
          }) : null}
          {this.props.notWantNotHave.length ? this.props.notWantNotHave.map(function(item) {
              return <li>{item}</li>;
          }) : null}
        </ol>
      </div>
    );
  }
};

ReactDOM.render(
  <div>
    <Graph />
  </div>, 
  document.getElementById('root')
);
