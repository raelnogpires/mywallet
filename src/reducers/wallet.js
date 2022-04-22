import { DELETE, SET_WALLET } from '../actions';

const INITIAL_STATE = { expenses: [] };

const removeItem = (state, id) => state.expenses.filter((e) => e.id !== id);

function wallet(state = INITIAL_STATE, action) {
  const filtered = removeItem(state, action.payload);

  switch (action.type) {
  case SET_WALLET:
    return {
      // retorna o estado inteiro primeiro,
      ...state,
      // depois retorna as expenses já adicionadas e a nova (payload).
      expenses: [...state.expenses, action.payload],
    };
  case DELETE:
    return {
      ...state,
      expenses: filtered,
    };
  default:
    return state;
  }
}

export default wallet;
