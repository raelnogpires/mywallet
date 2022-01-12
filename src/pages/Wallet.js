import React from 'react';
import store from '../store';

class Wallet extends React.Component {
  render() {
    const userEmail = store.getState().user.email;

    return (
      <header>
        <span id="user-email" data-testid="email-field">{ userEmail }</span>
        <span id="funds" data-testid="total-field">0</span>
        <span id="account-currency" data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

export default Wallet;
