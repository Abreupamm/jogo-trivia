import React from 'react';
import PropTypes from 'prop-types';

class ButtonNext extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        data-testid="btn-next"
        className="btn-next"
        type="button"
        onClick={ onClick }
      >
        Next
      </button>
    );
  }
}

ButtonNext.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonNext;
