import { START_LOADING, END_LOADING } from '../actions/types';

const initialState = {
  loading: false,
	error: '',
	user_token: '',
	email: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };

    case END_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};
