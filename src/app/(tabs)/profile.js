import { SafeAreaView, Text} from "react-native";

export default function Profile(){
    return(
        <SafeAreaView style={{flex:1,justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize: 44, fontWeight:"700"}}>
                Perfil   
            </Text>
        </SafeAreaView>
    )
}