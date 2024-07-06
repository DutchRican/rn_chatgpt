import Animatedintro from "@/components/Animatedintro";
import BottomLoginSheet from "@/components/BottomLoginSheet";
import { View } from "react-native";

export default function Index() {
	return (
		<View style={{ flex: 1 }}>
			<Animatedintro />
			<BottomLoginSheet />
		</View>
	)
}