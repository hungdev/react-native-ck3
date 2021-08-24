import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Discover({ navigation }) {
	return (
		<View>
			<Text>Discover</Text>
			<TouchableOpacity onPress={() => navigation.navigate('ProductListScreen')}>
				<Text>Move to product list screen</Text>
				<Icon name="rocket" size={30} color="#900" />
			</TouchableOpacity>
		</View>
	)
}
