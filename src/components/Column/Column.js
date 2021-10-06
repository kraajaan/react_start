import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        {this.state.cards.map(({key, ...cardProps}) => (
          <Card key={key} {...cardProps} />
        ))}
      </section>
    )
  }
}

export default Column;
