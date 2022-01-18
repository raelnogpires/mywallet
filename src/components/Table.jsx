import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Table extends Component {
  render() {
    const { expensesData } = this.props;

    return (
      <div id="table-div">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expensesData.map((e) => (
              <tr key={ e.id }>
                <td role="cell">{ e.description }</td>
                <td role="cell">{ e.tag }</td>
                <td role="cell">{ e.method }</td>
                <td role="cell">{ e.value }</td>
                <td role="cell">
                  { e.exchangeRates[e.currency].name }
                </td>
                <td role="cell">
                  { Number(e.exchangeRates[e.currency].ask).toFixed(2) }
                </td>
                <td role="cell">
                  {
                    Number(Number(e.value)
                 * Number(e.exchangeRates[e.currency].ask)).toFixed(2)
                  }
                </td>
                <td role="cell">Real</td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expensesData: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  expensesData: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
