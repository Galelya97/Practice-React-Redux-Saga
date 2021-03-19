import { hideLoading, showLoading } from "../appReducer";

export const actions = {
  CREATE_POST: "POST_FORMATION/CREATE_POST",
  FETCH_POSTS: "POST_FORMATION/FETCH_POSTS",
};

export const createPost = (post) => ({
  type: actions.CREATE_POST,
  payload: post,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const json = await response.json();

    setTimeout(() => {
      dispatch({ type: actions.FETCH_POSTS, payload: json });
      dispatch(hideLoading());
    }, 250);
  };
};
