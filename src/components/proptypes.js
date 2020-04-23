import PropTypes from 'prop-types';

export const List = PropTypes.shape({
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
});
