import React from 'react';
import { connect } from 'react-redux';

class HeaderGame extends React.Component {
  render() {
    return (
      <div>
        <span data-testid="header-player-name">{}</span>
        <span>Placar:</span>
        <span data-testid="header-score">{0}</span>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  name: state.player.name,
});
export default connect(mapStateToProps)(HeaderGame);
