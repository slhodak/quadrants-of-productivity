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
    this.changeShared = this.changeShared.bind(this);
  }
  changeShared(event, id) {
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
        <div id="main">
          <h3 id="haveTo">Want to Do --></h3>
          <section id="underMain">
            <h3>^ Have to Do <br/>|<br/>|</h3>
            <section id="quadrants">
              <form id="top">            
                <Quadrant id="dontWantToHaveTo" changeMethod={this.changeShared} />
                <Quadrant id="haveToWantTo" changeMethod={this.changeShared} />
              </form>
              <form id="bottom">
                <Quadrant id="dontHaveToDontWantTo" changeMethod={this.changeShared} />
                <Quadrant id="dontHaveToWantTo" changeMethod={this.changeShared} />
              </form>
            </section>
          </section>
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
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, id) {
    this.setState({
      input: event.target.value
    })
    this.props.changeMethod(event, this.props.id);
  };
  render() {
    return (
        <textarea onChange={this.handleChange} placeholder={this.props.id} />
    );
  }
};

class List extends React.Component {
  // Items in list are generated from comma-separated words from quadrant component
  render() {
    return(
      <div id="list">
        <h2>The List:</h2>
        <ol>
          {this.props.dontWantToHaveTo && this.props.dontWantToHaveTo.split(', ').map(function(item) {
              return <li>{item}</li>;
          })}
          {this.props.haveToWantTo && this.props.haveToWantTo.split(', ').map(function(item) {
              return <li>{item}</li>;
          })}
          {this.props.dontHaveToWantTo && this.props.dontHaveToWantTo.split(', ').map(function(item) {
              return <li>{item}</li>;
          })}
          {this.props.dontHaveToDontWantTo && this.props.dontHaveToDontWantTo.split(', ').map(function(item) {
              return <li>{item}</li>;
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
