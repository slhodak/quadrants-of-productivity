import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dontHaveToDontWantTo: '',
      haveToWantTo: '',
      dontHaveToWantTo: '',
      haveToDontWantTo: ''
    }
    this.handleInputs = this.handleInputs.bind(this);
  }
  handleInputs(event, id) {
    if (id === 'dontHaveToDontWantTo') {
      this.setState({
        dontHaveToDontWantTo: event.target.value
      });
    } else if (id === 'haveToWantTo') {
      this.setState({
        haveToWantTo: event.target.value
      });
    } else if (id === 'dontHaveToWantTo') {
      this.setState({
        dontHaveToWantTo: event.target.value
      });
    } else if (id === 'dontWantToHaveTo') {
      this.setState({
        dontWantToHaveTo: event.target.value
      });
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.quadrants}>
          <Quadrant quadrant="wantHave" handleChange={this.handleInputs} />
          <Quadrant quadrant="wantNotHave" handleChange={this.handleInputs} />
          <Quadrant quadrant="haveNotWant" handleChange={this.handleInputs} />
          <Quadrant quadrant="notWantNotHave" handleChange={this.handleInputs} />
        </div>
        <List dontHaveToDontWantTo={this.state.dontHaveToDontWantTo} 
          haveToWantTo={this.state.haveToWantTo} 
          dontWantToHaveTo={this.state.dontWantToHaveTo}
          dontHaveToWantTo={this.state.dontHaveToWantTo} 
          />
      </div>
    );
  }
};

class Quadrant extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, id) {
    this.props.handleChange(event, this.props.id);
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
          {this.props.dontWantToHaveTo && this.props.dontWantToHaveTo.split(',').map(function(item) {
              return <li>{item.trim()}</li>;
          })}
          {this.props.haveToWantTo && this.props.haveToWantTo.split(',').map(function(item) {
              return <li>{item.trim()}</li>;
          })}
          {this.props.dontHaveToWantTo && this.props.dontHaveToWantTo.split(',').map(function(item) {
              return <li>{item.trim()}</li>;
          })}
          {this.props.dontHaveToDontWantTo && this.props.dontHaveToDontWantTo.split(',').map(function(item) {
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
