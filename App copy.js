import React, { useState, } from 'react'
import { View, Text } from 'react-native'

export default function App() {
  const [state, setstate] = useState(initialState)
  const [name, setName] = useState(initialState)

  useEffect(() => {
    const getProduct = async () => {
      const products = await getProductApi()
      setstate(products)
    }

    getProduct()

    return () => { // khi component unmount
      // cleanup
    }
  }, [])

  // chay sau khi render
  // 1. khong co [] => moi lan render lai thi ham useEffect se goi lai
  // 2. chi chay 1 lan duy nhat sau render
  // 3. [variable, abc], khi cac bien trong [] thay doi thi no se chay lai
  // [] depend on...

  return (
    <View>
      <Text>hello</Text>
    </View>
  )
}
