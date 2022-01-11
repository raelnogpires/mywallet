import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      btnDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
  }

  validation() {
    const { email, password } = this.state;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const MIN_PASSWORD_LENGTH = 6;

    if (password !== undefined) {
      if (password.length >= MIN_PASSWORD_LENGTH && regex.test(email)) {
        this.setState({ btnDisabled: false });
      } else {
        this.setState({ btnDisabled: true });
      }
    }
  }

  handleChange({ target }) {
    const { id, value } = target;
    // https://pt-br.reactjs.org/docs/react-component.html#setstate
    // callback as second parameter in setState method
    this.setState({ [id]: value }, () => this.validation());
  }

  render() {
    const { btnDisabled } = this.state;

    return (
      <div id="login">
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Email"
            id="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            placeholder="Password"
            id="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ btnDisabled }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
