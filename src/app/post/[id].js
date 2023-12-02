import { useGlobalSearchParams } from "expo-router";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import pac from "../../assets/imgs/pac.jpg";
import circulo from "../../assets/imgs/circulo.jpg";
import instagram from "../../assets/imgs/instagram.svg";

const { width, height } = Dimensions.get("screen");

export default function Post() {
  const { id } = useGlobalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={pac}
        resizeMode="stretch"
        style={styles.bgTitulo}
      >
        <View style={styles.child}>
          <Text numberOfLines={2} style={styles.titulo}>
            50 anos de hip-hop
          </Text>
          <Text style={styles.subTitulo}>
            a origem do estilo mais influente da atualidade
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.artigo}>
        <View style={styles.infosSection}>
          <View style={styles.infoAdicionais}>
            <Text style={styles.data}>04 Outubro 2023</Text>
            <Image source={circulo} style={styles.circulo} />
            <Text style={styles.autor}>Caique Nerivan</Text>
          </View>
          <View style={styles.infoAdicionais}>
            <Image source={instagram} style={styles.instagram} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    width: width,
    backgroundColor: "#F6F6ED",
  },
  bgTitulo: {
    margin: 0,
    width: width,
    height: height * 0.3,
  },
  child: {
    backgroundColor: "#00000080",
    height: "100%",
    paddingHorizontal: 30,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 32,
    fontFamily: "Roboto_700Bold",
    color: "#F3F2F2",
    textTransform: "uppercase",
    width: "60%",
  },
  subTitulo: {
    fontSize: 20,
    fontFamily: "Roboto_300Light",
    color: "#F3F2F2",
    textTransform: "uppercase",
    width: "80%",
  },
  artigo: {
    paddingHorizontal: 20,
  },
  infoAdicionais: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
  },
  infosSection: {
    minHeight: 40,
    paddingHorizontal: 10,
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5,
  },
  data: {
    color: "#636363",
    fontSize: 12,
    fontFamily: "Roboto_700Bold",
    paddingRight: 5,
  },
  autor: {
    color: "#636363",
    fontSize: 12,
    fontFamily: "Roboto_700Bold",
    paddingLeft: 5,
  },
  circulo: {
    height: 5,
    width: 5,
  },
  instagram:{
    
  },
});
