import {
  DELETE,
  SET_WALLET,
  EDIT_EXPENSE,
  SHOW_EDIT_FORM,
  HIDE_EDIT_FORM,
} from '../actions';

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
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses
        .map((ex) => (ex.id === action.payload.id ? action.payload : ex)),
    };
  case SHOW_EDIT_FORM:
    return {
      ...state,
      editForm: true,
    };
  case HIDE_EDIT_FORM:
    return {
      ...state,
      editForm: false,
    };
  default:
    return state;
  }
}

export default wallet;
