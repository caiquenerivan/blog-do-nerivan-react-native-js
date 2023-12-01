import { useGlobalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text} from "react-native";


export default function Post(){
    const { id } = useGlobalSearchParams();

    return (
        <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 44, fontWeight: "700"}}>
                Post: {id}
            </Text>
        </SafeAreaView>
    )
}