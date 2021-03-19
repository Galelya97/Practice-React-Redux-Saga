import React from "react";
import Post from "../Post";
import { connect } from "react-redux";
import { syncPosts } from "../../redux/postFormation";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center">Постов пока нет</p>;
  }
  return syncPosts.map((post) => <Post key={post.id} post={post} />);
};

const mapStateToProps = (state) => {
  return { syncPosts: syncPosts(state) };
};

export default connect(mapStateToProps, null)(Posts);
