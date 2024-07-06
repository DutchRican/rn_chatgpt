import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
	const { type } = useLocalSearchParams<{ type: string }>();
	console.log('Page type:', type);
	return (
		<View style={styles.container}>
			<Text>Login</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {}
});

export default Login;
