const initialState = {
  products: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CART":
      console.log(action.data)
      const isExist = state.products?.find(e => e._id === action.data?._id) // neu khong co sp thi kq se la undefined
      const productList = isExist
        ? state.products?.map(e => {
          if (e._id === action.data._id) {
            return { ...e, quantity: e.quantity + 1 }
          } else return e
        })
        : [...state.products, action.data] // sp chua co trong list, thi add moi vao

      return {
        products: productList
      };

    case 'REMOVE_ITEM':
      return {
        products: state.products?.filter(e => e?._id !== action.data?._id)
      }

    default:
      return state;
  }
}
