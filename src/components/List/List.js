import React from 'react';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import styles from './List.scss';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    imageSrc: PropTypes.string,
  }

  static defaultProps = {
  children: <p>I can do all the things!!!</p>,
}

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgSource={this.props.imageSrc} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
        <Column title='Title 1' />
        <Column title='Title 2' />
        <Column title='Title 3' />
        </div>
      </section>
    )
  }
}

export default List;
