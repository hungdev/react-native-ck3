import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ProductList({ navigation }) {
  return (
    <View>
      <Text>ProductList</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen')}>
        <Text>Move to product detail screen</Text>
      </TouchableOpacity>
    </View>
  )
}
