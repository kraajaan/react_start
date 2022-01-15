import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types'; // eslint-disable-line

class Card extends React.Component {
  static propTypes = {
    // title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <section className={styles.component}>
        <h3>{this.props.title}</h3>
      </section>
    );
  }
}

export default Card;
