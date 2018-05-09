/**
 * InitialState
 */
const initialState = {
  name: 'NoName',
  light: false,
};

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_LIGHT':
      return {
        ...state,
        light: !state.light,
      };

    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name,
      };

    default:
      return state;
  }
};


/**
 * actionCreators
 */
export const toggleLight = () => ({
  type: 'TOGGLE_LIGHT',
});

export const changeName = name => ({
  type: 'CHANGE_NAME',
  name,
});

/**
 * Export
 */
export default reducer;
