import { images } from "@/constants";
import useAuthStore from "@/store/auth.store";
import { Redirect, Slot } from "expo-router";

//* -------------------------------------------------------------------------- */
//*                                RN Components                               */
//* -------------------------------------------------------------------------- */
import {
	Dimensions,
	Image,
	ImageBackground, KeyboardAvoidingView,
	Platform,
	ScrollView,
	View
} from 'react-native';


//* -------------------------------------------------------------------------- */
//*                                 AuthLayout                                 */
//* -------------------------------------------------------------------------- */
export default function AuthLayout() {
	
	const { isAuthenticated } = useAuthStore();

	if(isAuthenticated) return <Redirect href="/" />

	/* -------------------------------------------------------------------------- */
	/*                                    View                                    */
	/* -------------------------------------------------------------------------- */
	return (
		<KeyboardAvoidingView 
			behavior={
				Platform.OS === 'ios' 
				? 'padding' 
				: 'height'
			}
		>
			<ScrollView 
				className="bg-white h-full" 
				keyboardShouldPersistTaps="handled"
			>
				<View 
					className="w-full relative" 
					style={{ height: Dimensions.get('screen').height / 2.25}}
				>
					
					<ImageBackground 
						source={images.loginGraphic} 
						resizeMode="stretch"
						className="size-full rounded-b-lg"  
					/>
					
					<Image 
						source={images.logo} 
						className="self-center size-48 absolute -bottom-16 z-10" 
					/>

				</View>
				<Slot />
			</ScrollView>
		</KeyboardAvoidingView>
	)
}
