import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notWantNotHave: '',
      wantHave: '',
      wantNotHave: '',
      haveNotWant: ''
    }
    this.handleInputs = this.handleInputs.bind(this);
  }
  handleInputs(event, quadrant) {
    if (quadrant === 'notWantNotHave') {
      this.setState({
        notWantNotHave: event.target.value
      });
    } else if (quadrant === 'wantHave') {
      this.setState({
        wantHave: event.target.value
      });
    } else if (quadrant === 'wantNotHave') {
      this.setState({
        wantNotHave: event.target.value
      });
    } else if (quadrant === 'haveNotWant') {
      this.setState({
        haveNotWant: event.target.value
      });
    }
    console.log(this.state);
  }
  render() {
    return (
      <div className={styles.all}>
        <h1 className={styles.titleBar}>Quadrants of Productivity</h1>
          <div className={styles.container}>
          <div className={styles.quadrants}>
            <h2 className={styles.topHeader}>Have To Do -></h2>
            <h2 className={styles.leftHeader}>Want To Do /\</h2>
            <Quadrant quadrant="wantHave" handleChange={this.handleInputs} />
            <Quadrant quadrant="wantNotHave" handleChange={this.handleInputs} />
            <Quadrant quadrant="haveNotWant" handleChange={this.handleInputs} />
            <Quadrant quadrant="notWantNotHave" handleChange={this.handleInputs} />
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
  }
  handleChange(event) {
    this.props.handleChange(event, this.props.quadrant);
  };
  render() {
    return (
      <div className={styles[this.props.quadrant]}>
        <div className={styles.taskArea}>
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
          {this.props.haveNotWant && this.props.haveNotWant.split(',').map(function(item) {
              return <li>{item.trim()}</li>;
          })}
          {this.props.wantHave && this.props.wantHave.split(',').map(function(item) {
              return <li>{item.trim()}</li>;
          })}
          {this.props.wantNotHave && this.props.wantNotHave.split(',').map(function(item) {
              return <li>{item.trim()}</li>;
          })}
          {this.props.notWantNotHave && this.props.notWantNotHave.split(',').map(function(item) {
              return <li>{item.trim()}</li>;
          })}
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
