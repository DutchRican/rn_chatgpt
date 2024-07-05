import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";
import { ReText } from "react-native-redash";

const content = [
	{
		title: "Let's create.",
		bg: Colors.lime,
		fontColor: Colors.pink,
	},
	{
		title: "Let's brainstorm.",
		bg: Colors.brown,
		fontColor: Colors.sky,
	},
	{
		title: "Let's discover.",
		bg: Colors.orange,
		fontColor: Colors.blue,
	},
	{
		title: "Let's go.",
		bg: Colors.teal,
		fontColor: Colors.yellow,
	},
	{
		title: 'ChatGPT.',
		bg: Colors.green,
		fontColor: Colors.pink,
	},
];

const Animatedintro = () => {
	const currentIndex = useSharedValue(0);
	const text = useDerivedValue(() => {
		const index = currentIndex.value;
		return content[index].title;
	}, [currentIndex]);
	return (
		<View style={styles.wrapper}>
			<ReText text={text} style={styles.title} />
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	mask: {
		zIndex: 1,
		position: 'absolute',
		left: '0%',
		height: 44,
	},
	ball: {
		width: 40,
		zIndex: 10,
		height: 40,
		backgroundColor: '#000',
		borderRadius: 20,
		position: 'absolute',
		left: '0%',
	},
	titleText: {
		flexDirection: 'row',
	},
	title: {
		fontSize: 36,
		fontWeight: '600',
		left: '0%',
		position: 'absolute',
	},
	content: {
		marginTop: 300,
	},
})

export default Animatedintro;