import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent {
  render() {
    return (
      <div>
        <span>Hello, {this.props.username}</span>
      </div>
    );
  }
}

App.propTypes = {
  username: PropTypes.string.isRequired
};

export default App;
