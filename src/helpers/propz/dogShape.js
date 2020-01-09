import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string,
  decription: PropTypes.string.isRequired,
});

export default { dogShape };
