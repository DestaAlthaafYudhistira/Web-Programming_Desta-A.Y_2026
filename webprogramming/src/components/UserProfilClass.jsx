import React, { Component } from 'react';

class UserProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: 'Desta Althaaf Yudhistira',
      isOnline: false
    };
  }

  toggleOnline = () => {
    this.setState({ isOnline: !this.state.isOnline });
  };

  render() {
    return (
      <div>
        <h3>User: {this.state.nama}</h3>
        <p>Status: {this.state.isOnline ? 'Online' : 'Offline'}</p>
        <button onClick={this.toggleOnline}>Ubah Status</button>
      </div>
    );
  }
}

export default UserProfileClass;
