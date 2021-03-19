import React from "react";
import Post from "../Post";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPosts, formationFetchPosts } from "../../redux/postFormation";
import { loading } from "../../redux/appReducer";
import Loader from "../Loader";

const Posts = ({ loading }) => {
  const dispatch = useDispatch();
  const posts = useSelector(formationFetchPosts);

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Загрузить
      </button>
    );
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
};

export default connect(
  (state) => ({
    loading: loading(state),
  }),
  null
)(Posts);
