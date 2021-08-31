import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import { getImage } from '../utils'
// import { getImage } from '../utils'
// import { getProduct } from '../reducers/productReducer'
// import { useDispatch, useSelector } from "react-redux";

import { getProductList } from '../services/Api'


export default function App({ route, navigation }) {
	const [product, setProduct] = useState([])
	// const dispatch = useDispatch();
	// const product = useSelector((store) => store.productReducer.products);

	useEffect(() => {
		// dispatch(getProduct({ page: 1, limit: 10 }));
		// getProductList()
		const callGetProductList = async () => {
			try {
				const response = await getProductList();
				console.log('rs', response.data.data); // data tu api tra ve
				setProduct(response.data.data)

			} catch (error) {
				console.error(error);
			}
		}

		callGetProductList()
	}, [])


	const onMoveToDetail = (data) => () => {
		navigation.navigate('Detail', { detail: data });
	}

	const renderItem = ({ item }) => (
		<TouchableOpacity style={{ width: '45%', }} onPress={onMoveToDetail(item)}>
			<Image
				style={styles.imgStyle}
				// source={{ uri: getImage(item.images[0]) || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' }}
				source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' }}
			/>
			<View style={styles.rowPrice}>
				<Text>{item.price}</Text>
				<Ionicons name="heart" size={30} color={item.heart ? 'red' : 'grey'} />
			</View>
			<Text>{item.name}</Text>
		</TouchableOpacity>
	);
	return (
		<View>
			<View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'grey' }}>
				<TouchableOpacity style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text>SORT</Text>
					<Ionicons name="chevron-down-outline" size={30} color="black" />
				</TouchableOpacity>
				<TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ textAlign: 'center', }}>REFINE</Text>
				</TouchableOpacity>
			</View>
			<Text style={{ textAlign: 'center', marginTop: 15, marginBottom: 20 }}>405 styles</Text>
			<FlatList
				data={product}
				numColumns={2}
				renderItem={renderItem}
				keyExtractor={item => item._id?.toString()}
				columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: 10, flex: 1 }}
				style={{ marginBottom: 100 }}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	rowPrice: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10
	},
	imgStyle: {
		height: 300,
		width: 'auto'
	}
});