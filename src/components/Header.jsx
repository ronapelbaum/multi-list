import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Header.module.scss';

const Header = ({ title }) => (
  <header className={classnames(styles.header, styles.flexCenter)}>
    { title }
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
