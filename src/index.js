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
        <div class="main">
          <h3 class="haveTo">Want to Do --></h3>
          <section class="underMain">
            <h3>^ Have to Do <br/>|<br/>|</h3>
            <section class="quadrants">
              <div class="top">            
                <Quadrant class="dontWantToHaveTo" handleChange={this.handleInputs} />
                <Quadrant class="haveToWantTo" handleChange={this.handleInputs} />
              </div>
              <div class="bottom">
                <Quadrant class="dontHaveToDontWantTo" handleChange={this.handleInputs} />
                <Quadrant class="dontHaveToWantTo" handleChange={this.handleInputs} />
              </div>
            </section>
          </section>
          <List dontHaveToDontWantTo={this.state.dontHaveToDontWantTo} 
                haveToWantTo={this.state.haveToWantTo} 
                dontWantToHaveTo={this.state.dontWantToHaveTo}
                dontHaveToWantTo={this.state.dontHaveToWantTo} 
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
  handleChange(event, id) {
    this.props.handleChange(event, this.props.id);
  };
  render() {
    return (
        <textarea onChange={this.handleChange} placeholder={this.props.id} />
    );
  }
};

class List extends React.Component {
  render() {
    return(
      <div class="list">
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
