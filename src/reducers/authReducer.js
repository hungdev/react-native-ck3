const initialState = {
  token: ''
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SEND_FROM_GIRL_FR":
      return {
        items: [...state.items, action.data]
      };
    default:
      return state;
  }
}
