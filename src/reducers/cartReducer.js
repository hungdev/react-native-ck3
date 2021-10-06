import { getProductDetail } from '../services/Api'

const initialState = {
  products: [],
  productDetail: null
};

export const getDetailProduct = (id) => async (dispatch) => {
  console.tron.log('id', id)
  const response = await getProductDetail(id);
  // console.log('rs', response.data.data); // data tu api tra ve
  dispatch({ type: 'GET_DATA', data: response.data.data })
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    // cách 1
    // case "ADD_CART":
    //   console.log(action.data)
    //   const isExist = state.products?.find(e => e._id === action.data?._id) // neu khong co sp thi kq se la undefined
    //   // const productList = isExist
    //   //   ? state.products?.map(e => {
    //   //     if (e._id === action.data._id) {
    //   //       return { ...e, quantity: e.quantity + 1 }
    //   //     } else return e
    //   //   })
    //   //   : [...state.products, action.data] // sp chua co trong list, thi add moi vao

    //   const productList = isExist
    //     ? state.products?.map(e => e._id === action.data._id ? ({ ...e, quantity: e.quantity + 1 }) : e)
    //     : [...state.products, action.data] // sp chua co trong list, thi add moi vao

    //   return {
    //     products: productList
    //   };


    // cách 2
    case "ADD_CART":
      console.log(action.data)
      console.log('state.products', state.products)
      //state.products = [{id:1, name: 'tshirt',quantity: 1}, {id:2, name: 'dress', quantity: 1},]
      const productIndex = state.products?.findIndex(e => e._id === action.data?._id) // neu khong co sp thi kq se la undefined
      // neu index = -1 => ko tim dc sp, # 1 ( so khac -1) thi so day la index
      if (productIndex === -1) { // chua co san pham đó trong list
        return {
          products: [...state.products, action.data]
        };
      } else { // đã có sản phẩm đó trong list, thì cần tăng quantity
        state.products[productIndex].quantity += 1
        return {
          // https://immerjs.github.io/immer/
          products: [...state.products] // copy 1 lớp
        };
      }

    case 'CHANGE_QUANTITY':
      // action => { type: 'CHANGE_QUANTITY', data: item, changeQuantityType: type }
      const isReduce = action.changeQuantityType === 'reduce'
      // const productChangeQuantity = state.products?.map(e => {
      //   if (e._id === action.data._id) {
      //     return { ...e, quantity: isReduce ? (e.quantity - 1) : (e.quantity + 1) }
      //   } else return e
      // })
      const productChangeQuantity = state.products?.map(e => e._id === action.data._id ? ({ ...e, quantity: isReduce ? (e.quantity - 1) : (e.quantity + 1) }) : e)

      return {
        ...state,
        products: productChangeQuantity
      };

    case 'GET_DATA':
      return {
        ...state,
        productDetail: action.data
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        products: state.products?.filter(e => e?._id !== action.data?._id)
      }
    case 'REMOVE_ALL':
      return {
        ...state,
        products: []
      }

    default:
      return state;
  }
}
