import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import StickyHeaderFlatlist from 'react-native-sticky-header-flatlist';
import { useDispatch, useSelector } from "react-redux";
import { getMenu, getCategory } from '../services/Api'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Shop() {
	const dispatch = useDispatch();
	const [order, setOrder] = useState([])
	const [categoryList, setCategoryList] = useState();
	const [cate, setCate] = useState(); // category Ids
	const [note, setNote] = useState(null);
	const [isEnabled, setIsEnabled] = useState(false);
	const [select, setSelect] = useState(false);
	const [productSelected, setProductSelected] = useState([])
	const data = useSelector((store) => store.cartReducer.cart);


	useEffect(() => {
		const getApiOrder = async () => {
			const result = await getMenu()
			setOrder(result.data.data)
		};
		const getCategoryIds = async () => {
			const result = await getCategory();
			setCate(result.data.map(e => e.id));
			setCategoryList(result.data)
		};
		getCategoryIds();
		getApiOrder()
	}, [])
	const groupData = order?.length && cate?.map(e => ({
		category: e,
		productList: order?.filter(el => el?.categ_id?.includes(e)),
	})) || [];
	console.log(groupData);


	const renderItem = ({ item }) => {
		return (
			<View>
				<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '95%', height: 150, alignSelf: 'center', backgroundColor: 'white', marginBottom: 10, borderBottomColor: 'silver', borderBottomWidth: 0.2, borderRadius: 10 }}
					onPress={() => { }}>
					<View style={{ justifyContent: 'space-evenly', width: '100%', height: '100%', width: 250 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 15, width: 220, height: 27 }}>{item.product_name}</Text>
						<Text style={{ fontSize: 16, marginLeft: 15, color: 'grey', width: 215, height: 40 }}>{item.description}</Text>
						<Text style={{ fontSize: 18, marginLeft: 15, color: 'grey' }}>{item.price}đ</Text>
					</View>
					<Image
						source={{ uri: item.image }}
						style={{
							width: 100,
							height: 100,
							borderRadius: 10
						}}
					/>
				</TouchableOpacity>
			</View>
		)
	}

	const renderHeader = ({ item }) => {
		const category = categoryList?.find(e => e.id === item?.category)
		return (
			<View style={styles.header2}>
				<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '65%', height: 40, backgroundColor: '#d3d3d3', borderRadius: 10, justifyContent: 'flex-end' }}>
					<Text>{category?.name}</Text><AntDesign name={'down'} size={15} color={'#5e5e5e'} style={{ marginRight: 10 }} />
				</TouchableOpacity>
				{/* <TouchableOpacity style={styles.btn}>
					<AntDesign name={'search1'} size={18} color={'grey'} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Favorite')}>
					<AntDesign name={'heart'} size={18} color={'grey'} />
				</TouchableOpacity> */}
			</View>
		)
	}


	return (
		<View>
			{groupData?.length ?
				<StickyHeaderFlatlist
					keyExtractor={(_, i) => i + ""}
					childrenKey={"productList"}
					renderHeader={renderHeader}
					renderItem={renderItem}
					data={groupData}
				/> : null}
		</View>
	)
}


const styles = StyleSheet.create({
	Header1: {
		height: 60,
		backgroundColor: 'white',
		alignItems: 'center',
		flexDirection: 'row',
	},
	header2: {
		height: 70,
		borderBottomWidth: 1,
		borderBottomColor: 'silver',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	btn: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#d3d3d3',
		borderRadius: 8
	},
})