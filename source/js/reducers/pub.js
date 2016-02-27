import { REQUEST_PUB } from '../constants/actions';

const initialState = {
  isFetching: false,
  status: null,
  errorMessage: null,
  items: []
};

export default function pub(state = initialState, action) {

  switch (action.type) {

    case REQUEST_PUB:
      return Object.assign({}, state, {
        isFetching: true,
        status: null
      });

    default:
      return state;

  }

}
