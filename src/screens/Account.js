import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Modal from "react-native-modal";
import { login } from '../services/Api'
import Ionicons from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window')

export default function Account({ navigation }) {
	const [phone, setPhone] = useState('978903019')
	const [code, setCode] = useState()
	const [isVisible, setIsVisible] = useState(false)

	console.log('height', height)

	const onChangePhone = (val) => setPhone(val)
	const onChangeCode = (val) => setCode(val)

	const onCloseModal = () => setIsVisible(false)

	const onVerifyPhone = async () => {
		try {
			const response = await login({ phone: phone });
			console.log('rs', response.data.data); // data tu api tra ve
			setIsVisible(true) // // hien thi modal nhap code len
		} catch (error) {
			console.error(error.response);
		}
	}

	const onVerifyCode = async () => {
		try {
			const response = await login({ phone: phone, otp: code });
			console.log('rs', response.data); // data tu api tra ve
			setIsVisible(false) // an modal nhap code di
			// save lai token
			navigation.navigate('Discover')
		} catch (error) {
			console.error(error.response);
		}
	}

	return (
		<View style={{ padding: 20, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
			<Text>Login</Text>
			<TextInput
				style={{ height: 45, borderWidth: 1, borderRadius: 5, marginTop: 20, width: '100%' }}
				onChangeText={onChangePhone}
				value={phone}
			/>
			<TouchableOpacity
				onPress={onVerifyPhone}
				style={{ marginTop: 20, borderWidth: 1, borderRadius: 5, padding: 15, width: '100%', backgroundColor: 'grey' }}>
				<Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Đăng nhập</Text>
			</TouchableOpacity>

			<Modal
				testID={'modal'}
				isVisible={isVisible}
				onSwipeComplete={onCloseModal}
				swipeDirection={['up', 'left', 'right', 'down']}
				style={{ justifyContent: 'flex-end', margin: 0, }}>
				<View style={styles.content}>
					<TouchableOpacity style={styles.closeBtn} onPress={onCloseModal}>
						<Ionicons name="close" size={30} color="black" />
					</TouchableOpacity>
					<Text>Nhập mã..... sdt {phone}</Text>
					<TextInput
						style={{ height: 45, borderWidth: 1, borderRadius: 5, marginTop: 20, width: '100%' }}
						onChangeText={onChangeCode}
						value={code}
					/>
					<TouchableOpacity
						onPress={onVerifyCode}
						style={{ marginTop: 20, borderWidth: 1, borderRadius: 5, padding: 15, width: '100%', backgroundColor: 'grey' }}>
						<Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Send Code</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: 'white',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
		height: height - 50
	},
	contentTitle: {
		fontSize: 20,
		marginBottom: 12,
	},
	closeBtn: {
		position: 'absolute',
		top: 10,
		right: 10
	}
});