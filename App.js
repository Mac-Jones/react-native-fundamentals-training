import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
	const { height, width } = useWindowDimensions();
	const orientation = useDeviceOrientation();

	console.log('useWindowDimensions', useWindowDimensions());
	console.log('useDeviceOrientation', orientation);
	console.log(Dimensions.get('screen'));
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					backgroundColor: 'dodgerblue',
					width: '100%',
					height: orientation === 'landscape' ? '100%' : '30%',
				}}
			>
				<Text>hhaa</Text>
			</View>
			<StatusBar style='auto' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
