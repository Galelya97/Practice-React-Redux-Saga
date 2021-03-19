import { actions } from "./actions";

const initialState = {
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case actions.HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };

    case actions.SHOW_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actions.HIDE_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
