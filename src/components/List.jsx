import React from 'react';
import styles from '../styles.css';

class List extends React.Component {
  render() {
    let categories = {};
    for (let cat in this.props.categories) {
      categories[cat] = [];
      for (let list in this.props.categories[cat]) {
        if (list !== 'size') {
          categories[cat].push(list);
        }
      }
    }
    return(
      <div className={styles.list}>
        <h2>Next To Do:</h2>
        <ol>
          {categories.haveNotWant.length ? categories.haveNotWant.map(function(item) {
              return <li>{item}</li>;
          }) : null}
          {categories.wantHave.length ? categories.wantHave.map(function(item) {
              return <li>{item}</li>;
          }) : null}
          {categories.wantNotHave.length ? categories.wantNotHave.map(function(item) {
              return <li>{item}</li>;
          }) : null}
          {categories.notWantNotHave.length ? categories.notWantNotHave.map(function(item) {
              return <li>{item}</li>;
          }) : null}
        </ol>
      </div>
    );
  }
}

export default List;
