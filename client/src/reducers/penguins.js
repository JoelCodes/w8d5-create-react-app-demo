import { getPenguins } from '../penguin-svc';

const initialState = { loading: false, penguins: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PENGUINS_PENDING': return { loading: true };
    case 'FETCH_PENGUINS_SUCCESS': return { loading: false, penguins: action.penguins };
    default: return state;
  }
};

const getPenguinsMW = store => next => (action) => {
  if (action.type === 'FETCH_PENGUINS') {
    store.dispatch({ type: 'FETCH_PENGUINS_PENDING' });
    getPenguins()
      .then((penguins) => {
        store.dispatch({ type: 'FETCH_PENGUINS_SUCCESS', penguins });
      }, (error) => {
        store.dispatch({ type: 'FETCH_PENGUINS_ERROR', error });
      });
  } else {
    next(action);
  }
};

const fetchPenguinsAction = { type: 'FETCH_PENGUINS' };

export { reducer, getPenguinsMW, fetchPenguinsAction };
