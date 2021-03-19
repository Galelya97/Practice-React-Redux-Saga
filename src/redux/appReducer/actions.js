export const actions = {
  SHOW_LOADER: "APP/SHOW_LOADER",
  HIDE_LOADER: "APP/HIDE_LOADER",
  SHOW_ERROR: "APP/SHOW_ERROR",
  HIDE_ERROR: "APP/HIDE_ERROR",
};

export const showLoading = () => ({
  type: actions.SHOW_LOADER,
});

export const hideLoading = () => ({
  type: actions.HIDE_LOADER,
});

export const showError = (text) => ({
  type: actions.SHOW_ERROR,
  payload: text,
});
export const hideError = () => ({
  type: actions.HIDE_ERROR,
});
