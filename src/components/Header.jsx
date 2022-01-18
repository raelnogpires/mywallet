import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.state = { total: 0 };
  }

  componentDidMount() {
    this.sumTotalExpenses();
  }

  componentDidUpdate(prevProps) {
    const { walletExpenses } = this.props;

    if (walletExpenses !== prevProps.walletExpenses) {
      this.sumTotalExpenses();
    }
  }

  sumTotalExpenses = () => {
    const { walletExpenses } = this.props;

    const total = walletExpenses
      // Multiplica o valor da despesa pelo cotação da moeda selecionada.
      // EX: 50 * ((e.exchangeRates[EUR].ask))
      // EX: 50 * 6.3199 (cotação do euro)
      // EX: 316.00 BRL
      .map((e) => (Number(e.value) * Number((e.exchangeRates[e.currency]).ask)))
      .reduce((acc, curr) => (acc + curr), 0);

    this.setState({ total });
  };

  render() {
    const { userEmail } = this.props;
    const { total } = this.state;

    return (
      <header>
        <span id="user-email" data-testid="email-field">{ userEmail }</span>
        <span data-testid="total-field" id="funds">{ Number(total).toFixed(2) }</span>
        <span id="account-currency" data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  walletExpenses: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
