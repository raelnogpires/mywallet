import React from 'react';

import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

export default class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Table />
      </>
    );
  }
}
