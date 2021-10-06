import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailApi } from '../reducers/productReducer'
import { getProductDetail } from '../services/Api'
import { getImage } from '../utils'
import { getDetailProduct } from '../reducers/cartReducer'

const sizes = ['S', "M", "L", 'XL', 'XXL']
export default function DetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  // const [detailProduct, setDetailProduct] = useState()
  const { detail } = route.params; // const detail = route.params.detail

  const detailProduct = useSelector((store) => store.cartReducer.productDetail);

  // cach 1
  // useEffect(() => {
  //   const callGetProductList = async () => {
  //     try {
  //       const response = await getProductDetail(detail?._id);
  //       // console.log('rs', response.data.data); // data tu api tra ve
  //       setDetailProduct(response.data.data)

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   callGetProductList()
  // }, [detail])

  // cach 2 -  dung voi redux thunk
  useEffect(() => {
    dispatch(getDetailProduct(detail?._id))
  }, [detail])


  const onAddCart = () => {
    dispatch({ type: 'ADD_CART', detail: detail })
  }

  return (
    <View>
      <TouchableOpacity>
        <Ionicons name="heart" size={30} color={'grey'}
          style={{ position: 'absolute', top: 20, right: 20, }}
        />
      </TouchableOpacity>
      <Image source={{ uri: getImage(detailProduct?.images?.[0]) }}
        style={{ width: '100%', height: 360, resizeMode: 'contain' }} />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{detailProduct?.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Text style={{
            marginRight: 5,
            fontWeight: 'bold'
          }}>{detailProduct?.price}</Text>
          <Text style={{ textDecorationLine: 'line-through', color: 'grey' }}>1000k</Text>
          <Text style={{ borderWidth: 1, padding: 5, marginLeft: 10, borderRadius: 5, backgroundColor: '#90ee90', borderColor: 'transparent' }}>
            50%
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          paddingHorizontal: 40,
          marginTop: 10
        }}>
          {/* {sizes.map((e, i) => {
            const isChecked = e === detail?.size?.[0]
            return (
              <TouchableOpacity key={i}
                style={{
                  borderRadius: 20, backgroundColor: isChecked ? 'grey' : 'white',
                  borderWidth: 1, padding: 2, height: 40, width: 40, justifyContent: 'center', alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: 10 }}>{e}</Text>
              </TouchableOpacity>
            )
          })} */}
        </View>
        <TouchableOpacity
          onPress={onAddCart}
          style={{
            backgroundColor: '#FF5254',
            marginTop: 15, width: '60%', borderWidth: 1,
            borderRadius: 20, paddingVertical: 12,
            borderColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>ADD TO BAG</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}
