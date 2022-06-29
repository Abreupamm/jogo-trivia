import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js';

class HeaderGame extends React.Component {
  gravatarEmail = () => {
    const { email } = this.props;
    const emailMd = md5(email).toString();
    return emailMd;
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <img
          src={ `https://www.gravatar.com/avatar/${this.gravatarEmail}` }
          alt=""
          data-testid="header-profile-picture"
        />
        <span data-testid="header-player-name">{name}</span>
        <span>Placar:</span>
        <span data-testid="header-score">{0}</span>
      </div>
    );
  }
}

HeaderGame.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.gravatarEmail,
});

export default connect(mapStateToProps)(HeaderGame);
