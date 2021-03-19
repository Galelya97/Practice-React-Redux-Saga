import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../redux/postFormation";
import { getError, hideError, showError } from "../../redux/appReducer";
import Error from "../alertError";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      return this.props.showError("Название поста не может быть пустым");
    }

    const newPost = { title, id: Date.now().toString() };

    this.props.createPost(newPost);

    this.setState({ title: "" });
  };

  changeInputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.textError && <Error text={this.props.textError} />}

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Заголовок поста
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}

export default connect(
  (state) => ({
    textError: getError(state),
  }),
  (dispatch) => ({
    createPost: (post) => {
      dispatch(createPost(post));
    },
    showError: (text) => {
      dispatch(showError(text));
    },
    hideError: () => {
      dispatch(hideError());
    },
  })
)(PostForm);
