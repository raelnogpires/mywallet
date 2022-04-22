import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense, hideEditForm } from '../actions/index';

export class EditForm extends Component {
  constructor(props) {
    super(props);

    const { data } = props;

    this.state = {
      data,
      exchangeRates: {},
    };
  }

  componentDidMount() {
    this.getExchangeRates();
  }

  getExchangeRates = async () => {
    const data = await fetchExchanges();
    this.setState({ exchangeRates: data });
  }

  changeHandler = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { data, edit, hide } = this.props;
    const { exchangeRates } = this.state;

    return (
      <div id="edit-div">
        <div className="expenses-inputs">
          <label htmlFor="value">
            Valor
            <input
              type="number"
              id="value"
              defaultValue={ data.value }
              name="value"
              data-testid="value-input"
              onChange={ this.changeHandler }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              defaultValue={ data.description }
              name="description"
              data-testid="description-input"
              onChange={ this.changeHandler }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              name="currency"
              data-testid="currency-input"
              defaultValue={ data.currency }
              onChange={ this.changeHandler }
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
              defaultValue={ data.method }
              onChange={ this.changeHandler }
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
              defaultValue={ data.tag }
              onChange={ this.changeHandler }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ () => {
              edit(this.state);
              hide();
            } }
          >
            Editar despesa
          </button>
        </div>
      </div>
    );
  }
}

EditForm.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
  edit: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  edit: (payload) => dispatch(editExpense(payload)),
  hide: () => dispatch(hideEditForm()),
});

export default connect(null, mapDispatchToProps)(EditForm);
