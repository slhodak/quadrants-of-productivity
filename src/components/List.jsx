import React from 'react';
import styles from '../styles.css';
import ListItem from './ListItem.jsx';

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
          {categories.haveNotWant.length ? categories.haveNotWant.map((item) => {
              return <ListItem item={item} quadrant={'haveNotWant'} delete={this.props.deleteListItem} />;
          }) : null}
          {categories.wantHave.length ? categories.wantHave.map((item) => {
              return <ListItem item={item} quadrant={'wantHave'} delete={this.props.deleteListItem} />;
          }) : null}
          {categories.wantNotHave.length ? categories.wantNotHave.map((item) => {
              return <ListItem item={item} quadrant={'wantNotHave'} delete={this.props.deleteListItem} />;
          }) : null}
          {categories.notWantNotHave.length ? categories.notWantNotHave.map((item) => {
              return <ListItem item={item} quadrant={'notWantNotHave'} delete={this.props.deleteListItem} />;
          }) : null}
        </ol>
      </div>
    );
  }
}

export default List;
