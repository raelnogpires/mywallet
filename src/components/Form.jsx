import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { wallet } from '../actions';
import fetchExchanges from '../helpers/fetchAPI';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.addItens = this.addItens.bind(this);
  }

  componentDidMount() {
    this.getExchangeRates();
  }

  getExchangeRates = async () => {
    const data = await fetchExchanges();
    this.setState({ exchangeRates: data });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addItens() {
    const { setWallet } = this.props;
    this.setState((prev) => ({
      id: prev.id + 1,
    }));
    setWallet(this.state);
  }

  render() {
    const { exchangeRates } = this.state;

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
              { Object.keys(exchangeRates).map((exchange) => (
                <option
                  data-testid={ exchange }
                  value={ exchange }
                  key={ exchange }
                  name={ exchange }
                >
                  { exchange }
                </option>
              )) }
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
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
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
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
            <button
              type="button"
              onClick={ this.addItens }
            >
              Adicionar despesa
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
