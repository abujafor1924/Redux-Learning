const { createStore } = require("redux");

// defind constent
const INCREMENT = "INCRIMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECRIMENT";
const RESET = "RESET";

// stat
const initialCountStat = {
  count: 0,
};
const initialUserStat = {
  user: [{ name: "Robiul", age: 43, place: "Bangladesh" }],
};

// action -object-type,payload-incriment-dicriment

const incrimentCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrimentCounter = () => {
  return {
    type: DECREMENT,
    // payload: { name: "ayad" },
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};
const incrimentCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

// reducers for counter
const countReducer = (state = initialCountStat, action) => {
  switch (action.type) {
    // incriment
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    // Decriment
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    // RESET
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      state;
  }
};

// redux store-getstate()-dispatch()-subscribe()

const store = createStore(countReducer);
store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch(incrimentCounter());
// store.dispatch(incrimentCounter());
// store.dispatch(incrimentCounter());
// store.dispatch(decrimentCounter());
// store.dispatch(resetCounter());
store.dispatch(incrimentCounterByValue(5));
