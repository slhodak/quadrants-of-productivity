import React from 'react';
import styles from '../styles.css';

class List extends React.Component {
  render() {
    return(
      <div className={styles.list}>
        <h2>Next To Do:</h2>
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
}

export default List;
