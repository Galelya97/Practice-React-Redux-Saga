import { actions } from "./actions";

const initialState = {
  posts: [],
  fetchedPosts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case actions.FETCH_POSTS:
      return {
        ...state,
        fetchedPosts: action.payload,
      };

    default:
      return state;
  }
}
