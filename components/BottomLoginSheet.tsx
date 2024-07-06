import { Colors } from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BottomLoginSheet = () => {
	const { bottom } = useSafeAreaInsets();
	return (
		<View style={[styles.container, { paddingBottom: bottom }]}>
			<TouchableOpacity style={[defaultStyles.btn, styles.btnLight]}>
				<Ionicons name="logo-apple" size={14} style={styles.btnIcon} />
				<Text style={styles.btnLightText}>Continue with Apple</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[defaultStyles.btn, styles.btnDark]}>
				<Ionicons name="logo-google" size={14} style={styles.btnIcon} color={'#fff'} />
				<Text style={styles.btnDarkText}>Continue with Apple</Text>
			</TouchableOpacity>
			<Link href={{ pathname: "/login", params: { type: 'register' } }} asChild style={[defaultStyles.btn, styles.btnDark]}>
				<TouchableOpacity >
					<Ionicons name="mail" size={20} style={styles.btnIcon} color={'#fff'} />
					<Text style={styles.btnDarkText}>Sign up with email</Text>
				</TouchableOpacity>
			</Link>
			<Link href={{ pathname: "/login", params: { type: 'login' } }} asChild style={[defaultStyles.btn, styles.btnDark]}>
				<TouchableOpacity >
					<Ionicons size={20} style={styles.btnIcon} color={'#fff'} />
					<Text style={styles.btnDarkText}>Log in</Text>
				</TouchableOpacity>
			</Link>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		backgroundColor: '#000',
		padding: 26,
		gap: 14,
		borderRadius: 20,
	},
	btnLight: {
		backgroundColor: '#fff',
	},
	btnDark: {
		backgroundColor: Colors.grey,
	},
	btnIcon: {
		paddingRight: 7,
	},
	btnLightText: {
		fontSize: 20,
	},
	btnDarkText: {
		color: '#fff',
		fontSize: 20,
	},
	btnOutline: {
		borderWidth: 3,
		borderColor: Colors.grey,
	}
});

export default BottomLoginSheet;
