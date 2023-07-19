// place holder: https://jsonplaceholder.typicode.com/todos

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const API_URL = " https://jsonplaceholder.typicode.com/todos";

// state
// action
// reducer
// store

// TODO: state user for practice

// const define
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";

// state
const initialTodoState = {
  todos: [],
  isLoading: false,
  error: null,
};
// action

const getTodoRequiest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getTodoSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};
const getTodoFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

// reducer

const todosReducers = (state = initialTodoState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// async acton creted
const fatchData = () => {
  return (dispatch) => {
    dispatch(getTodoRequiest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const title = todos.map((todo) => todo.title);
        console.log(title);
      })
      .catch((error) => {
        const errormessage = error.message;
        dispatch(getTodoFailed(errormessage));
      });
  };
};

// store
const store = createStore(todosReducers, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fatchData());
