import { Link } from "expo-router";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import { Button } from "../components/Button";


import {useFonts, OpenSans_400Regular, OpenSans_600SemiBold} from'@expo-google-fonts/open-sans';
import { Roboto_400Regular, Roboto_700Bold, Roboto_300Light } from "@expo-google-fonts/roboto";

import rapper from "../assets/imgs/rapper.jpg";

export default function App() {
  const[fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={rapper} style={styles.imagem}>
        <Text style={styles.titulo}>
          BLOG DO {"\n"}
          <Text style={styles.negrito}>NERIVAN</Text>
        </Text>

        <Link href="/(tabs)/home"  asChild>
          <Button title="Entre" corTexto="#5B4200" corFundo="#F6F6ED99" />
        </Link>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  imagem: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  titulo: {
    color: "#F3F2F2",
    fontSize: 32,
    textTransform: "uppercase",
    fontFamily: 'OpenSans_400Regular',
    marginTop: 300,
  },
  negrito: {
    fontSize: 38,
    fontFamily: 'OpenSans_600SemiBold',
  },
  botao:{
    margin: 0,
    width: '100%',
    padding: 0,
  }
});
