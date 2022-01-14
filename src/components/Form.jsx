import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { wallet } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: 'cash',
      tag: 'food',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addItens = this.addItens.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addItens() {
    const { setWallet } = this.props;
    this.setState((previous) => ({
      id: previous.id + 1,
    }));
    setWallet(this.state);
  }

  render() {
    return (
      <div id="form-div">
        <form id="expenses-inputs">
          <label htmlFor="value">
            Valor
            <input
              type="number"
              id="value"
              name="value"
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              name="description"
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              name="currency"
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              opções
            </select>
          </label>
          <label htmlFor="method">
            Método de Pagamento
            <select
              id="method"
              name="method"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="cash">Dinheiro</option>
              <option value="debit-card">Cartão de Débito</option>
              <option value="credit-card">Cartão de Crédito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select
              id="tag"
              name="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option value="food">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transportation">Transporte</option>
              <option value="health">Saúde</option>
            </select>
            <button
              type="button"
              onClick={ this.addItens }
            >
              Adicionar despesas
            </button>
          </label>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  setWallet: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setWallet: (payload) => dispatch(wallet(payload)),
});

export default connect(null, mapDispatchToProps)(Form);
