import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div id="login">
        <label htmlFor="email-input">
          <input type="text" placeholder="Email" id="email-input" />
        </label>
        <label htmlFor="password-input">
          <input type="text" placeholder="Password" id="password-input" />
        </label>
      </div>
    );
  }
}

export default Login;
