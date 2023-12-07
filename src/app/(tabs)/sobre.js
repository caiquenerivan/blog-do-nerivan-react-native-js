import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import caique from "../../assets/imgs/caique.jpg";

const { width, heigth } = Dimensions.get("screen");

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.child}>
        <Image source={caique} style={styles.fotoPerfil} />
        <Text style={styles.titulo}>Caique Nerivan</Text>

        <View style={styles.infoSection}>
          <View style={styles.info}>
            <Text style={styles.infoTexto}>
              Mussum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex
              eros. Vivamus sit amet nibh non tellus tristique interdum. Aenean
              aliquam molestie leo, vitae iaculis nisl. Praesent malesuada urna
              nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
            </Text>
            <Text style={styles.infoTexto}>
              Bota 1 metro de cachacis aí pra viagem! Quem num gosta di mim que
              vai caçá sua turmis! Quem manda na minha terra sou euzis! Suco de
              cevadiss deixa as pessoas mais interessantis. Interagi no mé,
              cursus quis, vehicula ac nisi.
            </Text>
          </View>
          <View style={styles.sociais}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.instagram.com/craquenerivan");
              }}
            >
              <FontAwesome name="instagram" style={styles.icone} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.twitter.com/craquenerivan");
              }}
            >
              <FontAwesome name="twitter" style={styles.icone} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.twitch.com/craquenerivan");
              }}
            >
              <FontAwesome name="twitch" style={styles.icone} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.linkedin.com/in/caiquenerivan");
              }}
            >
              <FontAwesome name="linkedin" style={styles.icone} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.behance.net/caiquenerivan");
              }}
            >
              <FontAwesome name="behance" style={styles.icone} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://github.com/caiquenerivan");
              }}
            >
              <FontAwesome name="github" style={styles.icone} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://nerivan.dev/");
              }}
            >
              <FontAwesome name="link" style={styles.icone} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: heigth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6ED",
    justifyContent: "center",
    alignItems: "center",
  },
  child: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#5b4200",
    fontSize: 26,
    fontFamily: "Roboto_700Bold",
    textTransform: "uppercase",
    paddingTop: 10,
  },
  fotoPerfil: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#5b4200",
    resizeMode: "cover",
  },
  infoSection: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: "100%",
  },
  info: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  infoTexto: {
    color: "#636363",
    fontFamily: "Roboto_400Regular",
    textAlign: "justify",
    fontSize: 20,
    paddingVertical: 10,
  },
  sociais: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  icone: {
    color: "#5b4200",
    fontSize: 30,
    marginHorizontal: 10,
  },
});
