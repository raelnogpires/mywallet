import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;

    return (
      <>
        <header>
          <span id="user-email" data-testid="email-field">{ userEmail }</span>
          <span id="funds" data-testid="total-field">0</span>
          <span id="account-currency" data-testid="header-currency-field">BRL</span>
        </header>
        <form id="expenses-inputs">
          <label htmlFor="value">
            Valor
            <input type="number" id="value" data-testid="value-input" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" data-testid="description-input" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" name="currency" data-testid="currency-input">
              opções
            </select>
          </label>
          <label htmlFor="method">
            Método de Pagamento
            <select id="method" name="method" data-testid="method-input">
              <option value="cash">Dinheiro</option>
              <option value="debit-card">Cartão de Débito</option>
              <option value="credit-card">Cartão de Crédito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag" data-testid="tag-input">
              <option value="food">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transportation">Transporte</option>
              <option value="health">Saúde</option>
            </select>
            <button type="button">Adicionar despesas</button>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
