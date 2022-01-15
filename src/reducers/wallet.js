// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET } from '../actions';

const INITIAL_STATE = {
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_WALLET:
    return {
      // retorna o estado inteiro primeiro,
      ...state,
      // depois retorna as expenses já adicionadas e a nova (payload).
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
