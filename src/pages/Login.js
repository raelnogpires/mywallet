import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div id="login">
        <label htmlFor="email-input">
          <input
            type="text"
            placeholder="Email"
            id="email-input"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="text"
            placeholder="Password"
            id="password-input"
            data-testid="password-input"
          />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
