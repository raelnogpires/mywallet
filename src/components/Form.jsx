import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div id="form-div">
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
      </div>
    );
  }
}
