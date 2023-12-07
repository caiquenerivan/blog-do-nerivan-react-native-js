import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import { Button } from "../../components/Button";

import caique from "../../assets/imgs/caique.jpg";

const { width, heigth } = Dimensions.get("screen");

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.titulo}>Caique Nerivan</Text>
      </View>
      <Image source={caique} style={styles.fotoPerfil} />
      <View style={styles.infoSection}>
        <View style={styles.info}>
          <MaterialIcons name="person-outline" style={styles.icone} />
          <Text  adjustsFontSizeToFit numberOfLines={1} style={styles.infoTexto}>Caique Nerivan</Text>
        </View>
        <View style={styles.info}>
          <MaterialIcons name="alternate-email" style={styles.icone} />
          <Text adjustsFontSizeToFit numberOfLines={1}  style={styles.infoTexto}>caiquenerivan</Text>
        </View>
        <View style={styles.info}>
          <MaterialCommunityIcons name="email-outline" style={styles.icone} />
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.infoTexto}>caiquenerivansantos@gmail.com</Text>
        </View>
        <View style={styles.info}>
          <FontAwesome name="instagram" style={styles.icone} />
          <Text  adjustsFontSizeToFit numberOfLines={1} style={styles.infoTexto}>@caiquenerivan</Text>
        </View>
      </View>
      <Button title="Editar perfil" corTexto="#F6F6ED" corFundo="#5B4200" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F6F6ED",
    width: width,
    height: heigth,
    paddingHorizontal: 20,
  },
  topo: {
    backgroundColor: "#5B4200",
    width: "200%",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
    borderBottomRightRadius: 400,
    borderBottomLeftRadius: 400,
  },
  titulo: {
    color: "#f6f6ed",
    fontSize: 26,
    fontFamily: "Roboto_700Bold",
    textTransform: "uppercase",
  },
  fotoPerfil: {
    marginTop: -75,
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#5b4200",
    resizeMode: "cover",
  },
  infoSection: {
    paddingVertical: 30,
    width: "100%",
  },
  info: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomColor: "#5b4200",
    borderBottomWidth: 0.5,
  },
  icone: {
    color: "#5b4200",
    fontSize: 40,
    marginRight: 20,
  },
  infoTexto: {
    color: "#5b4200",
    fontSize: 26,
    maxWidth:"80%"
  },
});
