import jsonPlaceHolderApi from "../API/jsonPlaceHolderApi";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolderApi.get("/post");

  dispatch({
    type: "FETCH_POSTS",
    payload: response
  });
};
