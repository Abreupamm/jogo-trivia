import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

import '../../App.css';

class HeaderGame extends React.Component {
  state = {
    placar: 0,
  }

  render() {
    const { name, email } = this.props;
    const { placar } = this.state;
    const emailMd = md5(email);
    return (
      <div className="header-game">
        <div className="header-profile-picture">
          <img
            src={ `https://www.gravatar.com/avatar/${emailMd}` }
            alt=""
            data-testid="header-profile-picture"
            className="img-profile"
          />
          <p
            className="profile-name"
            data-testid="header-player-name"
          >
            {`Jogador: ${name}`}

          </p>
        </div>
        <p data-testid="header-score">{`Placar: ${placar}`}</p>
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
