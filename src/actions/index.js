// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';

export const login = (email) => ({
  type: USER_LOGIN,
  data: {
    email,
  },
});

export const SET_WALLET = 'SET_WALLET';

export const wallet = (payload) => ({
  type: SET_WALLET,
  payload,
});

export const DELETE = 'DELETE';

// armazena o ID do item a ser removido da carteira.
export const deleteItem = (payload) => ({
  type: DELETE,
  payload,
});

export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';

export const showEditForm = () => ({
  type: SHOW_EDIT_FORM,
});

export const HIDE_EDIT_FORM = 'HIDE_EDIT_FORM';

export const hideEditForm = () => ({
  type: HIDE_EDIT_FORM,
});
